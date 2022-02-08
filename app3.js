fs = require('fs');
fs.readFile('ang3.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    let msg = data
    msg = msg.split("\n")

    msg = msg.filter((a) => a[0] != "•");
    msg = msg.filter((a) => a[0] != "(");

    msg = msg.join('')
    msg = msg.replaceAll(" ", "_")
    msg = msg.split("\r")

    //
    console.log(msg.length)

    for(let i = 0; i < msg.length; i++){
      for(let j = 0; j < msg[i].length; j++){
        if( msg[i][j] == "_" && msg[i][j+1] == "(" || msg[i][j] == "(" ){
          msg[i] = msg[i].slice(0, j)
        }
      }
      console.log(msg[i])

    }

    let result = msg.join('\n')
  
    fs.writeFile('result3.txt', result, function (err) {
        if (err) return console.log(err);
        console.log('result3 > result3.txt');
    });

  });