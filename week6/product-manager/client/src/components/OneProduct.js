import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {
    const {id} =useParams();
    console.log(id);
    const [product, setProduct]=useState({})

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

    return (
        <div>
            <h2>{product.title}</h2>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.desc} </h3>
            <Link to={'/'} >Back</Link>
        </div>
    );
}

export default OneProduct;
