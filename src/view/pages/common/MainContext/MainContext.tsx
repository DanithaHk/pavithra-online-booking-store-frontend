import {Route, Routes} from "react-router-dom";
import {Home} from "../../Home.tsx";

export function MainContext() {
    return (
        <div className= " main-context ">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}