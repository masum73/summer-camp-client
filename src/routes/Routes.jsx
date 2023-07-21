import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Class from "../pages/Class/Class";
import Instructor from "../pages/Instructor/Instructor";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminManageClass from "../pages/AdminDashboard/AdminManageClass";
import AdminManageUser from "../pages/AdminDashboard/AdminManageUser";
import InstructorAddClass from "../pages/InstructorDashboard/InstructorAddClass";
import InstructorMyClass from "../pages/InstructorDashboard/InstructorMyClass";
import SelectedClass from "../pages/StudentDashboard/SelectedClass";
import EnrolledClass from "../pages/StudentDashboard/EnrolledClass";
import Payment from "../pages/StudentDashboard/Payment";
import PaymentHistory from "../pages/StudentDashboard/PaymentHistory";
import InstructorUpdateClass from "../pages/InstructorDashboard/InstructorUpdateClass";
import ErrorPage from "../shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'class',
                element: <Class></Class>
            },
            {
                path: 'instructor',
                element: <Instructor></Instructor>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            // admin dashboard
            {
                path: 'adminmanageclass',
                element: <AdminManageClass></AdminManageClass>
            },
            {
                path: 'adminmanageuser',
                element: <AdminManageUser></AdminManageUser>
            },
            // instructor dashboard
            {
                path: 'instructoraddclass',
                element: <InstructorAddClass></InstructorAddClass>
            },
            {
                path: 'instructormyclass',
                element: <InstructorMyClass></InstructorMyClass>
            },
            {
                path: 'updateclass/:id',
                element: <InstructorUpdateClass></InstructorUpdateClass>
            },
            // student dashboard
            {
                path: 'selectedclass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enrolledclass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'payment/:studentClassId',
                element: <Payment></Payment>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
        ]
    }
]);

