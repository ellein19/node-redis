var redis = require('redis'),
    client = redis.createClient();

client.on('error', function(err){
    console.log('Error ' + err);
});

client.setex('cart:123', 10, "{\"nama\":\"shampoo jwitsal\", \"amount\":\"10\"}", redis.print);

setInterval(function(){
    client.get('cart:123', function(err, replies){
        console.log(replies);
    });

    client.ttl('cart:123', function(err, replies){
        console.log(replies);

        if (replies < 0 )
        {
            console.log('cart:123 has been expired...');
        }
    });

}, 1000);
