var str = document.getElementById("typing").className;
var i = 0;
function typing(){
  var divTyping = document.getElementById('typing');
  if (i <= str.length) {
    divTyping.innerHTML = str.slice(0, i++) + '_';
    setTimeout('typing()', 150);
  }
  else{
    divTyping.innerHTML = str;
  }
}
typing();