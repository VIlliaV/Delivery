import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { lazy } from 'react';
import Menu from 'components/Menu/Menu';
import Shop from 'pages/Shop/Shop';

const Home = lazy(() => import('pages/Home/Home'));
const ShoppingCart = lazy(() => import('pages/ShoppingCart/ShoppingCart'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />}>
          <Route path=":menuId" element={<Menu />} />
        </Route>
        <Route path="cart" element={<ShoppingCart />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
