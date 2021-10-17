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

  @State() paginationNumberList: Array<number> = [];

  @State() isAsc: boolean = true;

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
    this.paginationNumberList = Array.from(Array(Math.round(this.tableData.length / this.pageLimit)), (_, index) => index + 1);
    if (this.tableData.length > this.paginationNumberList.length * this.pageLimit) {
      this.paginationNumberList.push(this.paginationNumberList.length + 1);
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

  setPaginationValue = index => {
    this.startFrom = index * this.pageLimit;
  };

  sorting = key => {
    if (typeof this.tableData[0][key] === 'string') {
      this.tableData.sort(function (a, b) {
        var nameA = a[key].toUpperCase(); // ignore upper and lowercase
        var nameB = b[key].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    } else if (typeof this.tableData[0][key] === 'number') {
      this.tableData.sort(function (x, y) {
        return x[key] - y[key];
      });
    }

    if (this.isAsc) {
      this.tableData = this.tableData.reverse();
    }
    this.isAsc = !this.isAsc;
  };

  render() {
    let tableBodyItems = [];
    if (this.tableData.length) {
      for (let i = this.startFrom; i < this.startFrom + this.pageLimit; i++) {
        if (this.tableData[i]) {
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
    }

    return (
      <div>
        Data Table : {this.isAsc ? <div>sas</div> : <div>ss</div>}
        {this.tableHeader.length ? (
          <table>
            <thead>
              <tr>
                <th>Sno</th>
                {this.tableHeader.map((header, headerIndex) => {
                  return (
                    <th key={headerIndex}>
                      {header.label}{' '}
                      {header.isSorting ? (
                        <span>
                          <img
                            src={'../../assets/sort.png'}
                            onClick={() => {
                              this.sorting(header.key);
                            }}
                          />
                        </span>
                      ) : (
                        ''
                      )}{' '}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>{tableBodyItems}</tbody>
          </table>
        ) : (
          <div>No table data found</div>
        )}
        <div class="pag-container">
          <button
            onClick={() => {
              this.getPreviousData();
            }}
          >
            {'<'}
          </button>
          {this.paginationNumberList.map((number, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  this.setPaginationValue(index);
                }}
              >
                {number}
              </span>
            );
          })}
          <button
            onClick={() => {
              this.getNextData();
            }}
          >
            {'>'}
          </button>
        </div>
      </div>
    );
  }
}
