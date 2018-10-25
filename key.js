var redis = require('redis'),
    client = redis.createClient();

client.on('error', function(err){
    console.log('Error ' + err);
});

client.set('user:123', 'muhammad arslan', redis.print);
client.get('user:123', function(err, replies){
    console.log(replies);
});
