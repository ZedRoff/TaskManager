import React from "react"
import { NativeRouter, Route, Link, Routes} from "react-router-native";

import Home from "./Home";
const Router = () => {
    return (
        <NativeRouter>
            <Routes>
<Route exact path="/" element={<Home />} />

</Routes>
            </NativeRouter>
    )
}
export default Router;