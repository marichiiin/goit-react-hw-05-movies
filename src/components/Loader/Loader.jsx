import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
       <div className={css.Loader}>
            <div className={css.loaderbox}>
                <TailSpin color="#00BFFF" height={80} width={80} />
            </div>
       </div>
    );
};