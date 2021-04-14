import {useEffect, useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
import {useDispatch ,useSelector } from "react-redux";
import {loginUserfind, selectConnectuser, } from "../../redux/slices/userSlice";





export default function VehicleShot (props){

    
    const [connectUser, error] = useSelector(selectConnectuser);
    const dispatch = useDispatch();
    
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [start, setStart] = useState("");
    const [points, setPoints]= useState("");
    const [afficher, setAfficher] = useState(false);
    const [pointsdata, setPointsdata]=useState([]);
    const [numberPoints, setNumberPoints]=useState([])
    

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
      
    },[Cookies.get(), dispatch])

    useEffect(()=>{
       
    },[])

    const addItem = async (event) => {
      event.preventDefault();
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName,
        },
      ]);

      const intermidiaire = await axios
      .get(
        `https://geocode.search.hereapi.com/v1/geocode?q=${itemName}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`
      )
        //console.log(intermidiaire)
        setPoints([...points,intermidiaire.data.items[0].position])
        console.log(points.length)
        console.log(intermidiaire.data.items[0].position)
      setItemName("");
    };

    const affchange= async (e)=>{
      e.preventDefault();
      const startpoint = await axios
        .get(
          `https://geocode.search.hereapi.com/v1/geocode?q=${start}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`
        )
        // .then((res)=>{
        //   console.log('start point')
        //   console.log(res.data.items[0].position)
        //   setPoints([...points, res.data.items[0].position])
          
        // })
        //setPoints([...points, startpoint.data.items[0].position])
        //console.log(startpoint)
        
    // items.map(async (x) =>{
    //   points.push(await axios
    //     .get(
    //       `https://geocode.search.hereapi.com/v1/geocode?q=${x.name}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`
    //     ).then((res)=>{
    //       console.log(startpoint)
    //     })
    //     // .then((res, err) => {
    //     //   //console.log(res.data.items[0].position);
    //     //   //setPoints([...points, res.data.items[0].position])
        
    //     // })
    //   )
      
       
        // axios.post('')
    
    //console.log(points[0])

    // items.forEach(x => {
    //   axios.get(
    //       `https://geocode.search.hereapi.com/v1/geocode?q=${x.name}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`
    //     ).then(res=>{
    //       points.push(res)
    //     })
      
    // });
    //setRoute([...route, {start1:startpoint}])
    //console.log(points[0])
    const route = {  
      start : startpoint.data.items[0].position,
      points : points
      } 
    //console.log(route)

    const intermidiaire = await axios.post('http://localhost:5000/geo',route,{ withCredentials: true })
    console.log(intermidiaire)
    setPointsdata([...pointsdata,intermidiaire])
    //setNumberPoints([...numberPoints,intermidiaire.length])
    const aff = await setAfficher(true)
  }
    return (
        <div style={{height:"700px",width:"100%" , marginBottom:"50px" , marginTop:"50px"}}>
         <h1>I'm vehicle Tour</h1> 
         <input name="start" placeholder="Start palce" value={start}  onChange={(e) => setStart(e.target.value)}/>
         <form onSubmit={addItem}>
        <label>
          
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={affchange}>charger</button>
     
        </div>
    )
}