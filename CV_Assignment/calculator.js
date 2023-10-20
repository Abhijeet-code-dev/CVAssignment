let string = "";

let btnEl = document.querySelectorAll('.btn');
let outputEl = document.querySelector('#output');
btnEl.forEach(item=>{
    item.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML);
        
        if( e.target.innerHTML== "="){
            try{
            string = eval(string);
            outputEl.innerText = string;
            
            }
            catch(error){
                outputEl.innerText = 'Error';
            }
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            outputEl.innerText = string;
        }
        else{
            string += e.target.innerHTML;
            outputEl.innerText = string;
        }
         
        
    })
})