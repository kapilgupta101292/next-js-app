
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}
