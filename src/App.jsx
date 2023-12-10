import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <img src="https://www.rovisys.com/media/yjqpgyrz/rovisys-logo-no-tag.png" />

        <RxHamburgerMenu size="3rem" style={{ cursor: 'pointer' }} />
      </nav>
      <div className='main-img'>

      </div>
    </>
  );
}

export default App;
