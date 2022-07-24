import { createContext, CSSProperties, ReactElement } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

import styles from '../styles/styles.module.css';
import { ProductButtons } from './ProductButtons';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?:string;
    style?: CSSProperties;
}


export const productContext = createContext({} as ProductContextProps);

const { Provider } = productContext;

export const ProductCard = ({ children, product, className, style }: Props ) => {

    const { counter, increaseBy } = useProducts( 0 ); 
    
    return (
        <Provider value = {{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={`${ styles.productCard } ${ className }`}
                style = { style }
            >
                
                { children }
                
            </div>
        </Provider>
        
     )
}


ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButtons;