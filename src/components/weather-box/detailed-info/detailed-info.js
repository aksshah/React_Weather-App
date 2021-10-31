import React from 'react'
import './detailed-info.scss';

const DetailedInfo = (props) => { 
    return(
        <div className="detailed-info">       
            {/* <div className="sunrise-sunset">
                <div className="sunrise">
                    <span className="label">Sunrise</span>
                    {props.displayData.sunrise}
                </div>
                <div className="sunset">
                    <span className="label">Sunset</span>
                    {props.displayData.sunset}
                </div>
            </div> */}
            <ul>
               <li>
                    <span className="label">Feels Like</span>
                    <span>{props.displayData.feelslike}<sup>°</sup></span> 
               </li>
               <li>
                    <span className="label">Humidity</span> 
                    {props.displayData.humidity}% 
               </li>
               <li>
                    <span className="label">Wind</span> 
                    {props.displayData.wind}
               </li>
               <li>
                    <span className="label">Pressure</span> 
                    {props.displayData.pressure}
                </li>
               <li>
                    <span className="label">Visibility</span> 
                    {props.displayData.visibility}
                </li>
            </ul>
        </div>
    );
}

export default DetailedInfo;