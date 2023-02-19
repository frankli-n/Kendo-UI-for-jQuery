/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.draganddrop.js";var __meta__={id:"reorderable",name:"Reorderable",category:"framework",depends:["core","draganddrop"],advanced:!0};!function(e,r){var a=window.kendo,n=a._outerWidth,t=a._outerHeight,d=a.getOffset,o=a.ui.Widget,i="change",g=o.extend({init:function(e,r){var g,l=this,s=a.guid()+"-reorderable";o.fn.init.call(l,e,r),e=l.element.addClass("k-reorderable"),r=l.options,l.draggable=g=r.draggable||new a.ui.Draggable(e,{group:s,autoScroll:!0,filter:r.filter,hint:r.hint}),l.options.dropFilter||(l.options.dropFilter=g.options.filter),l.reorderDropCue=l.options.reorderDropCue,e.find(r.dropFilter).kendoDropTarget({group:g.options.group,dragenter:function(e){var a=l._externalDraggable(e);if(l._draggable||a){a&&l._handleExternalDraggable(a);var o,i=this.element,g=!!l._isPartOfSortable(l._draggable)&&(!l._dropTargetAllowed(i)||l._isLastDraggable());if(l.toggleHintClass(e.draggable.hint,g),!g){var s={top:(o=d(i)).top,left:o.left},_="horizontal"===r.orientation;!r.smartPosition||r.inSameContainer&&!r.inSameContainer({source:i,target:l._draggable,sourceIndex:l._index(i),targetIndex:l._index(l._draggable)})?l._dropTarget=i:l._index(i)>l._index(l._draggable)&&r.smartPosition&&(s[_?"left":"top"]+=_?n(i):t(i)),l.reorderDropCue.css({height:t(i),top:s.top,left:s.left,zIndex:19e3}).appendTo(document.body),r.positionDropCue&&r.positionDropCue(l.reorderDropCue,i)}}},dragleave:function(e){l.toggleHintClass(e.draggable.hint,!0),l.reorderDropCue.remove(),l._dropTarget=null},drop:function(){if(l._dropTarget=null,l._draggable){var e=this.element,r=l._draggable,a=l._index(e),n="horizontal"===l.options.orientation?d(l.reorderDropCue).left>d(e).left:d(l.reorderDropCue).top>d(e).top;a=n?a+1:a,l._dropTargetAllowed(e)&&!l._isLastDraggable()&&l._index(r)!==a&&l.trigger(i,{element:l._draggable,target:e,oldIndex:l._index(r),newIndex:l._index(e),position:n?"after":"before"}),l.reorderDropCue&&l.reorderDropCue.remove()}}}),g.bind(["dragcancel","dragend","dragstart","drag"],{dragcancel:l._dragcancel.bind(l),dragend:l._dragend.bind(l),dragstart:l._dragstart.bind(l),drag:l._drag.bind(l)})},options:{name:"Reorderable",filter:"*",orientation:"horizontal",deniedIcon:"k-i-cancel",allowIcon:"k-i-plus",reorderDropCue:e('<div class="k-reorder-cue"></div></div>'),smartPosition:!0},events:[i],toggleHintClass:function(r,a){var n=this.options;r=e(r),a?r.find(".k-drag-status").removeClass(n.allowIcon).addClass(n.deniedIcon):r.find(".k-drag-status").removeClass(n.deniedIcon).addClass(n.allowIcon)},_handleExternalDraggable:function(e){var r=this,a=r.options.dropFilter.trimStart();a&&">"==a[0]&&(a=a.substring(1)),r._dragcancelHandler=r._dragcancel.bind(r),r._dragendHandler=r._dragend.bind(r),r._dragstartHandler=r._dragstart.bind(r),r._dragHandler=r._drag.bind(r),r._draggable=e.currentTarget.closest(a),r._draggableInstance=e,r._elements=r.element.find(r.options.dropFilter),e.bind(["dragcancel","dragend","dragstart","drag"],{dragcancel:r._dragcancelHandler,dragend:r._dragendHandler,dragstart:r._dragstartHandler,drag:r._dragHandler})},_dragcancel:function(){var e=this;e._draggableInstance&&(e._dragcancelHandler||e._dragendHandler||e._dragstartHandler||e._dragHandler)&&e._draggableInstance.unbind({dragcancel:e._dragcancelHandler,dragend:e._dragendHandler,dragstart:e._dragstartHandler,drag:e._dragHandler}),e.reorderDropCue&&e.reorderDropCue.remove(),e._draggable=null,e._elements=null},_dragend:function(){var e=this;e._draggableInstance&&(e._dragcancelHandler||e._dragendHandler||e._dragstartHandler||e._dragHandler)&&e._draggableInstance.unbind({dragcancel:e._dragcancelHandler,dragend:e._dragendHandler,dragstart:e._dragstartHandler,drag:e._dragHandler}),e.reorderDropCue&&e.reorderDropCue.remove(),e._draggable=null,e._elements=null},_dragstart:function(r){var a=this,n=e(r.currentTarget),t=a.options.dropFilter.trimStart();t&&">"==t[0]&&(t=t.substring(1)),a._draggable=n.is(t)?n:n.closest(t),a._elements=a.element.find(a.options.dropFilter)},_drag:function(r){var a,o,i,g,l=this,s={},_=l.options.dropFilter.trimStart();if(_&&">"==_[0]&&(_=_.substring(1)),g=e(r.currentTarget).closest(_),!(!l._dropTarget||l.options.smartPosition&&r.sender.hint.find(".k-drag-status").hasClass("k-i-cancel"))){if(o=(a=l._index(l._dropTarget))>(o=l._index(g))?o+1:o,"horizontal"===l.options.orientation){var p=d(l._dropTarget).left,c=n(l._dropTarget);r.pageX>p+c/2?(s.left=p+c,a+=1):s.left=p}else{var u=d(l._dropTarget).top,b=t(l._dropTarget);r.pageY>u+b/2?(s.top=u+b,a+=1):s.top=u}l.reorderDropCue.css(s),l.options.positionDropCue&&l.options.positionDropCue(l.reorderDropCue,l._dropTarget),l._isPartOfSortable(g)&&(i=o===a||l.options.dragOverContainers&&!l.options.dragOverContainers(o,a),l.toggleHintClass(r.sender.hint,i))}},_isPartOfSortable:function(e){return this._elements.index(e)>=0},_externalDraggable:function(e){var r=this.options;return!this._draggable&&r.externalDraggable?r.externalDraggable(e):null},_isLastDraggable:function(){var e,r=this.options.inSameContainer,a=this._draggable[0],n=this._elements.get(),t=!1;if(!r)return!1;for(;!t&&n.length>0;)t=a!==(e=n.pop())&&r({source:a,target:e,sourceIndex:this._index(a),targetIndex:this._index(e)});return!t},_dropTargetAllowed:function(e){var r=this.options.inSameContainer,a=this.options.dragOverContainers,n=this._draggable;return n[0]!==e[0]&&(!r||!a||(!!r({source:n,target:e,sourceIndex:this._index(n),targetIndex:this._index(e)})||a(this._index(n),this._index(e))))},_index:function(e){return this._elements.index(e)},destroy:function(){var r=this;o.fn.destroy.call(r),r.element.find(r.options.dropFilter).each((function(){var r=e(this);r.data("kendoDropTarget")&&r.data("kendoDropTarget").destroy()})),r.draggable&&(r.draggable.destroy(),r.draggable.element=r.draggable=null),r.reorderDropCue.remove(),r.elements=r.reorderDropCue=r._elements=r._draggable=null}});a.ui.plugin(g)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.reorderable.js.map
