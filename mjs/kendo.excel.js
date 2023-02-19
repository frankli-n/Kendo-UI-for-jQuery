/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.data.js";import"./kendo.ooxml.js";!function(e){window.kendo.excel=window.kendo.excel||{};var t=kendo.getter,o=e.map,r={compile:function(e){return e}},n=kendo.Class.extend({});function l(e){return e.title+": "+e.value}function a(e,t){for(var o=[],r=0;r<e;r++)o.push(t(r));return o}function i(e){return e.id}n.register=function(e){r=e},n.compile=function(e){return r.compile(e)};var s=kendo.Class.extend({init:function(e){e.columns=this._trimColumns(e.columns||[]),this.allColumns=o(this._leafColumns(e.columns||[]),this._prepareColumn),this.columns=this._visibleColumns(this.allColumns),this.options=e,this.data=e.data||[],this.aggregates=e.aggregates||{},this.groups=[].concat(e.groups||[]),this.hasGroups=this.groups.length>0,this.hierarchy=e.hierarchy,this.hasGroupHeaderColumn=this.columns.some((function(e){return e.groupHeaderColumnTemplate})),this.collapsible=this.options.collapsible},workbook:function(){return{sheets:[{columns:this._columns(),rows:this.hierarchy?this._hierarchyRows():this._rows(),freezePane:this._freezePane(),filter:this._filter()}]}},_trimColumns:function(e){var t=this;return e.filter((function(e){var o=Boolean(e.field);return!o&&e.columns&&(o=t._trimColumns(e.columns).length>0),o}))},_leafColumns:function(e){for(var t=[],o=0;o<e.length;o++)e[o].columns?t=t.concat(this._leafColumns(e[o].columns)):t.push(e[o]);return t},_prepareColumn:function(o){if(!o.field)return null;var r=function(e){return t(o.field,!0)(e)},a=null;return o.values&&(a={},o.values.forEach((function(e){a[e.value]=e.text})),r=function(e){return a[t(o.field,!0)(e)]}),e.extend({},o,{value:r,values:a,groupHeaderTemplate:o.groupHeaderTemplate?n.compile(o.groupHeaderTemplate):l,groupHeaderColumnTemplate:o.groupHeaderColumnTemplate?n.compile(o.groupHeaderColumnTemplate):null,groupFooterTemplate:o.groupFooterTemplate?n.compile(o.groupFooterTemplate):null,footerTemplate:o.footerTemplate?n.compile(o.footerTemplate):null})},_filter:function(){if(!this.options.filterable)return null;var e=this._depth();return{from:e,to:e+this.columns.length-1}},_createPaddingCells:function(t){var o=this;return a(t,(function(){return e.extend({background:"#dfdfdf",color:"#333"},o.options.paddingCellOptions)}))},_dataRow:function(e,t,o){var r=this._createPaddingCells(t);if(this.hasGroups&&o&&e.items){r=r.concat(this._groupHeaderCells(e,t,o));var n=this._dataRows(e.items,t+1);return n.unshift({type:"group-header",cells:r,level:this.collapsible?t:null}),n.concat(this._footer(e,t))}for(var l=[],a=0;a<this.columns.length;a++)l[a]=this._cell(e,this.columns[a]);return this.hierarchy&&(l[0].colSpan=o-t+1),[{type:"data",cells:r.concat(l),level:this.collapsible?t:null}]},_groupHeaderCells:function(t,o,r){var n=[],l=this.allColumns.filter((function(e){return e.field===t.field}))[0]||{},a=l&&l.title?l.title:t.field,i=l?l.groupHeaderTemplate||l.groupHeaderColumnTemplate:null,s=e.extend({title:a,field:t.field,value:l&&l.values?l.values[t.value]:t.value,aggregates:t.aggregates,items:t.items},t.aggregates[t.field]),u=i?i(s):a+": "+t.value;return n.push(e.extend({value:u,background:"#dfdfdf",color:"#333",colSpan:(this.hasGroupHeaderColumn?1:this.columns.length)+r-o},l.groupHeaderCellOptions)),this.hasGroupHeaderColumn&&this.columns.forEach((function(o,r){r>0&&n.push(e.extend({background:"#dfdfdf",color:"#333",value:o.groupHeaderColumnTemplate?o.groupHeaderColumnTemplate(e.extend({group:s},s,t.aggregates[o.field])):void 0},o.groupHeaderCellOptions))})),n},_dataRows:function(e,t){for(var o=this._depth(),r=[],n=0;n<e.length;n++)r.push.apply(r,this._dataRow(e[n],t,o));return r},_hierarchyRows:function(){var e,t=this._depth(),o=this.data,r=this.hierarchy.itemLevel,n=this.hierarchy.itemId||i,l=this._hasFooterTemplate(),a=[],s=[],u=0;l||(this.collapsible=!1);for(var c=0;c<o.length;c++){var h=o[c],p=r(h,c);l&&(p>u?s.push({id:e,level:u}):p<u&&a.push.apply(a,this._hierarchyFooterRows(s,p,t)),u=p,e=n(h,c)),a.push.apply(a,this._dataRow(h,p+1,t))}if(l){a.push.apply(a,this._hierarchyFooterRows(s,0,t));var d=o.length?this.aggregates[o[0].parentId]:{};a.push(this._hierarchyFooter(d,0,t))}return this._prependHeaderRows(a),a},_hierarchyFooterRows:function(e,t,o){for(var r=[];e.length&&e[e.length-1].level>=t;){var n=e.pop();r.push(this._hierarchyFooter(this.aggregates[n.id],n.level+1,o))}return r},_hasFooterTemplate:function(){for(var e=this.columns,t=0;t<e.length;t++)if(e[t].footerTemplate)return!0},_hierarchyFooter:function(t,o,r){var n=this.columns.map((function(n,l){var a=l?1:r-o+1;if(n.footerTemplate){var i=(t||{})[n.field];return e.extend({background:"#dfdfdf",color:"#333",colSpan:a,value:n.footerTemplate(e.extend({aggregates:t},i))},n.footerCellOptions)}return e.extend({background:"#dfdfdf",color:"#333",colSpan:a},n.footerCellOptions)}));return{type:"footer",cells:this._createPaddingCells(o).concat(n),level:this.collapsible?o:null}},_footer:function(t,o){var r,n,l=[],a=this.columns.some((function(e){return e.groupFooterTemplate}));a&&(n={group:{items:t.items,field:t.field,value:t.value}},r={},Object.keys(t.aggregates).forEach((function(o){r[o]=e.extend({},t.aggregates[o],n)})));var i=this.columns.map((function(o){if(o.groupFooterTemplate){var l=e.extend({},r,t.aggregates[o.field],n);return e.extend({background:"#dfdfdf",color:"#333",value:o.groupFooterTemplate(l)},o.groupFooterCellOptions)}return e.extend({background:"#dfdfdf",color:"#333"},o.groupFooterCellOptions)}));return a&&l.push({type:"group-footer",cells:this._createPaddingCells(this.groups.length).concat(i),level:this.collapsible?o:null}),l},_isColumnVisible:function(e){return this._visibleColumns([e]).length>0&&(e.field||e.columns)},_visibleColumns:function(e){var t=this;return e.filter((function(e){var o=e.exportable;"object"==typeof o&&(o=e.exportable.excel);var r=!e.hidden&&!1!==o,n=e.hidden&&!0===o,l=r||n;return l&&e.columns&&(l=t._visibleColumns(e.columns).length>0),l}))},_headerRow:function(t,o){var r=this,n=t.cells.map((function(o){return e.extend(o,{colSpan:o.colSpan>1?o.colSpan:1,rowSpan:t.rowSpan>1&&!o.colSpan?t.rowSpan:1})}));return this.hierarchy&&n[0].firstCell&&(n[0].colSpan+=this._depth()),{type:"header",cells:a(o.length,(function(){return e.extend({background:"#7a7a7a",color:"#fff"},r.options.headerPaddingCellOptions)})).concat(n)}},_prependHeaderRows:function(e){var t=this.groups,o=[{rowSpan:1,cells:[],index:0}];this._prepareHeaderRows(o,this.options.columns);for(var r=o.length-1;r>=0;r--)e.unshift(this._headerRow(o[r],t))},_prepareHeaderRows:function(t,o,r,n){for(var l=this,a=n||t[t.length-1],i=t[a.index+1],s=0,u=0;u<o.length;u++){var c=o[u];if(l._isColumnVisible(c)){var h=e.extend({background:"#7a7a7a",color:"#fff",value:c.title||c.field,colSpan:0,firstCell:0===u&&(!r||r.firstCell)},c.headerCellOptions);a.cells.push(h),c.columns&&c.columns.length&&(i||(i={rowSpan:0,cells:[],index:t.length},t.push(i)),h.colSpan=l._trimColumns(l._visibleColumns(c.columns)).length,l._prepareHeaderRows(t,c.columns,h,i),s+=h.colSpan-1,a.rowSpan=t.length-a.index)}}r&&(r.colSpan+=s)},_rows:function(){var t=this,o=this._dataRows(this.data,0);if(this.columns.length){this._prependHeaderRows(o);var r=!1,n=this.columns.map((function(o){return o.footerTemplate?(r=!0,e.extend({background:"#dfdfdf",color:"#333",value:o.footerTemplate(e.extend({},t.aggregates,t.aggregates[o.field]))},o.footerCellOptions)):e.extend({background:"#dfdfdf",color:"#333"},o.footerCellOptions)}));r&&o.push({type:"footer",cells:this._createPaddingCells(this.groups.length).concat(n)})}return o},_headerDepth:function(e){for(var t=0,o=0;o<e.length;o++)if(e[o].columns){var r=this._headerDepth(e[o].columns);r>t&&(t=r)}return 1+t},_freezePane:function(){var e=this._visibleColumns(this.options.columns||[]),t=this._visibleColumns(this._trimColumns(this._leafColumns(e.filter((function(e){return e.locked}))))).length;return{rowSplit:this._headerDepth(e),colSplit:t?t+this.groups.length:0}},_cell:function(t,o){return e.extend({value:o.value(t)},o.cellOptions)},_depth:function(){return this.hierarchy?this.hierarchy.depth:this.groups.length},_columns:function(){return a(this._depth(),(function(){return{width:20}})).concat(this.columns.map((function(e){return{width:parseInt(e.width,10),autoWidth:!e.width}})))}});kendo.deepExtend(kendo.excel,{ExcelExporter:s,TemplateService:n})}(window.kendo.jQuery),function(e,t){var o=t.excel.ExcelExporter,r=e.extend;t.excel.TemplateService.register({compile:t.template}),t.ExcelExporter=t.Class.extend({init:function(e){this.options=e;var o=e.dataSource;if(o instanceof t.data.DataSource){o.filter()||(o.options.filter=void 0),this.dataSource=new o.constructor(r({},o.options,{page:e.allPages?0:o.page(),filter:o.filter(),pageSize:e.allPages?o.total():o.pageSize()||o.total(),sort:o.sort(),group:o.group(),aggregate:o.aggregate()}));var n=o.data();if(n.length>0){if(e.hierarchy)for(var l=0;l<n.length;l++)!1!==n[l].expanded&&void 0!==n[l].expanded||(n[l].expanded=!0);this.dataSource._data=n;var a=this.dataSource.transport;o._isServerGrouped()&&a.options&&a.options.data&&(a.options.data=null)}}else this.dataSource=t.data.DataSource.create(o)},_hierarchy:function(){var e=this.options.hierarchy,t=this.dataSource;if(e&&t.level){e={itemLevel:function(e){return t.level(e)}};for(var o,r=t.view(),n=0,l=0;l<r.length;l++)(o=t.level(r[l]))>n&&(n=o);e.depth=n+1}else e=!1;return{hierarchy:e}},workbook:function(){return e.Deferred(function(e){this.dataSource.fetch().then(function(){var t=new o(r({},this.options,this._hierarchy(),{data:this.dataSource.view(),groups:this.dataSource.group(),aggregates:this.dataSource.aggregates()})).workbook();e.resolve(t,this.dataSource.view())}.bind(this))}.bind(this)).promise()}})}(kendo.jQuery,kendo),function(e,t){t.ExcelMixin={extend:function(t){t.events.push("excelExport"),t.options.excel=e.extend(t.options.excel,this.options),t.saveAsExcel=this.saveAsExcel},options:{proxyURL:"",allPages:!1,filterable:!1,fileName:"Export.xlsx",collapsible:!1},saveAsExcel:function(){var e=this.options.excel||{};new t.ExcelExporter({columns:this.columns,dataSource:this.dataSource,allPages:e.allPages,filterable:e.filterable,hierarchy:e.hierarchy,collapsible:e.collapsible}).workbook().then(function(o,r){if(!this.trigger("excelExport",{workbook:o,data:r})){var n=new t.ooxml.Workbook(o);n.options||(n.options={}),n.options.skipCustomHeight=!0,n.toDataURLAsync().then((function(r){t.saveAs({dataURI:r,fileName:o.fileName||e.fileName,proxyURL:e.proxyURL,forceProxy:e.forceProxy})}))}}.bind(this))}}}(kendo.jQuery,kendo);var __meta__={id:"excel",name:"Excel export",category:"framework",advanced:!0,mixin:!0,depends:["data","ooxml"]};
//# sourceMappingURL=kendo.excel.js.map