import {Route, Routes} from "react-router-dom";
import {Home} from "../../Home.tsx";
import AdminDashboard from "../../dashbord/AdminDashbord.tsx";
import {BookCart} from "../../BookCart/BookCart.tsx";
import {Checkout} from "../../checkoutPage/CheackOut.tsx";

export function MainContext() {
    return (
        <div className= " main-context ">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin" element={<AdminDashboard/>} />
                <Route path="/cart" element={<BookCart/>} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </div>
    )
}