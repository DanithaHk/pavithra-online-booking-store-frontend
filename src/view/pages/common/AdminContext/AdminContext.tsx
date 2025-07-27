import { Route, Routes } from "react-router-dom";

import AdminDashboard from "../../dashbord/AdminDashbord.tsx";
import AdminUsersPage from "../../admin/users/AdminUsersPage.tsx";

export function AdminContext() {
    return (
        <div className="main-context">
            <Routes>
                {/* Relative paths without leading slash */}
                <Route path="" element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsersPage />} />
            </Routes>
        </div>
    );
}
