import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = () => {
  // const isOpenCardPage = useSelector<{ cardPage: { isOpenCardPage: boolean } }, boolean>(
  //   (state) => state.cardPage.isOpenCardPage
  // );

  return (
    <>
      <header className="header">
        <div className="wrapper navigation">
          <Link to="/" data-testid="main-link" className="header__link">
            Main
          </Link>
          <Link to="/about" data-testid="about-link" className="header__link">
            About us
          </Link>
          {/* {isOpenCardPage ? <p className="header__link">Card Page</p> : null} */}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
