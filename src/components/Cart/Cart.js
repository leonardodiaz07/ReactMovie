import "../../sass/components/cart.css";
import CartItems from "../CartItems/CartItems";
import { useContext, useEffect } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { totalPrice, deleteCart, cart } = useContext(Context);
    const total = totalPrice();

    useEffect(() => {
        return cart
    }, [cart])
    
    const emptyCart = () => {
        deleteCart();
    }

    return (
        <>
        { cart.length === 0 ?
            <div className="emptyCart">
                <h1> Tu carro esta vacio!</h1>
                <p><Link to="/">ir a Comprar</Link></p>
            </div>
            :
            <div className="cart">
                <div>
                    {cart.map(product =><CartItems key={product.id} product={product}/>)}
                </div>
                <div className="cartTotal">
                    <div>
                        <p>Total ${total}</p>
                    </div>
                    <div>
                        <button className="emptyCartButton" onClick={emptyCart}>Vaciar Carrito</button>
                        <Link to="/checkout" className="checkoutButton">Checkout</Link>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Cart