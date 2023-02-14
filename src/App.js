import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';

const ChangeValueButton = styled.button`
  display: inline-flex;

  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 4s linear;
`;

function App() {
  const [speed, setSpeed] = useState([4, 3, 2, 1]);
  const [idx, setIdx] = useState(0);
  const logoRef = useRef(null);

  useEffect(() => {
    if (idx < 0 || idx > 3) {
      setIdx(0);
    }
    logoRef.current.style.animation = `App-logo-spin infinite ${speed[idx]}s linear`;
  }, [idx]);

  const changeSpeed = (el) => {
    setIdx(idx + el);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AppLogo src={logo} alt="logo" ref={logoRef} />
        <h2>리액트 선풍기</h2>
        <span>속도 : {idx}단계</span>
        <ButtonWrapper>
          <ChangeValueButton onClick={() => changeSpeed(-1)}>
            -
          </ChangeValueButton>
          <ChangeValueButton onClick={() => changeSpeed(+1)}>
            +
          </ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
