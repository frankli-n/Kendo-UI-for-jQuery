/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.draganddrop.js";var __meta__={id:"treeview.draganddrop",name:"Hierarchical Drag & Drop",category:"framework",depends:["core","draganddrop"],advanced:!0};!function(t,i){var o=window.kendo,e=o.ui,s=t.extend,r="visibility",n="k-hover";e.HierarchicalDragAndDrop=o.Class.extend({init:function(i,r){this.element=i,this.hovered=i,this.options=s({dragstart:t.noop,drag:t.noop,drop:t.noop,dragend:t.noop},r),this._draggable=new e.Draggable(i,{ignore:"input,a:not(.k-in),textarea,.k-multiselect-wrap,select,button,a.k-button>.k-icon,button.k-button>.k-icon,span.k-icon.k-i-arrow-60-right,span.k-icon.k-i-arrow-45-down-right",filter:r.filter,autoScroll:r.autoScroll,cursorOffset:{left:10,top:o.support.mobileOS?-40/o.support.zoomLevel():10},hint:this._hint.bind(this),dragstart:this.dragstart.bind(this),dragcancel:this.dragcancel.bind(this),drag:this.drag.bind(this),dragend:this.dragend.bind(this),$angular:r.$angular,holdToDrag:r.holdToDrag})},_hint:function(t){return"<div class='k-drag-clue'><span class='k-icon k-drag-status'></span>"+this.options.hintText(t)+"</div>"},_removeTouchHover:function(){o.support.touch&&this.hovered&&(this.hovered.find(".k-hover").removeClass(n),this.hovered=!1)},_hintStatus:function(t){var i=this._draggable.hint.find(".k-drag-status")[0];if(!t)return o.trim(i.className.replace(/(p|k)-(icon|drag-status)/g,""));i.className="k-icon k-drag-status "+t},dragstart:function(i){this.source=i.currentTarget.closest(this.options.itemSelector),this.options.dragstart(this.source)&&i.preventDefault(),this.options.reorderable?this.dropHint=t("<div class='k-drop-hint k-drop-hint-h'><div class='k-drop-hint-start'></div><div class='k-drop-hint-line'></div></div>").css(r,"hidden").appendTo(this.element):this.dropHint=t()},drag:function(i){var e,s,a,d,h,l,c,p,g,v,u,k=this.options,m=this.source,_=this.dropTarget=t(o.eventTarget(i)),f=_.closest(k.allowedContainers);f.length?m[0]==_[0]||k.contains(m[0],_[0])?u="k-i-cancel":(u="k-i-insert-middle",(e=(g=k.itemFromTarget(_)).item).length?(this._removeTouchHover(),s=o._outerHeight(e),d=g.content,k.reorderable?(h=s/(d.length>0?4:2),a=o.getOffset(e).top,l=i.y.location<a+h,c=a+s-h<i.y.location,p=d.length&&!l&&!c):(p=!0,l=!1,c=!1),this.hovered=!!p&&f,this.dropHint.css(r,p?"hidden":"visible"),this._lastHover&&this._lastHover[0]!=d[0]&&this._lastHover.removeClass(n),this._lastHover=d.toggleClass(n,p),p?u="k-i-plus":((v=e.position()).top+=l?0:s,this.dropHint.css(v)[l?"prependTo":"appendTo"](k.dropHintContainer(e)),l&&g.first&&(u="k-i-insert-up"),c&&g.last&&(u="k-i-insert-down"))):_[0]!=this.dropHint[0]&&(this._lastHover&&this._lastHover.removeClass(n),u=t.contains(this.element[0],f[0])?"k-i-cancel":"k-i-plus")):(u="k-i-cancel",this._removeTouchHover()),this.options.drag({originalEvent:i.originalEvent,source:m,target:_,pageY:i.y.location,pageX:i.x.location,status:u.substring(2),setStatus:function(t){u=t}}),0!==u.indexOf("k-i-insert")&&this.dropHint.css(r,"hidden"),this._hintStatus(u)},dragcancel:function(){this.dropHint.remove()},dragend:function(t){var i,o,e,s="over",a=this.source,d=this.dropHint,h=this.dropTarget;"visible"==d.css(r)?(s=this.options.dropPositionFrom(d),i=d.closest(this.options.itemSelector)):h&&((i=h.closest(this.options.itemSelector)).length||(i=h.closest(this.options.allowedContainers))),o={originalEvent:t.originalEvent,source:a[0],destination:i[0],valid:"k-i-cancel"!=this._hintStatus(),setValid:function(t){this.valid=t},dropTarget:h[0],position:s},e=this.options.drop(o),d.remove(),this._removeTouchHover(),this._lastHover&&this._lastHover.removeClass(n),o.valid&&!e?(this._draggable.dropped=!0,this.options.dragend({originalEvent:t.originalEvent,source:a,destination:i,position:s})):this._draggable.dropped=o.valid},destroy:function(){this._lastHover=this.hovered=null,this._draggable.destroy()}})}(window.kendo.jQuery);
//# sourceMappingURL=kendo.treeview.draganddrop.js.map
