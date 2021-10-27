import React from 'react'
import './general-info.scss';
const GeneralInfo = (props) => { 
    return(
        <React.Fragment>        
            <div className="location-name">
                {props.displayData.name}, {props.displayData.country}
            </div>
            <div className="description">
                 {props.displayData.main}
            </div>
            <div className="temp">
                {props.displayData.temp}<sup>°</sup>
            </div> 
            <div className="highest-lowest">
                <span>H:{props.displayData.temp_max}<sup>°</sup></span> 
                <span>L:{props.displayData.temp_min}<sup>°</sup></span> 
            </div>
        </React.Fragment>
    );
}

export default GeneralInfo;