// Created by Duane on 2019/4/27

import React, {Component} from 'react';
import {Button, Form, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {FaSearch} from 'react-icons/fa';

export default class FileSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange(term){
        this.setState({term});
        console.log('term: ', this.state.term)
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onSearchTermChange(this.state.term)
    }

    render() {
        const {term} = this.state;
        return (
            <div style={{padding: '5px', width: '600px'}}>
                <Form id="search-form" className="file-search" onSubmit={this.onSubmit.bind(this)}>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <Button color="primary">
                                <FaSearch style={{marginBottom: '.25em', marginRight: '.5em'}}/><strong>File Search</strong>
                            </Button>
                        </InputGroupAddon>
                        <Input
                            id="file-search"
                            name="q"
                            type="search"
                            placeholder="Type Search Criteria and Press Enter..."
                            className="form-control"
                            value={term}
                            onChange={event => this.onInputChange(event.target.value)}
                        />
                    </InputGroup>
                </Form>
            </div>
        )
    }
}