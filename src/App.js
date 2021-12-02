import './App.css';
import Router from './router'
import {Provider} from 'react-redux'
import store from './store/store';
const App = () =>{
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
