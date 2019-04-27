// Created by Duane on 2019/4/27

import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [
    {
        Header: 'Search Results',
        columns: [{
            Header: 'Filename',
            accessor: 'filename',
            id: 'filename',
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }, {
            Header: 'File Type',
            accessor: 'file_type',
            id: 'file_type',
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }, {
            Header: 'Host Alias',
            accessor: 'host',
            id: 'host',
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }, {
            Header: 'Mailbox (FTP Username)',
            accessor: 'mailbox',
            id: 'mailbox',
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }, {
            Header: 'Timestamp',
            accessor: 'time_stamp',
            id: 'time_stamp',
            width: 200,
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }, {
            Header: 'File Size (Bytes)',
            accessor: 'file_size',
            id: 'file_size',
            width: 130,
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }, {
            Header: 'Status',
            accessor: 'status',
            id: 'status',
            width: 80,
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }, {
            Header: 'Direction',
            accessor: 'direction',
            id: 'direction',
            width: 80,
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }, {
            Header: 'Serial',
            accessor: 'serial',
            id: 'serial',
            width: 130,
            className: 'text-center',
            filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))
        }]
}];

const data = [{
      filename: 'installation-invoice.txt',
      file_type: 'text',
      host: 'aromas',
      mailbox: 'aromas-mailbox',
      time_stamp: '2019-04-27',
      file_size: 10,
      status: 'success',
      direction: 'Source -> Host',
      serial: 'RU-1100'
    }
]

export default class FileResult extends Component {
    render() {
        const {esfiles} = this.props;
        return(
            <ReactTable
                className="striped -highlight"
                data={data}
                columns={columns}
                defaultPageSize={20}
                loading={this.props.loading}
                loadingText='Searching Files...'
                noDataText={this.props.loading ? '': (this.props.term === '' ? `No Search Term Entered ` : `No Files Found That Match '${this.props.term}'`)}
                filterable
                showFilters={true}
                defaultFilterMethod={(filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))}
            />
        )
    }
}