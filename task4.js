var add =document.getElementById("add");
var mytable=document.getElementById("mytable") ;
var mybuttons=Array.from(document.querySelectorAll("btn"))  ;

var mybtn ="<td><button class=\"btn\">Delete</button>";
var myup ="<button class=\"up\">Update</button></td>";
var index=1;
add.addEventListener("click",()=>{
    
    mytable.innerHTML+="<tr><td>"+index+"</td><td>"+document.getElementById("name").value+"</td><td>"+document.getElementById("age").value+"</td><td>"+document.getElementById("dep").value+"</td>"+mybtn + myup+" </tr>";
   index++;
 var b=Array.from( document.getElementsByClassName("btn"));
 b.forEach((butn)=>{
      butn.addEventListener("click",()=>{
          document.getElementsByTagName("tr")[b.indexOf(butn)+1].remove(); 
          console.log("num of btn before"+b.length);
         // console.log(b.indexOf(butn));
          b.splice(b.indexOf(butn),1);
          console.log("num of btn after"+b.length);
})

        })

        var myupdate=Array.from(document.getElementsByClassName("up"));
        //console.log(myupdate);
        myupdate.forEach((item)=>{
            item.addEventListener("click",()=>{
               var newrow=document.getElementsByTagName("tr")[myupdate.indexOf(item)+1];
               newrow.children[1].textContent=document.getElementById("name").value;
               newrow.children[2].textContent=document.getElementById("age").value;
               newrow.children[3].textContent=document.getElementById("dep").value;
               //console.log(age);
            })
        })
        
})
