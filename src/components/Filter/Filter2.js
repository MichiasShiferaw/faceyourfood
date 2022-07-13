import React, { useState } from 'react'
import { categoriesPreview } from '../Data/Data';

// let filterarray=[];


function Filter2() {


    const [searchTerm, setSearchTerm]= useState('');
  return (
    <div>
        <input type="text" className="form-control mt-3 ps-4 col-md-2" id="myinput" onChange={event=>{setSearchTerm(event.target.value)}} placeholder="Searching..."/>
        <div className='container'>
            {categoriesPreview.filter((val)=>{
                if(searchTerm==""){
                    return val
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())|| val.thumbnail.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((recipe,index)=>(
            <p className='p-0 m-0' key={index}>{recipe.title}</p>
            ))}
        </div>
    </div>
  )
}

export default Filter2