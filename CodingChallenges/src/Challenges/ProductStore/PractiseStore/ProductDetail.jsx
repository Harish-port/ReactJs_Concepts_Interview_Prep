import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams();
    console.log(id,">>>>klion");
    
    return (
        <div>ProductDetail</div>
    )
}

export default ProductDetail