fs = require('fs');
fs.readFile('example.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    let msg = data.replace(/[\r\n]+/g," ")
    msg = msg.split(" ")
    msg = msg.filter((a) => a);

    for(let i = 0; i < msg.length; i++){
        if(msg[i][0] == "("){
            msg.splice(i, 1)
        }
    }
    console.log(msg)

    let result = msg.join('\n')

    fs.writeFile('result.txt', result, function (err) {
        if (err) return console.log(err);
        console.log('result > result.txt');
    });

  });