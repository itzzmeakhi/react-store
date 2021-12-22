import React from 'react';
import { Outlet } from 'react-router-dom';

import './ShopPage.scss';

const ShopPage = (props) => {
    return (
        <div className="shoppage">
            <Outlet />
        </div>
    );
}

export default ShopPage;