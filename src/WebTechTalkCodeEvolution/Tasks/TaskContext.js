import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();
function Provider(props) {
    const [productCnt, setProductCnt] = useState(0)
    return (
        <CartContext.Provider value={[productCnt, setProductCnt]}>
            {props.children}
        </CartContext.Provider>
    )

}

export { Provider };
export default CartContext;