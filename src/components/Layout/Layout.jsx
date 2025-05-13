import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Loader from '../Loader/Loader';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
            <Toaster />
            <Suspense fallback={<Loader />}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </Suspense>
        </>
    );
};

export default Layout;
