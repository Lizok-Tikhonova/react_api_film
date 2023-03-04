import * as React from "react";
import { useState, useEffect } from "react";

function Request () {

    const [item, setItem] = useState([])
    useEffect(()=>{
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/`, {
          method: "GET",
          headers: {
            'X-API-KEY': 'a9544edb-fc2b-42d8-83bf-d61c31645e4a',
            'Content-Type': 'application/json',
        },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setItem(data.items)
          });
    },[])

    const [values, setValue] = useState('')

        const filteredFilms = item.filter((elem)=>{
            if(elem.nameRu != null){
                 return elem.nameRu.toLowerCase().includes(values.toLowerCase())
            }
        })
   
      return (
        <div className="App">
             <input class="input"/>
            <button onClick={()=>{
              setValue(document.querySelector(".input").value)
            }}>найти</button>
        {
          filteredFilms.map((film)=>{
            return(
           <div>{film.nameRu}</div>
            )
          })
        }
        </div>
      );
}

export default Request