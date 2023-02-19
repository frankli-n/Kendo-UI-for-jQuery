/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.popup.js";var __meta__={id:"ActionSheet",name:"ActionSheet",category:"web",description:"The ActionSheet widget displays a set of choices related to a task the user initiates.",depends:["core","popup"]};!function(e,t){var o=window.kendo,n=o.htmlEncode,i=o.ui.Widget,s=o.ui,a=".kendoActionSheet",p=s.Popup,r=p.TabKeyTrap,c=e(document.documentElement),d="k-hidden",l="actionsheet-header",h=e.extend,m=o.template,u="click",f=/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,_=({title:e})=>`<span id="${l}" class="k-actionsheet-header">${e}</span>`,k=({disabled:e,icon:t,text:o,description:i})=>`<span role="button" tabindex="0" class="k-actionsheet-item ${e?"k-disabled":""}"><span class="k-actionsheet-action">${t||""}<span class="k-actionsheet-item-text"><span class="k-actionsheet-item-title">${n(o)}</span>${i?'<span class="k-actionsheet-item-description">'+n(i)+"</span>":""}</span></span></span>`,w={text:"",description:"",iconClass:"",iconSize:0,iconColor:"",click:e.noop,group:"top",disabled:!1};var v=i.extend({init:function(e,t){var n=this;i.fn.init.call(n,e,t),n._hasItems=t.items&&t.items.length,n._mapItems(),n._wrapper(),n._popup(),n._header(),n._items(),n._footer(),n._tabKeyTrap=new r(n.wrapper),n.downEvent=o.applyEventMap("down",o.guid()),n._mousedownProxy=n._mousedown.bind(n),n.wrapper.on("keydown"+a,n,n._keydown.bind(n))},events:["open","close"],options:{name:"ActionSheet",title:"",items:[],popup:null},_mapItems:function(){var e=this;e._hasItems&&(e.options.items=e.options.items.map(b))},_wrapper:function(){var t,o=this.element;o.addClass("k-actionsheet k-actionsheet-jq k-actionsheet-bottom k-popup"),this.wrapper=t=o.wrap("<div class='k-actionsheet-container k-hidden'></div>").parent(),t.prepend(e("<div></div>").addClass("k-overlay")),o.attr({role:"dialog","aria-modal":!0,"aria-labelledby":l})},_popup:function(){var e=this,t=e.options;e.popup=new p(e.element,h(t.popup,t,{name:"Popup",isRtl:o.support.isRtl(t.anchor),omitOriginOffsets:!0,appendTo:e.wrapper,modal:!0,animation:!1,anchor:e.wrapper})),e.popup.bind("activate",e._openHandler.bind(e))},_header:function(){var e=this.options;e.title&&this.element.append(m(_)(e))},_items:function(){this._hasItems&&this._createItems(g)},_createItems:function(t){var o,n,i,s,p,r,c,d,l=this,_=l.options.items.filter(t),w=e("<div class='k-actionsheet-items' role='group'></div>");if(_.length)for(l.element.append(w),i=m(k),o=0;o<_.length;o++)n=_[o],r=n,c=void 0,d=void 0,c=e("<span></span>"),d={},p=r.iconClass?(c.addClass(r.iconClass+" k-actionsheet-item-icon"),r.iconColor&&f.test(r.iconColor)?d.color=r.iconColor:r.iconColor&&c.addClass("k-text-"+r.iconColor),r.iconSize&&(d.fontSize=r.iconSize),Object.keys(d).length&&c.css(d),c):"",s=e(i(h({},n,{icon:p&&p.prop("outerHTML")}))),w.append(s),n.click&&s.on(u+a,n.click.bind(l))},_footer:function(){var e=this;e._hasItems&&(e.element.append('<hr class="k-hr" />'),e._createItems(y))},destroy:function(){var e=this;i.fn.destroy.call(e),e.element.off(a),e.wrapper.off(a),e.popup.destroy()},open:function(){var e=this;e.wrapper.removeClass(d),e._elementHeight=e._elementHeight||e.element.outerHeight(),e.popup.open((e.wrapper.outerWidth()-e.element.outerWidth())/2,e.wrapper.outerHeight()-e._elementHeight),c.off(e.downEvent,e._mousedownProxy).on(e.downEvent,e._mousedownProxy),e._tabKeyTrap.trap()},close:function(){var e=this;e.popup.close(),e.wrapper.addClass(d),c.off(e.downEvent,e._mousedownProxy)},_keydown:function(t){var n=o.keys,i=t.keyCode,s=e(t.target);i==n.ESC?(t.stopPropagation(),this.close()):s.hasClass("k-actionsheet-item ")&&i===n.ENTER&&s.trigger(u)},_openHandler:function(){this.element.find(".k-actionsheet-item").eq(0).trigger("focus")},_mousedown:function(t){(function(t,o){return!(!t||!o)&&(t===o||e.contains(t,o))})(this.element[0],o.eventTarget(t))||this.close()}});function g(e){return"top"===e.group}function y(e){return"top"!==e.group}function b(e){return h({},w,e)}s.plugin(v)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.actionsheet.js.map
