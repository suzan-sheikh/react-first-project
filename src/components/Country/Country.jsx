import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
  // console.log(country)
  const {name, flags, population, area, cca3} = country;

  const [visited, setVisited] = useState(false)

  const handleVisited = () => {
    setVisited(!visited)
  }
  // console.log(handleVisitedCountry)
  // console.log(handleVisitedFlags)
  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3 style={{color: visited ? 'red' : 'purple'}}>Name {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p>code: {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>add Flags</button>
      <br />
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country': 'i want to visit'}
    </div>
  );
};

export default Country;