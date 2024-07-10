import './App.css';
import Header from './components/Header';
import EmojiPicker from './components/EmojiPicker';

function App() {
  const list = ["😊", "🐶", "🎉", "🍕", "🚀", "🤖", "🎊", "👻", "💃", "🔥"];
  return (
    <div className="App">
      <Header />
      
        <EmojiPicker arr={list} />
    </div>
  );
}

export default App;
