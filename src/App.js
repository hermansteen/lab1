import React from 'react';
import countries from 'world-countries'

countries.sort((a, b) => b.area - a.area)

const CountryInfo = props => {
  const areaScale = countries[0].area / 100;
  const calculatedWidth = (props.data.area / areaScale) + '%'


  return (
    <div className="CountryInfo">
      <div className="country">
        {props.data.name.common}  {props.data.area}km<sup>2</sup></div>
      <div className="bar" style={{width:calculatedWidth}}></div>
    </div>
  )
}

console.log(countries);
function App() {
  return (
    countries.map((country)=>
    <div className="App">
      <CountryInfo data={country}/>
    </div>
    )
  );
}

export default App;
