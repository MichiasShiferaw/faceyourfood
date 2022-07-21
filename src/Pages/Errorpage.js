// import React, { useEffect, useState } from 'react'
// // import Settings from '../components/ProfileComp/Settings/setting'
// import {datab} from "../firebase-config";
// import {
//   collection,
//   onSnapshot,
//   doc,
//   addDoc,
//   deleteDoc
// } from "firebase/firestore"

// function Errorpage() {
//   const [recipes, setRecipes] = useState([])
//   const [form, setForm] = useState({
//     title: "",
//     desc: "",
//     ingredients: [],
//     steps: []
//   })
//   const [popupActive, setPopupActive] = useState(false)

//   const recipesCollectionRef = collection(datab, "recipes")

//   useEffect(() => {
//     onSnapshot(recipesCollectionRef, snapshot => {
//       setRecipes(snapshot.docs.map(doc => {
//         return {
//           id: doc.id,
//           viewing: false,
//           ...doc.data()
//         }
//       }))
//     })
//   }, [])

//   const handleView = id => {
//     const recipesClone = [...recipes]

//     recipesClone.forEach(recipe => {
//       if (recipe.id === id) {
//         recipe.viewing = !recipe.viewing
//       } else {
//         recipe.viewing = false
//       }
//     })

//     setRecipes(recipesClone)
//   }

//   const handleSubmit = e => {
//     e.preventDefault()

//     if (
//       !form.title ||
//       !form.desc ||
//       !form.ingredients ||
//       !form.steps
//     ) {
//       alert("Please fill out all fields")
//       return
//     }

//     addDoc(recipesCollectionRef, form)

//     setForm({
//       title: "",
//       desc: "",
//       ingredients: [],
//       steps: []
//     })

//     setPopupActive(false)
//   }

//   const handleIngredient = (e, i) => {
//     const ingredientsClone = [...form.ingredients]

//     ingredientsClone[i] = e.target.value

//     setForm({
//       ...form,
//       ingredients: ingredientsClone
//     })
//   }

//   const handleStep = (e, i) => {
//     const stepsClone = [...form.steps]

//     stepsClone[i] = e.target.value

//     setForm({
//       ...form,
//       steps: stepsClone
//     })
//   }

//   const handleIngredientCount = () => {
//     setForm({
//       ...form,
//       ingredients: [...form.ingredients, ""]
//     })
//   }

//   const handleStepCount = () => {
//     setForm({
//       ...form,
//       steps: [...form.steps, ""]
//     })
//   }

//   const removeRecipe = id => {
//     deleteDoc(doc(datab, "recipes", id))
//   }
//   return (
//     <div>ERROR! PAGE NOT FOUND
//       {/* <Settings/> */}
//       <h1>My recipes</h1>

//       <button onClick={() => setPopupActive(!popupActive)}>Add recipe</button>

//       <div className="recipes">
//         { recipes.map((recipe, i) => (
//           <div className="recipe" key={recipe.id}>
//             <h3>{ recipe.title }</h3>

//             <p dangerouslySetInnerHTML={{ __html: recipe.desc }}></p>

//             { recipe.viewing && <div>
//               <h4>Ingredients</h4>
//               <ul>
//                 { recipe.ingredients.map((ingredient, i) => (
//                   <li key={i}>{ ingredient }</li>
//                 ))}
//               </ul>

//               <h4>Steps</h4>
//               <ol>
//                 { recipe.steps.map((step, i) => (
//                   <li key={i}>{ step }</li>
//                 ))}
//               </ol>
//             </div>}

//             <div className="buttons">
//               <button onClick={() => handleView(recipe.id)}>View { recipe.viewing ? 'less' : 'more' }</button>
//               <button className="remove" onClick={() => removeRecipe(recipe.id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       { popupActive && <div className="popup">
//         <div className="popup-inner">
//           <h2>Add a new recipe</h2>

//           <form onSubmit={handleSubmit}>

//             <div className="form-group">
//               <label>Title</label>
//               <input 
//                 type="text" 
//                 value={form.title} 
//                 onChange={e => setForm({...form, title: e.target.value})} />
//             </div>

//             <div className="form-group">
//               <label>Description</label>
//               <textarea 
//                 type="text" 
//                 value={form.desc} 
//                 onChange={e => setForm({...form, desc: e.target.value})} />
//             </div>

//             <div className="form-group">
//               <label>Ingredients</label>
//               {
//                 form.ingredients.map((ingredient, i) => (
//                   <input 
//                     type="text"
//                     key={i}
//                     value={ingredient} 
//                     onChange={e => handleIngredient(e, i)} />
//                 ))
//               }
//               <button type="button" onClick={handleIngredientCount}>Add ingredient</button>
//             </div>

//             <div className="form-group">
//               <label>Steps</label>
//               {
//                 form.steps.map((step, i) => (
//                   <textarea 
//                     type="text"
//                     key={i}
//                     value={step} 
//                     onChange={e => handleStep(e, i)} />
//                 ))
//               }
//               <button type="button" onClick={handleStepCount}>Add step</button>
//             </div>

//             <div className="buttons">
//               <button type="submit">Submit</button>
//               <button type="button" className="remove" onClick={() => setPopupActive(false)}>Close</button>
//             </div>

//           </form>
//         </div>
//       </div>}
//     </div>
//   )
// }

// export default Errorpage

// export default Errorpage
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import React from 'react'

function Errorpage() {
    let navigate = useNavigate();
  return (
    <section style={{backgroundColor:"#adb5bd"}}>
    <div className='text-center m-0 p-0'>
      <div className="row justify-content-center align-items-center">
      <div className="col-md-4 text-center d-none d-md-block">
        <img alt="logo" className="img-fluid" src="/assets/images/chef3.gif"/>
    </div>
    
    <div className="col-md-6 text-center">
      <h3>FaceYourFood Presents</h3>
      <h1 ><span style={{fontSize:"16.5vw"}}>O<span className='text-secondary'>o</span>p<span className='text-secondary'>s</span>!</span><br/>Something went WRONG! </h1>
      <div className='mx-2'>
      <button onClick={() => navigate(-1)} className='btn btn-lg btn-outline-secondary'>Back to Previous Page</button>
      <Link to="/" className='btn btn-lg btn-primary'>Return to the Homepage</Link>
      </div>
      <h1 style={{fontSize:"12.0vw"}}className='text-success'>404</h1>
      
      </div></div></div>
    </section>
  )
}

export default Errorpage