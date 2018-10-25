var redis = require('redis'),
    client = redis.createClient();

function print_val(err, replies){
    console.log(replies);
}

client.on('error', function(err){
    console.log('Error ' + err);
});

client.lpush('tim_bola', 'Persib', redis.print);
client.lpush('tim_bola', 'Persipura', redis.print);
client.lpush('tim_bola', 'Arema Cronus', redis.print);
client.lpush('tim_bola', 'Madura United', redis.print);

client.lrange('tim_bola', 0, -1, print_val);

client.rpush('tim_bola', 'Mitra Kukar', redis.print);
client.rpush('tim_bola', 'Semen Padang', redis.print);
client.rpush('tim_bola', 'Persija', redis.print);
client.rpush('tim_bola', 'PSM Makassar', redis.print);

client.lrange('tim_bola', 0, -1, print_val);
client.llen('tim_bola', print_val);

client.lindex('tim_bola', 1, print_val);
client.lindex('tim_bola', 2, print_val);
client.lindex('tim_bola', 4, print_val);
client.lindex('tim_bola', 5, print_val);
client.lindex('tim_bola', 10, print_val);

client.lset('tim_bola', 1, 'Persipura Jayapura FC', redis.print);
client.lrange('tim_bola', 0, -1, print_val);

client.lpop('tim_bola', redis.print);
client.lrange('tim_bola', 0, -1, print_val);

client.rpop('tim_bola', redis.print);
client.lrange('tim_bola', 0, -1, print_val);

client.del('tim_bola', redis.print);