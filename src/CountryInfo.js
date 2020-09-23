import React from 'react';
import countries from 'world-countries'
countries.sort((a, b) => b.area - a.area)

let countryArray = countries.filter(country => country.cca2 !== "AQ")
let firstFive = countryArray.slice(0,5);
let lastTen = countryArray.slice(6,15)

console.log(countries)

const CountryInfo = props => {
  const areaScale = countries[0].area / 100;
  const calculatedWidth = (props.data.area / areaScale) + '%'
  console.log(props)
if(props.moreDetails == "true") {
  return (
    <div className="CountryInfo" key={props.data.cca2}>
      <div className="country">
        <strong>{props.data.name.common}</strong>   {props.data.area}km<sup>2</sup></div>
      <div className="bar" style={{width:calculatedWidth}}></div>
        <p>Capital: {props.data.capital} <br/> Region: {props.data.region}</p>
    </div>
  )
} else {
  return (
    <div className="CountryInfo">
      <div className="country">
        <strong>{props.data.name.common}</strong>   {props.data.area}km<sup>2</sup></div>
      <div className="bar" style={{width:calculatedWidth}}></div>
    </div>
  )
}
}

export default CountryInfo;