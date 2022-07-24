import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

import styles from '../styles/styles.module.css';
import { ProductButtons } from './ProductButtons';



export const productContext = createContext({} as ProductContextProps);

const { Provider } = productContext;




export const ProductCard = ({ children, product }: ProductCardProps ) => {

    const { counter, increaseBy } = useProducts( 0 ); 
    
    return (
        <Provider value = {{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                { children }
                {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee Mug" /> */}
                {/* <ProductImage img = { product.img } />    

                <ProductTitle title={ product.title }/>

                <ProductButtons
                    counter = { counter }
                    increaseBy = { increaseBy }
                />  */}
                
            </div>
        </Provider>
        
     )
}


ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButtons;