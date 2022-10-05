import React, { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './api';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';

function App() {

  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('');
  const [report, setReport] = useState([]);


  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, [])


  const handleOnChange = (e) => {
    setSelectedCountry(e.target.value)
  }

  useEffect(() => {

    if (selectedCountry) {
      const { Slug } = countries.find((country) => country.ISO2.toLowerCase() === selectedCountry)
       getReportByCountry(Slug).then(res => {
        res.data.pop(); // xoa phan tu cuoi cung cua mang
        setReport(res.data)
      })
    }

  }, [countries, selectedCountry])

  return (
    <div style={{ paddingTop: '20px', paddingLeft: "50px" }}>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight report={report} />
      <Summary report={report} />
    </div>
  );
}

export default App;
