/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.calendar.js";import"./kendo.popup.js";import"./kendo.dateinput.js";import"./kendo.html.button.js";import"./kendo.label.js";var __meta__={id:"datepicker",name:"DatePicker",category:"web",description:"The DatePicker widget allows the user to select a date from a calendar or by direct input.",depends:["calendar","popup","html.button","label"]};!function(e,t){var a=window.kendo,n=a.ui,l=a.html,i=n.Widget,o=a.parseDate,r=a.keys,s=a.support,d=a.template,u=a._activeElement,p="<div />",c=".kendoDatePicker",m="click"+c,_=s.mouseAndTouchPresent?a.applyEventMap("up",c.slice(1)):m,f="open",v="close",b="change",h="disabled",g="readonly",y="k-focus",w="k-selected",k="k-disabled",D="mousedown"+c,I="navigate",x="id",C="month",A="aria-disabled",T="aria-readonly",V="aria-expanded",P="aria-hidden",O="aria-activedescendant",E=a.calendar,H=E.isInRange,R=E.restrictValue,z=E.isEqualDatePart,L=e.extend,F=Date;function M(t){var a=t.parseFormats,n=t.format;E.normalize(t),(a=Array.isArray(a)?a:[a]).length||a.push("yyyy-MM-dd"),-1===e.inArray(n,a)&&a.splice(0,0,t.format),t.parseFormats=a}function N(e){e.preventDefault()}var j=function(t){var l,i=this,o=document.body,r=e(p).attr(P,"true").addClass("k-calendar-container");i.options=t=t||{},l=t.id,t.omitPopup?r=t.dateDiv:(r.appendTo(o),i.popup=new n.Popup(r,L(t.popup,t,{name:"Popup",isRtl:a.support.isRtl(t.anchor)}))),l&&(l+="_dateview",r.attr(x,l),i._dateViewID=l),i.div=r,i.value(t.value)};j.prototype={_calendar:function(){var t,l=this,i=l.calendar,o=l.options;i||(t=e(p).attr(x,a.guid()).appendTo(o.omitPopup?o.dateDiv:l.popup.element).on(D,N).on(m,"td:has(.k-link)",l._click.bind(l)),l.calendar=i=new n.Calendar(t,{componentType:o.componentType,size:o.size,messages:o.messages}),l._setOptions(o),t.addClass(a.getValidCssClass("k-calendar-","size",o.size)),i.navigate(l._value||l._current,o.start),l.value(l._value))},_setOptions:function(e){this.calendar.setOptions({focusOnNav:!1,change:e.change,culture:e.culture,dates:e.dates,depth:e.depth,footer:e.footer,format:e.format,max:e.max,min:e.min,month:e.month,weekNumber:e.weekNumber,start:e.start,messages:e.messages,disableDates:e.disableDates})},setOptions:function(e){var t=this,a=t.options,n=e.disableDates;n&&(e.disableDates=E.disabled(n)),t.options=L(a,e,{change:a.change,close:a.close,open:a.open}),t.calendar&&t._setOptions(t.options)},destroy:function(){this.popup&&this.popup.destroy()},open:function(){var e,t=this;t._calendar(),e=t.popup._hovered,t.popup._hovered=!0,t.popup.open(),setTimeout((function(){t.popup._hovered=e}),1)},close:function(){this.popup&&this.popup.close()},min:function(e){this._option("min",e)},max:function(e){this._option("max",e)},toggle:function(){this[this.popup.visible()?v:f]()},move:function(e){var t=this,a=e.keyCode,n=t.calendar,l=e.ctrlKey&&a==r.DOWN||a==r.ENTER,i=!1;if(e.altKey)a==r.DOWN?(t.open(),e.preventDefault(),i=!0):a==r.UP&&(t.close(),e.preventDefault(),i=!0);else if(t.popup&&t.popup.visible()){if(a==r.ESC||l&&n._cell.hasClass(w))return t.close(),e.preventDefault(),!0;a!=r.SPACEBAR&&(t._current=n._move(e)),i=!0}return i},current:function(e){this._current=e,this.calendar&&this.calendar._focus(e)},value:function(e){var t=this,a=t.calendar,n=t.options,l=n.disableDates;l&&l(e)&&(e=null),t._value=e,t._current=new F(+R(e,n.min,n.max)),a&&a.value(e)},_click:function(e){-1!==e.currentTarget.className.indexOf(w)&&(this.calendar.trigger("change"),this.close())},_option:function(e,t){var a=this.calendar;this.options[e]=t,a&&a[e](t)}},j.normalize=M,a.DateView=j;var S=i.extend({init:function(n,l){var r,s,d=this;i.fn.init.call(d,n,l),n=d.element,(l=d.options).disableDates=a.calendar.disabled(l.disableDates),l.min=o(n.attr("min"))||o(l.min),l.max=o(n.attr("max"))||o(l.max),d.options.readonly=l.readonly!==t?l.readonly:Boolean(d.element.attr("readonly")),d.options.enable=l.enable!==t?l.enable:!Boolean(n.is("[disabled]")||e(n).parents("fieldset").is(":disabled")),M(l),d._initialOptions=L({},l),d._wrapper(),d.dateView=new j(L({},l,{id:n.attr(x),anchor:d.wrapper,change:function(){d._change(this.value()),d.close()},close:function(e){d.trigger(v)?e.preventDefault():(n.attr(V,!1),s.attr(P,!0),setTimeout((function(){n.removeAttr("aria-activedescendant")})))},open:function(e){var t,a=d.options;d.trigger(f)?e.preventDefault():(d.element.val()!==d._oldText&&(t=o(n.val(),a.parseFormats,a.culture),d.dateView[t?"current":"value"](t)),n.attr(V,!0),s.attr(P,!1),d._updateARIA(t))}})),s=d.dateView.div,d._icon();try{n[0].setAttribute("type","text")}catch(e){n[0].type="text"}n.addClass("k-input-inner").attr({role:"combobox","aria-expanded":!1,"aria-haspopup":"grid","aria-controls":d.dateView._dateViewID,autocomplete:"off"}),d._reset(),d._template(),!d.options.enable?d.enable(!1):d.readonly(n.is("[readonly]")),r=o(l.value||d.element.val(),l.parseFormats,l.culture),d._createDateInput(l),d._old=d._update(r||d.element.val()),d._oldText=n.val(),d._applyCssClasses(),l.label&&d._label(),a.notify(d)},events:[f,v,b],options:{name:"DatePicker",value:null,footer:"",format:"",culture:"",parseFormats:[],min:new Date(1900,0,1),max:new Date(2099,11,31),start:C,depth:C,animation:{},month:{},dates:[],disableDates:null,ARIATemplate:({valueType:e,text:t})=>`Current focused ${e} is ${t}`,dateInput:!1,weekNumber:!1,messages:{weekColumnHeader:""},componentType:"classic",size:"medium",fillMode:"solid",rounded:"medium",label:null},setOptions:function(e){var n=this,l=n._value;i.fn.setOptions.call(n,e),(e=n.options).min=o(e.min),e.max=o(e.max),M(e),n._dateIcon.off(c),n._dateIcon.remove(),n.dateView.setOptions(e),n._icon(),n._editable({readonly:e.readonly===t?n.options.readonly:e.readonly,disable:!(e.enable===t?n.options.enable:e.enable)}),n._createDateInput(e),n._dateInput||n.element.val(a.toString(l,e.format,e.culture)),l&&n._updateARIA(l),e.label&&n._inputLabel?n.label.setOptions(e.label):!1===e.label?(n.label._unwrapFloating(),n._inputLabel.remove(),delete n._inputLabel):e.label&&n._label()},_editable:function(e){var t=this,a=t._dateIcon.off(c),n=t.element.off(c),l=t.wrapper.off(c),i=e.readonly,o=e.disable;i||o?(l.addClass(o?k:"").removeClass(o?"":k),n.attr(h,o).attr(g,i).attr(A,o).attr(T,i)):(l.removeClass(k).on("mouseenter.kendoDatePicker mouseleave.kendoDatePicker",t._toggleHover),n&&n.length&&(n[0].removeAttribute(h),n[0].removeAttribute(g)),n.attr(A,!1).attr(T,!1).on("keydown"+c,t._keydown.bind(t)).on("focusout"+c,t._blur.bind(t)).on("focus"+c,(function(){t.wrapper.addClass(y)})),a.on(_,t._click.bind(t)).on(D,N))},readonly:function(e){this._editable({readonly:e===t||e,disable:!1}),this._dateInput&&this._dateInput._editable({readonly:e===t||e,disable:!1}),this.label&&this.label.floatingLabel&&this.label.floatingLabel.readonly(e===t||e)},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t||e)}),this._dateInput&&this._dateInput._editable({readonly:!1,disable:!(e=e===t||e)}),this.label&&this.label.floatingLabel&&this.label.floatingLabel.enable(e=e===t||e)},_label:function(){var t=this,n=t.options,l=e.isPlainObject(n.label)?n.label:{content:n.label};t._dateInput&&(l.floatCheck=()=>(t._dateInput._toggleDateMask(!0),!t.value()&&!t._dateInput._hasDateInput()&&document.activeElement!==t.element[0]&&(t._dateInput._toggleDateMask(!1),!0))),t.label=new a.ui.Label(null,e.extend({},l,{widget:t})),t._inputLabel=t.label.element},destroy:function(){var e=this;e.label&&e.label.destroy(),i.fn.destroy.call(e),e.dateView.calendar&&e._navigateCalendarHandler&&(e.dateView.calendar.unbind(I,e._navigateCalendarHandler),e._navigateCalendarHandler=null),e.dateView.destroy(),e.element.off(c),e._dateIcon.off(c),e._form&&e._form.off("reset",e._resetHandler)},open:function(){this.dateView.open(),this._navigateCalendar()},close:function(){this.dateView.close()},min:function(e){return this._option("min",e)},max:function(e){return this._option("max",e)},value:function(e){var a=this;if(e===t)return a._value;a._old=a._update(e),null===a._old&&(a._dateInput?a._dateInput.value(a._old):a.element.val("")),a._oldText=a.element.val(),a.label&&a.label.floatingLabel&&a.label.floatingLabel.refresh()},_toggleHover:function(t){e(t.currentTarget).toggleClass("k-hover","mouseenter"===t.type)},_blur:function(){var e=this,t=e.element.val();e.close(),t!==e._oldText&&(e._change(t),t||e.dateView.current(a.calendar.getToday())),e.wrapper.removeClass(y)},_click:function(e){var t=this;t.dateView.toggle(),t._navigateCalendar(),t._focusElement(e.type)},_focusElement:function(e){var t=this.element;s.touch&&(!s.mouseAndTouchPresent||(e||"").match(/touch/i))||t[0]===u()||t.trigger("focus")},_change:function(e){var t,n=this,l=n.element.val();e=n._update(e);var i=(t=!a.calendar.isEqualDate(n._old,e))&&!n._typing,o=l!==n.element.val();(i||o)&&n.element.trigger(b),t&&(n._old=e,n._oldText=n.element.val(),n.trigger(b)),n._typing=!1},_keydown:function(e){var t=this,a=t.dateView,n=t.element.val(),l=!1;a.popup.visible()||e.keyCode!=r.ENTER||n===t._oldText?(l=a.move(e),t._updateARIA(a._current),l?t._dateInput&&e.stopImmediatePropagation&&e.stopImmediatePropagation():t._typing=!0):t._change(n)},_icon:function(){var t,a=this,n=a.element,i=a.options;(t=n.next("button.k-input-button"))[0]||(t=e(l.renderButton('<button aria-label="select" tabindex="-1" class="k-input-button k-button k-icon-button"></button>',{icon:"calendar",size:i.size,fillMode:i.fillMode,shape:"none",rounded:"none"})).insertAfter(n)),a._dateIcon=t.attr({role:"button"})},_setCalendarAttribute:function(){var e=this;setTimeout((function(){e.element.attr(O,e.dateView.calendar._table.attr(O))}))},_navigateCalendar:function(){var e=this;e._navigateCalendarHandler||(e._navigateCalendarHandler=e._setCalendarAttribute.bind(e)),e.dateView.calendar&&e.dateView.calendar.unbind(I,e._navigateCalendarHandler).bind(I,e._navigateCalendarHandler)},_option:function(e,a){var n=this.options;if(a===t)return n[e];(a=o(a,n.parseFormats,n.culture))&&(n[e]=new F(+a),this.dateView[e](a))},_update:function(e){var t,n=this,l=n.options,i=l.min,r=l.max,s=n._value,d=o(e,l.parseFormats,l.culture),u=null===d&&null===s||d instanceof Date&&s instanceof Date;return l.disableDates(d)&&(d=null,n._old||n.element.val()||(e=null)),+d==+s&&u?((t=a.toString(d,l.format,l.culture))===e||n._dateInput&&!d||n.element.val(null===d?e:t),d):(null!==d&&z(d,i)?d=R(d,i,r):H(d,i,r)||(d=null),n._value=d,n.dateView.value(d),n._dateInput&&d?n._dateInput.value(d||e):n.element.val(a.toString(d||e,l.format,l.culture)),n._updateARIA(d),d)},_wrapper:function(){var e,t=this.element;(e=t.parents(".k-datepicker"))[0]||(e=t.wrap("<span />").parent()),e[0].style.cssText=t[0].style.cssText,t.css({height:t[0].style.height}),this.wrapper=e.addClass("k-datepicker k-input").addClass(t[0].className).removeClass("input-validation-error")},_reset:function(){var t=this,n=t.element,l=n.attr("form"),i=t.options,o=i.disableDates,r=i.parseFormats.length?i.parseFormats:null,s=t._initialOptions.value,d=l?e("#"+l):n.closest("form"),u=n[0].defaultValue;s&&o&&o(s)&&(s=null),u&&a.parseDate(u,r,i.culture)||!s||n.attr("value",a.toString(s,i.format,i.culture)),d[0]&&(t._resetHandler=function(){t.value(s||n[0].defaultValue),t.max(t._initialOptions.max),t.min(t._initialOptions.min)},t._form=d.on("reset",t._resetHandler))},_template:function(){this._ariaTemplate=d(this.options.ARIATemplate).bind(this)},_createDateInput:function(e){this._dateInput&&(this._dateInput.destroy(),this._dateInput=null),e.dateInput&&(this._dateInput=new n.DateInput(this.element,{culture:e.culture,format:e.format,size:e.size,fillMode:e.fillMode,rounded:e.rounded,min:e.min,max:e.max}))},_updateARIA:function(e){var t=this,a=t.dateView.calendar;t.element&&t.element.length&&t.element[0].removeAttribute(O),a&&t.element.attr(O,a._updateAria(t._ariaTemplate,e))}});a.cssProperties.registerPrefix("DatePicker","k-input-"),a.cssProperties.registerValues("DatePicker",[{prop:"rounded",values:a.cssProperties.roundedValues.concat([["full","full"]])}]),n.plugin(S)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.datepicker.js.map
