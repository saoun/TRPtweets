function requestData() {
	//fetching data from server
	$.ajax({
	  url: '/get-data',
	  type: 'GET',
	})
	.done(function(response) {
	  Data.all = JSON.parse(response)
	  data = JSON.parse(response);
	  // console.log((Data.all)
	  makeMagic();
	})
	.fail(function() {
	  console.log("error");
	});
}