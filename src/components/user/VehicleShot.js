import {useEffect, useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
import {useDispatch ,useSelector } from "react-redux";
import {loginUserfind, selectConnectuser, } from "../../redux/slices/userSlice";

const { compose, withProps, lifecycle } = require("recompose");
const {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, DirectionsService} = require("react-google-maps");

/*var response = null;
const DirectionsServiceOption = {
    destination: {lat: 41.8525800, lng: -87.6514100},
    origin: {lat:41.8507300, lng: -87.6512600},
    travelMode: "DRIVING",
  };
  const directionsCallback = (res) => {
    console.log(res);

    if (res !== null) {
      if (res.status === "OK") {
        response = res;
        console.log(res)
      } else {
        console.log("response: ", res);
      }
    }
  };
function Map(){
    return(
      <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat:41.8507300, lng:-87.6512600}}
      >
        {response !== null && (
          <DirectionsRenderer
          options={{
            directions: response,
          }}
          />
        )}
        
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  */
//   const google = window.google;
// const MapWithADirectionsRenderer = compose(
//     withProps({
//       googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
//       loadingElement: <div style={{ height: `100%` }} />,
//       containerElement: <div style={{ height: `100%` }} />,
//       mapElement: <div style={{ height: `100%` }} />,
//     }),
//     withScriptjs,
//     withGoogleMap,
//     lifecycle({
//       componentDidMount() {
//         //const DirectionsService = maps.DirectionsService();
//         const DirectionsService = google.maps.DirectionsRenderer()
  
//         DirectionsService.route({
//           origin: {lat:41.8507300, lng: -87.6512600} ,
//           destination: {lat: 41.8525800, lng: -87.6514100},
//           travelMode: "DRIVING",
//         }, (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               directions: result,
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         });
//       }
//     })
//   )(props =>
//     <GoogleMap
//       defaultZoom={7}
//       defaultCenter={{lat:41.8507300, lng:-87.6512600}}
//     >
//       {props.directions && <DirectionsRenderer directions={props.directions} />}
//     </GoogleMap>
//   );


// let directionsService;
// let directionsRender;

// calcRoute();

// directionsService = new window.google.maps.DirectionsService
// directionsRender = new window.google.maps.DirectionsRenderer
// function calcRoute (){
//     let request = {
//                   origin: {lat:41.8507300, lng: -87.6512600} ,
//                   destination: {lat: 41.8525800, lng: -87.6514100},
//                   travelMode: "DRIVING",
//                 };
//     directionsService.route(request, function(response,status){
//         if(status = 'OK'){
//             console.log(response)
//         }
//     })
// }


export default function VehicleShot (props){

    const [directions, setDirections]= useState("")
    const [connectUser, error] = useSelector(selectConnectuser);
    const dispatch = useDispatch();
    const google = window.google;

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
        // const DirectionsService =  google.maps.DirectionsRenderer();

        // DirectionsService.route({
        //     origin: {lat:41.8507300, lng: -87.6512600} ,
        //     destination: {lat: 41.8525800, lng: -87.6514100},
        //     travelMode: "DRIVING",
        //   }, (result, status) => {
        //     if (status === google.maps.DirectionsStatus.OK) {
        //     //   this.setState({
        //     //     directions: result,
        //     //   });
        //     console.log(result)
        //     } else {
        //       console.error(`error fetching directions ${result}`);
        //     }
        //   })

    },[])

    return (
        <div style={{height:"700px",width:"100%" , marginBottom:"50px" , marginTop:"50px"}}>
        {/* <h1>I'm vehicle Tour</h1> */}
        {/* <MapWithADirectionsRenderer 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{height: "100%"}}/>}
            containerElement={<div style={{height: "100%"}}/>}
            mapElement={<div style={{height: "100%"}}/>}
        /> */}
        </div>
    )
}