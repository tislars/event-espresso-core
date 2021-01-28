(this.webpackJsonproot=this.webpackJsonproot||[]).push([[5],{3016:function(t,e,a){"use strict";var i=a(0),n=a(5),c=a(10),s=a(13);e.a=function(t){var e=t.datetime,a=Object(s.useRegistrationsLink)({datetime_id:e.dbId}),r=Object(n.__)("view ALL registrations for this date.");return Object(i.jsx)(c.RegistrationsLink,{href:a,tooltip:r})}},3017:function(t,e,a){"use strict";var i=a(0),n=a(1),c=a(5),s=a(18),r=a(10),d=a(13);e.a=function(t){var e=t.entity,a=Object(d.useDatetimeMutator)(e.id).updateEntity,u=Object(d.useUpdateRelatedTickets)(e.id),o=Object(d.useTicketQuantityForCapacity)(),l=Object(n.useCallback)((function(t){var i=Object(s.parseInfinity)(t);if(i!==e.capacity){a({capacity:i});var n=o(i);u(n)}}),[e.capacity,a,o,u]);return Object(i.jsx)(r.InlineEditInfinity,{onChange:l,tooltip:Object(c.__)("edit capacity (registration limit)\u2026"),value:"".concat(e.capacity)})}},3021:function(t,e,a){"use strict";var i=a(3),n=a(0),c=a(7),s=a(10),r=a(1114),d=function(t){return Object(r.a)("datetime",t)};e.a=function(t){var e=t.entity,a=Object(c.a)(t,["entity"]),r=d(e);return Object(n.jsx)(s.EntityActionsMenu,Object(i.a)(Object(i.a)({},a),{},{menuItems:r}))}},3022:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a(0),n=a(1),c=a(5),s=a(13),r=a(10),d=function(t){var e=t.className,a=t.entity,d=t.view,u=void 0===d?"card":d,o=Object(s.useDatetimeMutator)(a.id).updateEntity,l=Object(c.__)("edit title\u2026"),j=a.name||l,b="card"===u&&2,O=Object(n.useCallback)((function(t){t!==a.name&&o({name:t})}),[a.name,o]);return Object(i.jsx)(r.InlineEditText,{className:e,lineCount:b,onChange:O,tag:"table"===u?"div":"h4",tooltip:l,value:j})}},3026:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a(10),c=a(13),s=a(562),r=a(3021),d=a(14),u=a(1),o=a(5),l=a(124),j=a(23),b=function(t){var e=t.entity,a=Object(c.useDatesListFilterState)().displayStartOrEndDate,n=Object(c.useDatetimeMutator)(e.id).updateEntity,r=Object(j.useTimeZoneTime)().siteTimeToUtc,b=Object(u.useCallback)((function(t){var e=Object(d.a)(t,2),a=e[0],i=e[1],c=r(a).toISOString(),s=r(i).toISOString();n({startDate:c,endDate:s})}),[r,n]),O=Object(s.getDatetimeStatusTextLabel)(e);return e?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.CalendarDateSwitcher,{displayDate:a,endDate:e.endDate,startDate:e.startDate}),Object(i.jsx)(l.EditDateRangeButton,{endDate:e.endDate,header:Object(o.__)("Edit Event Date"),onEditHandler:b,popoverPlacement:"right-end",startDate:e.startDate,tooltip:Object(o.__)("edit start and end dates")}),Object(i.jsx)("div",{className:"ee-ticket-status-label",children:O})]}):null},O=a(30),m=a(3016),y=a(3017),p=function(t){var e=t.adminUrl,a=t.entity,c=t.eventId,s=Object(u.useMemo)((function(){return[{id:"ee-event-date-sold",label:Object(o.__)("sold"),value:Object(i.jsx)(n.EntityDetailsPanelSold,{adminUrl:e,dbId:a.dbId,eventId:c,sold:a.sold,type:"date"})},{id:"ee-event-date-capacity",label:Object(o.__)("capacity"),value:Object(i.jsx)(y.a,{entity:a})},{id:"ee-event-date-registrations",className:"ee-has-tooltip",label:Object(o.__)("reg list"),value:Object(i.jsx)(m.a,{datetime:a})}]}),[e,a,c]);return Object(i.jsx)(n.EntityDetailsPanel,{details:s,className:"ee-editor-date-details-sold-rsrvd-cap-div"})},v=a(3022),f=a(577),x=function(t){return Object(f.c)("datetime",t)},D=function(t){var e=t.entity,a=Object(j.useConfig)().siteUrl,n=Object(u.useMemo)((function(){return Object(c.getAdminUrl)({adminSiteUrl:a.admin,page:O.ADMIN_ROUTES.REGISTRATIONS})}),[a.admin]),s=Object(c.useEventId)(),r=Object(c.useDatetimeMutator)(e.id).updateEntity,d=Object(u.useCallback)((function(t){r({description:t})}),[r]),b=x(e.id);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v.a,{className:"entity-card-details__name",entity:e}),Object(i.jsx)(l.SimpleTextEditorModal,{className:"entity-card-details__text",onUpdate:d,text:e.description,title:Object(o.__)("Edit description"),tooltip:Object(o.__)("edit description\u2026")}),b,Object(i.jsx)(p,{adminUrl:n,entity:e,eventId:s})]})},_=function(t){var e=t.id,a=Object(c.useDatetimeItem)({id:e}),d=Object(s.datetimeStatusBgColorClassName)(a);return a?Object(i.jsx)(n.EntityCard,{actionsMenu:Object(i.jsx)(r.a,{entity:a,layout:n.EntityActionsMenuLayout.Vertical}),details:Object(i.jsx)(D,{entity:a}),entity:a,sidebar:Object(i.jsx)(b,{entity:a}),sidebarClass:d}):null};e.default=function(){var t=Object(c.useFilteredDateIds)();return Object(i.jsx)(n.EntityCardList,{EntityCard:_,entityIds:t})}}}]);
//# sourceMappingURL=dates-card-view.f7374dfe.chunk.js.map