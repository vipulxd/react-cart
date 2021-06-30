import React from 'react';
import watch from '../../images/black watch.jpg' 
import ComponentCard from './ComponentCard';
import '../../styles/ProductsComponent.css'
const ProductsComponent = (props) => {
    return ( 
        <div className="productscomponent">
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
            <ComponentCard image={watch} name={'iWatch 2022'} tagline={'Latest unisex black watch for teenagers.'} price={399} />
        </div>
     );
}
 
export default ProductsComponent;