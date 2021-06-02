const $input=document.querySelector('#input');
const $inputFrom=document.querySelector('#input-form');
import { render } from './html-render';
import todoModel from './todo-model'


function init(data){
    $inputFrom.addEventListener('submit',()=>{
        event.preventDefault();
        const text=$input.value;
        
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