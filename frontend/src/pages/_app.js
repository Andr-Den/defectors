import { Provider } from 'react-redux';
import { store } from '../app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  );
}

export default MyApp;
