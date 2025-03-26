import { createContext,ReactNode,useContext,useReducer}  from "react";
import { Product } from "../types/types";




type ProductAction =
| { type: 'SET_PRODUCTS'; payload: Product[] }
| {type: 'SET_SELECTED_CATEGORY'; payload: string};




interface ProductState {
    products: Product[];  
    selectedCategory:string;

}


const initialState: ProductState = {
  products: [],
  selectedCategory: '',
  
};

const ProductContext = createContext<{
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}>({ state: initialState, dispatch: () => null });

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

const productReducer = (
    state: ProductState,
     action: ProductAction
     ): ProductState => {
            switch(action.type){
                case 'SET_PRODUCTS':
                    return {...state,products:action.payload};
                case 'SET_SELECTED_CATEGORY':
                    return {...state,selectedCategory:action.payload};
        
                     
               }
          
            };
            
        
