import { Link } from "react-router-dom";
import { FaBook, FaClipboardList, FaUsers } from "react-icons/fa";

const AdminNavbar = () => {
    return (
        <div className="admin-navbar">
            <aside className="bg-gray-800 text-white w-44 min-h-screen p-6 shadow-md fixed">
                <h2 className="text-2xl font-bold mb-8">📚 Pavithra Admin</h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/admin/users"
                                className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded transition"
                            >
                                <FaUsers /> Users
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admin/AddBook"
                                className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded transition"
                            >
                                <FaBook /> Books
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admin/orders"
                                className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded transition"
                            >
                                <FaClipboardList /> Orders
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default AdminNavbar;
