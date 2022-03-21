import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Job from "../pages/Job";
import SignUp from "../pages/SignUp";


export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/jobs" element={<Job />}/>
            <Route path="/signup" element={<SignUp />}/>
        </Routes>
    );
}