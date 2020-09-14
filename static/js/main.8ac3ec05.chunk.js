(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={item:"todo-item_item__1hcun",item__delete:"todo-item_item__delete__QtV_b",item_completed:"todo-item_item_completed__3OddF",item__task:"todo-item_item__task__2_7v4",item_editing:"todo-item_item_editing__3z1VE",item__choice:"todo-item_item__choice__37uWW"}},function(e,t,n){e.exports={header__title:"header_header__title__S2SvR",header__choiceAll:"header_header__choiceAll__-LNRD",header__choiceAll_selected:"header_header__choiceAll_selected__2VipH",header__input:"header_header__input__2DHd4"}},,function(e,t,n){e.exports={filter:"filter_filter__Wh2jy",filter__btn:"filter_filter__btn__3NoZH",filter__btn_active:"filter_filter__btn_active__2imUc"}},function(e,t,n){e.exports={app:"app_app__2qDTA"}},,,function(e,t,n){e.exports={footer:"footer_footer__EQtlF"}},function(e,t,n){e.exports={counter:"counter_counter__2C2zj"}},function(e,t,n){e.exports={btn:"btn-clear-completed_btn__3XeC0"}},,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(13),r=n.n(l),i=(n(23),n(9)),c=n(17),d=n(2),s=n(3),u=n(6),m=n(5),h=n(1),p=n(8),_=n.n(p),f=13,v=27,y=n(4),b=n.n(y),A=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={value:""},e.handleValidateValue=function(t){var n=t.target.value.trim().replace(/\s+/g," ");n&&e.props.onTodoAdd(n),e.setState({value:""})},e.handleInputBlur=function(t){"blur"===t.type&&e.handleValidateValue(t)},e.handleInputEnter=function(t){t.keyCode===f&&e.handleValidateValue(t)},e.handleInputChange=function(t){return e.setState({value:t.target.value})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=_.a.header,t=_.a.header__title,n=_.a.header__choiceAll,o=_.a.header__choiceAll_selected,l=_.a.header__input,r=this.props,i=r.todosArray,c=r.onAllTodoSelect,d=b()(n,Object(h.a)({hidden:0===i.length},o,i.every((function(e){return e.completed}))));return a.a.createElement("header",{className:e},a.a.createElement("h1",{className:t},"ToDo"),a.a.createElement("span",{className:d,onClick:c},"\u2039"),a.a.createElement("input",{className:l,type:"text",placeholder:"\u0427\u0442\u043e \u043d\u0430\u0434\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?",onChange:this.handleInputChange,value:this.state.value,onBlur:this.handleInputBlur,onKeyDown:this.handleInputEnter}))}}]),n}(o.PureComponent),T=n(7),g=n.n(T),E=(n(24),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={visibilityElement:"visible",isEditing:!1,value:""},e.handleTaskDblClick=function(t){e.setState({visibilityElement:"hidden",isEditing:!0,value:t.target.textContent})},e.handleTodoEditingComplete=function(t){var n=t.target,o=t.keyCode===v?e.props.title:n.value.trim().replace(/\s+/g," ");o?e.props.onTodoEdit(o):e.props.onTodoDelete(),e.setState({visibilityElement:"visible",isEditing:!1})},e.handleInputBlur=function(t){"blur"===t.type&&e.handleTodoEditingComplete(t)},e.handleInputKeyDown=function(t){t.keyCode!==f&&t.keyCode!==v||e.handleTodoEditingComplete(t)},e.handleInputChange=function(t){e.setState({value:t.target.value})},e}return Object(s.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.title,o=t.completed,l=t.onTodoSelect,r=t.onTodoDelete,i=g.a.item,c=g.a.item_completed,d=g.a.item_editing,s=g.a.item__choice,u=g.a.item__task,m=g.a.item__delete,p=b()(i,(e={},Object(h.a)(e,c,!0===o),Object(h.a)(e,d,!0===this.state.isEditing),e)),_="hidden"===this.state.visibilityElement?"hidden":"",f=!0===o;return a.a.createElement("div",{className:p},a.a.createElement("input",{className:"".concat(s,"  ").concat(_),type:"checkbox",onClick:l,checked:f,readOnly:!0}),a.a.createElement("label",{className:_},"\u2713"),this.state.isEditing?a.a.createElement("input",{className:u,onKeyDown:this.handleInputKeyDown,onBlur:this.handleInputBlur,value:this.state.value,onChange:this.handleInputChange,autoFocus:!0}):a.a.createElement("span",{className:u,onDoubleClick:this.handleTaskDblClick},n),a.a.createElement("button",{className:"".concat(m," ").concat(_),onClick:r},a.a.createElement("span",{role:"img","aria-label":"cross"},"\u274c")))}}]),n}(o.PureComponent)),C=function(e){var t=e.todosArray,n=e.onTodoSelect,o=e.onTodoDelete,l=e.onTodoEdit,r=t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(E,{title:e.title,completed:e.completed,onTodoSelect:function(){return n(e.id)},onTodoDelete:function(){return o(e.id)},onTodoEdit:function(t){return l(e.id,t)}}))}));return a.a.createElement("ul",{className:"todo-list"},r)},S=n(14),k=n.n(S),O=n(15),j=n.n(O),D=function(e){var t=e.activeTodosAmount;return a.a.createElement("span",{className:j.a.counter},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0439:",a.a.createElement("b",null,t))},N=n(10),I=n.n(N),x=function(e){var t=e.onFilterChange,n=e.filter,o=function(e){t(e.target.dataset.filter)},l=[{title:"\u0412\u0441\u0435",filter:"all"},{title:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435",filter:"active"},{title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",filter:"completed"}].map((function(e){var t=b()(I.a.filter__btn,Object(h.a)({},I.a.filter__btn_active,e.filter===n));return a.a.createElement("button",{className:t,type:"button",key:e.filter,"data-filter":e.filter,onClick:o},e.title)}));return a.a.createElement("div",{className:"filter"},l)},w=n(16),F=n.n(w),V=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e){return 0===this.props.completedTodosAmount&&e.completedTodosAmount>0||this.props.completedTodosAmount>0&&0===e.completedTodosAmount}},{key:"render",value:function(){var e=this.props,t=e.completedTodosAmount,n=e.onCompletedDelete,o=b()(F.a.btn,{hidden:0===t});return a.a.createElement("button",{className:o,onClick:n},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")}}]),n}(o.Component),B=function(e){var t=e.activeTodosAmount,n=e.completedTodosAmount,o=e.onFilterChange,l=e.filter,r=e.onCompletedTodoDelete;return a.a.createElement("footer",{className:k.a.footer},a.a.createElement(D,{activeTodosAmount:t}),a.a.createElement(x,{onFilterChange:o,filter:l}),a.a.createElement(V,{completedTodosAmount:n,onCompletedDelete:r}))},L=n(11),J=n.n(L),K=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={todosArray:[],filter:"all",allCompleted:!1},e.id=1,e.handleFilterChange=function(t){e.setState({filter:t})},e.filterTodos=function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}},e.handleTodoAdd=function(t){e.setState({todosArray:[].concat(Object(c.a)(e.state.todosArray),[e.createTodo(t)])})},e.handleTodoDelete=function(t){e.setState((function(e){return{todosArray:e.todosArray.filter((function(e){return!(e.id===t)}))}}))},e.handleCompletedTodoDelete=function(){e.setState((function(e){return{todosArray:e.todosArray.filter((function(e){return!e.completed}))}}))},e.handleTodoSelect=function(t){e.setState((function(e){return{todosArray:e.todosArray.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e}))}}))},e.handleTodoEdit=function(t,n){e.setState((function(e){return{todosArray:e.todosArray.map((function(e){return e.id===t&&(e.title=n),e}))}}))},e.handleAllTodoSelect=function(){e.setState((function(e){var t=e.todosArray,n=e.allCompleted;return{todosArray:t.map((function(e){return e.completed===n?Object(i.a)(Object(i.a)({},e),{},{completed:!n}):e})),allCompleted:!n}}))},e.handleAllCompletedChange=function(){var t=!!e.state.todosArray.every((function(e){return!0===e.completed}));e.setState({allCompleted:t})},e.setLocalStorage=function(e){localStorage.setItem("todos",JSON.stringify(e))},e.loadLocalStorage=function(){e.setState({todosArray:JSON.parse(localStorage.getItem("todos"))||[]})},e}return Object(s.a)(n,[{key:"createTodo",value:function(e){return{title:e,id:this.id++,completed:!1}}},{key:"componentDidMount",value:function(){this.loadLocalStorage()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.todosArray;t.todosArray!==n&&(this.setLocalStorage(n),this.id=0===n.length?1:n[n.length-1].id+1),this.handleAllCompletedChange()}},{key:"render",value:function(){var e=this.state,t=e.todosArray,n=e.filter,o=t.filter((function(e){return!1===e.completed})).length,l=t.length-o,r=this.filterTodos(t,n);return a.a.createElement("div",{className:J.a.app},a.a.createElement(A,{onTodoAdd:this.handleTodoAdd,todosArray:t,onAllTodoSelect:this.handleAllTodoSelect}),a.a.createElement("main",null,a.a.createElement(C,{todosArray:r,onTodoSelect:this.handleTodoSelect,onTodoDelete:this.handleTodoDelete,onTodoEdit:this.handleTodoEdit})),t.length>0&&a.a.createElement(B,{className:J.a.hidden,activeTodosAmount:o,completedTodosAmount:l,onFilterChange:this.handleFilterChange,filter:n,onCompletedTodoDelete:this.handleCompletedTodoDelete}))}}]),n}(o.PureComponent);r.a.render(a.a.createElement(K,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8ac3ec05.chunk.js.map