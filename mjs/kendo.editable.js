/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.checkbox.js";import"./kendo.dropdownlist.js";import"./kendo.datepicker.js";import"./kendo.numerictextbox.js";import"./kendo.validator.js";import"./kendo.binder.js";var __meta__={id:"editable",name:"Editable",category:"framework",depends:["checkbox","dropdownlist","datepicker","numerictextbox","validator","binder"],hidden:!0};!function(e,t){var i=window.kendo,a=i.ui,n=a.Widget,o=e.extend,r=i.isFunction,l=e.isPlainObject,d=e.inArray,u=/("|\%|'|\[|\]|\$|\.|\,|\:|\;|\+|\*|\&|\!|\#|\(|\)|<|>|\=|\?|\@|\^|\{|\}|\~|\/|\||`)/g,s="change",p="equalSet",c=["url","email","number","date","boolean"];function v(e){return(e=null!=e?e:"").type||i.type(e)||"string"}function f(e){var t,a,n=(e.model.fields||e.model)[e.field],o=v(n),u=n?n.validation:{},s=n?n.attributes:{},p=i.attr("type"),f=i.attr("bind"),m={id:e.id||e.field,name:e.field,title:e.title?e.title:e.field};for(t in u){if(a=u[t],d(t,c)>=0)m[p]=t;else if(!r(a)){var k=i.getCulture();if("number"==typeof a&&k.name.length){var b=k.numberFormat,x=a.toString().replace(".",b["."]);m[t]=x}else m[t]=l(a)?a.value||t:a}m[i.attr(t+"-msg")]=a.message,m.autocomplete="off"}for(var g in s)m[g]=s[g];return d(o,c)>=0&&(m[p]=o),m[f]=("boolean"===o?"checked:":"value:")+e.field,m}function m(e,t){var i=e.attr("id");return i&&(t.id=i,e.removeAttr("id")),t}var k=["AutoComplete","CheckBox","CheckBoxGroup","ColorGradient","ColorPicker","ColorPalette","ComboBox","DateInput","DatePicker","DateTimePicker","DropDownTree","Editor","FlatColorPicker","MaskedTextBox","MultiColumnComboBox","MultiSelect","NumericTextBox","RadioGroup","Rating","Slider","Switch","TimePicker","DropDownList","TextBox","TextArea","Captcha","Signature","TimeDurationPicker"],b={hidden:function(t,i){var a=f(i);e('<input type="hidden"/>').attr(a).appendTo(t)},number:function(t,a){var n=f(a);e('<input type="text"/>').attr(n).appendTo(t).kendoNumericTextBox({format:a.format}),e("<span "+i.attr("for")+'="'+a.field+'" class="k-invalid-msg k-hidden"/>').appendTo(t)},date:function(t,a){var n=f(a),o=a.format;o&&(o=i._extractFormat(o)),n[i.attr("format")]=o,e('<input type="text"/>').attr(n).appendTo(t).kendoDatePicker({format:a.format}),e("<span "+i.attr("for")+'="'+a.field+'" class="k-invalid-msg k-hidden"/>').appendTo(t)},string:function(t,i){var a=f(i);e('<input type="text"/>').attr(a).appendTo(t).kendoTextBox()},boolean:function(t,i){var a=f(i);h(e('<input type="checkbox" />').attr(a).kendoCheckBox().appendTo(t),t,i)},values:function(t,a){var n=f(a),o=i.stringify(function(e){var t,i,a,n,o,r;if(e&&e.length)for(r=[],t=0,i=e.length;t<i;t++)o=(a=e[t]).text||a.value||a,n=null==a.value?a.text||a:a.value,r[t]={text:o,value:n};return r}(a.values));e("<select "+i.attr("text-field")+'="text"'+i.attr("value-field")+'="value"'+i.attr("source")+"='"+(o?o.replace(/\'/g,"&apos;"):o)+"'"+i.attr("role")+'="dropdownlist"/>').attr(n).appendTo(t),e("<span "+i.attr("for")+'="'+a.field+'" class="k-invalid-msg  k-hidden"/>').appendTo(t)},kendoEditor:function(t,i){var a=f(i),n=i.editor,o="kendo"+n,r=i.editorOptions,l=function(e,t){if(e.length)return"DropDownTree"===e&&t&&t.checkboxes||"MultiSelect"===e?"<select />":"RadioGroup"===e||"CheckBoxGroup"===e?"<ul />":"Signature"===e?"<div></div>":"Editor"===e||"TextArea"===e?"<textarea />":"<input />"}(n,r);h(e(l).attr(a).appendTo(t)[o](r),t,i)}},x={number:function(t,i){var a=f(i);a=m(t,a),e('<input type="number"/>').attr(a).appendTo(t)},date:function(t,i){var a=f(i);a=m(t,a),e('<input type="date"/>').attr(a).appendTo(t)},string:function(t,i){var a=f(i);a=m(t,a),e('<input type="text" />').attr(a).appendTo(t)},boolean:function(t,i){var a=f(i);a=m(t,a),e('<input type="checkbox" />').attr(a).appendTo(t)},values:function(t,i){var a=f(i),n=i.values,o=e("<select />");for(var r in a=m(t,a),n)e('<option value="'+n[r].value+'">'+n[r].text+"</option>").appendTo(o);o.attr(a).appendTo(t)}};function g(e,t){var i,a,n=e&&e.validation||{};for(i in n)a=n[i],l(a)&&a.value&&(a=a.value),r(a)&&(t[i]=a)}function h(t,i,a){(a&&a.shouldRenderHidden||!1)&&(t.val(!0),i.append(e("<input type='hidden' name='"+a.field+"' value='false' data-skip='true' data-validate='false'/>")))}var y=n.extend({init:function(e,t){var i=this;t.target&&(t.$angular=t.target.options.$angular,t.target.pane&&(i._isMobile=!0)),n.fn.init.call(i,e,t),i._validateProxy=i._validate.bind(i),i.refresh()},events:[s],options:{name:"Editable",editors:b,mobileEditors:x,clearContainer:!0,validateOnBlur:!0,validationSummary:!1,errorTemplate:({message:e})=>`<div class="k-tooltip k-tooltip-error k-validator-tooltip"><span class="k-tooltip-icon k-icon k-i-warning"></span><span class="k-tooltip-content">${e}</span><span class="k-callout k-callout-n"></span></div>`,skipFocus:!1},editor:function(t,a){var n=this,r=n._isMobile?x:n.options.editors,d=l(t),s=d?t.field:t,p=n.options.model||{},c=d&&t.values?"values":v(a),f=d&&"string"==typeof t.editor&&"hidden"===t.editor,m=d&&!f&&t.editor,b=d&&-1!==e.inArray(t.editor,k),g=m?t.editor:r[f?"hidden":c],h=n.element.find("["+i.attr("container-for")+"="+s.replace(u,"\\$1")+"]");g=g||r.string,b?g=r.kendoEditor:m&&"string"==typeof t.editor&&(g=function(e){e.append(t.editor)}),g(h=h.length?h:n.element,o(!0,{},d?t:{field:s},{model:p}))},_validate:function(t){var a,n=this,o=t.value,r=n._validationEventInProgress,l={},d=i.attr("bind"),p=t.field.replace(u,"\\$1"),c=new RegExp("(value|checked)\\s*:\\s*"+p+"\\s*(,|$)");l[t.field]=t.value,(a=e(":input["+d+'*="'+p+'"]',n.element).filter("["+i.attr("validate")+"!='false']").filter((function(){return c.test(e(this).attr(d))}))).length>1&&(a=a.filter((function(){var t=e(this);return!t.is(":radio")||t.val()==o})));try{n._validationEventInProgress=!0,(!n.validatable.validateInput(a)||!r&&n.trigger(s,{values:l}))&&t.preventDefault()}finally{n._validationEventInProgress=!1}},end:function(){return this.validatable.validate()},destroy:function(){var e=this;e.angular("cleanup",(function(){return{elements:e.element}})),n.fn.destroy.call(e),e.options.model.unbind("set",e._validateProxy),e.options.model.unbind(p,e._validateProxy),i.unbind(e.element),e.validatable&&e.validatable.destroy(),i.destroy(e.element),e.element.removeData("kendoValidator"),e.element.is("["+i.attr("role")+"=editable]")&&e.element.removeAttr(i.attr("role"))},refresh:function(){var t,a,n,o,r,d,u=this,s=u.options.fields||[],c=u.options.clearContainer?u.element.empty():u.element,v=u.options.model||{},f={};for(Array.isArray(s)||(s=[s]),t=0,a=s.length;t<a;t++)n=s[t],o=l(n)?n.field:n,g(r=(v.fields||v)[o],f),u.editor(n,r);if(u.options.target&&u.angular("compile",(function(){return{elements:c,data:c.map((function(){return{dataItem:v}}))}})),!a)for(o in d=v.fields||v)g(d[o],f);!function(t){t.find(":input:not(:button, .k-combobox .k-input, .k-checkbox-list .k-checkbox, .k-radio-list .k-radio, ["+i.attr("role")+"=listbox], ["+i.attr("role")+"=upload], ["+i.attr("skip")+"], [type=file])").each((function(){var t=i.attr("bind"),a=this.getAttribute(t)||"",n="checkbox"===this.type||"radio"===this.type?"checked:":"value:",o=this.getAttribute("name")===y.antiForgeryTokenName,r=this.name;-1===a.indexOf(n)&&r&&!o&&(a+=(a.length?",":"")+n+r,e(this).attr(t,a))}))}(c),u.validatable&&u.validatable.destroy(),i.bind(c,u.options.model),u.options.validateOnBlur&&(u.options.model.unbind("set",u._validateProxy).bind("set",u._validateProxy),u.options.model.unbind(p,u._validateProxy).bind(p,u._validateProxy)),u.validatable=new i.ui.Validator(c,{validateOnBlur:u.options.validateOnBlur,validationSummary:u.options.validationSummary,errorTemplate:u.options.errorTemplate||undefined,rules:f}),u.options.skipFocus||c.find(":kendoFocusable").eq(0).trigger("focus")}});y.antiForgeryTokenName="__RequestVerificationToken",a.plugin(y)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.editable.js.map
