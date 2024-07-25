import './App.css';
import Header from './components/Header';
import EmojiPicker from './components/EmojiPicker';
import Footer from './components/Footer';

import countContext from './components/ContextHook';
// import { useContext } from 'react';
import TimeCountdown from './components/TimeCountdown';
import AutoBgColorChanger from './components/AutoBgColorChanger';
import CatFacts from './components/CatFacts';
import Props from './components/Props';
import ClassState from './components/ClassState';

function App() {
  // const list = ["😊", "🐶", "🎉", "🍕", "🚀", "🤖", "🎊", "👻", "💃", "🔥"];

  // const user = useContext(countContext);

  return (
    // <countContext.Provider value={user}>
      <div className="App">
        <div className="header">
        <ClassState />
          {/* <Header /> */}
          {/* <Props title="React js Tutorial" /> */}
        {/* <EmojiPicker arr={list} /> */}
        {/* <Footer/> */}
          {/* {user} */}

          {/* <TimeCountdown /> */}

          {/* <CatFacts /> */}

          {/* <AutoBgColorChanger  /> */}

        </div>
      </div>
    // </countContext.Provider>
  );
}

export default App;
