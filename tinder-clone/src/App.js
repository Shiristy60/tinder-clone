import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      {/*TinderCards */}
      <TinderCards />
      {/*Option Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
