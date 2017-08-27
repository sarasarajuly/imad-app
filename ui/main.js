var button=document.getElementById("counter");

button.onclick=function()
{
    //Create a Request object
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take Some action
            if(request.status===200){
            var counter=request.responseText;
            var span=document.getElementById("count");
            span.innerHTML=counter.toString();
            
            }
            
        }
        };
        
    
   //Make the request
        request.open("Get","http://sarasarajuly.imad.hasura-app.io/counter",true);
        request.send(null);
};
//Submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make a req to server and send the names
    //capture a list of names and render it as a list
    var names=['name1','name2','name3'];
    var list='';
    for(i=0;i<names.length;i++){
      list += '<li>' + names[i] + '</li>';
    }
    
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
 };