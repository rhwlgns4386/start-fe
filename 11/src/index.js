import "./todos.css";

import{loadData} from'./data-manager';
import {render} from './html-render';
import input from './input';

const $result = document.querySelector('#result');

const todos = loadData();

$result.addEventListener('click',(event)=>{
    const className=(event.target.className);
    if(className==='delete'){
        const { index } = event.target.parentElement.dataset;
        todos.splice(index, 1);
        render(todos);
    }
    else if(className==='toggle-checked'){
        const { index } = event.target.parentElement.dataset;
        todos[index].isDone = !todos[index].isDone; //toggle 반전
        render(todos);
    }
    console.log(event.target);
})

input.init(todos);
render(todos);