import './App.css';
import Store from './components/Store';


function App(props) {
  return (
    <div >
      <Store products={props.products} icons={props.icons} />
    </div>
  );
}

export default App;
