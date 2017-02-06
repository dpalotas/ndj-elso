// fs(filesystem) modul betöltése
var fs = require('fs');

// adatok beolvasása
fs.readFile('example.log',function(err,fileData)
{
  if (err)
  {
    throw err
  }

  var text = fileData.toString();
  var result = {};
  var lines = text.split('\n');

  lines.forEach(function(row)
  {
    var parts  = row.split(' ');

    if (typeof parts[1] != 'undefined')
    {
      var letter = parts[1];
      var count  = parseInt(parts[2]);

      if (!result[letter])
      {
        result[letter] = 0;
      }

      result[letter] += parseInt(parts[2]);
    }
  });

  console.log(result);
});
