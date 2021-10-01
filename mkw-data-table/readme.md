![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Data-Table  Published by Kaleeswaran

We can import and use any Javascript framework like Angular, React, Vue ..etc,
We have Basic level tables and Data-table also.

## Getting Started

```bash
npm i mkw-data-table
```

Need help? Reach out : kalesmca@gmail.com.

## ReactJS => index.js file

```bash
  import {defineCustomElements} from 'mkw-data-table/loader'
  reportWebVitals();
  defineCustomElements(window);
```

## Sample code for execution

```bash

  const columnHeader = [
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
  ];

  const data = [
    { name: 'kaleeswaran', age: 22, id: 1 },
    { name: 'Sundari', age: 21, id: 2 },
    { name: 'Mani', age: 24, id: 3 },
    { name: 'Saravanakumar', age: 22, id: 4 },
    { name: 'Nandhini', age: 31, id: 5 },
    { name: 'Porkodi', age: 54, id: 6 },
    { name: 'Mariappan', age: 62, id: 7 },
    { name: 'Pechiyammal', age: 28, id: 8 },
    { name: 'Muthumanikkam', age: 29, id: 9 },
    { name: 'Suresh', age: 29, id: 10 },
    { name: 'Nithilan', age: 2, id: 11 },
    { name: 'Niranjan', age: 4, id: 12 },
    { name: 'Sahana', age: 2, id: 13 },
    { name: 'ArjunRam', age: 1, id: 14 },
    { name: 'MuthuMani', age: 24, id: 15 },
  ];

   <basic-table data={JSON.stringify(this.data)} header={JSON.stringify(this.columnHeader)}></basic-table>
    <data-table data={JSON.stringify(this.data)} header={JSON.stringify(this.columnHeader)}></data-table>
```
