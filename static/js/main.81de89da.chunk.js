(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={title:"Filter_title__1Ts-M",input:"Filter_input__2UtmW","modal-form-icon":"Filter_modal-form-icon__1UDOD"}},28:function(t,e,n){},29:function(t,e,n){},3:function(t,e,n){t.exports={input:"ContactForm_input__1ui_D","modal-form-icon":"ContactForm_modal-form-icon__3y4T2",title:"ContactForm_title__1FKcF",text:"ContactForm_text__2IeJN",button:"ContactForm_button__3TCPP"}},39:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=n(17),s=n(6),l=n(14),u=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],d=Object(s.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"contact/add":var c=t.some((function(t){return t.name===a.name}));return c?(alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(a.name," \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d")),t):[].concat(Object(o.a)(t),[a]);case"contact/delete":return t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return"contact/filter"===n?a:t}}),m=Object(s.combineReducers)({contacts:d}),b=Object(s.createStore)(m,Object(l.composeWithDevTools)()),j=n(2),f=(n(28),n(29),n(13)),p=n(16),h=n.n(p),x=n(3),_=n.n(x),O=n(1);var v=Object(j.b)(null,(function(t){return{onSumbit:function(e,n){return t(function(t,e){return{type:"contact/add",payload:{id:h.a.generate(),name:t,number:e}}}(e,n))}}}))((function(t){var e=t.onSumbit,n=Object(a.useState)(""),c=Object(f.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),s=Object(f.a)(o,2),l=s[0],u=s[1],d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":u(a);break;default:return}},m=function(){i(""),u("")};return Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,l),console.log(r,l),m()},children:[Object(O.jsx)("h1",{className:_.a.title,children:"Phonebook "}),Object(O.jsxs)("label",{className:_.a.label,children:[Object(O.jsx)("p",{className:_.a.text,children:"Name"}),Object(O.jsx)("input",{type:"text",className:_.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:d})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{className:_.a.text,children:"Number"}),Object(O.jsx)("input",{type:"tel",className:_.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:d})]}),Object(O.jsx)("button",{type:"submit",className:_.a.button,children:"Add contact"})]})})),C=n(4),N=n.n(C);var g=Object(j.b)((function(t){return{contacts:(e=t.contacts.items,n=t.contacts.filter,e.filter((function(t){return t.name.toLowerCase().includes(n.trim().toLowerCase())})))};var e,n}),(function(t){return{deleteContact:function(e){return t(function(t){return{type:"contact/delete",payload:t}}(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(O.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsxs)("li",{className:N.a.item,children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:N.a.text,children:["Name: ",Object(O.jsx)("span",{className:N.a.text_d,children:a})]}),Object(O.jsxs)("p",{className:N.a.text,children:["Number: ",Object(O.jsx)("span",{className:N.a.text_d,children:c})]})]}),Object(O.jsx)("button",{type:"button",id:e,className:N.a.button,onClick:function(){return n(e)},children:"delete"})]},e)}))})})),y=n(12),F=n.n(y);var S=Object(j.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{handelChangeFilter:function(e){return t(function(t){return{type:"contact/filter",payload:t}}(e))}}}))((function(t){var e=t.filter,n=t.handelChangeFilter;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:F.a.title,children:"Find contacts by name"}),Object(O.jsx)("input",{className:F.a.input,type:"text",name:"filter",value:e,onChange:function(t){return n(t.currentTarget.value)}})]})}));var k=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{}),Object(O.jsx)(S,{}),Object(O.jsx)(g,{})]})};console.log(b.getState()),i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(j.a,{store:b,children:Object(O.jsx)(k,{})})}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"ContactList_list__YrtUj",text:"ContactList_text__yF7d0",text_d:"ContactList_text_d__1RtxN",item:"ContactList_item__D8V31",button:"ContactList_button__2hE9L"}}},[[39,1,2]]]);
//# sourceMappingURL=main.81de89da.chunk.js.map