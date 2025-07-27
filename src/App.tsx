import { Route, Routes } from "react-router-dom";

import {Login} from "./view/pages/Log.tsx";
import {DefaultLayout} from "./view/pages/common/DefaultLayout/DefaultLayout.tsx";
import Register from "./view/pages/Register.tsx";


function App() {

    return (
        <>

            <Routes>
                <Route path="/" element={<DefaultLayout />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/register"
                    element={<Register/>}
                />
            </Routes>

        </>
    );
}

export default App;
