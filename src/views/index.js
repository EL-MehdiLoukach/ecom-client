import React, {useState, useEffect} from 'react'
import MainLayout from '../layouts/main'
import MainCarousel from '../components/carousel/main';
import HomeCategoriesLayout from '../layouts/home/categories';
import CategoryCard from '../components/categories/categoryCard';
import HomeProductsLayout from '../layouts/home/products';
import ProductCard from '../components/products/productCard';
import axios from 'axios';


function IndexView(){

    const [data, setData] = useState([]);
    
    

    useEffect( ()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>{
            if(!res) {
                console.log('some error')
            }
            console.log(res.data.products)
            setData(res.data.products)
            console.log('data' + res.data.products)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [data])

    

    return (
        <>
        <MainLayout>
            <MainCarousel />
            <HomeCategoriesLayout>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </HomeCategoriesLayout>
            <HomeProductsLayout>
                
                {data.map((e,i)=>{
                    return (
                        <>
                            <ProductCard key={i} id={e.id} title={e.title} />
                        </>
                    )
                })}
            </HomeProductsLayout>
        </MainLayout>
        </>
    )
}

export default IndexView;