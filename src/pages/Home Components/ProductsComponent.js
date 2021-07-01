import React from 'react';
// import watch from '../../images/black watch.jpg' 
import data from '../../components/Data/data.json'
import ComponentCard from './ComponentCard';
import '../../styles/ProductsComponent.css'
const ProductsComponent = (props) => {
    return ( 
        <div className="productscomponent">
            {data.map((product)=>(
                <ComponentCard key={product.id} image={product.imageurl} name={product.prod_name} tagline={product.tagline} price={product.price} />
            ))}
        </div>
     );
}
 
export default ProductsComponent;