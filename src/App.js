import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
var data = require("./vehicles.json");
data.forEach(function (vehicle, index) {
  data[index].highwayMileageHigh = data[index].highwayMileage.high;
  data[index].highwayMileageLow = data[index].highwayMileage.low;
  data[index].cityMileageHigh = data[index].cityMileage.high;
  data[index].cityMileageLow = data[index].cityMileage.low;
  delete data[index].highwayMileage;
  delete data[index].cityMileage;
})
console.log(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }


  render() {
    const { data } = this.state;
    return (
      <div style={{ margin: 10, padding: 5 }}>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Vehicle Specifications",
              columns: [
                {
                  Header: "Year",
                  id: "year",
                  accessor: d => d.year,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["year"] }),
                  filterAll: true               
                },
                {
                  Header: "Make",
                  id: "make",
                  accessor: d => d.make,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["make"] }),
                  filterAll: true
                },
                {
                  Header: "Model",
                  id: "model",
                  accessor: d => d.model,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["model"] }),
                  filterAll: true
                },
                {
                  Header: "Miles",
                  id: "miles",
                  accessor: d => d.miles,
                  filterable: false,
                },
                {
                  Header: "Color",
                  id: "color",
                  accessor: d => d.color,
                  sortable: false,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["color"] }),
                  filterAll: true
                },
                {
                  Header: "Price",
                  id: "price",
                  accessor: d => d.price,
                  filterable: false,
                },
                {
                  Header: "Description",
                  id: "description",
                  accessor: d => d.description,
                  filterable: false,
                  sortable: false
                }]
            },
            {
              Header: "Gas Mileage",
              columns: [
                {
                  Header: "Highway High",
                  filterable: false,
                  sortable: false,
                  id: "highwayMileageHigh",
                  accessor: d => d.highwayMileageHigh,

                },
                {
                  Header: "Highway Low",
                  filterable: false,
                  sortable: false,
                  id: "highwayMileageLow",
                  accessor: d => d.highwayMileageLow,

                },
                {
                  Header: "City High",
                  filterable: false,
                  sortable: false,
                  id: "cityMileageLow",
                  accessor: d => d.cityMileageLow,
                },
                {
                  Header: "City Low",
                  filterable: false,
                  sortable: false,
                  id: "cityMileageLow",
                  accessor: d => d.cityMileageLow,
                },

              ]
            },
          ]}
          defaultPageSize={50}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default App;
