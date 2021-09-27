(this.webpackJsonproot=this.webpackJsonproot||[]).push([[5],{1748:function(t,e,a){"use strict";var n=a(3),i=a(5),c=a(11),s=a(1);e.a=function(t){var e=t.datetime,a=Object(c.useRegistrationsLink)({datetime_id:e.dbId}),r=Object(n.__)("view ALL registrations for this date.");return Object(s.jsx)(i.RegistrationsLink,{href:a,tooltip:r})}},1749:function(t,e,a){"use strict";var n=a(2),i=a(41),c=a(30),s=a.n(c),r=a(0),d=a(3),u=a(12),o=a(5),l=a(11),j=a(1);e.a=function(t){var e=t.entity,a=Object(l.useDatetimeMutator)(e.id).updateEntity,c=Object(l.useUpdateTicketQtyByCapacity)(),b=c.createBulkQtyUpdateInput,O=c.doQtyBulkUpdate,v=Object(r.useCallback)(function(){var t=Object(i.a)(s.a.mark((function t(i){var c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((c=Object(u.parseInfinity)(i))===e.capacity){t.next=7;break}return t.next=4,a({capacity:c});case 4:return r=b(Object(n.a)(Object(n.a)({},e),{},{capacity:c})),t.next=7,O(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e,a,b,O]),p=Object(d.sprintf)(Object(d.__)("click to edit capacity%s(registration limit)\u2026"),"\n");return Object(j.jsx)(o.InlineEditInfinity,{"data-testid":"ee-datetime-inline-cap",onChange:v,tooltip:p,value:"".concat(e.capacity)})}},1753:function(t,e,a){"use strict";var n=a(2),i=a(6),c=a(5),s=a(793),r=function(t){return Object(s.a)("datetime",t)},d=a(1);e.a=function(t){var e=t.entity,a=Object(i.a)(t,["entity"]),s=r(e);return Object(d.jsx)(c.EntityActionsMenu,Object(n.a)(Object(n.a)({},a),{},{menuItems:s}))}},1754:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(0),i=a(3),c=a(11),s=a(5),r=a(1),d=function(t){var e=t.className,a=t["data-testid"],d=t.entity,u=t.view,o=void 0===u?"card":u,l=Object(c.useDatetimeMutator)(d.id).updateEntity,j="card"===o&&2,b=Object(n.useCallback)((function(t){t!==d.name&&l({name:t})}),[d.name,l]);return Object(r.jsx)(s.InlineEditText,{className:e,"data-testid":a,lineCount:j,onChange:b,tag:"table"===o?"div":"h4",tooltip:Object(i.__)("click to edit title\u2026"),value:d.name||Object(i.__)("add title\u2026")})}},1758:function(t,e,a){"use strict";a.r(e);var n=a(5),i=a(11),c=a(319),s=a(1753),r=a(7),d=a(0),u=a(3),o=a(59),l=a(20),j=a(1),b=function(t){var e=t.entity,a=Object(i.useDatesListFilterState)().displayStartOrEndDate,n=Object(i.useDatetimeMutator)(e.id).updateEntity,s=Object(l.useTimeZoneTime)().siteTimeToUtc,b=Object(d.useCallback)((function(t){var e=Object(r.a)(t,2),a=e[0],i=e[1],c=s(a).toISOString(),d=s(i).toISOString();n({startDate:c,endDate:d})}),[s,n]),O=Object(c.getDatetimeStatusTextLabel)(e),v=Object(d.useMemo)((function(){return{headerFuture:"start"===a?Object(u.__)("starts"):Object(u.__)("ends"),headerPast:"start"===a?Object(u.__)("started"):e.isExpired?Object(u.__)("ended"):Object(u.__)("ends")}}),[e.isExpired,a]);return e?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.CalendarDateSwitcher,{displayDate:a,labels:v,endDate:e.endDate,startDate:e.startDate}),Object(j.jsx)(o.EditDateRangeButton,{endDate:e.endDate,header:Object(u.__)("Edit Event Date"),onChange:b,popoverPlacement:"right-end",startDate:e.startDate,tooltip:Object(u.__)("edit start and end dates")}),Object(j.jsx)("div",{className:"ee-entity-status-label",children:O})]}):null},O=a(2),v=a(29),p=a(9),m=a(1748),y=a(1749),_=function(t){var e=t.adminUrl,a=t.entity,i=t.eventId,c=Object(d.useMemo)((function(){return[{id:"ee-event-date-sold",label:Object(u.__)("sold"),value:Object(j.jsx)(n.EntityDetailsPanelSold,{adminUrl:e,dbId:a.dbId,eventId:i,sold:a.sold,type:"date"})},{id:"ee-event-date-capacity",label:Object(u.__)("capacity"),value:Object(j.jsx)(y.a,{entity:a})},{id:"ee-event-date-registrations",className:"ee-has-tooltip",label:Object(u.__)("reg list"),value:Object(j.jsx)(m.a,{datetime:a})}]}),[e,a,i]);return Object(j.jsx)(n.EntityDetailsPanel,{details:c,className:"ee-editor-date-details-sold-rsrvd-cap-div"})},f=a(1754),x=a(446),E=function(t){return Object(x.c)("datetime",t)},D=function(t){var e=t.entity,a=Object(l.useConfig)().siteUrl,c=Object(d.useMemo)((function(){return Object(l.getAdminUrl)({adminSiteUrl:a.admin,page:v.ADMIN_ROUTES.REGISTRATIONS})}),[a.admin]),s=Object(i.useEventId)(),r=Object(i.useDatetimeMutator)(e.id).updateEntity,b=Object(d.useCallback)((function(t){r({description:t})}),[r]),m=E(e.id),y=Object(d.useMemo)((function(){return i.hooks.applyFilters("eventEditor.datetimes.inlineDescriptionProps",v.EMPTY_OBJECT,e)}),[e]),x=Object(i.useVenues)(),D=Object(d.useMemo)((function(){return Object(p.findEntityByGuid)(x)(null===e||void 0===e?void 0:e.venue)}),[null===e||void 0===e?void 0:e.venue,x]),g=Object(d.useCallback)((function(t){return r({venue:t})}),[r]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.a,{className:"entity-card-details__name",entity:e}),Object(j.jsx)(o.SimpleTextEditorModal,Object(O.a)({className:"entity-card-details__text",onUpdate:b,text:e.description||Object(u.__)("add description\u2026"),title:Object(u.__)("Edit description"),tooltip:Object(u.__)("click to edit description\u2026")},y)),Object(j.jsx)(n.VenueSelector,{align:"center",className:"ee-event-venue",inline:!0,noBorderColor:!0,onChangeValue:g,value:null===e||void 0===e?void 0:e.venue,venueName:null===D||void 0===D?void 0:D.name,venues:x}),m,Object(j.jsx)(_,{adminUrl:c,entity:e,eventId:s})]})},g=function(t){var e=t.id,a=Object(i.useDatetimeItem)({id:e}),r=Object(c.datetimeStatusBgColorClassName)(a);return a?Object(j.jsx)(n.EntityCard,{actionsMenu:Object(j.jsx)(s.a,{entity:a,layout:n.EntityActionsMenuLayout.Vertical}),details:Object(j.jsx)(D,{entity:a}),entity:a,sidebar:Object(j.jsx)(b,{entity:a}),sidebarClass:r}):null};e.default=function(){var t=Object(i.useFilteredDateIds)();return Object(j.jsx)(n.EntityCardList,{EntityCard:g,entityIds:t})}}}]);
//# sourceMappingURL=dates-card-view.776417c3.chunk.js.map