import Header from '../components/Header';
import Sidebar from './SideBar';
import styles from './Defaultlayout.module.scss';
import classNames from 'classnames';


const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}> 
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;