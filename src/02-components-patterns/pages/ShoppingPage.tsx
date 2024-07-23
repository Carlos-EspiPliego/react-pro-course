// Note: Este es un ejemplo del patron Coumpound Components Pattern
//       Este patron es util cuando se quiere crear un componente que tenga varios componentes hijos
//       que trabajen juntos, pero que cada uno de ellos pueda ser utilizado de forma independiente.
//       En este caso, se tiene un componente ProductCard que tiene tres componentes hijos:
//       ProductImage, ProductTitle y ProductButtons. Cada uno de estos componentes hijos puede ser
//       utilizado de forma independiente, pero juntos forman el componente ProductCard.

import { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces/interfaces'

import '../styles/custom-styles.css'

const product1 = {
    id: 1,
    title: 'Coffee Mug - Card',
    image: './coffee-mug.png'
}

const product2 = {
    id: 2,
    title: 'Coffee Mug 2 - Card',
    image: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {

    const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, producto: Product }) => {

        setshoppingCart(prev => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = prev;
                return rest;
            }

            return {
                ...prev,
                [product.id]: { ...product, count }
            }
        })
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }} >

                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage
                                className='custom-image'
                            />
                            <ProductTitle
                                className="text-white"
                            />
                            <ProductButtons
                                className='custom-buttons'
                            />
                        </ProductCard>
                    ))
                }

                {/* <ProductCard
                    product={products}
                    className="bg-dark text-white"
                >
                    <ProductImage
                        className='custom-image'
                    />
                    <ProductTitle
                        className="text-white"
                    />
                    <ProductButtons
                        className='custom-buttons'
                    />
                </ProductCard> */}

            </div>

            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (


                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage
                                className='custom-image'
                            />
                            <ProductButtons
                                className='custom-buttons'
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
