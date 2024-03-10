import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {  
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    const loadData = async () =>{
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    setCountries(data);
  }    
  loadData();
  },[])
 
  const handleVisitedCountry = country => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  }

  const handleVisitedFlags = flag => {
    // console.log('flag adding')

    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags)
  }


  return (
    <div>
      <h2>This countries: {countries.length}</h2>
      <div>
        <h5>Visited countries: {visitedCountries.length}</h5>
        <ul>
            {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
        </ul>
      </div>
      {/* ---------------------------------- */}

    <div className="flag-container">
     
      {
        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
      }
    </div>

    {/* -------------------------------- */}
      <div className="country-container">
        {
          countries.map(country => <Country 
          key={country.cca3}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}
          country={country} ></Country>)
        }
      </div>

    </div>
  );
};

export default Countries;