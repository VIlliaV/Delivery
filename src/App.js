import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { lazy } from 'react';

const Shop = lazy(() => import('pages/Shop/Shop'));
const ShoppingCart = lazy(() => import('pages/ShoppingCart/ShoppingCart'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="cart" element={<ShoppingCart />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
