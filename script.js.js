// // let todo = [];
// //  let req = prompt("please enter your request");
// //  while(true){
// //     if(req=="quit"){
// //         console.log("you quit the app");
// //         break;
// //     }
// //      if(req=="list"){
// //         console.log("-----------------");
// //         for(let i=0; i<todo.length;i++){
// //             console.log(i, todo[i]);
// //         }
// //         console.log("---------------------");
// //      }else if(req=="add"){
// //         let task = prompt("enter what to want to add");
// //         todo.push(task);
// //         console.log("task is add");
// //      }else if(req=="delete"){
// //         let idx = prompt("enter which do you want to delete the task");
// //         todo.splice(idx,1);
// //      }else{
// //         console.log("worng request");
// //      }

// //       req = prompt("please enter your request");
     
//  }
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let unorder = document.querySelector("ul");
 btn.addEventListener("click",function(){
  let item  = document.createElement("li");
  item.innerText = inp.value;
  
  let but = document.createElement("button");
  but.innerText = "delete";
  but.classList.add("delete");
   item.appendChild(but);
  unorder.appendChild(item);

  inp.value="";

 });


 unorder.addEventListener("click", function(event){
         if(event.target.nodeName ===  "BUTTON"){
            let list = event.target.parentElement;
            list.remove();
         }
         
 });