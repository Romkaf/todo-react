(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],[,,,,,,,,function(e,t,o){e.exports=o(20)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(6),i=o.n(a),l=o(7),c=o(1),d=o(2),s=o(4),u=o(3),m=(o(13),function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).todoInputHandler=function(t){if(t.keyCode===f.ENTER||"blur"===t.type){var o=t.target.value.trim().replace(/\s+/g," ");o&&e.props.addTodo(o),t.target.value=""}},e}return Object(d.a)(o,[{key:"render",value:function(){var e=this.props,t=e.todosArray,o=e.selectAll,n=t.length>0?"visible":"hidden",a=t.every((function(e){return e.completed}))?1:.2,i=t.every((function(e){return e.completed}))?"ckecked":"";return r.a.createElement("header",{className:"todo-header"},r.a.createElement("h1",{className:"todo-header__title"},"ToDo"),r.a.createElement("input",{className:"todo-header__choice-all",id:"choice-all",type:"checkbox",onClick:o,checked:i,readOnly:!0}),r.a.createElement("label",{style:{opacity:a,visibility:n},htmlFor:"choice-all"},"\u2039"),r.a.createElement("input",{className:"todo-header__input",type:"text",placeholder:"\u0427\u0442\u043e \u043d\u0430\u0434\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?",onBlur:this.todoInputHandler,onKeyDown:this.todoInputHandler}))}}]),o}(n.PureComponent)),f={ENTER:13,ESC:27},p=(o(14),function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={visibilityElement:"visible",isEditing:!1,value:""},e.onTaskDblClick=function(t){e.setState({visibilityElement:"hidden",isEditing:!0,value:t.target.textContent}),t.target.parentNode.classList.add("todo-item--editing")},e.finishTodoEditing=function(t){if(t.keyCode===f.ENTER||"blur"===t.type||t.keyCode===f.ESC){var o=t.target;if(!e.state.isEditing)return;var n=t.keyCode===f.ESC?e.props.title:o.value.trim().replace(/\s+/g," ");if(e.deleteEmptyTask(t,n))return;e.props.editTodo(n),o.parentNode.classList.remove("todo-item--editing"),e.setState({visibilityElement:"visible",isEditing:!1})}},e.deleteEmptyTask=function(t,o){if(!o)try{return t.target.parentNode.remove(),e.props.deleteTodo(),"return"}catch(n){return}},e.onChangeHandler=function(t){e.setState({value:t.target.value})},e}return Object(d.a)(o,[{key:"render",value:function(){var e=this.props,t=e.title,o=e.completed,n=e.selectTodo,a=e.deleteTodo,i=!0===o?"todo-item--completed":"",l=!0===o,c={visibility:this.state.visibilityElement};return r.a.createElement("div",{className:"todo-item ".concat(i)},r.a.createElement("input",{className:"todo-item__choice",type:"checkbox",style:c,onClick:n,checked:l,readOnly:!0}),r.a.createElement("label",{style:c},"\u2713"),this.state.isEditing?r.a.createElement("input",{className:"todo-item__task",onKeyDown:this.finishTodoEditing,onBlur:this.finishTodoEditing,value:this.state.value,onChange:this.onChangeHandler,autoFocus:!0}):r.a.createElement("span",{className:"todo-item__task",onDoubleClick:this.onTaskDblClick},t),r.a.createElement("button",{className:"todo-item__delete",style:c,onClick:a},"\u274c"))}}]),o}(n.PureComponent)),h=function(e){var t=e.todosArray,o=e.selectTodo,n=e.deleteTodo,a=e.editTodo,i=t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{title:e.title,completed:e.completed,selectTodo:function(){return o(e.id)},deleteTodo:function(){return n(e.id)},editTodo:function(t){return a(e.id,t)}}))}));return r.a.createElement("ul",{className:"todo-list"},i)},y=(o(15),o(16),function(e){var t=e.activeTodosAmount;return r.a.createElement("span",{className:"counter"},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0439:",r.a.createElement("b",null,t))}),v=(o(17),function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).buttons=[{title:"\u0412\u0441\u0435",filter:"all"},{title:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435",filter:"active"},{title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",filter:"completed"}],e}return Object(d.a)(o,[{key:"render",value:function(){var e=this.props,t=e.changeFilter,o=e.filter,n=this.buttons.map((function(e){var n=e.filter===o?"filter__btn--active":"";return r.a.createElement("button",{className:"filter__btn ".concat(n),type:"button",key:e.filter,onClick:function(){return t(e.filter)}},e.title)}));return r.a.createElement("div",{className:"filter"},n)}}]),o}(n.PureComponent)),b=(o(18),function(e){var t=e.completedTodosAmount,o=e.deleteCompleted,n=t>0?"visible":"hidden";return r.a.createElement("button",{className:"btn-clear-completed",style:{visibility:n},onClick:o},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")}),E=function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){return Object(c.a)(this,o),t.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var e=this.props,t=e.activeTodosAmount,o=e.completedTodosAmount,n=e.changeFilter,a=e.filter,i=e.deleteCompleted;return r.a.createElement("footer",{className:"todo-footer"},r.a.createElement(y,{activeTodosAmount:t}),r.a.createElement(v,{changeFilter:n,filter:a}),r.a.createElement(b,{completedTodosAmount:o,deleteCompleted:i}))}}]),o}(n.PureComponent),T=(o(19),function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={todosArray:[],filter:"all"},e.id=1,e.changeFilter=function(t){e.setState({filter:t})},e.filterTodos=function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}},e.addTodo=function(t){var o=e.createTodo(t);e.setState((function(e){var t=e.todosArray;return{todosArray:[].concat(Object(l.a)(t),[o])}}))},e.deleteTodo=function(t){e.setState((function(e){return{todosArray:e.todosArray.filter((function(e){return!(e.id===t)}))}}))},e.deleteCompletedTodo=function(){e.setState((function(e){return{todosArray:e.todosArray.filter((function(e){return!e.completed}))}}))},e.selectTodo=function(t){e.setState((function(e){return{todosArray:e.todosArray.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))}}))},e.editTodo=function(t,o){e.setState((function(e){return{todosArray:e.todosArray.map((function(e){return e.id===t&&(e.title=o),e}))}}))},e.selectAllTodo=function(){e.setState((function(e){var t=e.todosArray;return{todosArray:t.every((function(e){return!0===e.completed}))?t.map((function(e){return Object.assign(e,{completed:!1})})):t.map((function(e){return Object.assign(e,{completed:!0})}))}}))},e.setLocalStorage=function(e){localStorage.setItem("todos",JSON.stringify(e))},e.loadLocalStorage=function(){e.setState({todosArray:JSON.parse(localStorage.getItem("todos"))||[]})},e}return Object(d.a)(o,[{key:"createTodo",value:function(e){return{title:e,id:this.id++,completed:!1}}},{key:"componentDidMount",value:function(){this.loadLocalStorage()}},{key:"componentDidUpdate",value:function(){var e=this.state.todosArray;this.setLocalStorage(e),this.id=0===e.length?1:e[e.length-1].id+1}},{key:"render",value:function(){var e=this.state,t=e.todosArray,o=e.filter,n=t.filter((function(e){return!1===e.completed})).length,a=t.length-n,i=this.filterTodos(t,o);return r.a.createElement("div",{className:"todo-app"},r.a.createElement(m,{addTodo:this.addTodo,todosArray:t,selectAll:this.selectAllTodo}),r.a.createElement("main",null,r.a.createElement(h,{todosArray:i,selectTodo:this.selectTodo,deleteTodo:this.deleteTodo,editTodo:this.editTodo})),t.length>0&&r.a.createElement(E,{activeTodosAmount:n,completedTodosAmount:a,changeFilter:this.changeFilter,filter:o,deleteCompleted:this.deleteCompletedTodo}))}}]),o}(n.PureComponent));i.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.5cbaeb32.chunk.js.map