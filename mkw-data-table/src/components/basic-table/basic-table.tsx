import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'basic-table',
  styleUrl: './basic-table.css',
})
export class BasicTable {
  @Prop({mutable:true}) tableData: any = [];

  @Prop({mutable:true}) tableHeader: any = [];

  render() {
    return (
      <div>

        <table>
          <thead>
          <tr>
            <th>ID</th>
            {this.tableHeader.map((header, headerIndex) => {
              return (

                  <th key={headerIndex}>{header.label}</th>

              );
            })}
            </tr>

          </thead>
          <tbody>
            {
              this.tableData.map((data, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
