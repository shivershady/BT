import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";

import {AuthContext} from "./context/auth";
import {useContext} from "react";
import Category from "./pages/Category";
import ListProduct from "./pages/ListProduct";
import Product from "./pages/Product";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category/>}/>
                <Route path="/home" element={<Category/>}/>
                <Route path="/list-product/:id" element={<ListProduct/>}/>
                <Route path="/product/:id" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
