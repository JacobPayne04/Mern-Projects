import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Main = (props) => {

  

  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const submitProduct = (e) => {
    e.preventDefault();

    const tempObjectToSendToDB = {
      title,
      price,
      description
    };

    // SUBMITING THE PRODUCTS
    axios.post("http://localhost:8000/api/managers", tempObjectToSendToDB)
      .then(res => {
        console.log("✅✅✅✅", res.data)
        navigate("/products")
        window.location.reload()
      })
      .catch(err => console.log("❌❌❌❌", err))

  }

  // SHOWING THE PRODUCTS
  useEffect(() => {
    axios.get("http://localhost:8000/api/managers")
      .then(res => {
        console.log("✅✅✅✅", res.data)
        setProducts(res.data.managers)
      })
      .catch(err => console.log("❌❌❌❌", err))

  }, [])


const deleteMe = (deletedId) => {
  axios.delete("http://localhost:8000/api/managers/" + deletedId)
  .then(res => {
    console.log("OK DELETED", res.data);
    window.location.reload()

  })
  .catch(err => console.log(err));
}

  return (
    <div>
      <form onSubmit={submitProduct}>
        <h1>Product Manager</h1>
        <div>
          Title: <input value={title} onChange={(e) => setTitle(e.target.value)} />
          Price: <input value={price} onChange={(e) => setPrice(e.target.value)} />
          Description: <input value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <button type="submit">Create</button>
      </form>

      {
        products.map((oneProduct) => {
          return (
            <div key={oneProduct._id}>
              < Link to={"/products/" + oneProduct._id} >
                <h3>{oneProduct.title}</h3>
              </Link>

              < Link to={`/${oneProduct._id}/edit`} >Update Product</Link>
              <button onClick={() => deleteMe(oneProduct._id)}>DELETE❌ </button>
              < hr />
            </div>
          );
          
        })
        
      }
    
    </div>
  )
}

export default Main