var Parser = require('./parser');

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

 // Create an instance of the Parser object.
  var parser = new Parser();

 // parse függvény meghívása
  console.log(parser.parse(text));
});
