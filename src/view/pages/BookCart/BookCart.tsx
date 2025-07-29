

import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";

/*
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
*/

/*interface ShoppingCartProps {
    itemsList: CartItemType[];
}*/

const images: Record<string, string> = import.meta.glob(
    "../../../assets/products/*",
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
}