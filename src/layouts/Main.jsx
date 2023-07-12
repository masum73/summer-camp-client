import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavigationBar from '../shared/Navigationbar';

const Main = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;