import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))

    }, [])

    const cards = products.map(product => (
        <div className='col-md-3' style={{ marginBottom: '10px' }}>
            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR : {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center' style={{ backgroundColor: 'white' }} >
                    <Button variant="primary" style={{ width: '135px', margin: '12px' }}>Add To Cart</Button>
                </Card.Footer>

            </Card>
        </div>
    ))

    return (
        <div>
            <div className='row'>

                {cards}
            </div>
        </div>
    )
}

export default Product
