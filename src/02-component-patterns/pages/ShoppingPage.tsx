import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css'; 


export const ShoppingPage = () => {

    const product = {
        id: '1',
        title: 'Coffee Mug - Card',
        img:'./coffee-mug.png'
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                <ProductCard 
                    product = { product }
                    className='bg-dark'
                >
                    <ProductCard.Image img = './coffee-mug.png' className = "custom-image"/>
                    <ProductCard.Title title="Coffee" className = "text-white text-bold"/>
                    <ProductCard.Buttons className = "custom-buttons"/>  
                </ProductCard>

                <ProductCard 
                    product = { product }
                    className='bg-dark'
                >
                    <ProductImage className = "custom-image"/>
                    <ProductTitle className = "text-white text-bold"/>
                    <ProductButtons className = "custom-buttons" />  
                </ProductCard>
                
                
                <ProductCard 
                    product = { product }
                    style = {{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />  
                </ProductCard>
            </div>
        </div>
    )
}
