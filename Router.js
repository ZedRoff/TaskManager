import React from "react"
import { NativeRouter, Route, Link, Routes} from "react-router-native";
import Home from "./Home";
import Tasks from "./Tasks";
const Router = () => {
    return (
        <NativeRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/tasks" element={<Tasks />} />
            </Routes>
        </NativeRouter>
    )
}
export default Router;