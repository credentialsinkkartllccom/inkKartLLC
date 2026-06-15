import React from 'react';

import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    if (userInfo && userInfo.isAdmin) {
        return children ? children : <Outlet />;
    } else {
        return <Navigate to="/signin" replace />;
    }
};

export default AdminRoute;