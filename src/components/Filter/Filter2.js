import React, { useState } from "react";
 import { categoriesPreview } from "../Data/Data";
import Data from '../Data/RecipeDB.json';

function Filter2({mealOpt}) {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <label htmlFor="exampleDataList" className="form-label">Search</label>
      <input
        list="datalistOptions"
        type="text"
        className="form-control mt-3 ps-4 col-md-2"
        id="myinput"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        placeholder="Searching..."
      />
      <div>
         <datalist id="datalistOptions" className="my-2">
          {mealOpt
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.id.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((recipe, index) => (
              <option value={recipe.name} key={index}/>
            ))}
        </datalist>
      </div>
    </div>
  );
}

export default Filter2;


        // <datalist id="datalistOptions" className="my-2">
        //   {Object.keys(Data).filter((val1) => {
        //     // {console.log((Data[val1]).waittime)}
        //       if (searchTerm === "") {
        //         return val1;
        //       } else if (
                
        //         (Data[val1].name).toLowerCase().includes(searchTerm.toLowerCase()) 
                
        //         // ||
        //         // val.thumbnail.toLowerCase().includes(searchTerm.toLowerCase())
        //       ) {
        //         return val1;
        //       }
        //     })
        //     .map((recipe, index) => (
        //       <option value={Data[recipe].name} key={index}/>
        //     ))}
        // </datalist>