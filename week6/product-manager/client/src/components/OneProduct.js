import React, {useState, useEffect} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {
    const {id} =useParams();
    console.log(id);
    const [product, setProduct]=useState({})
    const navigate= useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/allProducts/${id}`)
            .then((res)=>{
                console.log(res);
                setProduct(res.data.product);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])

    const deleteHandler =(id) =>{
        axios.delete(`http://localhost:8000/api/allProducts/${id}`)
            .then((res) =>{
                console.log(res)
                navigate("/")

            })
            .catch((err) =>{
                console.log(err)
            })
    };


    return (
        <div>
            <h2>{product.title}</h2>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.desc} </h3>
            <button style={{color:"white", backgroundColor:"red"}} onClick={() => deleteHandler(product._id)}>Delete</button>
            <br></br>
            <Link to={'/'} >Back</Link>
        </div>
    );
}

export default OneProduct;
