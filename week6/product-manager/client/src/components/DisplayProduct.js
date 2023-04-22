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

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {
                    productList.map((product) =>(
                        <div key={product._id} >
                            <Link to={`/viewProduct/${product._id}`} >{product.title}</Link>
                            {/*since we are inject variable(prodict._id), need to use`` instead of '' */}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default DisplayProduct;
