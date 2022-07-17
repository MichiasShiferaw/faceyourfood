import React, { useState } from "react";
// import { categoriesPreview } from "../Data/Data";
import Data from '../Data/RecipeDB.json';

function Filter2({cuisine1}) {
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
          {Object.keys(Data).filter((val1) => {
            // {console.log((Data[val1]).waittime)}
            if (searchTerm === "") return val1;
              if ((Data[val1].category).toLowerCase()===(cuisine1).toLowerCase()) return false;
             let obj= Data[val1];
             console.log(obj)
            //   if (searchTerm === "") return val1;
            //   if ((Data[val1].category).toLowerCase()===(cuisine1).toLowerCase()) return false;

            //     if ((Data[val1].name).toLowerCase().includes(searchTerm.toLowerCase())){
            //       return val1;
            //     }
            //     let test=false;
            //     obj.
            //     obj.forEach((obj1)=>{
            //       if (obj1.text &&)
            //     })
            //     }
            //   }
                
              
            // )
            // )
            }
          )
          }
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