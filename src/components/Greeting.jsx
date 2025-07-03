import { useEffect, useState } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => setMessage(res.data))
      .catch((err) => setMessage(`Error loading message: ${err.message}`));
  }, []);

  return (
    <div>
      <h2>Greeting from Backend:</h2>
      <p>{message}</p>
    </div>
  );
};

export default Greeting;
