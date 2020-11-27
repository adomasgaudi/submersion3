const key = '0mLIzwXfZgItNIGGgYDZYqGSxHhiIkmE'



const getCity = async (city) =>{
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  // console.log(base+query)
  const data = await response.json()
  // console.log(response.json())
  return data[0]
}

const getCurrent = async (lockey)=>{
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${lockey}?apikey=${key}`
  console.log(`${base}${query}`)
  const response = await fetch(`${base}${query}`);

  
  return data = await response.json()
}

getCity('vilnius')
  .then(data=>{
    console.log(data.Key)
    return getCurrent(data.Key)
  })
  .then(resp=>{console.log(resp)
  })
  .catch(err =>console.log(err));



const updateCity = async (city) =>{


  const cityDets = await getCity(city)
  const weather = await getCurrent(cityDets.Key)
  return {
    cityDets: `${cityDets.AdministrativeArea.EnglishName}, ${cityDets.Country.ID}`,
    // cityData: cityDets,
    // weather: weather,
    weatherText: weather[0].WeatherText
  }

}


updateCity('vilnius')
.then(data=>{console.log('data be:',data)})