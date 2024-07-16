import './App.css';
import Header from './components/Header';
import EmojiPicker from './components/EmojiPicker';
import Footer from './components/Footer';

import countContext from './components/ContextHook';
import { useContext } from 'react';
import TimeCountdown from './components/TimeCountdown';

function App() {
  // const list = ["😊", "🐶", "🎉", "🍕", "🚀", "🤖", "🎊", "👻", "💃", "🔥"];
  
  // const user = useContext(countContext);
  
  return (
    // <countContext.Provider value = {user}>
    <div className="App">
      {/* <Header />
        <EmojiPicker arr={list} />
        <Footer/> */}
        {/* {user} */}

        <TimeCountdown/>
    </div>
    // </countContext.Provider>
  );
}

export default App;
