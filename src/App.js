import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            // Component khi đặt dưới dạng biến và muốn dùng nó với JSX
            // thì chúng ta phải viết hoa chữ cái đầu
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
