import { useParams } from 'react-router-dom';

const Menu = () => {
  const { menuId } = useParams();
  console.log('🚀 ~ menuId:', menuId);

  return <div>GO_GO_GO_GO_GO_GO_GO_GO_GO_{menuId}</div>;
};

export default Menu;
