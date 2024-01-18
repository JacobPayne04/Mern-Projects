import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const OneP = (props) => {

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

    return (
        <div>
            {
                thisProduct ? (
                    <div>
                        <h2>{thisProduct.title}</h2>
                        <p>{thisProduct.price}</p>
                        <p>{thisProduct.description}</p>
                    </div>
                ) : <h3>Loading...</h3>
            }
        

        </div>
    )
}

export default OneP