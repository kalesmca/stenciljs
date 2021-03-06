/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BasicTable {
        "data": string;
        "header": string;
    }
    interface DataTable {
        "data": string;
        "header": string;
        "pagination": string;
    }
    interface MyComponent {
        "columnHeader": { label: string; key: string; isSorting: boolean; }[];
        "data": { name: string; age: number; city: string; id: number; }[];
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
        "pagination": { isPagination: boolean; paginationLimitList: number[]; };
    }
    interface TestList {
        "options": string;
    }
}
declare global {
    interface HTMLBasicTableElement extends Components.BasicTable, HTMLStencilElement {
    }
    var HTMLBasicTableElement: {
        prototype: HTMLBasicTableElement;
        new (): HTMLBasicTableElement;
    };
    interface HTMLDataTableElement extends Components.DataTable, HTMLStencilElement {
    }
    var HTMLDataTableElement: {
        prototype: HTMLDataTableElement;
        new (): HTMLDataTableElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTestListElement extends Components.TestList, HTMLStencilElement {
    }
    var HTMLTestListElement: {
        prototype: HTMLTestListElement;
        new (): HTMLTestListElement;
    };
    interface HTMLElementTagNameMap {
        "basic-table": HTMLBasicTableElement;
        "data-table": HTMLDataTableElement;
        "my-component": HTMLMyComponentElement;
        "test-list": HTMLTestListElement;
    }
}
declare namespace LocalJSX {
    interface BasicTable {
        "data"?: string;
        "header"?: string;
    }
    interface DataTable {
        "data"?: string;
        "header"?: string;
        "pagination"?: string;
    }
    interface MyComponent {
        "columnHeader"?: { label: string; key: string; isSorting: boolean; }[];
        "data"?: { name: string; age: number; city: string; id: number; }[];
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
        "pagination"?: { isPagination: boolean; paginationLimitList: number[]; };
    }
    interface TestList {
        "options"?: string;
    }
    interface IntrinsicElements {
        "basic-table": BasicTable;
        "data-table": DataTable;
        "my-component": MyComponent;
        "test-list": TestList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "basic-table": LocalJSX.BasicTable & JSXBase.HTMLAttributes<HTMLBasicTableElement>;
            "data-table": LocalJSX.DataTable & JSXBase.HTMLAttributes<HTMLDataTableElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "test-list": LocalJSX.TestList & JSXBase.HTMLAttributes<HTMLTestListElement>;
        }
    }
}
