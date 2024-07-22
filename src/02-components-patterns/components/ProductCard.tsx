import { createContext, CSSProperties, ReactElement } from 'react';

import { ProductContextProps, Product } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';


// Se crea el contexto
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;

}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product
            }}
        >

            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {children}
                
            </div>
        </Provider>
    )
}