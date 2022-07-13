import React, { useEffect, useState } from 'react'
// import Settings from '../components/ProfileComp/Settings/setting'
import {datab} from "../firebase-config";
import {
  collection,
  onSnapshot,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  query, where
} from "firebase/firestore"

function Demo1() {
    //const colRef= collection(datab,"categories")


    // const q = query(colRef,where("author","==","patrick rothfuss"))
    // getDoc(colRef)
    // .then(snapshot=>{
    //     let cato=[]
    //      snapshot.docs.forEach(doc=>{
    //     cato.push({ ...doc.data(),id:doc.id})
    //   })
    // })
    //  .catch(err => {
    // console.log(err.message)
    //  })

    const docRef = doc(datab, "categories","African")

    getDoc(docRef)
    .then((doc)=>{
        console.log(doc.data(),doc.id)
      })
    // })
    //  .catch(err => {
    // console.log(err.message)
    //  })
}

export default Demo1