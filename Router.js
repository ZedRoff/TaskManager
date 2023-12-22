import React from "react"
import { NativeRouter, Route, Link, Routes} from "react-router-native";
import Login from "./Login"; 
import Home from "./Home";
import Channel from "./Channel";
const Router = () => {
    return (
        <NativeRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/channel" element={<Channel />} />
            </Routes>
        </NativeRouter>
    )
}
export default Router;