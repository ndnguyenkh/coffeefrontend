

import Header from "~/components/containers/Header";
import Footer from "~/components/containers/Footer";

function DefaultLayout({ children }) {
    return ( 
        <div>
            <Header />
            <div className="container" style={{ margin: 0, padding: 0 }}>
                {children}
            </div>
            
            <div style={{ background: 'white' }}>
                <Footer />
            </div>
        </div>
     );
}

export default DefaultLayout;