import { useState, useEffect }  from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaHandPointUp } from 'react-icons/fa';
import css from './BackTopBtn.module.css';

export const BackTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const options = {
        duration: 500,
        smooth: true,
    };

    const scrollToTop = () => {
        scroll.scrollToTop(options);
    };

    return (
        show && (
            <button onClick={scrollToTop} className={`${css.button} ${css.md}`}>
                <FaHandPointUp className={`${css.icon} ${css.md}`} />
            </button>
        )
    );
};