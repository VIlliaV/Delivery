// import { useState } from 'react';

import ShowMenu from 'components/ShowMenu/ShowMenu';
import { Aside } from './SideMenu.styled';

const SideMenu = () => {
  return (
    <Aside>
      <ShowMenu />
    </Aside>
  );
};

export default SideMenu;
