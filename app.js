
// add event listener to button

document.querySelector('#button').addEventListener('click', loadData);

// load data function
function loadData (){
 
 // instatiate XMLHttpRequest

 const xhr = new XMLHttpRequest();


 //get file async

 xhr.open('GET', 'data.txt', true);



 // Optional  - Used for spinners/loaders

 xhr.onprogress = function (){
  console.log(xhr.readyState)
 }



 // function for what to do with fetched file

 xhr.onload = function (){
  console.log(xhr.readyState)
    // if statement to check all is well befor running function
      if(this.status === 200){
         //console.log(this.responseText)

        document.querySelector('#output').innerHTML =`<h1> ${this.responseText} </h1>`
       
      }
      
 }

// OLDER way of what to do with fetched files

// xhr.onreadystatechange = function (){
 
//   if(this.status === 200 &&  this.readyState === 4){
//     console.log(this.responseText)
//   }
// }


// Used to check/log errors incase something goes wrong
 
xhr.onerror = function (){
  console.log('Request Error')
}

 xhr.send()
 
 // readyState Values
 // 0: request not intialized
 // 1: server connection esatblished
 // 2: request recieved
 // 3: processing request
 // 4: request finished and response is ready


 // HTTP Statuses
 // 200 : 'OK'
 // 403 :'Forbidden'
 // 404: 'Not Found'


}