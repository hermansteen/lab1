import React from 'react';
import countries from 'world-countries'
import "./App.css";

countries.sort((a, b) => b.area - a.area)

let countryArray = countries.filter(country => country.cca2 !== "AQ")
let firstFive = countryArray.slice(0,5);
let lastTen = countryArray.slice(5,16)

console.log(countries)

const CountryInfo = props => {
const areaScale = countries[0].area / 100;
const calculatedWidth = (props.data.area / areaScale) + '%'

  const moreDetails = (bool) => {
    if (bool) {
      return (
        <p>
           Capital: {props.data.capital}<br/>
        Region: {props.data.region} </p>
      )
      return
    }
  }

  return (
    <div className="CountryInfo" key={props.data.cca3}>
      <div className="country">
        <strong>{props.data.name.common}</strong> {props.data.area / 1000000} million km<sup>2</sup></div>
        {moreDetails(props.moreDetails)}
      <div className="bar" style={{width:calculatedWidth}}></div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <div className="firstFive">
    { firstFive.map((country)=>  <CountryInfo data={country} moreDetails={true}/> )}
    </div>
    <div className="lastTen">
    { lastTen.map((country) => <CountryInfo data={country} moreDetails={false}/>)}
    </div>
    </div>
    )
}

export default App;
