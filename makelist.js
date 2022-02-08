fs = require('fs');
fs.readFile('RESULT.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let msg = data

    msg = msg.replace(/[\r\n]+/g," ")
    msg = msg.split(" ")
    msg = msg.sort()

    msg = msg.filter((item, index, msg) => msg.indexOf(item) === index);

    console.log(msg)

    let result = msg.join('\n')
    fs.writeFile('RESULT-ALL-LIST.txt', result, function (err) {
        if (err) return console.log(err);
        console.log('RESULT > RESULT-ALL-LIST.txt');
    });

  });