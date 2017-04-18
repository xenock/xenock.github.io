var board
var unit = new Unit(10, 10, 5, {x: 5, y: 5}, 2, 'soldier')

function initialBoard(width, height){
  return Array.apply(null, Array(width)).map(e => Array(height))
}
function paintBoard(board, body){
  board.forEach(function(rowArray, y){
    var row = $('<div>').addClass('row')
    for(var x=0; x<rowArray.length; x++){
      var column = $('<div>').addClass('cell x'+x+'y'+y).data({x:x, y:y})
      row.append(column)
    }
    body.append(row)
  })
}
function putUnitInMap(unit){
  $('.x'+unit.position.x+'y'+unit.position.y)
    .css('background', 'red')
    .data('type', unit.type)
    // .on('click', function(){ console.log(unit.type)})
}

$(document).ready(function(){
  var body = $('body')
  board = initialBoard(10, 20)
  paintBoard(board, body)
  putUnitInMap(unit)
  var cell = $('.cell')
  cell.on('click', function(c){
    console.log($(this).data())
  })

})
