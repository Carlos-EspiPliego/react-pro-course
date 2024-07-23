
export interface Product {
    id: number;
    title: string;
    image?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}