import { Header } from './components';
import './App.css';
import { CartProvider } from './context/CartContext';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Header />
        <AllRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
