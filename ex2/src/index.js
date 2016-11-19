var promise = function(url) {
 return new Promise(function (resolve, reject) {
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function () {
   if (req.status == 200) {
    resolve(req.response);
   } else {
    reject(Error(req.statusText));
   }
  };
  req.onerror = function () {
   reject(Error("Nettwork Error"))
  };
  req.send();
 });
}
promise('http://localhost:3000/posts').then(function(result){
 var res = document.querySelector('#result')
 var fragment = document.createDocumentFragment();
 JSON.parse(result).slice().forEach(function(ele, i){
  var li = document.createElement('li');
  li.textContent += ele.comments;
  fragment.appendChild(li);
 });
 res.appendChild(fragment);
}, function(reject){
 console.log(reject);
}).catch(function(error){
 console.log(error);
})
