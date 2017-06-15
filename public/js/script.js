$(document).ready(function(){
    // let word = ""
    // let defs = []
    // let position = 0
    //$.getJSON("./public/js/newWord.json", function(data){
        console.log($(document).data)
        word = document.data.word
        defs = data.definitions
        position = data.position
        $(".1").html(word)
        $("#0").html(defs[0]);
        $("#1").html(defs[1]);
        $("#2").html(defs[2]);
        $("#3").html(defs[3]);
        $("#1").html("hey")
    //});
});