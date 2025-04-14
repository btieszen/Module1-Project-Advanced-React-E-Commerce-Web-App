import { render } from '@testing-library/react';
import Home from '../pages/Home';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
const mockNavigate = jest.fn()
const queryClient = new QueryClient()
// Mocking `useNavigate` from react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Keeps other imports intact
    useNavigate: ()=>mockNavigate, // Mock `useNavigate`
  }));
test('matches snapshot',()=>{

    const {asFragment} = render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);
    
    expect(asFragment()).toMatchSnapshot();
});