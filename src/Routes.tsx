import {
    BrowserRouter as Router,
    Routes,
    Route, 
} from "react-router-dom";
import { Carrinho } from "./pages/Login";
import { Catalog } from "./pages/Maintenance";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Carrinho />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </Router>
    )
}