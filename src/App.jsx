import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';

function App() {
  return (
    <>
      <nav>
        <img src="https://www.rovisys.com/media/yjqpgyrz/rovisys-logo-no-tag.png" />

        <RxHamburgerMenu size="2rem" style={{ cursor: 'pointer' }} />
      </nav>
      <main className="main-img">
        <div className="main-inner">
          <div className='left-main' style={{ width: '400px' }}>
            <div
              style={{
                fontSize: '3rem',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="left-main-text">Remade By</div>
              <div
                className="left-main-text"
                style={{
                  color: 'rgb(155,197,85)',
                  fontWeight: 'bold'
                }}
              >
                Andres Flores.
              </div>
            </div>
            <div style={{ borderTop: '2px solid white' }}></div>
            <div className="left-main-text">
              <p style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas excepturi quae quis, dicta illum totam debitis beatae
                in incidunt aspernatur ipsa odit perspiciatis, velit commodi
                illo delectus reprehenderit doloremque eligendi!
                <span
                  style={{
                    color: 'rgb(155,197,85)',
                    textDecoration: 'underline'
                  }}
                >
                  {' '}
                  solutions that improve operational and financial results.
                </span>
              </p>
            </div>
          </div>

          <div
          className='right-main'
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  color: 'rgb(138,152,248)',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                Process
              </div>
              <div
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                Automation
              </div>
              <div
                className="left-main-text"
                style={{
                  color: 'white',
                  borderTop: '2px solid white',
                  padding: '10px'
                }}
              >
                RoviSys understands and applies the most effective methods for
                building, analyzing, improving and maintaining complex
                automation systems.
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  color: 'rgb(155,197,85)',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                Building
              </div>
              <div
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                Automation
              </div>
              <div
                className="left-main-text"
                style={{
                  color: 'white',
                  borderTop: '2px solid white',
                  padding: '10px'
                }}
              >
                RoviSys delivers proven solutions that increase production,
                reduce waste and allow for accurate tracking and storage of
                material throughout the manufacturing site.
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  color: 'rgb(211,205,67)',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                Discrete Manufacturing
              </div>
              <div
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                Automation
              </div>
              <div
                className="left-main-text"
                style={{
                  color: 'white',
                  borderTop: '2px solid white',
                  padding: '10px'
                }}
              >
                Queue the fancy animation.s..... Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi quisquam quod quis! Consectetur laboriosam dolorum deserunt eius officiis fugiat? Consequuntur delectus expedita a incidunt praesentium aliquam, dignissimos consequatur ratione?
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
