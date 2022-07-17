//import {useNavigate, useParams, Route,Routes} from "react-router-dom";

import React, { useEffect, useState } from 'react'
import FAQindex from '../components/FAQ/FAQindex'
import { collection,
  onSnapshot,
  doc,
  getDocs,getDoc } from "firebase/firestore";
import { datab } from '../firebase-config';



function FAQ() {




    //   const handleCategory=(e)=>{
    //     setCategory(e.target.value);

    // }
    // let navigate = useNavigate();
    // let {cato} = useParams();

    //     const docRef = doc(datab, "categories","African")

    // getDoc(docRef)
    // .then((doc)=>{
    //     console.log(doc.data(),doc.id)
    //   })
  //   const [recipes, setRecipes] = useState([])
  //   const messageRef = collection(datab, "categories","NA","Cuisine");
  //   const messageRef1 = collection(datab, "categories","African","Cuisine");
  //   //console.log(messageRef);
  //     useEffect(() => {
  //   onSnapshot(messageRef, snapshot => {
  //     setRecipes(snapshot.docs.map(doc => {
  //       return {
  //         id: doc.id,
  //         ...doc.data()
  //       }
  //     }))
  //   })
  // }, [])

  //   const options= event => {
  //       //const q = query(messageRef,where("doc","==","Canadian"))
  //       const val= event.target.value;
  //       const docRef = doc(datab, "categories",{val},"Cuisine")

  //   getDoc(docRef)
  //   .then((doc)=>{
  //       console.log(doc.data(),doc.id)
  //     })
  // }

  // getDocs(messageRef1)
  //   .then(snapshot=>{
  //     let books=[]
  //     snapshot.docs.forEach(doc=>{
  //       books.push({ ...doc.data(),id:doc.id})
  //     })
  //     console.log(books)
  //   })
  //   .catch(err => {
  //   console.log(err.message)
  // })

    //const usersCollectionRef = collection(datab, 'categories','Chinese');
    //console.log("Shifer")
    //console.log(messageRef.id);
    //console.log("Jane")
    //console.log(usersCollectionRef)
  return (
    <div className='myhome container'>
    <div>This is the FYF FAQ Page
                {/* { recipes.map((ingredient, i) => (
                  <li key={i}>{ ingredient.id }</li>
                  
                ))}
        <FAQindex/>

        <label>Which category of products do you want to see?</label>
                        <select className='form-control' onChange={event=> options(event)}>
                            <option onChange={event=> options(event)} value="African">Select Product Category</option>
                            <option onChange={event=> options(event)} value="NA">Electronic Devices</option>
                            <option onChange={event=> options(event)} value="Asian">Mobile Accessories</option>
                            <option onChange={event=> options(event)} value="Asian">Home Lifestyle</option>
                            <option onChange={event=> options(event)} value="NA">Health Beauty</option>
                        </select> */}

    </div>
    </div>
  )
}

export default FAQ