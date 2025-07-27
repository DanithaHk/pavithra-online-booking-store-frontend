import "./AdminDashbord.css";

const AdminDashboard = () => {
    return (
        <div className="dashboard">


            <main className="main-content ">
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
