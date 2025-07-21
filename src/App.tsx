import { Route, Routes } from "react-router-dom";
import Navbar from "./view/pages/common/navbar/navbar";
import { Home } from "./view/pages/Home";
import Footer from "./view/pages/common/footer/footer.tsx";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
