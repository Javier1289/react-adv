import { createContext, CSSProperties, ReactElement } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

import styles from '../styles/styles.module.css';
import { ProductButtons } from './ProductButtons';

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( arg: ProductCardHandlers )   => JSX.Element;
    className?:string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}


export const productContext = createContext({} as ProductContextProps);

const { Provider } = productContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props ) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProducts({ onChange, product, value, initialValues }); 
    
    return (
        <Provider value = {{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>
            <div 
                className={`${ styles.productCard } ${ className }`}
                style = { style }
            >
                
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount:initialValues?.maxCount,
                        product,

                        increaseBy,
                        reset
                    })
                } 
                
            </div>
        </Provider>
        
     )
}


ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButtons;