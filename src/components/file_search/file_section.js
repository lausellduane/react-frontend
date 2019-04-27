// Created by Duane on 2019/4/17

import React, {Component} from 'react';
import {Row} from 'reactstrap';
import FileSearch from './file_search';
import FileResult from './file_result';

export default class FileSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            filename: "",
            esfiles: [],
            loading: false,
            csvData: ""
        }
    }

    render() {
        const {loading, esfiles, filename} = this.state;
        return (
            <div>
                <Row
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: '1px'
                    }}
                >
                    <FileSearch onSearchTermChange={term => this.fetchESFiles(term)}/>
                </Row>
                <FileResult loading={loading} esfiles={esfiles} term={filename} />
            </div>
        )
    }
}