/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);