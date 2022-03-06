import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';

const SignRoutes = () => {
 return (
     <BrowserRouter>
        <Router>
            <Routes>
                <Route path="/" component={<Login />} />
            </Routes>
        </Router>
   </BrowserRouter>
 );
};

export default SignRoutes;