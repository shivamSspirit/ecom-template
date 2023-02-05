import './App.css';
import Main from './components/main/Main';
import ProductContext from './productContext';

function App() {
  return (
    <div className="App">
      <ProductContext>
        <Main />
      </ProductContext>
    </div>
  );
}
export default App;
