import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

export const ShoppingPage = () => {

    const product = {
        id: '1',
        title: 'Coffee Mug - Card',
        
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
                {/* <ProductCard product = { product }>
                    <ProductCard.Image />
                    <ProductCard.Title title=""/>
                </ProductCard> */}

                <ProductCard product = { product }>
                    <ProductCard.Image img = './coffee-mug.png'/>
                    <ProductCard.Title title="Coffee"/>
                    <ProductCard.Buttons />  
                </ProductCard>

                <ProductCard product = { product }>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />  
                </ProductCard>
            </div>
        </div>
    )
}
