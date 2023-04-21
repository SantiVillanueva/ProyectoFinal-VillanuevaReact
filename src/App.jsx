import './App.css';
import {CartProvider} from './context';
import { MainLayout } from './MainLayout';
import { MainRoutes } from './routes';
//useNavigate (para todos los botones se puede usar en clase 9 esta ej), stopPropagation
function App() {
  return ( 
    <div>  
    
      <MainLayout>
        <CartProvider>
          <MainRoutes/>
        </CartProvider>
      </MainLayout>
    
    </div>
    );
  }
  
  export default App;
  
