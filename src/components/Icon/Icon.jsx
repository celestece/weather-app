import {TiWeatherCloudy, TiWeatherWindyCloudy, TiWeatherWindy, TiWeatherDownpour, TiWeatherSunny, TiWeatherStormy, TiWeatherShower, TiWeatherSnow} from "react-icons/ti"


const Icon = ({data}) => { //Componente Icon que lo renderiza Card y le pasa la prop
                            //de data que es el resultado de la llamada a la api

    const icons = {        //Un objeto que contiene palabras clave que corresponden a la descripcion del tiempo
                            //que viene de la api. Sus valores son componentes JSX de iconos (react-icons)
        "Thunderstorm": <TiWeatherStormy/>,
        "Clear": <TiWeatherSunny/>,
        "Clouds": < TiWeatherCloudy/>,
        "Drizzle": <TiWeatherShower/>,
        "Rain": <TiWeatherDownpour/>,
        "Snow": <TiWeatherSnow/>,
        "Mist": <TiWeatherWindyCloudy/>,
        "Haze": <TiWeatherWindyCloudy/>,
        "Smoke": <TiWeatherWindyCloudy/>,
        "Dust": <TiWeatherWindy/>,
        "Fog": <TiWeatherWindyCloudy/>,
        "Sand": <TiWeatherWindy/>,
        "Ash": <TiWeatherWindy/>,
        "Squall": <TiWeatherWindy/>,
        "Tornado":<TiWeatherWindy/> 
    }

    return (
        < > 
            {data.weather && <div>{icons[data.weather[0].main]}</div>} 
        </>
    )
}

export default Icon