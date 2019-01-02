import React from "react"
import PropTypes from "prop-types"
import ReactTable from "react-table";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Post extends React.Component {
  render () {
    var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];
    return (
      <BootstrapTable data={ products } striped hover condensed version='4'>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
};
export default Post


