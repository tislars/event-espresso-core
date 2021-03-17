(this.webpackJsonproot=this.webpackJsonproot||[]).push([[5],{3082:function(t,e,a){"use strict";var i=a(5),n=a(8),c=a(12),s=a(0);e.a=function(t){var e=t.datetime,a=Object(c.useRegistrationsLink)({datetime_id:e.dbId}),r=Object(i.__)("view ALL registrations for this date.");return Object(s.jsx)(n.RegistrationsLink,{href:a,tooltip:r})}},3083:function(t,e,a){"use strict";var i=a(1),n=a(5),c=a(18),s=a(8),r=a(12),d=a(0);e.a=function(t){var e=t.entity,a=Object(r.useDatetimeMutator)(e.id).updateEntity,o=Object(r.useUpdateRelatedTickets)(),u=Object(r.useTicketQuantityForCapacity)(),l=Object(i.useCallback)((function(t){var i=Object(c.parseInfinity)(t);if(i!==e.capacity){a({capacity:i});var n=u(i);o(e.id,n)}}),[e.capacity,e.id,a,u,o]);return Object(d.jsx)(s.InlineEditInfinity,{onChange:l,tooltip:Object(n.__)("edit capacity (registration limit)\u2026"),value:"".concat(e.capacity)})}},3087:function(t,e,a){"use strict";var i=a(2),n=a(7),c=a(8),s=a(1148),r=function(t){return Object(s.a)("datetime",t)},d=a(0);e.a=function(t){var e=t.entity,a=Object(n.a)(t,["entity"]),s=r(e);return Object(d.jsx)(c.EntityActionsMenu,Object(i.a)(Object(i.a)({},a),{},{menuItems:s}))}},3088:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a(1),n=a(5),c=a(12),s=a(8),r=a(0),d=function(t){var e=t.className,a=t.entity,d=t.view,o=void 0===d?"card":d,u=Object(c.useDatetimeMutator)(a.id).updateEntity,l=Object(n.__)("edit title\u2026"),j=a.name||l,b="card"===o&&2,O=Object(i.useCallback)((function(t){t!==a.name&&u({name:t})}),[a.name,u]);return Object(r.jsx)(s.InlineEditText,{className:e,lineCount:b,onChange:O,tag:"table"===o?"div":"h4",tooltip:l,value:j})}},3092:function(t,e,a){"use strict";a.r(e);var i=a(8),n=a(12),c=a(583),s=a(3087),r=a(13),d=a(1),o=a(5),u=a(76),l=a(21),j=a(0),b=function(t){var e=t.entity,a=Object(n.useDatesListFilterState)().displayStartOrEndDate,i=Object(n.useDatetimeMutator)(e.id).updateEntity,s=Object(l.useTimeZoneTime)().siteTimeToUtc,b=Object(d.useCallback)((function(t){var e=Object(r.a)(t,2),a=e[0],n=e[1],c=s(a).toISOString(),d=s(n).toISOString();i({startDate:c,endDate:d})}),[s,i]),O=Object(c.getDatetimeStatusTextLabel)(e);return e?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.CalendarDateSwitcher,{displayDate:a,endDate:e.endDate,startDate:e.startDate}),Object(j.jsx)(u.EditDateRangeButton,{endDate:e.endDate,header:Object(o.__)("Edit Event Date"),onChange:b,popoverPlacement:"right-end",startDate:e.startDate,tooltip:Object(o.__)("edit start and end dates")}),Object(j.jsx)("div",{className:"ee-ticket-status-label",children:O})]}):null},O=a(2),m=a(30),y=a(3082),p=a(3083),v=function(t){var e=t.adminUrl,a=t.entity,n=t.eventId,c=Object(d.useMemo)((function(){return[{id:"ee-event-date-sold",label:Object(o.__)("sold"),value:Object(j.jsx)(i.EntityDetailsPanelSold,{adminUrl:e,dbId:a.dbId,eventId:n,sold:a.sold,type:"date"})},{id:"ee-event-date-capacity",label:Object(o.__)("capacity"),value:Object(j.jsx)(p.a,{entity:a})},{id:"ee-event-date-registrations",className:"ee-has-tooltip",label:Object(o.__)("reg list"),value:Object(j.jsx)(y.a,{datetime:a})}]}),[e,a,n]);return Object(j.jsx)(i.EntityDetailsPanel,{details:c,className:"ee-editor-date-details-sold-rsrvd-cap-div"})},f=a(3088),D=a(727),_=function(t){return Object(D.c)("datetime",t)},x=function(t){var e=t.entity,a=Object(l.useConfig)().siteUrl,i=Object(d.useMemo)((function(){return Object(n.getAdminUrl)({adminSiteUrl:a.admin,page:m.ADMIN_ROUTES.REGISTRATIONS})}),[a.admin]),c=Object(n.useEventId)(),s=Object(n.useDatetimeMutator)(e.id).updateEntity,r=Object(d.useCallback)((function(t){s({description:t})}),[s]),b=_(e.id),y=Object(d.useMemo)((function(){return n.hooks.applyFilters("eventEditor.datetimes.inlineDescriptionProps",m.EMPTY_OBJECT,e)}),[e]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.a,{className:"entity-card-details__name",entity:e}),Object(j.jsx)(u.SimpleTextEditorModal,Object(O.a)({className:"entity-card-details__text",onUpdate:r,text:e.description,title:Object(o.__)("Edit description"),tooltip:Object(o.__)("edit description\u2026")},y)),b,Object(j.jsx)(v,{adminUrl:i,entity:e,eventId:c})]})},E=function(t){var e=t.id,a=Object(n.useDatetimeItem)({id:e}),r=Object(c.datetimeStatusBgColorClassName)(a);return a?Object(j.jsx)(i.EntityCard,{actionsMenu:Object(j.jsx)(s.a,{entity:a,layout:i.EntityActionsMenuLayout.Vertical}),details:Object(j.jsx)(x,{entity:a}),entity:a,sidebar:Object(j.jsx)(b,{entity:a}),sidebarClass:r}):null};e.default=function(){var t=Object(n.useFilteredDateIds)();return Object(j.jsx)(i.EntityCardList,{EntityCard:E,entityIds:t})}}}]);
//# sourceMappingURL=dates-card-view.4c9a1f5e.chunk.js.map