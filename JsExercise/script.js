'use strict';

var te = document.getElementById('test');
//It can also be executed correctly without single quote.
te.innerHTML = "<div id=div1>aaa</div> <div id=div2>bbb</div> <div id='div3'>ccc</div>";
for(var i=1;i<4;i++) {
  (function(i){
    document.getElementById('div'+i).addEventListener('click', function(){
      alert(i);
    });
  }) (i);
}

  var num = add(1, 2);
  console.log(num);
  function add(a,b) {
    a = +a;
    b = +b;
    if(isNaN(a)||isNaN(b)) {
      return ;
    }
    return a+b;
  }
