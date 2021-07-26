/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {Component} from 'react';
import { Navbar,Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';

class Header extends Component{

    constructor(props){
        super(props);

        this.state ={
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <h3 style={{color: "white"}}>Hi ,&nbsp; Welcome !</h3>
                            </Nav>
                            
                            <Nav className="ml-auto" navbar>
                                <NavItem className="ml-3 mt-1">
                                    <a style={{color: "white", margin: "auto"}} href="https://www.linkedin.com/in/prakhar-kochar/">
                                        <span className="fa fa-linkedin fa-lg"></span>
                                    </a>   
                                </NavItem>
                                <NavItem className="ml-3 mt-1">
                                    <a style={{color: "white"}} href="https://github.com/Prakhar2100/">
                                        <span className="fa fa-github fa-lg"></span>
                                    </a>   
                                </NavItem>
                                <NavItem className="ml-3 mt-1">
                                    <a style={{color: "white", margin: "auto"}} href="mailto:prakhar95985556@gmail.com">
                                        <span className="fa fa-envelope fa-lg"></span>
                                    </a>   
                                </NavItem>
                                <NavItem className="ml-3 mt-1">
                                    <a style={{color: "white", margin: "auto"}} href="tel:+91 8707603084">
                                        <span className="fa fa-phone fa-lg"></span>
                                    </a>   
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-hand-victory fa-lg"></span> Achievements
                                    </NavLink>
                                </NavItem> */}
                                {/* <NavItem className="ml-auto">
                                    <NavLink className="nav-link" to="/projects">
                                        Projects
                                    </NavLink>
                                </NavItem> */}
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header