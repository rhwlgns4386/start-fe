import "./todos.css";
import {render} from './html-render';
import input from './input';

const $result = document.querySelector('#result');

const todos=[
{
    id:'1',
    text:'js공부',
    isDone:false,
}
];

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