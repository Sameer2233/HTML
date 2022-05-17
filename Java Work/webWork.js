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

function get1(){
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
          console.log(data)
          let b = ""
          const url = document.getElementById('cont1')
          data.forEach(elmnt => {
              b += "userId: " + elmnt.userId + " and Title: " + elmnt.completed+"<br>";
          });
          url.innerHTML = b;
      })}

// function get2(){

// let d2={
//   "Id": 12345,
//   "Customer": "John Smith",
//   "Quantity": 1,
//   "Price": 10.00
// }
//  fetch("https://reqbin.com/echo/post/json", {
//                 method: "post",
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(d2)
//             })
//             .then(response => response.json())
//             .then(d2 => {
//                 console.log(d2)
//                 let url2=""
//                 const b2=document.getElementById("cont2");
//             })
//             url2.innerHTML=b2;
// }

function get2(){
  file="Sameer.text"
  fetch(file).then((response)=>{
    return response.text();
  }).then((data)=>{
    document.getElementById("cont2").innerHTML=data;
  })
}

function get3(){
  file="https://api.github.com/users"
  fetch(file).then((response)=>{
    return response.json();
  }).then((data)=>{
    document.getElementById("cont3").innerHTML=JSON.stringify(data);
    console.log(data)
  })
}

function get4(){
  file="https://dummy.restapiexample.com/api/v1/create"
  data={
    "name": "tejhgst",
    "salary": "123",
    "age": "23",
    "id": 25
}
  params={
    method:"post",
    headers:{
      "Content-type":"application/json"
    },
    body:data
  }
  fetch(file,params).then((response)=>{
    return response.json();
  }).then((data)=>{
    document.getElementById("cont4").innerHTML=data;
    console.log(data)
  })
}

function Hello() {
  return <h1>Hello World!</h1>;
}

ReactDOM.render(<Hello />, document.getElementById('mydiv'))