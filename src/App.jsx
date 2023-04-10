import './App.css';
import { ThemeProvider, CartProvider} from './context';
import { MainLayout } from './MainLayout';
import { MainRoutes } from './routes';
//useNavigate (para todos los botones se puede usar en clase 9 esta ej), stopPropagation
function App() {
  return ( 
    <div>  
    <ThemeProvider>
      <MainLayout>
        <CartProvider>
          <MainRoutes/>
        </CartProvider>
      </MainLayout>
    </ThemeProvider>
    </div>
    );
  }
  
  export default App;
  
