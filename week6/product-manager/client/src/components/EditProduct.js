import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {useNavigate, useParams, Link} from 'react-router-dom';


const EditProduct = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] =useState({
        title:"",
        price:0,
        desc:""
    });
    const [errors, setErrors] = useState({});

    const changeHandler=(e) =>{
        setProduct({...product, [e.target.name]:e.target.value})
    };
    //! need to find the product
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/allProducts/${id}`)
        .then((res) =>{
            console.log(res.data.product)
            setProduct(res.data.product)
        })
        .catch((err) =>{
            console.log(err)
        })
    },[]);
    //need to update submit handler
    const submitHandler=(e) =>{
        e.preventDefault();
        console.log(product);        
        //once submitted, create a new product in the schema(table)
        axios.put(`http://localhost:8000/api/allProducts/${id}`, product)
            .then((res) =>{
                console.log(res);
                navigate("/")
                //upon a successful post request, reset useState back to "", which will clear out the form
                //setProduct({
                //    title:"",
                //    price: 0,
                //    desc:""
                //});
            })
            .catch((err) =>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    };



    return (
        <div>
            
            <form onSubmit={submitHandler}>
                <h2>Edit Product</h2>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={product.title} />
                    {
                        errors.title?
                        <p style={{color:"red"}} >{errors.title.message}</p>:
                        null
                    }
                </div>

                <div>
                    <label>Price:</label>
                    <input type="number" name="price" onChange={changeHandler} value={product.price} />
                    {
                        errors.price?
                        <p style={{color:"red"}} >{errors.price.message}</p>:
                        null
                    }
                </div>
                
                <div>
                    <label>Description:</label>
                    <input type="text" name="desc" onChange={changeHandler} value={product.desc} />
                    {
                        errors.desc?
                        <p style={{color:"red"}} >{errors.desc.message}</p>:
                        null
                    }
                </div>
                
                <div>
                    <input type="submit" value="Edit" />
                </div>
            </form>
            <Link to={'/'} >Back</Link>
            
        </div>
    );
}

export default EditProduct;
