var c;
var getComcastContent = function() {
  c = document.getElementById('comcast_content');
}

var rmComcastContent = function() {
  c.remove();
}

var listenAndDestroy = function() {
  setInterval(500, function() {
    getComcastContent();
    rmComcastContent()
  })
}

setTimeout(2500, function() {
  getComcastContent()
  if (c) rmComcastContent()
  else listenAndDestroy()
})
