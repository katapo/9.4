function drawTree(treeHeight) {
  for (var i = 1; i <= treeHeight; i++) {
    
    var star = '';
    
    for (var j = 0; j < i; j++) {
      star += '*';
    }
    console.log(star);
  }
}

drawTree(5);