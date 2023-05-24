import { Aside, NavStyle } from './SideMenu.styled';
import { useEffect, useRef, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';
import { fetchFoodCompany } from 'services/API';

const SideMenu = () => {
  const [pending, setPending] = useState(false);
  const [companies, setCompanies] = useState([]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) return;
    firstRender.current = false;

    setPending(true);
    fetchFoodCompany()
      .then(response => {
        if (!response) throw new Error('Sorry but something wrong ');

        setCompanies(response);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return (
    <Aside>
      {pending ? (
        <Loader />
      ) : (
        <>
          <h2>Shops: </h2>
          <ul>
            {companies.map(company => (
              <li key={company.id} className="list">
                <NavStyle to={company.id}>{company.name}</NavStyle>
              </li>
            ))}
          </ul>
        </>
      )}
      ;
    </Aside>
  );
};

export default SideMenu;
