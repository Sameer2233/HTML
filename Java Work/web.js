let m = 0;

function time() {
  m ++;
  postMessage(m);
  setTimeout("time()",500);
}

time();