var amqp = require('amqplib/callback_api');

amqp.connect(amqpUrl, { heartbeat: 60 }, function (err, conn) {

//amqp.connect(amqpUrl, function(err, conn){
 conn.createConfirmChannel(function(err,ch) {

 	var q = 'test123';  
 	var content = "hello ritesh";

	try {

	 	ch.publish("", q, new Buffer("work work work"), { persistent: true },function(err, ok) {
	     	if (err) {
	     		console.error("[AMQP] publish", err);
	     		ch.connection.close();
	     	}
	     });
     } catch (e) {

     	console.error("[AMQP] publish", e.message);
     	
     }
    
});
}); 
