import { ProductCard as ProductCardHOK } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButons';
import { ProductTitle } from './ProductTitle';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButons';

export const ProductCard = Object.assign(ProductCardHOK, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons
})

export default ProductCard;