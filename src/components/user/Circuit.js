import { useEffect, useState } from 'react';
import MapQuest from './MapQuest';
import axios from 'axios'
// import { Button } from 'reactstrap';


function Circuit(props) {

const [start, setStart]= useState('')
const [destinations, setDestinations]= useState([]);
const [charger, setCharger]=useState(false)

useEffect(async ()=>{
  const res = await axios.get(`http://localhost:5000/geo/${props.match.params.id}`,{ withCredentials: true })
    setStart(res.data.start)
    setDestinations(res.data.waypoints)
    setCharger(true)
    
    console.log(start)
    console.log(destinations)
  
},[])
  return (
    <div className="App">
      <div className="App-header">  
      </div>
      <div style={{marginTop: "30px", marginBottom:"30px", boxShadow : "12px 12px 22px grey", height:'600px'}}>
        {start !== '' && destinations.length !== 0 ?
      <MapQuest
        height={`${window.innerHeight * 0.89}px`}
        width={'100%'}
        center={[40.015831, -105.27927]}
        baseLayer={'light'}
        zoom={10}
        pitch={60}
        bearing={0}
        apiKey={'UwYfiIYH4iLLIAGTJVTgZOuOd7Ndn61H'}
        departure = {start}
        dests = {destinations}
      />:<></>}
      </div>
    </div>
  );
}

export default Circuit;
