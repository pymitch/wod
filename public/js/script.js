$(document).ready(function(){
    // alert(position)
    $('.box').hover(
        function(){
        $(this).addClass('hover')
        }, function (){
        $(this).removeClass('hover')
        }
    )
    $('.box').click(
        function(){
            // check if item is correct and change format
            if(this.id == position){
                $(this).addClass('right')
                // add request to update database
                $.ajax({
                    type:'POST',
                    url: '/',
                    data: {answer: "correct"},
                    dataType: "json",
                    success: function(response){
                        console.log("sent data")
                        },
                    error: function(err){
                        console.log(err);
                        }
                });
            } else {
                $(this).addClass('wrong')
                // add request to update database
                $.ajax({
                    type:'POST',
                    url: '/',
                    dataType: "json",
                    data: {answer: "wrong"},
                    success: function(response){
                        console.log("sent data")
                        },
                    error: function(err){
                        console.log(err);
                        }
                });
            }
            $('.box').off()
            $('#next-button').removeClass('hidden')
            $(document).keypress(function(e){
                if(e.which == 13) {
                    location.reload()
                }
            })
        }
    )
    $('.button').click(
        function(){
            location.reload()
        }
    )
})
