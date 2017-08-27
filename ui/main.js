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