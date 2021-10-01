import { Component, Prop, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'data-table',
  styleUrl: './data-table.css',
  shadow: true,
})
export class DataTable {
  @Prop({ mutable: true }) data: string;

  @Prop({ mutable: true }) header: string;

  @State() currentIndex: number = 1;

  @State() startFrom: number = 0;

  @Prop({ mutable: true }) pageLimit = 5;

  @State() tableData: Array<any> = [];

  @State() tableHeader: Array<any> = [];

  componentWillLoad() {

    this.getUpdatedHeaderValue(this.header);
    this.getUpdatedTableData(this.data);
  }

  @Watch('header')
  getUpdatedHeaderValue(newValue) {
    if (newValue) {
      this.tableHeader = JSON.parse(newValue);
    }
  }

  @Watch('data')
  getUpdatedTableData(newValue) {
    if (newValue) {
      this.tableData = JSON.parse(newValue);
    }
  }

  getNextData = () => {
    if (this.startFrom + this.pageLimit < this.tableData.length) {
      this.startFrom = this.startFrom + this.pageLimit;
    }
  };

  getPreviousData = () => {
    if (this.startFrom) {
      this.startFrom = this.startFrom - this.pageLimit;
    }
  };

  render() {
    let tableBodyItems = [];
    if (this.tableData.length) {
      for (let i = this.startFrom; i < this.startFrom + this.pageLimit; i++) {
        tableBodyItems.push(
          <tr>
            <td>{i + 1}</td>
            {this.tableHeader.map((header, headerIndex) => {
              return <td key={headerIndex}>{this.tableData[i][header.key]}</td>;
            })}
          </tr>,
        );
      }
    }

    return (
      <div>
        Data Table
        {this.tableHeader.length ? (
          <table>
            <thead>
              <tr>
                <th>Sno</th>
                {this.tableHeader.map((header, headerIndex) => {
                  return <th key={headerIndex}>{header.label}</th>;
                })}
              </tr>
            </thead>
            <tbody>{tableBodyItems}</tbody>
          </table>
        ) : (
          <div>No table data found</div>
        )}
        <button
          onClick={() => {
            this.getPreviousData();
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            this.getNextData();
          }}
        >
          {' '}
          Next
        </button>
      </div>
    );
  }
}
