import "./AdminDashbord.css"
import { FaUsers, FaBook, FaClipboardList } from "react-icons/fa";

const AdminDashboard = () => {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <h2 className="logo">Pavithra Admin</h2>
                <nav>
                    <ul>
                        <li><FaUsers /> Users</li>
                        <li><FaBook /> Books</li>
                        <li><FaClipboardList /> Orders</li>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                <h1 className="page-title">Dashboard Overview</h1>
                <div className="cards">
                    <div className="card">
                        <h2>120</h2>
                        <p>Registered Users</p>
                    </div>
                    <div className="card">
                        <h2>75</h2>
                        <p>Total Books</p>
                    </div>
                    <div className="card">
                        <h2>35</h2>
                        <p>Orders Today</p>
                    </div>
                </div>
            </main>
        </div>
    );

};

export default AdminDashboard;
