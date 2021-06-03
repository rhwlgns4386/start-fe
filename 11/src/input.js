import { render } from './html-render';
import todoModel from './todo-model'

const $input=document.querySelector('#input');
const $inputFrom=document.querySelector('#input-form');



function init(data){
    $inputFrom.addEventListener('submit',()=>{
        event.preventDefault();
        const text=$input.value;
        if(!text) return;
        $input.value='';

        data.push({
            ...todoModel,
            text,
            isDone: false,
        });

        render(data);
    });
}

export default{
    init,
}