(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[3],{106:function(e,t){},108:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(e){var t=e.label,a=e.name,c=e.value,r=e.type,s=e.options,l=e.onChange,i=e.error;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,className:"col-sm-3 control-label",children:t}),Object(n.jsxs)("div",{className:"col-sm-9",children:["select"===r?Object(n.jsxs)("select",{required:!0,value:c,onChange:l,name:a,autoComplete:"off",id:a,className:"form-control",children:[Object(n.jsxs)("option",{value:"",children:[" -- Select ",t," -- "]}),s.map((function(e){return Object(n.jsx)("option",{value:e.value,children:e.label},e.value)}))]}):Object(n.jsx)("input",{required:!0,className:"form-control",type:r,value:c,name:a,placeholder:t,autoComplete:"off",onChange:l,id:a}),i&&Object(n.jsx)("p",{className:"text-danger",children:i})," "]})]})}},109:function(e,t,a){"use strict";var n=a(92),c=(a(0),a(117)),r=a(1);t.a=function(e){e.id;var t=e.columns,a=e.data,s=Object(c.useTable)({columns:t,data:a,initialState:{pageIndex:0,pageSize:10}},c.useGlobalFilter,c.usePagination),l=s.getTableProps,i=s.getTableBodyProps,o=s.headerGroups,d=s.page,b=s.prepareRow,j=s.state,u=s.setGlobalFilter,p=s.nextPage,h=s.canNextPage,O=s.previousPage,x=s.canPreviousPage,g=s.pageOptions,m=s.setPageSize,v=j.globalFilter,f=j.pageIndex,N=j.pageSize;return Object(r.jsx)("div",{className:"datatable-con",children:Object(r.jsxs)("div",{className:"table-responsive",children:[Object(r.jsx)("div",{className:"pagination-container",children:Object(r.jsxs)("div",{className:"pagination-top",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("select",{value:N,onChange:function(e){m(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})}),Object(r.jsx)("input",{type:"text",value:v||"",onChange:function(e){return u(e.target.value)},placeholder:"Search..."})]})}),Object(r.jsxs)("table",Object(n.a)(Object(n.a)({id:"data-table",className:"table table-striped table-bordered"},l()),{},{children:[Object(r.jsx)("thead",{children:o.map((function(e){return Object(r.jsx)("tr",Object(n.a)(Object(n.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(r.jsx)("th",Object(n.a)(Object(n.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(r.jsx)("tbody",Object(n.a)(Object(n.a)({},i()),{},{children:d.map((function(e){return b(e),Object(r.jsx)("tr",Object(n.a)(Object(n.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(r.jsx)("td",Object(n.a)(Object(n.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(r.jsx)("div",{className:"pagination-container",children:Object(r.jsxs)("div",{className:"pagination-bottom",children:[Object(r.jsx)("button",{onClick:function(){return O()},disabled:!x,children:"Previous"}),Object(r.jsxs)("span",{children:["Page"," ",Object(r.jsxs)("strong",{children:[f+1," of ",g.length]})]}),Object(r.jsx)("button",{onClick:function(){return p()},disabled:!h,children:"Next"})]})})]})})}}}]);
//# sourceMappingURL=3.b4aa5c9e.chunk.js.map