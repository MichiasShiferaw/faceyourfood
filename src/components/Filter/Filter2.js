import React, { useState } from "react";
import { categoriesPreview } from "../Data/Data";

function Filter2() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <label for="exampleDataList" className="form-label">Search</label>
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
          {categoriesPreview
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.thumbnail.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((recipe, index) => (
              <option value={recipe.title} key={index}/>
            ))}
        </datalist>
      </div>
    </div>
  );
}

export default Filter2;
