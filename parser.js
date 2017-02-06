// Parser
var Parser = function() {};

// megadott .txt elemzése
Parser.prototype.parse = function(text)
{

  var results = {};
  var lines = text.split('\n');

  lines.forEach(function(line)
  {
    var parts = line.split(' ');
    var letter = parts[1];
    var count = parseInt(parts[2]);

    if (typeof parts[1] != 'undefined')
    {
      if(!results[letter])
      {
        results[letter] = 0;
      }

      results[letter] += parseInt(count);
    }
  });

  return results;
};

// Exportálás a modulból
module.exports = Parser;
