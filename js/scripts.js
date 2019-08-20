$(document).ready(function(){
  $(document).submit(function(event){
    var output = [];
    var startNumber = parseInt($("input#start").val());
    var endNumber = $("input#goal").val();
    for (var count = startNumber; count <= endNumber; count += startNumber) {
      output.push(count);
      alert(output);
  }
    event.preventDefault();
  });

});
