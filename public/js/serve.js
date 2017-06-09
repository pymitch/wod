Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

$(document).ready(function(){
     $.getJSON("./js/words.json", function(data){
        var html = "";
        var defs = []
        
        data.forEach(function(key){
            var val = Object.keys(val);
            keys.forEach(function(key)){

            }
        }) 
     });
     $(".box-1:nth-child(1)").html("<p>changed definition</p>");

});
