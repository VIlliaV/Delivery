import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { fetchFoodCompany } from 'services/API';
import { getLocalCompany } from 'services/Local/local';

import { Loader } from 'components/Loader/Loader';
import { Aside, NavStyle } from './SideMenu.styled';

const SideMenu = ({ idMenu }) => {
  const [pending, setPending] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [noRoute, setNoRoute] = useState(0);
  const navigate = useNavigate();
  const firstRender = useRef(true);

  useEffect(() => {
    setNoRoute(idMenu);
  }, [idMenu]);

  useEffect(() => {
    if (!firstRender.current) return;
    firstRender.current = false;

    setPending(true);
    fetchFoodCompany()
      .then(response => {
        if (!response) throw new Error('Sorry but something wrong ');
        setNoRoute(getLocalCompany());
        setCompanies(response);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      })
      .finally(() => {
        setPending(false);
        navigate(`/shop/${getLocalCompany() || ''}`);
      });
  }, [navigate]);

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
                <NavStyle
                  to={noRoute || company.id}
                  data-stop={!noRoute ? false : +company.id !== +noRoute}
                >
                  {company.name}
                </NavStyle>
              </li>
            ))}
          </ul>
        </>
      )}
    </Aside>
  );
};

export default SideMenu;
