import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/main'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailsView(){
    let {id} = useParams()
    const [mostapha, setMostapha] = useState([])

    return (
        <>
        <MainLayout>
            <h1>Products details View {id}</h1>
            
        </MainLayout>
        </>
    )
}

export default ProductDetailsView;