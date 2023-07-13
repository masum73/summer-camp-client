import React, { useContext } from 'react';
import NavigationBar from '../shared/Navigationbar';
import Footer from '../shared/Footer';
import { Link, Outlet } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from '../providers/AuthProvider';



const Dashboard = () => {
    const { user } = useContext(AuthContext);
    let links = [];
    console.log(user);
    if (user?.role === "admin") {
        links = [
            { to: "adminmanageclass", title: "Manage Classes" },
            { to: "adminmanageuser", title: "Manage Users" }
        ]
    } else if (user?.role === "instructor") {
        links = [
            { to: "instructoraddclass", title: "Add a Class" },
            { to: "instructormyclass", title: "My Classes" }
        ]
    } else {
        links = [
            { to: "selectedclass", title: "Selected Classes" },
            { to: "enrolledclass", title: "Enrolled Classes" },
            { to: "payment", title: "Payment" },
            { to: "paymenthistory", title: "Payment History" },
        ]
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='flex justify-center items-center gap-5'>
                <div className='w-1/4'>
                    <List className='w-10 my-5'>
                        {
                            links.map((link, index) => <ListItem key={index}>
                                <ListItemPrefix>
                                    <PresentationChartBarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                <Link to={link.to}>{link.title}</Link>
                            </ListItem>)
                        }
                    </List>
                </div>
                <div className='w-9/12'>
                    <h2 className='text-3xl'>Welcome, {user?.role}</h2>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;