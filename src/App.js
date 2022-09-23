import React, { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './api';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';

function App() {

  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('NC');
  const [report, setReport] = useState([]);


  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, [])


  const handleOnChange = (e) => {
    setSelectedCountry(e.target.value);

  }

 

  useEffect(() => {
 const Slug = countries.find(country => country.ISO2 === selectedCountry.toUpperCase());
    

    

    getReportByCountry(Slug.ISO2).then(res => {
      res.data.pop(); // xoa phan tu cuoi cung cua mang
      setReport(res.data)
    })
  }, [countries, selectedCountry])



  return (
    <div style={{ paddingTop: '20px', paddingLeft: "50px" }}>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight />
      <Summary />
    </div>
  );
}

export default App;
