import { useEffect, useState } from 'react';
import { Container } from './User.styled';

const User = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  // console.log('name, phone :>> ', name, phone);

  // useEffect(() => {
  //   if (onSubmit) handleSubmit();
  // }, [onSubmit]);

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, phone, email, address };
    onSubmit(user);
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
  };

  return (
    <Container>
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
