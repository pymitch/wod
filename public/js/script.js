$(document).ready(function(){
    $('.next-button').fadeOut()
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
            // console.log(typeof(this.id))
            // console.log(typeof(position))
            // console.log((this.id == position))
            if(this.id == position){
                $(this).addClass('right')
            } else {
                $(this).addClass('wrong')
            }
            $('.next-button').fadeIn()
        }
    )
})