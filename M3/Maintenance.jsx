import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from "react-bootstrap-table-next";

/**
 * @author Arif Hasan <arif25169@gmail.com>
 */

class ActionFormatter extends React.Component {
  render() {
    return (
      <button className='btn btn-info'>Action</button>
    );
  }
}

function actionFormatter(cell, row) {
  return <ActionFormatter />;
}

const columns = [
  {
    dataField: "id",
    text: "Product ID"
  },
  {
    dataField: "name",
    text: "Product Name"
  },
  {
    dataField: "price",
    text: "Product Price"
  },
  {
    formatter: actionFormatter,
    text: "Action"
  }
];
const products = [
    { id: 0, name: "trueno", price: 500 },
    { id: 1, name: "pepe", price: 200 }
  ]

export default class Maintenance extends React.Component {
  render() {
    return (
      <BootstrapTable
        className="container"
        keyField="id"
        data={products}
        columns={columns}
      />
    );
  }
}

