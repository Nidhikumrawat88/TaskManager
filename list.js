let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        AddItem(this.value)
        this.value = ""
    }
})
let AddItem = (input)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `${input}<i></i>`;
     
listItem.addEventListener("click",function(){
    this.classList.toggle('done');
})

listItem.querySelector("i").addEventListener("click",function(){
    listItem.remove();
})
    list.appendChild(listItem);

}