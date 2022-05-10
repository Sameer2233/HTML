let o;
function start() {
  if (typeof(o) == "undefined") {
    o = new Worker("web.js");
  }
  o.onmessage = function(event) {
    document.getElementById("output").innerHTML = event.data;
  };
}
function stop() {
  o.terminate();
  o = undefined;
}


get("Sameer.text");
async function get(file) {
  let a = await fetch(file);
  let b = await a.text();
  document.getElementById("p1").innerHTML = b;
}

let myBtn =document.getElementById("myBtn");
let content =document.getElementById("content");

function getData(){
    url="Sameer.text"
    fetch(url).then((response)=>{
        return response.text()
    }).then((data)=>{
        console.log(data)
    })
}
getData();

// function get(){
//     ur="https://api.github.com/users"
//     fetch(ur).then((response)=>{
//         return response.json()
//     }).then((data1)=>{
//         // document.getElementById("p1").innerHTML=data;
//         console.log(data1)
//     })
// }
// get();

// function get1(){
//     ur1="https://dummy.restapiexample.com/api/v1/create"
//     data='{"name":"sahmmeer9876543","salary":"123","age":"23"}'
//     params={
//         method: "post",
//         headers:{
//             "content-type":"application-JSON"
//         },
//         body: data
//     }
//     fetch(ur1,params).then(response=> response.json())
//     .then(data=>console.log(data))
// }
// get1();