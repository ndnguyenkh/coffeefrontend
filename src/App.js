
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '~/components/Layouts';
import { PublicRoutes } from '~/routes';



function App() {
  return (
    <Router>
      <Routes>

        {PublicRoutes.map( (route, index) => {

          const Layout = route.layout || DefaultLayout;

          const Page = route.component;

          return (
            <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          );
        })}

      </Routes>
    </Router>
  );
}

export default App;
