import { useState } from 'react';

const User = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Виконати логіку обробки введених даних (наприклад, відправка на сервер)

    // Очистити поля форми
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </label>
        <br />
      </form>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default User;
