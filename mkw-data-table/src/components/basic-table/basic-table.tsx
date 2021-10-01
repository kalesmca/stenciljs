import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'basic-table',
  styleUrl: './basic-table.css',
})
export class BasicTable {
  @Prop({ mutable: true }) data: string;

  @Prop({ mutable: true }) header: string;

  @State()tableHeader: Array<any> = []

  @State() tableData: Array<any>=[]

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

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>SNO</th>
              {this.tableHeader.map((header, headerIndex) => {
                return <th key={headerIndex}>{header.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.tableData.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  {this.tableHeader.map((header, headerIndex) => {
                    return <td key={headerIndex}>{data[header.key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
