import { useState } from "react"
import ForecastDay from "../ForecastDay/ForecastDay"
import Icon from "../Icon/Icon"


const Card = ({data, forecastData}) => {

    const chooseColor = () => {
        let temp = toCelcius(data.main.temp)

        switch(true){
            case (temp < -10):
                return 'blue'
                break;
            case (temp < 0):
                return 'green'
                break;
            case (temp < 11):
                return 'aqua'
                break;
            case (temp < 20):
                return 'yellow'
                break;
            case (temp < 30):
                return 'orange'
                break;
            case (temp < 99):
                return 'red'
                break
            default:
                return 'yellow'
                break

        }
    }



    const toCelcius = (tempK) => {
        let tempC = tempK - 273.15
        tempC = Math.floor(tempC)

        return tempC
    }

    return (
        <>
        {data.main ? <div className={`card ${chooseColor()}`}>
            <div className="card__top--city">{data.name}</div>

            <div className="card__mid">

                <div className="card__mid--icon">
                    <Icon data={data}/>
                 </div> 
                
                <div className="card__mid--temp">
                    <h2>{toCelcius(data.main.temp)}°</h2>
                </div>

                {data.weather ? 
                    <div className="card__mid--weather">{data.weather[0].main}</div> 
                : null}
                <br/>
                <div className="min">H: {toCelcius(data.main.temp_max)}°</div>

                <div className="max">L: {toCelcius(data.main.temp_min)}°</div>

            </div>

            

            {forecastData.list ? 
                <div className="card__bottom">
                    <div ><ForecastDay dataF={forecastData} indx={1}/> </div> 
                    <div ><ForecastDay dataF={forecastData} indx={9}/></div> 
                    <div ><ForecastDay dataF={forecastData} indx={17}/></div> 
                    <div ><ForecastDay dataF={forecastData} indx={25}/></div> 
                </div>
                : null}

             </div> : null}    
            


        
        
        
        </>
    )
}

export default Card