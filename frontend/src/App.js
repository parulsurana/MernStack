import React, { createContext, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import { initialState, reducer } from "./reducer/UseReducer";

//1. ContextAPI
export const userContext = createContext();

const Routing = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/logout' element={<Logout />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<userContext.Provider value={{ state, dispatch }}>
				<Navbar />
				<Routing />
			</userContext.Provider>
		</>
	);
}

export default App;
