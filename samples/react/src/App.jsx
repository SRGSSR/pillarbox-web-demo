import reactLogo from '/react.svg';
import pillarboxLogo from '/pb.webp';
import './index.css';
import Pillarbox from './pillarbox.jsx';

export default function App() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={pillarboxLogo} className="logo" alt="Pillarbox logo"/>
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </div>
        <h1>Pillarbox + React</h1>
      </header>
      <div className="player-container">
        <Pillarbox src="urn:rts:video:14651145"/>
      </div>

    </>
  );
}
