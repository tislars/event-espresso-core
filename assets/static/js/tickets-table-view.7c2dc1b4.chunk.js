(this.webpackJsonproot=this.webpackJsonproot||[]).push([[23],{3048:function(e,t,n){"use strict";var i=n(5),c=n(8),a=n(12),r=n(0);t.a=function(e){var t=e.ticket,n=Object(a.useRegistrationsLink)({ticket_id:t.dbId}),s=Object(i.__)("total registrations."),l=Object(i.__)("view ALL registrations for this ticket.");return Object(r.jsx)(c.ItemCount,{count:t.registrationCount,emphasizeZero:!1,title:s,children:Object(r.jsx)(c.RegistrationsLink,{href:n,tooltip:l})})}},3049:function(e,t,n){"use strict";var i=n(1),c=n(5),a=n(17),r=n(8),s=n(12),l=n(0);t.a=function(e){var t=e.entity,n=Object(s.useTicketMutator)(t.id).updateEntity,o=Object(i.useCallback)((function(e){var i=Object(a.parseInfinity)(e);i!==t.quantity&&n({quantity:i})}),[t.quantity,n]);return Object(l.jsx)(r.InlineEditInfinity,{onChange:o,value:"".concat(t.quantity),tooltip:Object(c.__)("edit quantity of tickets available\u2026")})}},3050:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return _}));var i=n(1),c=n(5),a=n(12),r=n(8),s=n(0),l=function(e){var t=e.className,n=e.entity,l=e.view,o=void 0===l?"card":l,u=Object(a.useTicketMutator)(n.id).updateEntity,b="card"===o&&2,j=Object(i.useCallback)((function(e){e!==n.name&&u({name:e})}),[n.name,u]),O=Object(c.__)("edit title\u2026"),d=n.name||O;return Object(s.jsx)(r.InlineEditText,{className:t,lineCount:b,onChange:j,tag:"table"===o?"div":"h4",tooltip:O,value:d})},o=n(26),u=n(82),b=n(22),j=n(21),O=n(10),d=n(118),f=n(38),p=n.n(f),m=n(46),k=n(2),y=n(56),v=function(e){var t=Object(a.useLazyTicket)(),n=Object(a.useTicketPrices)(),c=Object(d.useInitialState)({ticketId:e,getTicket:t,getTicketPrices:n}),r=Object(d.useDefaultBasePrice)(),s=Object(d.useMutatePrices)(),l=Object(a.useTicketMutator)(e).updateEntity;return Object(i.useCallback)(function(){var e=Object(y.a)(p.a.mark((function e(t){var n,i,a,o,u,b,j,f,y;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c(null),a=Object(k.a)(Object(k.a)({},i.ticket),{},{price:t}),i=Object(k.a)(Object(k.a)({},i),{},{ticket:a}),o=Object(O.getBasePrice)(i.prices),u=Object(O.getPriceModifiers)(i.prices),b=Object(d.calculateBasePrice)(null===(n=i.ticket)||void 0===n?void 0:n.price,i.prices),j=o?Object(k.a)(Object(k.a)({},o),{},{isModified:!0}):Object(k.a)(Object(k.a)({},r),{},{order:1,isNew:!0}),f=[Object(k.a)(Object(k.a)({},j),{},{amount:b})].concat(Object(m.a)(u)),e.next=10,s(f);case 10:return y=e.sent,e.next=13,l({price:t,reverseCalculate:!0,prices:y});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[r,c,s,l])},_=function(e){var t=e.entity,n=e.className,a=Object(j.useMoneyDisplay)(),l=a.afterAmount,f=a.beforeAmount,p=a.formatAmount,m=v(t.id),k=Object(i.useCallback)((function(e){var n=e.amount,i=parseFloat(n);i!==t.price&&m(i)}),[m,t.price]),y=Object(d.useLockedTicketAction)(t,"COPY/TRASH"),_=y.alertContainer,x=y.showAlert,h=Object(b.useMemoStringify)({className:n}),g=Object(O.isLocked)(t),T=Object(c.__)("edit ticket total\u2026");return g?Object(s.jsxs)(o.Clickable,{as:"div",onClick:x,children:[Object(s.jsx)(u.CurrencyDisplay,{className:n,value:t.price}),_]}):Object(s.jsx)(r.InlineEditCurrency,{afterAmount:l,amount:t.price,beforeAmount:f,formatAmount:p,id:t.id,placeholder:Object(c.__)("set price\u2026"),wrapperProps:h,onChange:k,tag:"h3",tooltip:T})}},3053:function(e,t,n){"use strict";var i=n(2),c=n(7),a=n(8),r=n(577),s=function(e){return Object(r.b)("ticket",e)},l=n(0);t.a=function(e){var t=e.entity,n=Object(c.a)(e,["entity"]),r=s(t);return Object(l.jsx)(a.EntityActionsMenu,Object(i.a)(Object(i.a)({},n),{},{menuItems:r}))}},3054:function(e,t,n){"use strict";n.r(t);var i=n(5),c=n(82),a=n(1),r=n(12),s=n(2),l=n(13),o=n(21),u=n(0),b=Object(o.withFeature)("use_bulk_edit")((function(e){var t=Object(r.useVisibleTicketIds)(),n=Object(l.a)(t,1)[0];return Object(u.jsx)(c.ActionCheckbox,Object(s.a)(Object(s.a)({},e),{},{visibleEntityIds:n}))})),j=function(){var e=Object(a.useMemo)((function(){return{className:"ee-entity-list-status-stripe",key:"stripe",size:"nano",textAlign:"center",value:""}}),[]),t=Object(a.useMemo)((function(){return{key:"id",size:"micro",textAlign:"end",value:Object(i.__)("ID")}}),[]),n=Object(a.useMemo)((function(){return{key:"name",size:"huge",value:Object(i.__)("Name")}}),[]),c=Object(a.useMemo)((function(){return{key:"start",size:"default",value:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"ee-rspnsv-table-long-label",children:Object(i.__)("Goes on Sale")}),Object(u.jsx)("span",{className:"ee-rspnsv-table-short-label",children:Object(i.__)("On Sale")})]})}}),[]),s=Object(a.useMemo)((function(){return{key:"end",size:"default",value:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"ee-rspnsv-table-long-label",children:Object(i.__)("Sale Ends")}),Object(u.jsx)("span",{className:"ee-rspnsv-table-short-label",children:Object(i.__)("Ends")})]})}}),[]),l=Object(a.useMemo)((function(){return{key:"price",size:"tiny",textAlign:"end",value:Object(i.__)("Price")}}),[]),o=Object(a.useMemo)((function(){return{key:"quantity",size:"tiny",textAlign:"end",value:Object(i.__)("Quantity")}}),[]),j=Object(a.useMemo)((function(){return{key:"sold",size:"tiny",textAlign:"end",value:Object(i.__)("Sold")}}),[]),O=Object(a.useMemo)((function(){return{key:"registrations",size:"smaller",textAlign:"center",value:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"ee-rspnsv-table-long-label",children:Object(i.__)("Registrations")}),Object(u.jsx)("span",{className:"ee-rspnsv-table-short-label",children:Object(i.__)("Regs")})]})}}),[]),d=Object(a.useMemo)((function(){return{key:"actions",size:"big",textAlign:"center",value:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"ee-rspnsv-table-long-label",children:Object(i.__)("Actions")}),Object(u.jsx)("span",{className:"ee-rspnsv-table-short-label",children:Object(i.__)("Actions")})]})}}),[]);return Object(a.useCallback)((function(i){var a=i.displayStartOrEndDate,f=i.showBulkActions;return{cells:[e,f&&{key:"checkbox",size:"micro",textAlign:"center",value:Object(u.jsx)("div",{className:"ee-rspnsv-table-hide-on-mobile",children:Object(u.jsx)(b,{})})},t,n,c,s,l,o,j,O,d].filter(Boolean).filter(Object(r.filterCellByStartOrEndDate)(a)),className:"ee-editor-ticket-list-items-header-row",key:"ticket-header-row",primary:!0,type:"row"}}),[t,d,s,n,l,o,O,j,c,e])},O=n(9),d=n.n(O),f=n(25),p=n(446),m=n.n(p),k=n(203),y=n.n(k),v=n(8),_=n(30),x=n(565),h=n(10),g=n(17),T=n(3053),C=n(3049),A=n(3050),S=n(3048),w=function(){var e=Object(r.useTickets)(),t=Object(a.useCallback)((function(t){return Object(h.findEntityByGuid)(e)(t)}),[e]),n=Object(o.useTimeZoneTime)().formatForSite;return Object(a.useCallback)((function(e){var i=e.entityId,a=e.filterState,s=t(i),l=a.displayStartOrEndDate,o=a.showBulkActions,j=Object(x.getTicketBackgroundColorClassName)(s),O=s.dbId||Object(g.shortenGuid)(s.id),p=Object(x.ticketStatus)(s),k={className:d()("ee-entity-list-status-stripe",j),key:"stripe",showValueOnMobile:!0,textAlign:"center",value:s.name},h=o&&{key:"cell",size:"micro",textAlign:"center",value:Object(u.jsx)(b,{dbId:s.dbId,id:s.id})},w={key:"id",size:"micro",textAlign:"end",value:O},E={className:"ee-col-name ee-rspnsv-table-hide-on-mobile",key:"name",size:"huge",value:Object(u.jsx)(A.a,{className:"ee-entity-list-text ee-focus-priority-5",entity:s,view:"table"})},I={key:"start",size:"default",value:n(Object(f.parseISO)(s.startDate),_.ENTITY_LIST_DATE_TIME_FORMAT)},M={key:"end",size:"default",value:n(Object(f.parseISO)(s.endDate),_.ENTITY_LIST_DATE_TIME_FORMAT)},B={key:"price",size:"tiny",textAlign:"end",value:Object(u.jsx)(c.CurrencyDisplay,{value:s.price})},D={key:"sold",size:"tiny",textAlign:"end",value:s.sold},N=[k,h,w,E,I,M,B,{className:"ee-col__inline-edit",key:"quantity",size:"tiny",textAlign:"end",value:Object(u.jsx)(C.a,{entity:s})},D,{key:"registrations",size:"smaller",textAlign:"center",value:Object(u.jsx)(S.a,{ticket:s})},{key:"actions",size:"big",textAlign:"center",value:Object(u.jsx)(T.a,{entity:s})}].filter(Boolean);return{cells:m()(y()(Object(r.filterCellByStartOrEndDate)(l)),Object(v.addZebraStripesOnMobile)(["row","stripe","name","actions"]))(N),className:"ee-editor-date-list-view-row ".concat(p),id:"ee-editor-date-list-view-row-".concat(s.id),key:"row-".concat(s.id),type:"row"}}),[n,t])},E=n(22),I=n(118),M=n(770),B=n.n(M),D=n(3043),N=n(2991),P=n(3044),z=n(54),F=n(38),R=n.n(F),L=n(56),q=n(449),G=n(88),Q=function(){var e=Object(L.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.yupToFinalFormErrors)(Y,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=q.object({name:q.string().min(3,(function(){return Object(i.__)("Name must be at least three characters")}))}),V=Object(z.intervalsToOptions)(B()(["months","weeks","days","hours","minutes"],z.DATE_INTERVALS),!0),Z=function(e){var t=e.onSubmit,n=Object(a.useCallback)((function(e,n){for(var i=arguments.length,c=new Array(i>2?i-2:0),a=2;a<i;a++)c[a-2]=arguments[a];return t.apply(void 0,[e,n].concat(c))}),[t]),c=Object(E.useMemoStringify)({className:"ee-form-item-pair"});return Object(a.useMemo)((function(){return Object(s.a)(Object(s.a)({},e),{},{onSubmit:n,validate:Q,layout:"horizontal",debugFields:["values","errors"],sections:[{name:"basics",icon:D.a,title:Object(i.__)("Basics"),fields:[{name:"name",label:Object(i.__)("Name"),fieldType:"text",min:3},{name:"description",label:Object(i.__)("Description"),fieldType:"simple-text-editor"}]},{name:"dates",icon:N.a,title:Object(i.__)("Dates"),fields:[{name:"shiftDates",label:Object(i.__)("Shift dates"),fieldType:"group",formControlProps:{className:"shift-dates"},subFields:[{name:"value",fieldType:"number",min:1},{name:"unit",fieldType:"select",options:V},{name:"type",fieldType:"select",options:[{label:"",value:""},{label:Object(i.__)("earlier"),value:"earlier"},{label:Object(i.__)("later"),value:"later"}]}]}]},{name:"details",icon:P.a,title:Object(i.__)("Details"),fields:[{name:"quantity",label:Object(i.__)("Quantity For Sale"),fieldType:"number",formControlProps:c,parseAsInfinity:!0,max:1e6,min:-1},{name:"uses",label:Object(i.__)("Number of Uses"),fieldType:"number",parseAsInfinity:!0,formControlProps:c,min:0},{name:"min",label:Object(i.__)("Minimum Quantity"),fieldType:"number",formControlProps:c,max:1e6,min:0},{name:"max",label:Object(i.__)("Maximum Quantity"),fieldType:"number",parseAsInfinity:!0,formControlProps:c,max:1e6,min:-1},{name:"isRequired",label:Object(i.__)("Required Ticket"),fieldType:"switch",formControlProps:c}]}]})}),[c,e,n])},J=function(e){var t=Object(o.useBulkEdit)(),n=t.getSelected,i=t.unSelectAll,c=Object(r.useTickets)(),s=Object(r.useBulkEditTickets)().updateEntities;return Object(a.useCallback)((function(t){e(),i();var a=Object(r.formToBulkUpdateInput)(t,c,n());s(a)}),[c,n,e,i,s])},U=function(e){var t=e.onClose,n=e.isOpen,a=J(t),r=Z({onSubmit:a});return Object(u.jsx)(c.BulkEditDetails,{formConfig:r,isOpen:n,onClose:t,title:Object(i.__)("Bulk edit ticket details"),warning:Object(i.__)("any changes will be applied to ALL of the selected tickets.")})},W=function(e){var t=e.areTrashedTickets,n=e.onClose,i=Object(o.useBulkEdit)(),c=i.getSelected,s=i.unSelectAll,l=Object(r.useBulkDeleteTickets)();return Object(a.useCallback)((function(){n(),s(),l({entityIds:c(),deletePermanently:t})}),[t,l,c,n,s])},H=function(e){var t=e.areTrashedTickets,n=e.onClose,c=W({areTrashedTickets:t,onClose:n}),r=Object(v.useConfirmationDialog)({message:t?Object(i.__)("Are you sure you want to permanently delete these tickets? This action can NOT be undone!"):Object(i.__)("Are you sure you want to trash these tickets?"),title:t?Object(i.__)("Delete tickets permanently"):Object(i.__)("Trash tickets"),onConfirm:c,onCancel:n}),s=r.confirmationDialog,l=r.onOpen;return Object(a.useEffect)((function(){return l()}),[]),Object(u.jsx)(u.Fragment,{children:s})},K=n(26),X=function(e){var t=e.setEditMode,n=Object(a.useCallback)((function(){return t("together")}),[t]),c=Object(a.useCallback)((function(){return t("separate")}),[t]);return Object(u.jsxs)(K.Box,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:[Object(u.jsxs)(K.Box,{children:[Object(u.jsx)(v.Button,{onClick:n,buttonText:Object(i.__)("Edit all prices together")}),Object(u.jsx)("p",{children:Object(i.__)("Edit all the selected ticket prices dynamically")})]}),Object(u.jsx)(v.Divider,{orientation:"vertical"}),Object(u.jsxs)(K.Box,{children:[Object(u.jsx)(v.Button,{onClick:c,buttonText:Object(i.__)("Edit prices individually")}),Object(u.jsx)("p",{children:Object(i.__)("Edit prices for each ticket individually")})]})]})},$=function(e){var t=e.onSubmit,n=e.onReset,c=e.onCancel;return Object(u.jsxs)(v.ButtonRow,{fullWidth:!0,horizontalAlign:"right",topBordered:!0,children:[n&&Object(u.jsx)(v.Button,{buttonText:Object(i.__)("Reset"),onClick:n,type:"reset"}),c&&Object(u.jsx)(v.Button,{buttonText:Object(i.__)("Cancel"),onClick:c}),Object(u.jsx)(v.Button,{buttonText:Object(i.__)("Submit"),buttonType:v.ButtonType.PRIMARY,onClick:t,type:"submit"})]})},ee=n(46),te=function(e){var t=Object(I.useDataState)(),n=t.prices,i=t.ticket,c=Object(o.useBulkEdit)().getSelected,l=Object(I.useMutateTicket)(),u=Object(r.useTicketPrices)(),b=Object(r.useBulkDeletePrices)();return Object(a.useCallback)(Object(L.a)(R.a.mark((function t(){var a,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(),a=c().reduce((function(e,t){return[].concat(Object(ee.a)(e),Object(ee.a)(u(t)))}),[]),r=a.filter(h.isNotDefault),t.next=5,b(Object(h.getGuids)(r));case 5:return t.next=7,Promise.all(c().map(function(){var e=Object(L.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(Object(s.a)(Object(s.a)({},i),{},{id:t,isModified:!0,prices:n}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:case"end":return t.stop()}}),t)}))),[b,c,u,l,e,n,i])},ne=Object(I.withContext)((function(e){var t=e.onClose,n=Object(I.useAddDefaultPrices)();Object(a.useEffect)((function(){n()}),[]);var i=te(t);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(I.TicketPriceCalculator,{}),Object(u.jsx)($,{onSubmit:i,onReset:n})]})}),{ticketId:""}),ie=function(e){var t=e.setTPCState,n=Object(I.useDataState)(),c=n.ticket,r=n.getData;return Object(a.useEffect)((function(){t(r())}),[r]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(i.sprintf)(Object(i.__)("Edit prices for Ticket: %s"),c.name)}),Object(u.jsx)(I.TicketPriceCalculator,{})]})},ce=n(16),ae=function(e,t){var n=Object(I.useOnSubmitPrices)();return Object(a.useCallback)(Object(L.a)(R.a.mark((function i(){return R.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e(),i.next=3,Promise.all(Object.values(t()).map(function(){var e=Object(L.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:case"end":return i.stop()}}),i)}))),[t,e,n])},re=function(e){var t=e.onClose,n=Object(o.useBulkEdit)().getSelected,i=function(){var e=Object(a.useRef)({}),t=Object(a.useCallback)((function(t){var n;e.current=Object(s.a)(Object(s.a)({},e.current),{},Object(ce.a)({},null===t||void 0===t||null===(n=t.ticket)||void 0===n?void 0:n.id,t))}),[e]),n=Object(a.useCallback)((function(){return e.current}),[e]);return Object(a.useMemo)((function(){return{setTPCState:t,getDataStates:n}}),[t,n])}(),c=i.getDataStates,r=i.setTPCState,l=ae(t,c),b=n();return Object(u.jsxs)(u.Fragment,{children:[b.map((function(e){var t=Object(I.withContext)(ie,{ticketId:e});return Object(u.jsx)(t,{setTPCState:r},e)})),Object(u.jsx)($,{onSubmit:l,onCancel:t})]})},se=function(e){var t=e.onClose,n=e.isOpen,c=Object(a.useState)(),r=Object(l.a)(c,2),s=r[0],o=r[1];return Object(u.jsxs)(v.EntityEditModal,{isOpen:n,onClose:t,closeOnOverlayClick:!0,title:Object(i.__)("Bulk edit ticket prices"),children:[!s&&Object(u.jsx)(X,{setEditMode:o}),"together"===s&&Object(u.jsx)(ne,{onClose:t}),"separate"===s&&Object(u.jsx)(re,{onClose:t})]})},le=Object(o.withFeature)("use_bulk_edit")((function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],j=Object(E.useDisclosure)(),O=j.isOpen,d=j.onOpen,f=j.onClose,p=Object(r.useTicketsListFilterState)(),m=p.status,k=p.showBulkActions,y=Object(o.useBulkEdit)().getSelected,_=Object(r.useTickets)(),x=Object(a.useMemo)((function(){return Object(h.entitiesWithGuIdInArray)(_,y()).some((function(e){return Boolean(e.sold)}))}),[_,y]),g=m===h.TicketsStatus.trashedOnly,T=Object(E.useMemoStringify)([{value:"",label:Object(i.__)("bulk actions")},{value:"edit-details",label:Object(i.__)("edit ticket details")},{value:"delete",label:g?Object(i.__)("delete tickets"):Object(i.__)("trash tickets")},{value:"edit-prices",label:Object(i.__)("edit ticket prices"),disabled:x}]),C=Object(a.useCallback)((function(e){s(e),d()}),[d]);return Object(u.jsxs)(v.Collapsible,{show:k,children:[Object(u.jsx)(c.BulkActions,{Checkbox:b,defaultAction:"",id:"ee-bulk-edit-tickets-actions",onApply:x?null:C,options:T}),O&&Object(u.jsxs)(u.Fragment,{children:["edit-details"===n&&Object(u.jsx)(U,{isOpen:!0,onClose:f}),"delete"===n&&Object(u.jsx)(H,{areTrashedTickets:g,onClose:f}),"edit-prices"===n&&Object(u.jsx)(se,{isOpen:!0,onClose:f})]}),Object(u.jsx)(v.ErrorMessage,{message:x&&I.SOLD_TICKET_ERROR_MESSAGE,variant:"subtle"})]})}));t.default=Object(o.withBulkEdit)((function(){var e=Object(r.useTicketsListFilterState)(),t=Object(r.useFilteredTicketIds)(),n=Object(r.useReorderTickets)(t).sortResponder,a=w(),s=j();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(le,{}),Object(u.jsx)(c.EntityTable,{bodyRowGenerator:a,domain:r.domain,entityIds:t,filterState:e,headerRowGenerator:s,listId:r.ticketsList,onSort:n,tableCaption:Object(i.__)("Tickets"),tableId:"ticket-entities-table-view"})]})}))},355:function(e,t,n){var i=n(48)(n(121));e.exports=i},446:function(e,t,n){var i=n(86),c=n(615),a=n(355),r=n(616);e.exports=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return i(arguments[0].length,a(c,arguments[0],r(arguments)))}},457:function(e,t,n){var i=n(66);e.exports=function(e,t){return function(){var n=arguments.length;if(0===n)return t();var c=arguments[n-1];return i(c)||"function"!==typeof c[e]?t.apply(this,arguments):c[e].apply(c,Array.prototype.slice.call(arguments,0,n-1))}}},615:function(e,t){e.exports=function(e,t){return function(){return t.call(this,e.apply(this,arguments))}}},616:function(e,t,n){var i=n(457),c=n(29)(i("tail",n(617)(1,1/0)));e.exports=c},617:function(e,t,n){var i=n(457),c=n(48)(i("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)})));e.exports=c}}]);
//# sourceMappingURL=tickets-table-view.7c2dc1b4.chunk.js.map