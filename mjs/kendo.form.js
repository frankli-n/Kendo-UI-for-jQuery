/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.editable.js";var __meta__={id:"form",name:"Form",category:"web",description:"The Form widget.",depends:["editable"],features:[{id:"form-dropdowns",name:"DropDowns",description:"Support for DropDown editors",depends:["autocomplete","combobox","multiselect","dropdowntree","multicolumncombobox"]},{id:"form-datepickers",name:"DatePickers",description:"Support for DatePicker editors",depends:["dateinput","datepicker","datetimepicker","timepicker"]},{id:"form-inputs",name:"Inputs",description:"Support for Input editors",depends:["numerictextbox","maskedtextbox","switch","rating","slider","colorpicker","radiogroup","checkboxgroup","textbox","textarea","checkbox"]},{id:"form-editor",name:"Editor",description:"Support for Editor editor",depends:["editor"]}]};!function(e,t){var i=window.kendo,a=i.ui,l=".kendoForm",o=a.Widget,n=e.extend,r=i.htmlEncode,d="validate",s="validateField",p="change",f="submit",u="clear",m="equalSet",c="group",b="aria-describedby",_="data-stop",g="data-role",v=".",h={form:"k-widget k-form",horizontal:"k-form-horizontal",vertical:"",field:"k-form-field",fieldsContainer:"k-form-fields-container",fieldWrap:"k-form-field-wrap",fieldError:"k-form-field-error",fieldHint:"k-form-hint",fieldset:"k-form-fieldset",layout:"k-form-layout",legend:"k-form-legend",label:"k-label k-form-label",emptyLabel:"k-form-label k-label-empty",optional:"k-label-optional",buttonsContainer:"k-form-buttons",buttonsEnd:"k-buttons-end",submit:"k-form-submit",clear:"k-form-clear",invalid:"k-invalid",hidden:"k-hidden"},y="horizontal",k="vertical",w=o.extend({init:function(e,t){var a=this;o.fn.init.call(a,e,t),a.options=i.deepExtend({},a.options,t),t&&t.formData&&(a.options.formData=t.formData),a._wrapper(),a._setFields(),a._setModel(),a._renderContainers(),a._renderButtons(),a._editable(),a._renderBoolLabels(),a._renderFieldsHints(),a._setEvents()},events:[s,d,p,f,u],options:{name:"Form",orientation:k,validatable:{validateOnBlur:!0,validationSummary:!1,errorTemplate:null},buttonsTemplate:null,messages:{submit:"Submit",clear:"Clear",optional:"(Optional)"},layout:"",grid:{},formData:{},items:[],formatLabel:null,focusFirst:!1},_noLabelfieldTemplate:({styles:e,colSpan:t,hidden:i,field:a})=>`<div class='${r(e.field)} ${t?`k-colspan-${r(t)}`:""} ${i?r(e.hidden):""}'><span class='${r(e.emptyLabel)}'></span><div class='k-form-field-wrap' data-container-for='${r(a)}'></div></div>`,_fieldTemplate:({styles:e,colSpan:t,hidden:i,field:a,label:l,id:o,optional:n})=>`<div class='${r(e.field)} ${t?`k-colspan-${r(t)}`:""} ${i?`${r(e.hidden)}`:""}'>`+(l&&!i?`<label class='${r(e.label)}' for='${r(o)}' id='${r(o)}-form-label'>`+(void 0!==l.encoded&&!1===l.encoded?l.text||l:r(l.text||l))+(l.optional?`<span class='${r(e.optional)}'>${r(n)}</span>`:"")+"</label>":"")+`<div class='k-form-field-wrap' data-container-for='${r(a)}'></div></div>`,_boolLabelTemplate:({styles:e,colSpan:t,hidden:i,field:a,label:l,id:o,optional:n})=>`<label class='k-checkbox-label' for='${r(o)}' id='${r(o)}-form-label'>`+(void 0!==l.encoded&&!1===l.encoded?l.text||l:r(l.text||l))+(l.optional?`<span class='${r(e.optional)}'>${r(n)}</span>`:"")+"</label>",_groupTemplate:({styles:e,colSpan:t,label:i})=>`<fieldset class='${r(e.fieldset)} ${t?`k-colspan-${r(t)}`:""}'><legend class='${r(e.legend)}'>${r(i.text||i)}</legend></fieldset>`,_buttonsTemplate:({styles:e,messages:t})=>`<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary ${r(e.submit)}' type='submit'><span class='k-button-text'>${r(t.submit)}</span></button><button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base ${r(e.clear)}'><span class='k-button-text'>${r(t.clear)}</span></button>`,_errorTemplate:({field:e,message:t})=>`<span class='k-form-error' id='${e}-form-error'><div>${t}</div></span>`,_hintTemplate:({id:e,message:t})=>`<div class='k-form-hint' id='${e}-form-hint'><span>${t}</span></div>`,_wrapper:function(){var e=this,t=e.options,i=w.styles,a=t.width,l=t.height;e.wrapper=e.element.addClass(i.form).addClass(i[t.orientation]),l&&e.wrapper.height(l),a&&e.wrapper.css("max-width",a),e.layoutWrapper=e._setupLayoutContainer(e.wrapper,{grid:t.grid,layout:t.layout})},_flattenFields:function(e){for(var t=[].concat(e),i=t.shift(),a=[],l=[].push;i;)i.items?l.apply(t,i.items):l.call(a,i),i=t.shift();return a},_defaultLabel:function(e){var t=this.options.formatLabel;if(e.length)return i.isFunction(t)?t(e):e.split(/(.*[a-z])(?=[A-Z])/).join(" ").trim()+":"},_formatLabel:function(t,i){return undefined!==(e.isPlainObject(i)?i.text:i)?i:this._defaultLabel(t)},_defaultFields:function(){var e,t=this.options,i=Object.keys(t.formData||{}),a=t.items||{},l=[];if(a.length)return a;for(var o=0;o<i.length;o+=1)e=i[o],l.push({field:e,id:e});return l},_setFields:function(){var e,t,l,o,r,d=this,s=d._flattenFields(d._defaultFields()),p=d.options.formData||{};for(var f in d._fields=[],s)t=p[(e=s[f]).field],l="string"==typeof e.editor?e.editor:i.type(t&&i.parseDate(t.toString())||t),o=i.isFunction(e.editor)?e.editor:a.Editable.fn.options.editors[l]?"":e.editor,d._isHidden(e.editor)||(e.label?r={"aria-labelledby":e.id||e.field+"-form-label"}:e.attributes&&e.attributes["aria-label"]||(r={"aria-label":e.name||e.field})),e=n(!0,{label:e.label||e.name||e.field,optionalText:d.options.messages.optional},e,{id:e.id||e.field,name:e.name||e.field,type:l,editor:o,attributes:r,isHidden:d._isHidden(e.editor)||d._isAntiForgeryToken(e.name||e.field)}),d._fields[f]=e},_setModel:function(){var e=this,t=e.options,a=t.formData||{};if(t.formData instanceof i.data.ObservableObject)e._model=a;else{var l=i.data.Model.define({fields:e._fields});e._model=new l(a)}},_editable:function(){var e=this,t=e.options,i=e.options.validatable;e._addEditableMvvmAttributes(),e.editable=e.wrapper.kendoEditable({model:e._model,fields:e._fields||[],validateOnBlur:i.validateOnBlur,validationSummary:i.validationSummary,errorTemplate:i.errorTemplate||e._errorTemplate,clearContainer:!1,skipFocus:!t.focusFirst,target:e}).getKendoEditable(),e.validator=e.editable.validatable,e._removeEditableMvvmAttributes()},_addEditableMvvmAttributes:function(){this.wrapper.attr(g,"editable")},_removeEditableMvvmAttributes:function(){this.wrapper.attr(_,!0).attr(g,"form")},_getItemTemplate:function(e){return e===c?this._groupTemplate:this._fieldTemplate},_isHidden:function(e){return"string"==typeof e&&"hidden"===e},_isAntiForgeryToken:function(e){return e===a.Editable.antiForgeryTokenName},_renderField:function(e){var t,a=this,l=w.styles,o=a.options.orientation===y,n=a._model.fields&&a._model.fields[e.field]&&a._model.fields[e.field].type,r=n&&"boolean"===n;return t=r&&o?a._noLabelfieldTemplate:a._fieldTemplate,i.template(t)({styles:l,id:e.id||e.field||"",field:e.field||"",label:r?null:a._formatLabel(e.field,e.label),colSpan:e.colSpan||"",optional:a.options.messages.optional,hidden:a._isHidden(e.editor)||a._isAntiForgeryToken(e.field)})},_toggleFieldErrorState:function(e,t){var i=e.closest(v+h.field);i.length&&i.toggleClass(h.fieldError,t)},_renderBoolLabels:function(){for(var e,t,a=this,l=w.styles,o=a._fields,n=0;n<o.length;n+=1)e=o[n],(t=a.wrapper.find("[name='"+e.name+"']:not([type='hidden'])"))&&e.label&&!e.isHidden&&"boolean"===e.type&&t.after(i.template(a._boolLabelTemplate)({styles:l,id:e.id||e.field||"",optional:a.options.messages.optional,label:a._formatLabel(e.field,e.label)}))},_renderFieldsHints:function(){for(var t,a,l,o,n,r=this,d=r._fields,s=0;s<d.length;s+=1)t=d[s],(l=r.wrapper.find("[name='"+t.name+"']"))&&t.hint&&!t.isHidden&&(n=e(i.template(r._hintTemplate)({message:t.hint||"",id:t.id})),r._associateHintContainer(l,n.attr("id")),(a=i.widgetInstance(l))&&(l=(o=a.element.next("label[for='"+a.element.attr("id")+"']")).length?o:a.wrapper),r.validator._errorsByName(t.name).length&&(n.toggleClass(h.hidden),i.removeAttribute(l,b,n.attr("id"))),n.insertAfter(l))},_associateHintContainer:function(e,t){var a=i.getWidgetFocusableElement(e);a&&t&&i.toggleAttribute(a,b,t)},_toggleHint:function(e,t){var i,a=e.closest(v+h.field);a.length&&(i=a.find(v+h.fieldHint)).length&&(i.toggleClass(h.hidden,t),this._associateHintContainer(e,i.attr("id")))},_renderGroup:function(t){var a,l,o,n=this,r=t.type;o=l=e(i.template(n._getItemTemplate(r))({styles:h,label:t.label||"",colSpan:t.colSpan})),o=n._setupLayoutContainer(l,{grid:t.grid,layout:t.layout})||l;for(var d=0;d<t.items.length;d+=1)a=t.items[d],o.append(n._renderField(a));return l},_renderContainers:function(){for(var e,t,i=this,a=i._defaultFields(),l="grid"===i.options.layout?i.layoutWrapper:i.wrapper,o=0;o<a.length;o+=1)t=(e=a[o]).type===c?i._renderGroup(e):i._renderField(e),l.append(t)},_renderButtons:function(){var t,a=this,l=a.wrapper,o=a.options,n=o.messages,r=w.styles,d=o.orientation===y,s=l.find(v+r.buttonsContainer);s.length||(s=e("<div />").addClass(r.buttonsContainer).addClass(d?r.buttonsEnd:"")),t=null!==o.buttonsTemplate?o.buttonsTemplate:a._buttonsTemplate,s.append(i.template(t)({styles:r,messages:n})),a.element.append(s)},_setupLayoutContainer:function(t,i){var a,l=i.layout,o=i.grid,n=[];return"string"==typeof l&&""!==l&&(a=e("<div></div>").appendTo(t).addClass(h.layout),n.push("k-d-"+l)),"grid"===l&&"object"==typeof o&&("number"==typeof o.cols?n.push("k-grid-cols-"+o.cols):"string"==typeof o.cols&&a.css("grid-template-columns",o.cols),"number"!=typeof o.gutter&&"string"!=typeof o.gutter||a.css("grid-gap",o.gutter)),a&&a.addClass(n.join(" ")),a},_setEvents:function(){var e=this;e.validator.bind("validateInput",e._validateField.bind(e)).bind(d,e._validate.bind(e)),e.wrapper.on(f+l,e._submit.bind(e)).on(u+l,e._clear.bind(e)).on("click.kendoForm"+l,v+h.clear,e._clear.bind(e)),e._changeHandler||(e._changeHandler=e._change.bind(e)),e._model.bind(p,e._changeHandler)},_validateField:function(e){var t=this,i={model:t._model.toJSON(),valid:e.valid,field:e.field,error:e.error,input:e.input};t._toggleFieldErrorState(i.input,!i.valid),t._toggleHint(i.input,!i.valid),t.trigger(s,i)&&e.preventDefault()},_validate:function(e){var t={model:this._model.toJSON(),valid:e.valid,errors:e.errors};this.trigger(d,t)},_change:function(e){var t=e.field,i={field:t,value:this._model[t]};this.trigger(p,i)},_submit:function(e){var t=this._model.toJSON();this.trigger(f,{model:t})&&e.preventDefault()},_clear:function(e){e.preventDefault(),this.clear(),this.trigger(u)},validate:function(){var e=this.validator;if(e)return e.validate()},clear:function(){var e=this,t=e._fields,a=e._model,l=e.editable,o=e.validator.options.validateOnBlur;e.validator.reset(),o&&a.unbind("set").unbind(m);for(var n=0;n<t.length;n+=1){var r=t[n].field,d=e.wrapper.find("[name='"+r+"']"),s=i.widgetInstance(d),p=d.is("input[type=hidden]");d.is("[data-role='checkboxgroup']")||d.is("[data-role='radiogroup']")||p||d.val(""),!s&&d.hasClass("k-hidden")&&(s=i.widgetInstance(d.closest(".k-signature"))),s&&(s instanceof i.ui.Upload?s.clearAllFiles():s.value(null)),e._toggleHint(d,!1),"boolean"==typeof a[r]?(d.val("false"),a.set(r,!1)):p||a.set(r,null)}e.wrapper.find(v+h.fieldError).removeClass(h.fieldError),o&&a.bind("set",l._validateProxy).bind(m,l._validateProxy)},setOptions:function(e){var t=this;t.destroy(),t.wrapper.removeClass(h.horizontal).removeAttr(_).empty(),t.init(t.element,e)},destroy:function(){var e=this;e.wrapper.off(l),e._model&&(e._model.unbind(p,e._changeHandler),e._changeHandler=null),o.fn.destroy.call(e.editable),o.fn.destroy.call(e),e.editable&&(e.editable.destroy(),e.editable=null)}});a.plugin(w),n(!0,w,{styles:h})}(window.kendo.jQuery);
//# sourceMappingURL=kendo.form.js.map
