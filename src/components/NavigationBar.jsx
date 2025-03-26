
import { NavLink } from"react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';


function NavigationBar(){

return(
<Navbar>
<h1 class="text-primary" >Welcome to my Product Page</h1>
    <Navbar.Brand href='/'>Home</Navbar.Brand>
    <Navbar.Brand href="/cart">Cart</Navbar.Brand>

    <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className = 'mr-auto'>
 

   



</Nav>
        </Navbar.Collapse>
    </Navbar>

  );
};
export default NavigationBar;