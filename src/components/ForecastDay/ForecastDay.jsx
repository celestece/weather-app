import Icon from "../Icon/Icon"

const ForecastDay = ({dataF, indx}) => {

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    const buildDate = () => {
        const date = new Date(dataF.list[indx].dt_txt)
        const dayName = days[date.getDay()]
        const dateNum = date.getDate()

        return `${dayName}, ${dateNum}`
    }

    return (
        <div className="forecast__grid">
            
            <div className="forecast__grid--date">{buildDate()}</div>

            <div className="forecast__grid--icon"><Icon data={dataF.list[indx]} /></div>

            <div className="forecast__grid--temp">{Math.floor(dataF.list[indx].main.temp - 273.15)}°</div>

        </div>
    )
}

export default ForecastDay