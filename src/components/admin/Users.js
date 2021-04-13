import { useEffect, useState } from "react";
import axios from 'axios'
import Cookies from 'js-cookie';
import {useDispatch ,useSelector } from "react-redux";
import {loginUserfind, selectConnectuser } from "../../redux/slices/userSlice";
import "../../styles/admin/Users.css";
import { Link } from "react-router-dom";
import { selectUsers } from "../../redux/slices/admin/usersSlice";
import ReactPaginate from 'react-paginate'
import {FetchWeather} from './weather/FetchWeather'


export default function Users(props) {
  
  var weatherLocate = localStorage.getItem("weatherInfo") ? localStorage.getItem("weatherInfo") : localStorage.setItem("weatherInfo", "Tunis")
  const [query, setQuery]=useState('')
  const [weather, setWeather]=useState({})

  const search = async(e)=>{
    if(e.key == "Enter"){
    const data = await FetchWeather(query)
    setWeather(data)
    setQuery('')
    localStorage.setItem("weatherInfo", query)
    console.log(data.name)}
  } 

  useEffect(async()=>{
    const data = await FetchWeather(weatherLocate)
    setWeather(data)
    console.log(data.weather[0].description)
  },[FetchWeather])
  
  
  const [connectUser, error] = useSelector(selectConnectuser);
  const dispatch = useDispatch();
  const [users, err] = useSelector(selectUsers);
  const [pageNumber, setPageNumber]= useState(0);
  console.log(users);

  useEffect( async()=>{
    if(Cookies.get('connect.sid') ){
      
    }else{
      await axios
     .get("http://localhost:5000/auth/logout", { withCredentials: true })
     .then((res) => {
           console.log(res)
           localStorage.removeItem("userInfo");
           dispatch(loginUserfind(res.data));
           props.history.push('/');
      } ) }
  
},[Cookies.get()])

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user, index)=>
  (
    <tr key={user._id}>
      <th scope="row">{index}</th>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.adresse}</td>
      <td>{user.phone}</td>
      <td>
        <span className="icon mr-3">
          <Link to={`/homeuser/admin/update/${user._id}`}>
          <i className="fa fa-pencil" style={{color : "green"}}></i>
          </Link>
        </span>
        <span className="icon">
          <i className="fa fa-trash" style={{color : "red"}}></i>
        </span>
      </td>
    </tr>
      )
  )
  
const usersArray = []
users.map(user =>(usersArray.push(user)))
  
const pageCount = Math.ceil(usersArray.length / usersPerPage);
console.log(pageCount)

const changePage = ({selected})=>{
  setPageNumber(selected)
}

  return (
    <>
    <div className="row col-lg-4 my-3 px-3" style={{background:"rgba(250, 250, 250, 0.85)", boxShadow:"5px 5px 15px rgba(0, 0, 0, 0.5)"}}>
      
    <input type="text" className="form-control my-3 col-3 " placeholder="Country..." value={query} onChange={(e)=>setQuery(e.target.value)} onKeyPress={search} />&ensp;
    {weather.main && (
    
      <div className="my-3 " style={{fontSize:"25px", display:"flex", flexWrap:"nowrap"}}>
        <strong>
          {weather.name} </strong><span style={{fontSize:"10px"}}>{weather.sys.country}</span>&ensp;
          <strong>
          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </strong>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} style={{height:"50px", width:"50px"}} />
      </div>
    
    )}
    
    </div>
    <section style={{height:"1100px"}}>
      <div className="row" >
        
        <div className="col-sm-8 col-md-11 " id="tableUsers">
          <div className=" table-responsive-sm">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {displayUsers}
                
            </tbody>
            
          </table>
          
          </div>
          <div style={{marginTop:"20px", display:"flex", justifyContent:"center"}} >
          <ReactPaginate 
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
            />
            </div>
        </div>
        
      </div>
    </section>
    </>
  );
}
