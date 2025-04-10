import { render } from '@testing-library/react';
import Logout from '../pages/Logout';
const mockNavigate = jest.fn()

// Mocking `useNavigate` from react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Keeps other imports intact
    useNavigate: ()=>mockNavigate, // Mock `useNavigate`
  }));
test('matches snapshot',()=>{

    const {asFragment} = render(<Logout />);
    
    expect(asFragment()).toMatchSnapshot();
});
