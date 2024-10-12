import css from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={css.footerContainer}>
            &copy; {new Date().getFullYear()}{' '}
            <a
                className={css.footerLink}
                href="linkedin.com"
                target='_blank'
                rel='noopener noreferrer'
            >MJ Magamba</a>
        </footer>
    );
};

