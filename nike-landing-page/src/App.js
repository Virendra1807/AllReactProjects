import './App.css';
import Header from './components/Header';
import EmojiPicker from './components/EmojiPicker';
import Footer from './components/Footer';

function App() {
  const list = ["😊", "🐶", "🎉", "🍕", "🚀", "🤖", "🎊", "👻", "💃", "🔥"];
  return (
    <div className="App">
      <Header />
        <EmojiPicker arr={list} />
        <Footer/>
    </div>
  );
}

export default App;
