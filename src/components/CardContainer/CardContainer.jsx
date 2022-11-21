import Card from "../Card/Card"
import { MdSearch } from "react-icons/md";
import { useState } from "react"
import { useEffect } from "react"
import Loading from "../Loading/Loading";

const CardContainer = () => {

    const [datax, setData] = useState({})
    const [forecastData, setForecastData] = useState({})
    const [city, setCity] = useState('Resistencia')
    const [cityInput, setCityInput] = useState('')
    const [loading, setLoading] = useState(true)


    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e63bad0becba69fd2999a0a152d49e06`

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e63bad0becba69fd2999a0a152d49e06`


    const handleSubmit = (event) => {

        setCityInput('')
        setCity(cityInput)
        
        event.preventDefault()
    }



    useEffect(() => {
        const getData = async () => {
            const data = await fetch(url)
                .then(response => response.json())
                .then(resp => setData(resp))
            const dataF = await fetch(urlForecast)
                .then(response => response.json())
                .then(resp => setForecastData(resp))

            console.log(datax)
            
        }

        getData()
        .catch(err => console.log(err))
        .finally(setLoading(false))

    }, [city])



    return (
        
        <div className="container">
            
            <div className="search">
                <div className="search__input">
                    <input
                    value={cityInput}
                    onChange={event => setCityInput(event.target.value)}
                    onKeyPress = {event => event.key === "Enter" && handleSubmit(event)}
                    placeholder="Enter the location here"
                    type="text"
                    />
                </div>
                <button className="search__button" onClick={handleSubmit}>
                    <MdSearch/>
                </button>
            </div>
            {loading ? <Loading/> 
            
            : <Card data={datax} forecastData={forecastData}/>}
            
        </div>
    )
}

export default CardContainer