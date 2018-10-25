var redis = require('redis'),
    client = redis.createClient();

function print_val(err, replies){
    console.log(replies);
}

client.on('error', function(err){
    console.log('Error ' + err);
});

client.hset(['user:123', 'name', 'arslan'], redis.print);
client.hset(['user:123', 'email', 'arslan@gmail.com'], redis.print);
client.hset(['user:123', 'dob', '1990-09-09'], redis.print);

client.hgetall('user:123', print_val);

client.hget("user:123", 'name', print_val);
client.hget("user:123", 'email', print_val);
client.hget("user:123", 'dob', print_val);

client.hkeys("user:123", print_val);
client.hvals("user:123", print_val);

client.hstrlen("user:123", 'name', print_val);
client.hlen("user:123", print_val);
client.hexists("user:123", 'name', print_val);
client.hexists("user:123", 'website', print_val);

client.hdel('user:123', 'dob', redis.print);
client.hexists("user:123", 'dob', print_val);

client.del('user:123');