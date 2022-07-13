import React, { useState } from "react";
import Data from '../Data/RecipeDB.json';
import FilterFunc from "./FilterFunc";

const FilterIndex= ()=> {
    const [item, setItem ] = useState(Data)
//     const [item, setItem] = useState(Data);

const menuItems= [...new Set(Object.keys(Data).map((opt)=>opt))]

console.log(menuItems);
//     const menuItems = [...new Set(Data.map((Val) => Val.sugar))];

//   const filterItem = (curcat) => {
//     // const newItem = Data.filter((newVal) => {
//     //   return newVal.sugar === curcat;
//     // });
//     // setItem(newItem);
//   };

console.log(Data["Godiva Angel Pie"].servings);
  return (
    <div>
    {Object.keys(Data).map((opt)=>(
              <option value={opt}>{opt}</option>
            ))} 
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
           {/* <FilterFunc
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />  */}
        </div>
      </div>
    </div>
  )
}

export default FilterIndex