import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import "./App.css";
import ToDoList from "./Components/ToDoList.jsx";
import Header from "./Components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Contacts from "./Components/Contacts.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Shop from "./Components/Shop.jsx";


function App() {
    return (
        <Router>
            <Routes>
                {/*<Route path='/header' element={<Header/>}>*/}
                {/*<Header />*/}
                <Route element={<Layout />}>
                    <Route index element={<Hero />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/todo' element={<ToDoList/>}/>
                    <Route path='/contacts' element={<Contacts />}/>
                    <Route path='/shop' element={<Shop/>}/>
                </Route>
            </Routes>
        </Router>
        // <div className="app">
        //     <Hero />
        //     <About />
        //     <Projects />
        //     <Contact />
        //     <ToDoList/>
        //     <Header/>
        // </div>
    );
}

export default App;
