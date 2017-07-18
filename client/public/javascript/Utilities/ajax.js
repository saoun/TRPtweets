function requestData() {
	//fetching data from server
	$.ajax({
	  url: '/get-data',
	  type: 'GET',
	})
	.done(function(response) {
		// console.log(response)
	  Data.all = JSON.parse(response)
	  data = JSON.parse(response);
	  // console.log((Data.all)
	  if (Data.all != {}) {
	  	makeMagic();
	  } else {
	  	requestData()
	  }
	})
	.fail(function() {
		requestData()
	  console.log("error");
	});
}