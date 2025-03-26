import { BrowserRouter,Routes,Route,Router } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavigationBar from "./components/NavigationBar";
import ProductCard from "./pages/ProductCard";
import {ProductProvider} from "./context/ProductContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {CartProvider} from'./context/CartContext';
import Cart from "./pages/Cart";


function App() {
  const queryClient = new QueryClient();

  return (
   
    <QueryClientProvider client={queryClient}>
    <ProductProvider>
    <CartProvider>
      <BrowserRouter>
      <NavigationBar />
  <Routes>
        <Route path="/" element={<Home />} />
     
        <Route path='productcard' element={<ProductCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />

      
      </Routes>
   
    </BrowserRouter>
    </CartProvider>
    </ProductProvider>
    </QueryClientProvider>
 
  );
};
export default App;