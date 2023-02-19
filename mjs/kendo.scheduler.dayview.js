/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.scheduler.view.js";var __meta__={id:"scheduler.dayview",name:"Scheduler Day View",category:"web",description:"The Scheduler Day View",depends:["scheduler.view"],hidden:!0};!function(e,t){var a=window.kendo,i=a.ui,s=a.htmlEncode,n=a.date.setTime,r=i.SchedulerView,o=a._outerWidth,l=a._outerHeight,d=e.extend,h=a.date.getDate,u=a.date.MS_PER_MINUTE,c=a.date.MS_PER_DAY,p="k-event-inverse",f=a.date.getMilliseconds,m=".kendoMultiDayView",v=a.template((({start:e,end:t,title:i})=>`<div title="(${a.format("{0:t} - {1:t}",e,t)}): ${i.replace(/"/g,"&#34;")}"><div class="k-event-template k-event-time">${s(a.format("{0:t} - {1:t}",e,t))}</div><div class="k-event-template">${i}</div></div>`)),_=a.template((({start:e,title:t})=>`<div title="(${a.format("{0:t}",e)}): ${t.replace(/"/g,"&#34;")}"><div class="k-event-template">${t}</div></div>`)),g=a.template((({isMobile:e,date:t})=>`<span class='k-link k-nav-day'>${e?a.toString(t,"ddd")[0]:a.toString(t,"ddd M/dd")}</span>`)),y=e=>`<div role="button" aria-label="${s(e.ariaLabel)}" ${a.attr("uid")}="${e.uid}"`+(e.resources[0]?`style="background-color:${e.resources[0].color}; border-color: ${e.resources[0].color}"`:"")+' class="k-event"><span class="k-event-actions">'+(e.tail||e.middle?'<span class="k-icon k-i-arrow-60-left"></span>':"")+(e.isException()?'<span class="k-icon k-i-non-recurrence"></span>':e.isRecurring()?'<span class="k-icon k-i-reload"></span>':"")+"</span>"+a.template(e.template)(e)+'<span class="k-event-actions">'+(e.showDelete?`<a href="#" class="k-link k-event-delete" title="${e.messages.destroy}" aria-label="${e.messages.destroy}"><span class="k-icon k-i-close"></span></a>`:"")+(e.head||e.middle?'<span class="k-icon k-i-arrow-60-right"></span>':"")+"</span>"+(!e.resizable||e.singleDay||e.tail||e.middle?"":'<span class="k-resize-handle k-resize-w"></span>')+(!e.resizable||e.singleDay||e.head||e.middle?"":'<span class="k-resize-handle k-resize-e"></span>')+"</div>",D=e=>`<div role="button" aria-label="${s(e.ariaLabel)}" ${a.attr("uid")}="${e.uid}"`+(e.resources[0]?`style="background-color:${e.resources[0].color}; border-color: ${e.resources[0].color}"`:"")+' class="k-event"><span class="k-event-actions">'+(e.isException()?'<span class="k-icon k-i-non-recurrence"></span>':e.isRecurring()?'<span class="k-icon k-i-reload"></span>':"")+"</span>"+a.template(e.template)(e)+'<span class="k-event-actions">'+(e.showDelete?`<a href="#" class="k-link k-event-delete" title="${e.messages.destroy}" aria-label="${e.messages.destroy}"><span class="k-icon k-i-close"></span></a>`:"")+'</span><span class="k-event-top-actions">'+(e.tail||e.middle?'<span class="k-icon k-i-arrow-60-up"></span>':"")+'</span><span class="k-event-bottom-actions">'+(e.head||e.middle?'<span class="k-icon k-i-arrow-60-down"></span>':"")+"</span>"+(!e.resizable||e.tail||e.middle?"":'<span class="k-resize-handle k-resize-n"></span>')+(!e.resizable||e.head||e.middle?"":'<span class="k-resize-handle k-resize-s"></span>')+"</div>";function k(e){var t=new Date(1980,1,1,0,0,0);return n(t,f(e)),t}function T(e,t,a){return e>=t&&e<=a}function w(e,t,a,i){return i=i?e<=a:e<a,e>t&&i}function b(e,t,i,s){var n=e._continuousEvents,r=n[n.length-1],o=h(t.start.startDate()).getTime();if(s&&r&&h(r.start.startDate()).getTime()==o){for(var l=n.length-1;l>-1&&!(n[l].isAllDay||h(n[l].start.startDate()).getTime()<o);l--);n.splice(l+1,0,{element:i,isAllDay:!0,uid:i.attr(a.attr("uid")),start:t.start,end:t.end})}else n.push({element:i,isAllDay:s,uid:i.attr(a.attr("uid")),start:t.start,end:t.end})}var S=r.extend({init:function(e,t){var a=this;r.fn.init.call(a,e,t),a.title=a.options.title||a.options.name,a._workDays=function(e){if(e.workDays&&e.workDays.length)return e.workDays;var t=[],a=e.workWeekStart%7,i=Math.abs(e.workWeekEnd%7);for(t.push(a);i!=a;)a>6?a-=7:a++,t.push(a);return t}(a.options),a._templates(),a._editable(),a.calculateDateRange(),a._groups(),a._currentTime(!0)},_currentTimeMarkerUpdater:function(){this._updateCurrentTimeMarker(new Date)},_updateCurrentTimeMarker:function(t){var i,s,n,r,d=this.options,h="<div class='k-current-time'></div>";if(!1===d.currentTimeMarker.useLocalTimezone){var u=d.dataSource.options.schema.timezone;if(d.dataSource&&u){var c=a.timezone.offset(t,u);t=a.timezone.convert(t,t.getTimezoneOffset(),c)}}i=this.times.find(".k-current-time"),s=this.content.find(".k-current-time");var p=d.group&&"horizontal"!=d.group.orientation?this.groups.length:1,f=this.times.find("tr").first().find("th").first(),m=this.times.find("tr").first().find("th").last();f.length>0&&m.length>0&&(r=this._isRtl?f.position().left+l(f)-l(m):m.position().left);for(var v=0;v<p;v++){var _=this.groups[v];if(!_)return;var g=a.date.toUtcTime(t),y=_.timeSlotRanges(g,g+1);if(0===y.length)return;if(y[0].collection.slotByStartDate(t)){var D=i[v]?i.eq(v):e(h).prependTo(this.times),k=Math.round(y[0].innerRect(t,new Date(t.getTime()+1),!1).top),T={};this._isRtl?(T.right=r,D.addClass("k-current-time-arrow-left")):(T.left=r,D.addClass("k-current-time-arrow-right")),n||(n=.8666*o(D)/2),T.top=k-n,D.css(T),(s[v]?s.eq(v):e(h).prependTo(this.content)).css({top:k,height:"1px",right:0,left:0})}}},_currentTime:function(e){var a=this,i=a.options.currentTimeMarker;!1!==i&&i.updateInterval!==t&&(a._currentTimeMarkerUpdater(),e&&(a._currentTimeUpdateTimer=setInterval(this._currentTimeMarkerUpdater.bind(a),i.updateInterval)))},_updateResizeHint:function(e,t,i,s){var n;n=this.options.enforceAllDaySlot?e.isMultiDay():e.isAllDay;var o,l,d,h,u=this.groups[t].ranges(i,s,n,e.isAllDay);this._removeResizeHint();for(var c=0;c<u.length;c++){var p=u[c],f=p.startSlot();if(this._isGroupedByDate()&&n)for(var m=f.index;m<=p.end.index;m++){var v=p.collection._slots[m];o=v.offsetWidth,l=v.clientHeight,d=v.offsetTop,h=r.fn._createResizeHint.call(this,v.offsetLeft,d,o,l),this._resizeHint=this._resizeHint.add(h)}else{if(o=f.offsetWidth,l=f.clientHeight,d=f.offsetTop,n)o=p.innerWidth();else{var _=p.outerRect(i,s,this.options.snap);d=_.top,l=_.bottom-_.top}h=r.fn._createResizeHint.call(this,f.offsetLeft,d,o,l),this._resizeHint=this._resizeHint.add(h)}}var g="t",y=this.content;n&&(g="M/dd",(y=this.element.find(".k-scheduler-header-wrap:has(.k-scheduler-header-all-day) > div")).length||(y=this.content)),this._resizeHint.appendTo(y),this._resizeHint.find(".k-label-top,.k-label-bottom").text(""),this._resizeHint.first().addClass("k-first").find(".k-label-top").text(a.toString(a.timezone.toLocalDate(i),g)),this._resizeHint.last().addClass("k-last").find(".k-label-bottom").text(a.toString(a.timezone.toLocalDate(s),g))},_updateMoveHint:function(t,i,s){var n;n=this.options.enforceAllDaySlot?t.isMultiDay():t.isAllDay;var r=this.groups[i],o=a.date.toUtcTime(t.start)+s,l=o+t.duration(),d=r.ranges(o,l,n,t.isAllDay);o=a.timezone.toLocalDate(o),l=a.timezone.toLocalDate(l),this._removeMoveHint(t.uid),!n&&f(l)<f(this.startTime())&&l<this._end().getTime()&&0!==f(l)&&d.length>1&&d.pop();for(var h=e(),u=0;u<d.length;u++){var c,m=d[u],v=m.start,_={left:v.offsetLeft+2,top:v.offsetTop};if(this._isGroupedByDate()&&n)for(var g=v.index;g<=m.end.index;g++){var y=m.collection._slots[g];_.left=this._isRtl?.1*y.clientWidth+y.offsetLeft+2:y.offsetLeft+2,_.height=y.offsetHeight,_.width=.9*y.clientWidth-2,c=this._createEventElement(t.clone({start:o,end:l}),!n),t.inverseColor&&c.addClass(p),this._appendMoveHint(c,_),h=h.add(c)}else{if(this._isRtl&&(_.left=.1*v.clientWidth+v.offsetLeft+2),n)_.width=m.innerWidth()-2;else{var D=m.outerRect(o,l,this.options.snap);_.top=D.top,_.height=D.bottom-D.top,_.width=.9*v.clientWidth-2}c=this._createEventElement(t.clone({start:o,end:l}),!n),t.inverseColor&&c.addClass(p),this._appendMoveHint(c,_),h=h.add(c)}}var k=this.content;n&&((k=this.element.find(".k-scheduler-header-wrap:has(.k-scheduler-header-all-day) > div")).length||(k=this.content)),h.appendTo(k)},_appendMoveHint:function(e,t){e.addClass("k-event-drag-hint"),e.css(t),this._moveHint=this._moveHint.add(e)},_slotByPosition:function(e,t){var a,i,s;for(this._isVerticallyGrouped()?(i=this.content.offset(),t+=this.content[0].scrollTop,e+=this.content[0].scrollLeft):i=this.element.find(".k-scheduler-header-wrap:has(.k-scheduler-header-all-day)").find(">div").offset(),i&&(e-=i.left,t-=i.top),e=Math.ceil(e),t=Math.ceil(t),s=0;s<this.groups.length;s++)if(a=this.groups[s].daySlotByPosition(e,t,this._isGroupedByDate()))return a;for(i&&(e+=i.left,t+=i.top),e-=(i=this.content.offset()).left,t-=i.top,this._isVerticallyGrouped()||(t+=this.content[0].scrollTop,e+=this.content[0].scrollLeft),e=Math.ceil(e),t=Math.ceil(t),s=0;s<this.groups.length;s++)if(a=this.groups[s].timeSlotByPosition(e,t))return a;return null},_groupCount:function(){var e=this.groupedResources,t=this._isGroupedByDate();return e.length?"vertical"===this._groupOrientation()?t?this._columnCountForLevel(e.length-1):this._rowCountForLevel(e.length-1):t?this._columnCountForLevel(e.length)/this._columnCountForLevel(0):this._columnCountForLevel(e.length)/this._columnOffsetForResource(e.length):1},_columnCountInResourceView:function(){var e=this.groupedResources,t=this._isGroupedByDate();return!e.length||this._isVerticallyGrouped()?t?this._rowCountForLevel(0):this._columnCountForLevel(0):t?this._columnCountForLevel(0):this._columnOffsetForResource(e.length)},_timeSlotGroups:function(e,t){var a,i,s,n,r=this._timeSlotInterval(),o=e,l=this._isGroupedByDate(),d=this.content.find("tr:not(.k-scheduler-header-all-day)"),h=d.length;this._isVerticallyGrouped()&&(l&&(o=t),h=Math.floor(h/o));for(var u=0;u<o;u++){var c=0,p=0;for(this._isVerticallyGrouped()?c=u:p=u,s=c*h;s<(c+1)*h;){var m=d[s].children;s%h==0&&(i=f(new Date(+this.startTime())));var v=0;if(l)if(this._isVerticallyGrouped())for(n=0;n<e;n++)a=this.groups[n],this._addTimeSlotGroup(a,m,n,i,r,u);else for(a=this.groups[u],n=p;n<e*t;n+=e)this._addTimeSlotGroup(a,m,n,i,r,v),v++;else for(a=this.groups[u],n=p*t;n<(p+1)*t;n++)this._addTimeSlotGroup(a,m,n,i,r,v),v++;i+=r,s++}}},_addTimeSlotGroup:function(e,t,a,i,s,n){var r=t[a],o=e.getTimeSlotCollection(n),l=this._dates[n];if(l&&r){var d=Date.UTC(l.getFullYear(),l.getMonth(),l.getDate())+i,h=d+s;o.addTimeSlot(r,d,h)}},_addDaySlotGroup:function(e,t,i,s,n){var r=t[i],o=this._dates[n];if(o){var l=Date.UTC(o.getFullYear(),o.getMonth(),o.getDate());e.addDaySlot(r,l,l+a.date.MS_PER_DAY)}},_daySlotGroups:function(e,t){var a,i,s=e,n=this._isGroupedByDate();this._isVerticallyGrouped()?(n&&(s=t),a=this.element.find(".k-scheduler-header-all-day")):a=this.element.find(".k-scheduler-header-all-day tr");for(var r=0;r<s;r++){var o,l=0;this._isVerticallyGrouped()&&(l=r);var d=a[l].children,h=0;this._isVerticallyGrouped()||(h=r);var u=0;if(n)if(this._isVerticallyGrouped())for(i=0;i<e;i++)o=this.groups[i].getDaySlotCollection(0),this._addDaySlotGroup(o,d,i,t,r);else for(o=this.groups[r].getDaySlotCollection(0),i=h;i<e*t;i+=e)this._addDaySlotGroup(o,d,i,t,u),u++;else for(o=this.groups[r].getDaySlotCollection(0),i=h*t;i<(h+1)*t;i++)this._addDaySlotGroup(o,d,i,t,u),u++}},_groups:function(){var e=this._groupCount(),t=this._columnCountInResourceView();this.groups=[];for(var i=0;i<e;i++){for(var s=this._addResourceView(i),n=0;n<t;n++)this._dates[n]&&s.addTimeSlotCollection(this._dates[n],a.date.addDays(this._dates[n],1));this.options.allDaySlot&&s.addDaySlotCollection(this._dates[0],a.date.addDays(this._dates[this._dates.length-1],1))}this._timeSlotGroups(e,t),this.options.allDaySlot&&this._daySlotGroups(e,t)},options:{name:"MultiDayView",selectedDateFormat:"{0:D}",selectedShortDateFormat:"{0:d}",selectedMobileDateFormat:"{0:MMM} {0:dd} - {1:dd}",allDaySlot:!0,showWorkHours:!1,title:"",startTime:a.date.today(),endTime:a.date.today(),minorTickCount:2,majorTick:60,majorTimeHeaderTemplate:({date:e})=>`<span>${a.toString(e,"t")}</span>`,minorTimeHeaderTemplate:()=>"&#8203;",groupHeaderTemplate:({text:e})=>e,slotTemplate:()=>"&nbsp;",allDaySlotTemplate:()=>"&nbsp;",eventTemplate:v,allDayEventTemplate:_,dateHeaderTemplate:g,editable:!0,workDayStart:new Date(1980,1,1,8,0,0),workDayEnd:new Date(1980,1,1,17,0,0),workWeekStart:1,workWeekEnd:5,footer:{command:"workDay"},messages:{allDay:"all day",showFullDay:"Show full day",showWorkDay:"Show business hours"},currentTimeMarker:{updateInterval:1e4,useLocalTimezone:!0},enforceAllDaySlot:!1},events:["remove","add","edit"],_templates:function(){var e=this.options,t=d({},a.Template,e.templateSettings);this.allDayEventTemplate=a.template(y),this.eventTemplate=a.template(D),this.majorTimeHeaderTemplate=a.template(e.majorTimeHeaderTemplate,t),this.minorTimeHeaderTemplate=a.template(e.minorTimeHeaderTemplate,t),this.dateHeaderTemplate=a.template(e.dateHeaderTemplate,t),this.slotTemplate=a.template(e.slotTemplate,t),this.allDaySlotTemplate=a.template(e.allDaySlotTemplate,t),this.groupHeaderTemplate=a.template(e.groupHeaderTemplate,t)},_editable:function(){this.options.editable&&(this._isMobile()?this._touchEditable():this._mouseEditable())},_mouseEditable:function(){var t=this;t.element.on("click"+m,".k-event a:has(.k-i-close)",(function(i){t.trigger("remove",{uid:e(this).closest(".k-event").attr(a.attr("uid"))}),i.preventDefault()})),!1!==t.options.editable.create&&t.element.on("dblclick"+m,".k-scheduler-content > table td",(function(a){if(!e(this).parent().hasClass("k-scheduler-header-all-day")){var i=t._slotByPosition(a.pageX,a.pageY);if(i){var s=t._resourceBySlot(i);t.trigger("add",{eventInfo:d({start:i.startDate(),end:i.endDate()},s)})}a.preventDefault()}})).on("dblclick"+m,".k-scheduler-header-all-day td",(function(e){var i=t._slotByPosition(e.pageX,e.pageY);if(i){var s=t._resourceBySlot(i);t.trigger("add",{eventInfo:d({},{isAllDay:!0,start:a.date.getDate(i.startDate()),end:a.date.getDate(i.startDate())},s)})}e.preventDefault()})),!1!==t.options.editable.update&&t.element.on("dblclick"+m,".k-event",(function(i){t.trigger("edit",{uid:e(this).closest(".k-event").attr(a.attr("uid"))}),i.preventDefault()}))},_touchEditable:function(){var i=this,s=0;a.support.mobileOS.android&&(s=5),!1!==i.options.editable.create&&(i._addUserEvents=new a.UserEvents(i.element,{threshold:s,filter:".k-scheduler-content td",useClickAsTap:!a.support.browser.edge,tap:function(a){if(!i._scrolling&&!e(a.target).parent().hasClass("k-scheduler-header-all-day")){var s=a.x.location!==t?a.x.location:a.x,n=a.y.location!==t?a.y.location:a.y,r=i._slotByPosition(s,n);if(r){var o=i._resourceBySlot(r);i.trigger("add",{eventInfo:d({start:r.startDate(),end:r.endDate()},o)})}a.preventDefault()}}}),i._allDayUserEvents=new a.UserEvents(i.element,{threshold:s,useClickAsTap:!a.support.browser.edge,filter:".k-scheduler-header-all-day td",tap:function(e){if(!i._scrolling){var s=e.x.location!==t?e.x.location:e.x,n=e.y.location!==t?e.y.location:e.y,r=i._slotByPosition(s,n);if(r){var o=i._resourceBySlot(r);i.trigger("add",{eventInfo:d({},{isAllDay:!0,start:a.date.getDate(r.startDate()),end:a.date.getDate(r.startDate())},o)})}e.preventDefault()}}})),!1!==i.options.editable.update&&(i._editUserEvents=new a.UserEvents(i.element,{threshold:s,useClickAsTap:!a.support.browser.edge,filter:".k-event",tap:function(t){if(!i._scrolling){var s=e(t.target).closest(".k-event");e(t.touch.initialTouch).hasClass("k-i-close")?i.trigger("remove",{uid:s.attr(a.attr("uid"))}):s.hasClass("k-event-active")||i.trigger("edit",{uid:s.attr(a.attr("uid"))}),t.preventDefault()}}}))},_layout:function(e){for(var t=[],i=[],s=this.options,n=this,r=n._isGroupedByDate(),o=0;o<e.length;o++){var l={};l.text=n.dateHeaderTemplate({date:e[o],isMobile:n._isMobile()}),a.date.isToday(e[o])&&(l.className="k-today"),t.push(l)}var d=this.groupedResources;return s.allDaySlot&&i.push({text:s.messages.allDay,allDay:!0,cellContent:function(t){var a=t;return t=d.length&&"vertical"!==n._groupOrientation()?t%e.length:t,n.allDaySlotTemplate({date:e[t],resources:function(){return n._resourceBySlot({groupIndex:a})}})}}),this._forTimeRange(this.startTime(),this.endTime(),(function(e,t,a,s){var r={text:(t?n.majorTimeHeaderTemplate:n.minorTimeHeaderTemplate)({date:e}),className:s?"k-slot-cell":""};i.push(r)})),d.length&&("vertical"===this._groupOrientation()?r?(i=this._createDateLayout(t,i),t=this._createColumnsLayout(d,null,this.groupHeaderTemplate)):i=this._createRowsLayout(d,i,this.groupHeaderTemplate):t=r?this._createColumnsLayout(d,t,this.groupHeaderTemplate,t):this._createColumnsLayout(d,t,this.groupHeaderTemplate)),{columns:t,rows:i}},toggleFullDay:function(){var e=this.options;this.trigger("navigate",{view:this.name||e.name,date:e.date,isWorkDay:!e.showWorkHours})},_footer:function(){var t=this.options;if(!1!==t.footer){var i='<div class="k-scheduler-footer k-toolbar" role="toolbar">',s=t.footer.command;this._isMobile()&&(i+='<span class="k-scheduler-today"><a href="#" tabindex="-1" class="k-link">',i+=t.messages.today+"</a></span>"),s&&"workDay"===s&&(this._isMobile()?(i+='<span class="k-scheduler-fullday"><a href="#" tabindex="-1" class="k-link">',i+=(t.showWorkHours?t.messages.showFullDay:t.messages.showWorkDay)+"</a></span>"):(i+='<button type="button" tabindex="-1" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-scheduler-fullday">',i+='<span class="k-button-icon k-icon k-i-clock"></span>',i+='<span class="k-button-text">',i+=t.showWorkHours?t.messages.showFullDay:t.messages.showWorkDay,i+="</span>",i+="</button>")),i+="</div>",this.footer=e(i).appendTo(this.element);var n=this;this.footer.on("click"+m,".k-scheduler-fullday",(function(e){e.preventDefault(),n.toggleFullDay()})),this.footer.on("click"+m,".k-scheduler-today",(function(e){e.preventDefault();var i,s=n.options.timezone,r=new Date;if(s){var o=a.timezone.offset(r,s);i=a.timezone.convert(r,r.getTimezoneOffset(),o)}else i=r;n.trigger("navigate",{view:n.name||t.name,action:"today",date:i})}))}},_forTimeRange:function(e,t,a,i){e=k(e),t=k(t);var s,r,o=f(e),l=f(t),d=this.options.minorTickCount,h=this.options.majorTick*u,p=h/d||1,m=new Date(+e),v=m.getDate(),_=0,g="";for(r=c/p,o!=l&&(o>l&&(l+=c),r=(l-o)/p),r=Math.round(r);_<r;_++){var y=_%(h/p);g+=a(m,0===y,y<d-1,y===d-1),n(m,p,!1)}return l&&(s=f(m),v<m.getDate()&&(s+=c),s>l&&(m=new Date(+t))),i&&(g+=i(m)),g},_content:function(e){var t=this,a="";a+="<tbody>",a+=t._renderRows(e,t.rowLevels,t.columnLevels),a+="</tbody>",this.content.find("table").append(a)},_virtualContent:function(e,t){var a=this,i="",s=a._dates;i+=a._renderRows(s,e,t),a.content.find("table tbody").append(i)},_renderRows:function(e,t,a){var i=this,s="vertical"===i._groupOrientation(),n=i._isGroupedByDate(),r=0,o=e.length,l=i.options,d=i.startTime(),h=this.endTime(),u=1,c=1,p="";if(this.groupedResources.length){var f=i._recalculateLevels(t,a);c=f.rowCount,u=f.groupsCount}for(var m=function(t,a,l){var d,h,c="",p=0;if(c="<tr"+(l?' class="k-middle-row"':"")+">",n)for(d=0,h=o;d<h;d++){for(p=0;p<u;p++){var f=d;s&&(f=r),c=i._addCellsToContent(c,e,t,f,p,v)}if(s)break}else for(;p<u;p++)for(d=0,h=o;d<h;d++)c=i._addCellsToContent(c,e,t,d,p,v);return c+="</tr>"},v=0;v<c;v++)p+=l.allDaySlot&&s?this._allDayVerticalGroupRow(e,v,u,r):"",p+=this._forTimeRange(d,h,m),s&&r++;return p},_recalculateLevels:function(e,t){var a=this,i=a._isGroupedByDate(),s=1,n=1;return"vertical"===a._groupOrientation()?(n=a._rowCountForLevel(e.length-2,e),i&&(s=a._columnCountForLevel(t.length-1))):s=i?a._columnCountForLevel(t.length-1)/this._columnCountForLevel(0):a._columnCountForLevel(t.length-2),{rowCount:n,groupsCount:s}},_allDayVerticalGroupRow:function(e,t,a,i){var s=this,n='<tr class="k-scheduler-header-all-day">',r=s._isGroupedByDate(),o=r?0:t,l=s.allDaySlotTemplate,d=function(){return s._resourceBySlot({groupIndex:o})};if(r)for(;o<a;o++)n+="<td>"+l({date:e[i],resources:d})+"</td>";else for(var h=0;h<e.length;h++)n+="<td>"+l({date:e[h],resources:d})+"</td>";return n+"</tr>"},_addCellsToContent:function(e,t,i,s,n,r){var o,l,d=this,h="",u=this.slotTemplate,c="vertical"===this._groupOrientation();return a.date.isToday(t[s])&&(h+="k-today"),(a.date.getMilliseconds(i)<a.date.getMilliseconds(this.options.workDayStart)||a.date.getMilliseconds(i)>=a.date.getMilliseconds(this.options.workDayEnd)||!this._isWorkDay(t[s]))&&(h+=" k-nonwork-hour"),e+="<td"+(""!==h?' class="'+h+'"':"")+">",o=a.date.getDate(t[s]),a.date.setTime(o,a.date.getMilliseconds(i)),e+=u({date:o,resources:(l=c&&!d._isGroupedByDate()?r:n,function(){return d._resourceBySlot({groupIndex:l})})}),e+="</td>"},_isWorkDay:function(e){for(var t=e.getDay(),a=this._workDays,i=0;i<a.length;i++)if(a[i]===t)return!0;return!1},_render:function(t){var a=this;t=t||[],this._dates=t,this._startDate=t[0],this._endDate=t[t.length-1||0],this.createLayout(this._layout(t)),this._content(t),this._footer(),this.refreshLayout(),this._isVirtualized()&&this._tryRenderContent();var i=this.element.find(".k-scheduler-header-all-day td");i.length&&(this._allDayHeaderHeight=i.first()[0].clientHeight),a.element.on("click"+m,".k-nav-day",(function(t){var i=e(t.currentTarget).closest("th"),s=i.offset(),n=0,r=l(i);a._isGroupedByDate()&&(a._isVerticallyGrouped()?(n=o(a.times),r=0):r=l(a.datesHeader));var d=a._slotByPosition(s.left+n,s.top+r);a.trigger("navigate",{view:"day",date:d.startDate()})}))},startTime:function(){var e=this.options;return e.showWorkHours?e.workDayStart:e.startTime},endTime:function(){var e=this.options;return e.showWorkHours?e.workDayEnd:e.endTime},startDate:function(){return this._startDate},endDate:function(){return this._endDate},_end:function(e){var t=f(this.endTime())||c;return e&&(t=0),new Date(this._endDate.getTime()+t)},nextDate:function(){return a.date.nextDay(this.endDate())},previousDate:function(){return a.date.previousDay(this.startDate())},calculateDateRange:function(){this._render([this.options.date])},destroy:function(){var e=this;e._currentTimeUpdateTimer&&clearInterval(e._currentTimeUpdateTimer),e.datesHeader&&e.datesHeader.off(m),e.element&&e.element.off(m),e.footer&&e.footer.remove(),r.fn.destroy.call(this),this._isMobile()&&e.options.editable&&(!1!==e.options.editable.create&&(e._addUserEvents.destroy(),e._allDayUserEvents.destroy()),!1!==e.options.editable.update&&e._editUserEvents.destroy())},inRange:function(e){var t=r.fn.inRange.call(this,e);if(e.isAllDay)return t;var i=f(this.startTime()),s=f(this.endTime())||a.date.MS_PER_DAY,n=f(e.start),o=f(e.end)||a.date.MS_PER_DAY;return t&&i<=n&&o<=s},selectionByElement:function(e){var t=e.offset(),a=Math.round(e.innerHeight())-5;return this._slotByPosition(t.left,t.top+a)},_timeSlotInterval:function(){var e=this.options;return e.majorTick/e.minorTickCount*u},_timeSlotIndex:function(e){var t=this.options;return(f(e)-f(this.startTime()))/(t.majorTick/t.minorTickCount*u)},_slotIndex:function(e,t){return t?this._dateSlotIndex(e):this._timeSlotIndex(e)},_dateSlotIndex:function(e,t){var i,s,n=this._dates||[];for(i=0,s=n.length;i<s;i++)if(T(e,a.date.getDate(n[i]),new Date(a.date.getDate(n[i]).getTime()+c-(t?0:1))))return 1*i;return-1},_positionAllDayEvent:function(t,a){var i=a.innerWidth(),s=a.start.index,n=a.end.index,o=r.collidingEvents(a.events(),s,n),l=this._headerColumnCount||0,d=s!==n?3:2,h=this._allDayHeaderHeight,u=a.startSlot();t.css({left:u.offsetLeft+2,width:i-d}),a.addEvent({slotIndex:s,start:s,end:n,element:t}),o.push({slotIndex:s,start:s,end:n,element:t});var c=r.createRows(o);c.length&&c.length>l&&(this._headerColumnCount=c.length);for(var p=a.start.offsetTop,f=0,m=c.length;f<m;f++)for(var v=c[f].events,_=0,g=v.length;_<g;_++)e(v[_].element).css({top:p+f*h,height:h-2})},_arrangeColumns:function(e,t,a,i){var s=i.start;e={element:e,slotIndex:s.index,start:t,end:t+a};var n,o,l=s.clientWidth,d=.1*l,h=i.events(),u=r.collidingEvents(h,e.start,e.end),c=this.table.find(".k-scheduler-content .k-scheduler-table")[0],p=this.table.find(".k-scheduler-content")[0];i.addEvent(e),u.push(e);for(var f=(l-d)/(n=r.createColumns(u)).length,m=0,v=n.length;m<v;m++)for(var _=0,g=(o=n[m].events).length;_<g;_++){var y=f-2;o[_].element[0].style.width=(y>0?y:f)+"px",this._isRtl&&p.clientWidth<p.scrollWidth?o[_].element[0].style.left=d+s.offsetLeft+m*f-(c.clientWidth-p.clientWidth)+"px":o[_].element[0].style.left=(this._isRtl?d:0)+s.offsetLeft+m*f+2+"px"}},_positionEvent:function(e,t,i){var s=e._startTime||e.start,n=e._endTime||e.end,r=a.getComputedStyles(i.start.element,["border-top-width","border-bottom-width"]),o=i.innerRect(s,n,!1),l=o.bottom-o.top-parseFloat(r["border-top-width"])-parseFloat(r["border-bottom-width"]);l<0&&(l=0),t.css({top:o.top,height:l}),this._arrangeColumns(t,o.top,t[0].clientHeight,i)},_createEventElement:function(t,i,s,n){var r,o=i?this.eventTemplate:this.allDayEventTemplate,l=this.options,u=l.editable,p=this._isMobile(),m=u&&!1!==u.destroy&&!p,v=u&&!1!==u.resize,_=h(this.startDate()),g=h(this.endDate()),y=f(this.startTime()),D=f(this.endTime()),k=t._time("start"),w=t._time("end"),b=i?l.eventTemplate:l.allDayEventTemplate;y>=D&&(D=f(new Date(this.endTime().getTime()+c-1))),i||t.isAllDay||(g=new Date(g.getTime()+c));var S=t.start,C=t.end;t.isAllDay&&(C=h(t.end)),!T(h(S),_,g)&&!T(C,_,g)||i&&t.start.getTime()!==t.end.getTime()&&(k<y||k>=D)&&(w>D||w<=y)?r=!0:h(S)<_||i&&0!==k&&t.start.getTime()!==t.end.getTime()&&(k<y||k>=D)?n=!0:(C>g&&!i||i&&0!==w&&t.start.getTime()!==t.end.getTime()&&(w>D||w<=y))&&(s=!0);var x=this.eventResources(t);t._startTime&&k!==a.date.getMilliseconds(t.start)&&(S=new Date(k),S=a.timezone.apply(S,"Etc/UTC")),t._endTime&&w!==a.date.getMilliseconds(t.end)&&(C=new Date(w),C=a.timezone.apply(C,"Etc/UTC"));var E=d({},{ns:a.ns,resizable:v,showDelete:m,middle:r,head:s,tail:n,singleDay:1==this._dates.length,resources:x,inverseColor:!1,messages:l.messages,ariaLabel:this._formatEventAriaLabel(t.title,S,C,t.isAllDay),template:b},t,{start:S,end:C}),H=e(o(E));return this.angular("compile",(function(){return{elements:H,data:[{dataItem:E}]}})),H},_isInTimeSlot:function(e){var t=this.startTime(),i=this.endTime(),s=e._startTime||e.start,r=e._endTime||e.end;if(f(i)===f(a.date.getDate(i))&&(i=a.date.getDate(i),n(i,c-1)),e._date("end")>e._date("start")&&(r=+e._date("end")+(c-1)),r=e._endTime?r-e._date("end"):f(new Date(r)),s=e._startTime?s-e._date("start"):f(new Date(s)),i=f(i),(t=f(t))===s&&s===r)return!0;var o=s!==i;return w(s,t,i,o)||w(r,t,i,o)||w(t,s,r)||w(i,s,r)||e.end.getDate()>e.start.getDate()&&r>t},_isInDateSlot:function(e){var t=this.groups[0],i=t.firstSlot().start,s=t.lastSlot().end-1,n=a.date.toUtcTime(e.start),r=a.date.toUtcTime(e.end);return(T(n,i,s)||T(r,i,s)||T(i,n,r)||T(s,n,r))&&(!T(r,i,i)||T(r,n,n)||e.isAllDay)},_updateAllDayHeaderHeight:function(e){if(this._height!==e){this._height=e;var t=this.element.find(".k-scheduler-header-all-day td");if(t.length){t.parent().add(this.element.find(".k-scheduler-times-all-day").parent()).height(e);for(var a=0;a<this.groups.length;a++)this.groups[a].refresh()}}},_renderEvents:function(e,t){var i,s,n,r=this.datesHeader.find(".k-scheduler-header-wrap > div"),o=this._isGroupedByDate();for(s=0,n=e.length;s<n;s++){var l,d,h,u,p,f,m,v;if(i=e[s],this._isInDateSlot(i))if(d=(l=this.options.enforceAllDaySlot?i.isAllDay||i.duration()>=c:i.isAllDay)&&!this._isVerticallyGrouped()?r:this.content,l){if(this.options.allDaySlot){if(!(v=this.groups[t]))continue;if(v._continuousEvents||(v._continuousEvents=[]),(u=v.slotRanges(i)).length){var _=(p=u[0]).start.index,g=p.end.index;if(o&&_!==g){f=p.start.start,m=p.end.end;for(var y=f,D=f,k=p.start.index;k<=p.end.index;k++){h=this._createEventElement(i,!l,k!==g,k!==_);var T=v.daySlotRanges(y,D,!0)[0];y=D+=a.date.MS_PER_DAY,this._positionAllDayEvent(h,T),b(v,T,h,!0),h.appendTo(d),this._inverseEventColor(h)}}else h=this._createEventElement(i,!l),this._positionAllDayEvent(h,u[0]),b(v,u[0],h,!0),h.appendTo(d),this._inverseEventColor(h)}}}else if(this._isInTimeSlot(i)){if(!(v=this.groups[t]))continue;v._continuousEvents||(v._continuousEvents=[]);for(var w=(u=v.slotRanges(i)).length,S=0;S<w;S++){p=u[S],f=i.start,m=i.end,w>1&&(0===S?m=p.end.endDate():S==w-1?f=p.start.startDate():(f=p.start.startDate(),m=p.end.endDate()));var C=i.clone({start:f,end:m,_startTime:i._startTime,_endTime:i.endTime});if(this._isInTimeSlot(C)){var x=p.head;(h=this._createEventElement(i,!l,x,p.tail)).appendTo(d),this._inverseEventColor(h),this._positionEvent(C,h,p),b(v,p,h,!1)}}}}},render:function(t){var i=this;this._headerColumnCount=0,this._cachedEvents=t,this._groups(),this.element.find(".k-event").remove(),t=new a.data.Query(t).sort([{field:"start",dir:"asc"},{field:"end",dir:"desc"}]).toArray();var s=[];this._eventsByResource(t,this.groupedResources,s);var n=e.map(this._dates,(function(t){return Math.max.apply(null,e.map(s,(function(a){return e.grep(a,(function(e){return i.options.enforceAllDaySlot?e.isMultiDay()&&T(t,h(e.start),h(e.end)):e.isAllDay&&T(t,h(e.start),h(e.end))})).length})))})),r=Math.max.apply(null,n);this._updateAllDayHeaderHeight((r+1)*this._allDayHeaderHeight);for(var o=0;o<s.length;o++)this._renderEvents(s[o],o);this.refreshLayout(),this._currentTime(!1),this.trigger("activate")},_eventsByResource:function(e,i,s,n){var o=i[0];if(o){var l=o.dataSource.view();l=l.filter((function(e){var i=a.getter(o.dataParentValueField)(e);return null===i||i===t||i===n}));for(var d=0;d<l.length;d++){var h=this._resourceValue(o,l[d]),u=new a.data.Query(e).filter({field:o.field,operator:r.groupEqFilter(h)}).toArray();i.length>1?this._eventsByResource(u,i.slice(1),s,h):s.push(u)}}else s.push(e)},_columnOffsetForResource:function(e){return this._columnCountForLevel(e)/this._columnCountForLevel(e-1)},_columnCountForLevel:function(e){var t=this.columnLevels[e];return t?t.length:0},_rowCountForLevel:function(e,t){var a=(t=t||this.rowLevels)[e];return a?a.length:0},clearSelection:function(){this.content.add(this.datesHeader).find(".k-selected").removeAttr("id").removeClass("k-selected")},_updateDirection:function(e,t,a,i,s){var n=e.isAllDay,r=t[0].start,o=t[t.length-1].end;a&&(s?n||r.index!==o.index||r.collectionIndex!==o.collectionIndex||(e.backward=i):(n&&r.index===o.index||!n&&r.collectionIndex===o.collectionIndex)&&(e.backward=i))},_changeViewPeriod:function(e,t,a){if(!a){var i,s,r,o=t?this.previousDate():this.nextDate(),l=e.start,d=e.end,h=this._isGroupedByDate()&&this._isVerticallyGrouped(),u=this.groups[e.groupIndex],p=t?u._timeSlotCollections:u._getCollections(u.daySlotCollectionCount()),m=p[p.length-1]._slots,v=t||u.daySlotCollectionCount()?m.length-1:0;if(s=new Date(o),r=new Date(o),this._isInRange(s,r))return!1;if(e.start=s,e.end=r,h){var _=new Date(m[v].startDate()),g=new Date(m[v].endDate());i=f(g)?f(g):c,n(e.start,f(_)),n(e.end,i),u.daySlotCollectionCount()&&(e.isAllDay=!e.isAllDay)}else i=e.isAllDay||!f(d)?c:f(d),n(e.start,f(l)),n(e.end,i);return this._isVerticallyGrouped()||(e.groupIndex=t?this.groups.length-1:0),e.events=[],!0}}});d(!0,i,{MultiDayView:S,DayView:S.extend({options:{name:"DayView",title:"Day",selectedMobileDateFormat:"{0:MMM d}"},name:"day"}),WeekView:S.extend({options:{name:"WeekView",title:"Week",selectedDateFormat:"{0:D} - {1:D}",selectedShortDateFormat:"{0:d} - {1:d}"},name:"week",calculateDateRange:function(){var e,t=this.options.date,i=a.date.dayOfWeek(t,this.calendarInfo().firstDay,-1),s=[];for(e=0,7;e<7;e++)s.push(i),i=a.date.nextDay(i);this._render(s)}}),WorkWeekView:S.extend({options:{name:"WorkWeekView",title:"Work Week",selectedDateFormat:"{0:D} - {1:D}",selectedShortDateFormat:"{0:d} - {1:d}"},name:"workWeek",nextDate:function(){var e=a.date.dayOfWeek(a.date.nextDay(this.startDate()),this.calendarInfo().firstDay,1);return a.date.addDays(e,this._workDays[0])},previousDate:function(){var e=a.date.dayOfWeek(this.startDate(),this.calendarInfo().firstDay,-1),t=this._workDays;return a.date.addDays(e,t[t.length-1]-7)},calculateDateRange:function(){var e=this.options,t=e.date,i=a.date.dayOfWeek,s=i(t,this.calendarInfo().firstDay,-1),n=i(s,e.workWeekStart,1),r=i(n,e.workWeekEnd,1),o=[],l=e.workDays&&e.workDays.length?e.workDays.map((function(e){return i(s,e,1).getTime()})):null;for(l&&(r=i(n=s,this.calendarInfo().firstDay+6,1));n<=r;)l&&l.indexOf(n.getTime())>-1?o.push(n):l||o.push(n),n=a.date.nextDay(n);this._render(o)}})})}(window.kendo.jQuery);
//# sourceMappingURL=kendo.scheduler.dayview.js.map
