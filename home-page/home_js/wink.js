var getEle = function (selector) {
  return document.querySelector(selector);
}
var getEleAll = function (selector) {
  return document.querySelectorAll(selector);
}

var getCls = function (element) {
  return element.getAttribute('class');
}
var setCls = function (element, val) {
  element.setAttribute('class', val);
}
var addCls = function (element, cls) {
  var baseCls = getCls(element);
  if (baseCls.indexOf(cls) === -1) {
    setCls(element, baseCls + ' ' + cls);
  }
}
var delCls = function (element, cls) {
  var baseCls = getCls(element);
  if (baseCls.indexOf(cls) !== -1) {
    //替换空格，把连续的空格替换为一个空格
    setCls(element, baseCls.split(cls).join(' ').replace(/\s+/g, ' '));
  }
}

//main
var eyeLeft = getEle('.eyeLeft');
var eyeRight = getEle('.eyeRight');
var tooth1 = getEle('.tooth_i_1');
var tooth2 = getEle('.tooth_i_2');
var tooth3 = getEle('.tooth_i_3');
var tooth4 = getEle('.tooth_i_4');
eyeLeft.addEventListener('mouseover', function() {
  eyeRight.style.borderRadius = '0%';
  eyeRight.style.height = '50px';
  eyeRight.style.top = '125px';
  eyeRight.style.backgroundColor = 'rgba(219, 65, 213, 0.8)';
  tooth1.style.bottom = tooth4.style.bottom = '40px';
  tooth2.style.bottom = tooth3.style.bottom = '0px';

});
eyeLeft.addEventListener('mouseout', function() {
  eyeRight.setAttribute('style', '');
  tooth1.setAttribute('style', '');
  tooth2.setAttribute('style', '');
  tooth3.setAttribute('style', '');
  tooth4.setAttribute('style', '');
});

eyeRight.addEventListener('mouseover', function() {
  eyeLeft.style.borderRadius = '0%';
  eyeLeft.style.height = '50px';
  eyeLeft.style.top = '125px';
  eyeLeft.style.backgroundColor = 'rgba(219, 65, 213, 0.8)';
  tooth1.style.bottom = tooth4.style.bottom = '0px';
  tooth2.style.bottom = tooth3.style.bottom = '40px';
});
eyeRight.addEventListener('mouseout', function() {
  eyeLeft.setAttribute('style', '');
  tooth1.setAttribute('style', '');
  tooth2.setAttribute('style', '');
  tooth3.setAttribute('style', '');
  tooth4.setAttribute('style', '');
});

//link 
eyeLeft.onclick = function() { window.location.href="http://www.s1124yy.top/wp/"; }
eyeRight.onclick = function() { window.location.href="https://www.cnblogs.com/s1124yy/"; }
