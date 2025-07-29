import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store";
import { clearCart } from "../../../slices/cartSlice";

export function Checkout() {
    const { books } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const [address, setAddress] = useState({
        fullName: "",
        email: "",
        phone: "",
        shippingAddress: "",
    });

    const total = books.reduce((sum, item) => sum + (item.books.price || 0) * item.booksCount, 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 👉 Send order to backend here via Axios or fetch

        alert(`Thank you for your order! Total: ${total} LKR`);

        // Optional: clear cart after submit
        dispatch(clearCart());
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-8">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700"> Cash On Delivery (COD) </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        required
                        type="text"
                        placeholder="Full Name"
                        value={address.fullName}
                        onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        value={address.email}
                        onChange={(e) => setAddress({ ...address, email: e.target.value })}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={address.phone}
                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <textarea
                        required
                        placeholder="Shipping Address"
                        value={address.shippingAddress}
                        onChange={(e) => setAddress({ ...address, shippingAddress: e.target.value })}
                        className="w-full border border-gray-300 rounded px-4 py-2 h-24"
                    />
                    <div className="flex justify-between mt-6 items-center">
                        <span className="text-lg font-semibold text-indigo-800">Total: {total.toFixed(2)} LKR</span>
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow"
                        >
                            Place Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
