// Note: Este es un ejemplo del patron Coumpound Components Pattern
//       Este patron es util cuando se quiere crear un componente que tenga varios componentes hijos
//       que trabajen juntos, pero que cada uno de ellos pueda ser utilizado de forma independiente.
//       En este caso, se tiene un componente ProductCard que tiene tres componentes hijos:
//       ProductImage, ProductTitle y ProductButtons. Cada uno de estos componentes hijos puede ser
//       utilizado de forma independiente, pero juntos forman el componente ProductCard.

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Nuevo titulo'} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
}
