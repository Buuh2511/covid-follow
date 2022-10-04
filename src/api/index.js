import axios from "axios";


export const getCountries = () => axios.get('https://api.covid19api.com/countries');



export const getReportByCountry = async (country) => await axios.get(`https://api.covid19api.com/dayone/country/${country}`);


