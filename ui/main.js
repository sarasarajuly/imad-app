
        
    
  
//Submit username/password to login

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
     //Create a Request object
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take Some action
            if(request.status===200)
            {
            console.log('user logged in');
            alert('Logged in successfully');
          }else if (request.status===403)
          {
              alert('username/password is incorrect');
          }
               else if (request.status===500){
                    alert('Something went wrong on the server');
                }
           
            }
            
        
        };
        
    
   //Make the request
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
        request.open("POST","http://sarasarajuly.imad.hasura-app.io/login",true);
        request.setRequestHeader('Content-Type','application/json');
        request.send(JSON.stringify({usernaname:username,password:password}));
    //make a req to server and send the names
    //capture a list of names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(i=0;i<names.length;i++){
      list += '<li>' + names[i] + '</li>';
    }
    
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
 };