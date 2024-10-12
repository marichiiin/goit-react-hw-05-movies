import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { BackTopBtn } from "components/BackTopBtn/BackTopBtn";
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
    return (
        <>
            <div className={css.container}>
                <Header />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                    <BackTopBtn />
                </Suspense>
                <Footer />
            </div>
        </>
    )
}
