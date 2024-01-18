import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditOne = (props) => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")


    useEffect(() => {
        axios.get("http://localhost:8000/api/managers/" + id)
            .then(res => {
                console.log("✅✅✅✅", res.data)

                setTitle(res.data.manager.title)
                setPrice(res.data.manager.price)
                setDescription(res.data.manager.description)

            })
            .catch(err => console.log("❌❌❌❌",err))

    }, [id])


    //submit
    const submitProduct = (e) => {
        e.preventDefault();

        const tempObjectToSendToDB = {
            title,
            price,
            description
        };

        // SUBMITING THE PRODUCTS
        axios.patch("http://localhost:8000/api/managers/" + id, tempObjectToSendToDB)
            .then(res => {
                console.log("✅✅✅✅", res.data)
                navigate("/products")

            })
            .catch(err => console.log("❌❌❌❌", err))

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

                <button type="submit">Update</button>
            </form>

        </div>
    )
}

export default EditOne