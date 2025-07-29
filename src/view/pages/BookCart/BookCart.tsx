/*


import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";

/!*
type CartItemType = {
    product: {
        id: number;
        name: string;
        price: number;
        currency: string;
        image: string;
    };
    itemCount: number;
};
*!/

/!*interface ShoppingCartProps {
    itemsList: CartItemType[];
}*!/

const images: Record<string, string> = import.meta.glob(
    "../../../assets/products/!*",
    { eager: true, import: "default" }
);

export function ShoppingCart() {
    // const [cartItems, setCartItems] = useState<CartItemType[]>(itemsList);



    const {items}= useSelector((state:RootState)=> state.cart)

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-300">
                <div className="bg-blue-950 text-white py-4 px-6 text-center text-xl font-bold">
                    Shopping Cart
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto text-sm text-left">
                        <thead>
                        <tr className="bg-blue-800 text-white">
                            <th className="px-4 py-3 font-semibold">ID</th>
                            <th className="px-4 py-3 font-semibold">Image</th>
                            <th className="px-4 py-3 font-semibold">Name</th>
                            <th className="px-4 py-3 font-semibold">Unit Price</th>
                            <th className="px-4 py-3 font-semibold">Quantity</th>
                            <th className="px-4 py-3 font-semibold">Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center px-6 py-4 text-blue-800 bg-blue-100">
                                    No Items to display
                                </td>
                            </tr>
                        ) : (
                            items.map((item, index) => (
                                <tr
                                    key={item.product.id}
                                    className={`${
                                        index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                                    } hover:bg-blue-200 transition-colors duration-200`}
                                >
                                    <td className="px-4 py-3 border-t border-blue-200">{item.product.id}</td>
                                    <td className="px-4 py-3 border-t border-blue-200">
                                        <img
                                            className="w-16 h-16 object-cover rounded-md mx-auto"
                                            src={images[`../../../assets/products/${item.product.image}`]}
                                            alt={item.product.name}
                                        />
                                    </td>
                                    <td className="px-4 py-3 border-t border-blue-200 font-semibold">
                                        {item.product.name}
                                    </td>
                                    <td className="px-4 py-3 border-t border-blue-200">
                                        {item.product.price} {item.product.currency}
                                    </td>
                                    <td className="px-4 py-3 border-t border-blue-200">{item.itemCount}</td>
                                    <td className="px-4 py-3 border-t border-blue-200 font-medium text-blue-900">
                                        {(item.product.price * item.itemCount).toFixed(2)} {item.product.currency}
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}*/
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../store/store";

const images: Record<string, string> = import.meta.glob("../../../assets/books/*", {
    eager: true,
    import: "default",
});

export function BookCart() {
    const { books } = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();

    const totalAmount = books
        .reduce((sum, item) => sum + (item.books.price || 0) * item.booksCount, 0)
        .toFixed(2);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-200 p-6 flex items-center justify-center">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="text-center bg-indigo-700 text-white py-6 text-3xl font-bold">🛒 Your Book Cart</div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm sm:text-base text-left">
                        <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="px-5 py-4">Image</th>
                            <th className="px-5 py-4">Title</th>
                            <th className="px-5 py-4">Author</th>
                            <th className="px-5 py-4">Qty</th>
                            <th className="px-5 py-4">Price</th>
                            <th className="px-5 py-4">Total</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-800">
                        {books.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-6 bg-indigo-100 text-indigo-700 font-medium">
                                    💤 Your cart is empty.
                                </td>
                            </tr>
                        ) : (
                            books.map((item, index) => (
                                <tr
                                    key={item.books._id}
                                    className={`${index % 2 === 0 ? "bg-indigo-50" : "bg-indigo-100"} border-b border-indigo-200`}
                                >
                                    <td className="px-5 py-4">
                                        <img
                                            src={images[`../../../assets/books/${item.books.photo}`]}
                                            alt={item.books.title}
                                            className="w-16 h-20 object-cover rounded-lg shadow"
                                        />
                                    </td>
                                    <td className="px-5 py-4 font-bold">{item.books.title}</td>
                                    <td className="px-5 py-4">{item.books.author}</td>
                                    <td className="px-5 py-4 text-center">{item.booksCount}</td>
                                    <td className="px-5 py-4">{item.books.price} LKR</td>
                                    <td className="px-5 py-4 font-semibold text-indigo-800">
                                        {(item.books.price! * item.booksCount).toFixed(2)} LKR
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                {books.length > 0 && (
                    <div className="flex justify-between items-center px-6 py-4 bg-indigo-50 border-t border-indigo-200">
                        <span className="text-lg font-bold text-indigo-900">
                            Total: {totalAmount} LKR
                        </span>
                        <button
                            onClick={() => navigate("/checkout")}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
