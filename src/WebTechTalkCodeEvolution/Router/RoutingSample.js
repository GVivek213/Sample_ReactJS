import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import AuthProvider from './Auth'
import HomePage from './HomePage'
import Info from './Info'
import NavRouter from './NavRouter'
import OrderSummary from './OrderSummary'
import NoMatch from './NoMatch'
import Featured from './Featured'
import NewComponent from './NewComponent'
import Users from './Users'
import UserDetails from './UserDetails';
import Admin from './Admin';
import Profile from './Profile';
import Login from './Login'
const LazyProduct = React.lazy(() => import('./Products'))
const RoutingSample = () => {
    return (
        <AuthProvider>
            <NavRouter />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="order-summary" element={<OrderSummary />}></Route>
                <Route path="products" element={
                    <React.Suspense fallback='Loading...'>
                        <LazyProduct />
                    </React.Suspense>}>
                    <Route index element={<Featured />}></Route>
                    <Route path="Featured" element={<Featured />}></Route>
                    <Route path="new" element={<NewComponent />}></Route>
                </Route>
                <Route path="info" element={<Info />}></Route>
                <Route path="user" element={<Users />}></Route>
                <Route path="user/:userId" element={<UserDetails />}></Route>
                <Route path=":userId" element={<UserDetails />}></Route>
                <Route path="user/Admin" element={<Admin />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="*" element={<NoMatch />}></Route>
            </Routes>
        </AuthProvider>
    )
}

export default RoutingSample
