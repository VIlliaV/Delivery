import SideMenu from 'components/SideMenu/SideMenu';
import { Container } from './Shop.styled';
import Menu from 'components/Menu/Menu';
import { useEffect, useState } from 'react';
import { getLocalCompany } from 'services/Local/local';

const Shop = () => {
  const [idMenu, setIdMenu] = useState(0);
  useEffect(() => {
    setIdMenu(getLocalCompany());
    console.log('try');
  }, []);
  const companyId = id => {
    setIdMenu(id);
  };

  return (
    <Container>
      <SideMenu idMenu={idMenu} />
      <Menu companyId={companyId} />
    </Container>
  );
};

export default Shop;
