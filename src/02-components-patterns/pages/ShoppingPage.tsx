// Note: Este es un ejemplo del patron Coumpound Components Pattern
//       Este patron es util cuando se quiere crear un componente que tenga varios componentes hijos
//       que trabajen juntos, pero que cada uno de ellos pueda ser utilizado de forma independiente.
//       En este caso, se tiene un componente ProductCard que tiene tres componentes hijos:
//       ProductImage, ProductTitle y ProductButtons. Cada uno de estos componentes hijos puede ser
//       utilizado de forma independiente, pero juntos forman el componente ProductCard.

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

import  '../styles/custom-styles.css'

const product = {
    id: 1,
    title: 'Coffee Mug - Card',
    image: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }} >
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductCard.Image
                        className='custom-image'
                    />
                    <ProductCard.Title
                        title={'Nuevo titulo'}
                        className="text-white"
                    />
                    <ProductCard.Buttons
                        className='custom-buttons'
                    />
                </ProductCard>

                <ProductCard
                    product={product}
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
                </ProductCard>
                
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                    style={{'backgroundColor': 'red'}}
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

            </div>
        </div>
    )
}
