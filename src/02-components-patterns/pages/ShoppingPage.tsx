// Note: Este es un ejemplo del patron Coumpound Components Pattern
//       Este patron es util cuando se quiere crear un componente que tenga varios componentes hijos
//       que trabajen juntos, pero que cada uno de ellos pueda ser utilizado de forma independiente.
//       En este caso, se tiene un componente ProductCard que tiene tres componentes hijos:
//       ProductImage, ProductTitle y ProductButtons. Cada uno de estos componentes hijos puede ser
//       utilizado de forma independiente, pero juntos forman el componente ProductCard.
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 7,
                    maxCount: 10,
                }}
            >
                {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>

        </div>
    )
}
