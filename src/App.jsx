import './App.css';
import { ThemeProvider, CartProvider} from './context';
import { MainLayout } from './MainLayout';
import { MainRoutes } from './routes';
//useNavigate (para todos los botones se puede usar en clase 9 esta ej), stopPropagation
function App() {
  return ( 
    <div>  
    <ThemeProvider>
      <CartProvider>
        <MainLayout>
          <MainRoutes/>
        </MainLayout>
      </CartProvider>
    </ThemeProvider>
    </div>
    );
  }
  
  export default App;
  
