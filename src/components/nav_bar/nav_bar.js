// Created by Duane Lausell on 2019/04/14

import React, {Component} from 'react';

import {Link, Route, HashRouter} from 'react-router-dom';

import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
      return (
        <HashRouter style={{margin: '0px'}}>
        <div>
            <Navbar color="dark" dark sticky="top" expand="md">
                <NavbarBrand
                    href="/#/"
                    style={{
                        color: 'white',
                        textShadow: '0px 1px 0px rgba(150, 150, 150,.5), 0px -1px 0px rgba(0,0,0,.7)'
                    }}
                    >
                    React-Frontend
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/files">File Search</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/codetables">Code Table Search</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/customers">Customers</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div>
            <Route exact path="/" render={() => <Home />}></Route>
            <Route path="/files" component={FileSearch}></Route>
            <Route path="/codetables" component={CodeTableSearch}></Route>
            <Route path="/customers" component={Customers}></Route>
            </div>
        </div>
        </HashRouter>
      )
  }
}

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <h2>File Search</h2>
      <h2>Code Table Search</h2>
      <h2>Customers</h2>
    </div>
  )
}

const FileSearch = () => {
  return (
    <h1>File Search Section</h1>
  )
}

const CodeTableSearch = () => {
  return (
    <h1>Code Table Search Section</h1>
  )
}

const Customers = () => {
  return (
    <h1>Customers Section</h1>
  )
}
