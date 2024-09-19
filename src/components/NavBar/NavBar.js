import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, NavItem, Nav, NavbarBrand, Navbar as ReactStrapNavBar,NavLink } from 'reactstrap';

export default function NavBar(args) {
    return (
        <ReactStrapNavBar {...args}>
            <NavbarBrand href="/">Xavier</NavbarBrand>
            <Collapse isOpen={true} navbar>
                <Nav>
                    {/* <NavItem>
                        <NavLink href="/ListStudents">Listar Estudantes</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink href="/ListSchools">Listar Escolas</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </ReactStrapNavBar>
    )
}