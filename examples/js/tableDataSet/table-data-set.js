import React from 'react';
import { BootstrapTable, TableHeaderColumn, TableDataSet } from 'react-bootstrap-table';

export default class TableDataSetTable extends React.Component {

  constructor(props) {
    super(props);
    this.dataSet = new TableDataSet(this._addProducts(5));
  }

  handleChangeData = () => {
    this.dataSet.setData(this._addProducts(10));
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleChangeData }>Click to Change data</button>
        <BootstrapTable data={ this.dataSet }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }

  _addProducts(quantity) {
    const products = [];
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
      const id = startId + i;
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i
      });
    }
    return products;
  }
}
