import ReactDOM from 'react-dom/client'; 
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root')); 
 
// Render the app using the created root  
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
 