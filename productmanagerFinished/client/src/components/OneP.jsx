import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const OneP = (props) => {
    
    const navigate = useNavigate()

    const { id } = useParams()
    const [thisProduct, setThisProduct] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/managers/" + id)
            .then(res => {
                console.log(res.data)
                setThisProduct(res.data.manager)
            })
            .catch(err => console.log("❌❌❌", err))
    }, [id]);

    const deleteMe = (deletedId) => {
        axios.delete("http://localhost:8000/api/managers/" + deletedId)
            .then(res => {
                console.log("OK DELETED", res.data)
                navigate("/products");



            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {
                thisProduct ? (
                    <div>
                        <h2>{thisProduct.title}</h2>
                        <p>{thisProduct.price}</p>
                        <p>{thisProduct.description}</p>
                        <button onClick={() => deleteMe(thisProduct._id)}>DELETE❌ </button>
                    </div>
                ) : <h3>Loading...</h3>
            }


        </div>
    )
}

export default OneP