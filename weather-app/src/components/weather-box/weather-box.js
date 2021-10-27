import './weather-box.scss';
import GeneralInfoSection from './general-info/general-info';
import DetailedInfoSection from './detailed-info/detailed-info';

const WeatherBox = (props) => { 
    
    if(props.displayData.name){
        return(
            <div className="weather-data">
                <GeneralInfoSection displayData={props.displayData}></GeneralInfoSection>
                <DetailedInfoSection displayData = {props.displayData}></DetailedInfoSection>
            </div> 
        );
    }else{
        return(
            <div className="error">{props.displayData}</div>
        );
    }
  
}

export default WeatherBox;