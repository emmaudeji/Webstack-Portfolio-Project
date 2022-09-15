import { useState, useEffect } from "react";

const useFetch = ()=>{

  
  const [items, setItems]= useState([]);

useEffect(()=>{ 
  fetchData()
}, []);

const fetchData = () =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'YOUR RAPIDAPI-KEY',
      'X-RapidAPI-Host': 'YOUR RAPIDAPI-HOST NAME'
    }
  };
  
  fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options)
    
    .then(response => response.json())
    .then(response => {
      const data =[]
          response.hits.map(({id, title, coverPhoto, purpose, price, location}) =>{
            data.push({
              id,
              title,
              purpose,
              price,
              url : coverPhoto.url,
              state: location[0].name})
              return (data);
          })
          
          setItems(data); 
          console.log(data)


      })
         
    .catch(err => console.error(err));
}
  
  return {items};
  }
  
  
  export default useFetch;
  
