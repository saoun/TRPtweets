"use strict";
(function(){

$.ajax({
  url: '/get-data',
  type: 'GET',
})
.done(function(response) {
  console.log(response);
})
.fail(function() {
  console.log("error");
});










})();
