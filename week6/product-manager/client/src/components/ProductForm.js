import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [product, setProduct] = useState({
        title:"",
        price:0,
        desc:""
    });

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
                //upon a successful post request, reset setState back to "", which will clear out the form
                setProduct({
                    title:"",
                    price: 0,
                    desc:""
                });
            })
            .catch((err) =>{
                console.log(err)
            })
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <h3>New Product</h3>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={product.title} />
                </div>

                <div>
                    <label>Price:</label>
                    <input type="number" name="price" onChange={changeHandler} value={product.price} />
                </div>
                
                <div>
                    <label>Description:</label>
                    <input type="text" name="desc" onChange={changeHandler} value={product.desc} />
                </div>
                
                <div>
                    <input type="submit" value="Create" />
                </div>
                
            </form>
            
        </div>
    );
}

export default ProductForm;
