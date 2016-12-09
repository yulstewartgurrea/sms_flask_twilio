// function sendsms() {
// 	var from = $('#From').val();
// 	var message =('#Body').val()
//
// 	$.ajax({
// 		url: 'http://127.0.0.1:5000/sms',
// 		type: "POST"
// 		data: $('form').serialize()
//
// 		success: function(res) {
// 			if (res['message' == 'Ok']){
// 				alert("message sent")
// 			} else {
// 				alert(resp.nessage)
// 			}
// 		},
//
// 		error: function(e){
// 			alert("danger")
// 		}
//
//
//
// 	});
// }

function sms() {
    var to = $("#to").val();
    var body = $("#body").val();
	$.ajax({
  		type: "POST",
  		// username: "ACCOUNT_SID",
		// password: "AUTH_TOKEN",
		// url: "https://api.twilio.com/2010-04-01/Accounts/[ACCOUNT_SID]/Messages.json",
		url: 'http://127.0.0.1:5000/sms/'+to+'/'+body+'/',
  		data:$('form').serialize(),
        // {
            // "To" : "+911234567890",
    		// "From" : "+11234567890",
    		// "Body" : "From jQuery AJAX"
  		// },
  		success: function(data) {
    		console.log(data);
  		},
  		error: function(data) {
    		console.log(data);
  		}
	});
}