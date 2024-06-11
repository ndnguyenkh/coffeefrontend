

import Footer from "~/components/containers/Footer";

function FooterOnlyLayout({ children }) {
    return ( 
        <div>
            <div className="container" style={{ margin: 0, padding: 0 }}>
                {children}
            </div>
            <div style={{ background: 'white' }}>
                <Footer />
            </div>
        </div>
     );
}

export default FooterOnlyLayout;