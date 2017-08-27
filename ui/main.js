var button=document.getElementById("counter");
button.onclick=function()
{
    //make a request to counter endpoint
    //Capture the response and store it in a variable
    //Render the variable in the correct span
    counter=document.getElementById("count");
    span.innerHTML=counter.toString();
};