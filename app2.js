fs = require('fs');
fs.readFile('ang2.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    let msg = data;
    msg = msg.replace(/\s/g, '_')
    msg = msg.split("(")
    msg = msg.join(' *')
    msg = msg.split(")")
    msg = msg.join(' ')
    msg = msg.split(" ")

    for(let i = 0; i< msg.length; i++){
        if(msg[i][0] == "*"){
            msg.splice(i, 1)
        }
    }
    msg = msg.join('_')
    msg = msg.split("_")

    msg = msg.filter((a) => a);

    msg = msg.filter((a) => a[0] != "9");
    msg = msg.filter((a) => a[0] != "8");
    msg = msg.filter((a) => a[0] != "7");
    msg = msg.filter((a) => a[0] != "6");
    msg = msg.filter((a) => a[0] != "5");
    msg = msg.filter((a) => a[0] != "4");
    msg = msg.filter((a) => a[0] != "3");
    msg = msg.filter((a) => a[0] != "2");
    msg = msg.filter((a) => a[0] != "1");
    msg = msg.filter((a) => a[0] != "0");

    let result = msg.join('\n')

    fs.writeFile('result2.txt', result, function (err) {
        if (err) return console.log(err);
        console.log('result2 > result2.txt');
    });
  });