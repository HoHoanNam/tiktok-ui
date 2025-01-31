import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          {/* Truyền từ ngoài vào */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
