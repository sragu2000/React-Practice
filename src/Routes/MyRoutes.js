import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "../Pages/Chats";
import Contact from "../Pages/Contact";
import Fifthpage from "../Pages/Fifthpage";
import Home from "../Pages/Home";
function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/chats/:id" element={<Chats/>}/>
                <Route exact path="/contacts" element={<Contact/>}/>
                <Route exact path="/form" element={<Fifthpage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default MyRoutes;