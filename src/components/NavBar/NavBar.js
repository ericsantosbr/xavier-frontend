import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { Collapse, NavItem, Nav, NavbarBrand, Navbar as ReactStrapNavBar, NavbarToggler, NavLink } from 'reactstrap';

export default function NavBar(args) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <ReactStrapNavBar {...args}>
            <NavbarBrand href="/">Xavier</NavbarBrand>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/ListStudents">Listar Estudantes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/ListStudents">Listar Escolas</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </ReactStrapNavBar>
    )
}