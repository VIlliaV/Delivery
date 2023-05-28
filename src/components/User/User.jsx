import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Container } from './User.styled';
import { fetchMenu } from 'services/API';
import { getLocalCompany } from 'services/Local/local';
import { toast } from 'react-hot-toast';

const User = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mapCompany, setMapCompany] = useState({
    lat: 49.8397,
    lng: 24.0297,
  });
  const [mapCompanyName, setMapCompanyName] = useState('Lviv');

  const firstRender = useRef(true);

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, phone, email, address };
    onSubmit(user);
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
  };

  const loader = new Loader({
    apiKey: 'AIzaSyBKPbNU2ib0PYNVjp6Gy4PJnzAk-0ectzE',
    version: 'weekly',
  });

  const mapOptions = {
    center: mapCompany,
    zoom: 16,
  };

  useEffect(() => {
    if (!firstRender.current) return;
    firstRender.current = false;
    const company = getLocalCompany();
    if (!company) return;

    fetchMenu(company)
      .then(response => {
        const { map, name } = response;
        if (!map) throw new Error('institution no location');
        setMapCompany(map);
        setMapCompanyName(name);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      });
  }, []);

  loader
    .load()
    .then(google => {
      const map = new google.maps.Map(
        document.getElementById('map'),
        mapOptions
      );
      new google.maps.Marker({
        position: mapCompany,
        label: mapCompanyName,
        map,
      });

      new google.maps.InfoWindow().setContent('Location found.');
    })
    .catch(error => {
      toast.error(`${error.message}`);
    });

  return (
    <Container>
      <div id="map"></div>
      <form id="user-form" onSubmit={handleSubmit}>
        <label>
          <span> Name:</span>
          <input
            type="text"
            placeholder="Bill Mac Donald"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <span> Phone:</span>
          <input
            type="tel"
            placeholder="067673232"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <span> Email:</span>
          <input
            type="email"
            value={email}
            placeholder="delivery@testy.com"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <span> Address:</span>
          <input
            type="text"
            value={address}
            placeholder="London"
            onChange={e => setAddress(e.target.value)}
          />
        </label>
        <br />
      </form>
    </Container>
  );
};

export default User;
