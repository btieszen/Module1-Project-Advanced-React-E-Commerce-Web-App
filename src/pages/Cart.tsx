//import { useNavigate } from 'react-router-dom';
import {useCart} from '../context/CartContext';
import './Cart.css';
const styles: { [key: string]: React.CSSProperties } = {
    cartItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
    },
    h1: {
        color: 'black',
    },
    cartItemImage: {
        width: '100px',
        height: '100px',
    },
};


    const Cart=()=>{
        const{cartItems,clearCart,removeFromCart}=useCart();


        let total=0;
        for (const item of cartItems){
            total += item.price * (item.quanity ?? 0)
        }
        return(
            <div>
                <h1>Items in Shopping Cart:</h1>
                <button onClick={() => { clearCart(); alert('Checkout complete'); }}>Checkout</button>
                {cartItems.length===0  && <h3>Your cart is empty
                    </h3>}
                {cartItems.map((item)=>(
                    <div key={item.id} style={styles.cartItem}>
                    <h3>{item.title}</h3>
                    <img src = {item.image}alt = {item.title}style = {styles.cartItemImage}></img>
                    <p>Price:${item.price}</p>
                    <p>Quanity:{item.quanity}</p>
                    <button onClick = {()=>{removeFromCart(String(item.id))}}>Remove</button>
              
                    </div>
                ))}
            <div>
                <h4>Total:${total}</h4>
                </div>
                </div>
        );
    };
    export default Cart;