import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavigationBar from '../shared/Navigationbar';

const Main = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div style={{minHeight: "80vh"}}>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;