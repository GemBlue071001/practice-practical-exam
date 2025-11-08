import { Navbar, Nav, NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavigationBar = () => {

    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Navbar.Brand as={Link} to={"/home"}>
                    Home
                </Navbar.Brand>

                <Nav.Link as={Link} to="">
                    All Lesson
                </Nav.Link>
            </Navbar>
        </>
    )
}

export default NavigationBar