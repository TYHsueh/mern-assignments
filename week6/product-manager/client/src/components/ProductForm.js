import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [product, setProduct] = useState({
        title:"",
        price:0,
        desc:""
    });
    const {productList, setProductList} =props; 

    const [errors, setErrors] = useState({})

    const changeHandler=(e) =>{
        setProduct({...product, [e.target.name]:e.target.value})
    };

    const submitHandler=(e) =>{
        e.preventDefault();
        console.log(product);        
        //once submitted, create a new product in the schema(table)
        axios.post("http://localhost:8000/api/allProducts/new", product)
            .then((res) =>{
                console.log(res);
                console.log(res.data);
                //upon a sucessful post request, set product list to include new product for display purpose
                setProductList([...productList, res.data.product]);
                
                //upon a successful post request, reset useState back to "", which will clear out the form
                setProduct({
                    title:"",
                    price: 0,
                    desc:""
                });
            })
            .catch((err) =>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <h3>Add New Product</h3>
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
                    <input type="submit" value="Create" />
                </div>
                
            </form>
            <div>
                <hr />
            </div>
            
        </div>
    );
}

export default ProductForm;
