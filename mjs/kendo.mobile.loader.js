/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";var __meta__={id:"mobile.loader",name:"Loader",category:"mobile",description:"Mobile Loader",depends:["core"],hidden:!0};!function(n,e){var t=window.kendo,i=t.mobile.ui,o=i.Widget,a=n.map(t.eventMap,(function(n){return n})).join(" ").split(" "),s=o.extend({init:function(e,t){var i=this,a=n('<div class="km-loader"><span class="km-loading km-spin"></span><span class="km-loading-left"></span><span class="km-loading-right"></span></div>');o.fn.init.call(i,a,t),i.container=e,i.captureEvents=!1,i._attachCapture(),a.append(i.options.loading).hide().appendTo(e)},options:{name:"Loader",loading:"<h1>Loading...</h1>",timeout:100},show:function(){var n=this;clearTimeout(n._loading),!1!==n.options.loading&&(n.captureEvents=!0,n._loading=setTimeout((function(){n.element.show()}),n.options.timeout))},hide:function(){this.captureEvents=!1,clearTimeout(this._loading),this.element.hide()},changeMessage:function(n){this.options.loading=n,this.element.find(">h1").html(n)},transition:function(){this.captureEvents=!0,this.container.css("pointer-events","none")},transitionDone:function(){this.captureEvents=!1,this.container.css("pointer-events","")},_attachCapture:function(){var n=this;function e(e){n.captureEvents&&e.preventDefault()}n.captureEvents=!1;for(var t=0;t<a.length;t++)n.container[0].addEventListener(a[t],e,!0)}});i.plugin(s)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.mobile.loader.js.map
