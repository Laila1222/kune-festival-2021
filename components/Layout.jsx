import React from 'react';
import Navbar from './Navbar';

function Layout({children}) {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;