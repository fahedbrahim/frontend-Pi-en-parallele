import React from 'react'
import ChartLine from './chart/LineChart'
import ChartBar from './chart/BarChart'
import ChartDoughnut from './chart/DoughnutCart'
import ChartPolarArea from './chart/PolarAreaChart'
import "../../styles/admin/Dashboard.css";

export default function Dashboard (){
    

    return (
        <div style={{marginBottom:'40px'}}>
        
            <div className="row" style={{marginTop:'30px', marginBottom:'30px'}}>
                <div className="col-lg-5 col-sm-12 text-center" style={{borderRadius:'10px', boxShadow:'12px 12px 22px grey'}} id="chartDashboard1"><h4>Users statistics</h4><ChartBar/></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 col-sm-12 text-center" style={{borderRadius:'10px', boxShadow:'12px 12px 22px grey'}}><h4>Delivery statistics</h4><ChartLine/></div>
            </div>
            <div className="row" style={{marginTop:'30px', marginBottom:'30px'}}>
                <div className="col-lg-5 col-sm-12 text-center" style={{borderRadius:'10px', boxShadow:'12px 12px 22px grey'}} id="chartDashboard2"><h4>Delivery completed statistics</h4><ChartPolarArea/></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 col-sm-12 text-center" style={{borderRadius:'10px', boxShadow:'12px 12px 22px grey'}}><h4>Vehicle circuit statistics</h4><ChartDoughnut/></div>
            </div>
       
        </div>
    )
}