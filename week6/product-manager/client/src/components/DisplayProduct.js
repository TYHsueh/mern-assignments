import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const DisplayProduct = (props) => {
    const {productList, setProductList} =props;

    useEffect(() =>{
        axios.get('http://localhost:8000/api/allProducts')
        .then((response) =>{
            console.log(response);
            setProductList(response.data.product);
        }) 
        .catch((err) =>{
            console.log(err)
        })
    }, []);

    const deleteHandler =(id) =>{
        axios.delete(`http://localhost:8000/api/allProducts/${id}`)
            .then((res) =>{
                console.log(res)
                const updatedProductList = productList.filter((product) => product._id !== id)
                setProductList(updatedProductList)
            })
            .catch((err) =>{
                console.log(err)
            })
    };

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {
                    productList.map((product) =>(
                        <div key={product._id} >
                            <Link to={`/viewProduct/${product._id}`} >{product.title}</Link>
                            {/*since we are inject variable(prodict._id), need to use`` instead of '' */}
                            <span> </span>
                            <Link to={`/edit/${product._id}`} style={{backgroundColor:"lightblue", textDecoration:"none", color:"white", borderRadius:"5px"}}>Edit</Link>
                            <button style={{color:"white", backgroundColor:"red"}} onClick={() =>deleteHandler(product._id)} >Delete</button>
                                                                        {/*need to use anonymous arrow function to pass in a variable for delete handler  */}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default DisplayProduct;
