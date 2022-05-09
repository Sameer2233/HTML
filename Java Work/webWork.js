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