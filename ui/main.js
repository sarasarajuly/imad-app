
        
    
  
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
    
    };
    
   