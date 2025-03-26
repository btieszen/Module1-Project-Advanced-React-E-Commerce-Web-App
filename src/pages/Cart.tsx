import { useNavigate } from 'react-router-dom';
import {useCart} from '../context/Cartcontext';

const styles={
    cartItem:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        border:'1px solid black',
        padding:'10px',
        margin:'10px',
        
    },
    h1:{
        color: 'black',
    },
    cartItemImage:{
        width:'100px',
        height:'100px',
    },
};


    const ShoppingCart=()=>{
        const{cartItems,clearCart,removeFromCart}=useCart();


        let total=0;
        for (const item of cartItems){
            total += item.price*item.quanity
        }
        return(
            <div>
                <h1>Items in Shopping Cart:</h1>
                <button onClick={clearCart}>Clear Cart</button>
                {cartItems.map((item)=>(
                    <div key={item.id} styles={styles.cartItem}>
                    <h3>{item.title}</h3>
                    <img src = {item.image}alt = {item.title}style = {styles.cartItemImage}></img>
                    <p>Price:${item.price}</p>
                    <p>Quanity:{item.quanity}</p>
                    <button onClick = {()=>removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            <div>
                <h4>Total:${total}</h4>
                </div>
                </div>
        );
    };
    export default ShoppingCart;