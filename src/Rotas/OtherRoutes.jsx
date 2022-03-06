import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

const OtherRoutes = () => {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" component={Home} />
     </Routes>
   </BrowserRouter>
 );
};

export default OtherRoutes;