var redis = require('redis'),
    client = redis.createClient();

function print_val(err, replies){
    console.log(replies);;
}

client.on('error', function(err){
    console.log('Error ' + err);
});;

client.sadd('myset', 'Andik', print_val);
client.sadd('myset', 'Sergio', print_val);
client.sadd('myset', 'Irfan', print_val);
client.sadd('myset', 'Zola', print_val);

client.sadd('employee', 'Andik', print_val);
client.sadd('employee', 'Sergio', print_val);
client.sadd('employee', 'Lilipaly', print_val);
client.sadd('employee', 'Beni', print_val);
client.sadd('employee', 'Bayu', print_val);
client.sadd('employee', 'Boaz', print_val);
client.sadd('employee', 'Kurnia', print_val);
client.sadd('employee', 'Rizky', print_val);

client.smembers('myset', print_val);
client.sismember('myset', 'Andik', print_val);
client.sismember('myset', 'Siroch Chatong', print_val);

client.srem('myset', 'Zola', redis.print);
client.smembers('myset', print_val);

client.sdiff('employee', 'myset', print_val);
client.sinter('employee', 'myset', print_val);
client.sunion('employee', 'myset', print_val);

client.del('myset');
client.del('employee');