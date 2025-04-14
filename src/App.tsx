import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import {ProductProvider} from "./context/ProductContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {CartProvider} from'./context/CartContext';
import Cart from "./pages/Cart";
import Logout from './pages/Logout';
import Login from './pages/Login';
import Register from './pages/Register';
import {AuthProvider} from './context/AuthContext';


function App() {
  const queryClient = new QueryClient();

  return (
   
    <QueryClientProvider client={queryClient}>
    <ProductProvider>
      <AuthProvider>
    <CartProvider>
      <BrowserRouter>
      <Navbar />
  <Routes>
        <Route path="/" element={<Home />} />
     
       
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />

      
      </Routes>
   
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>
    </ProductProvider>
    </QueryClientProvider>
 
  );
};
export default App;