$(document).ready(function() { //start document ready


    //see more - see less button
    $('.SeeMore2').click(function() {
        var $this = $(this);
        $this.toggleClass('SeeMore2');
        if ($this.hasClass('SeeMore2')) {
            $this.text('See More');
        } else {
            $this.text('See Less');
        }
    })


    //open - close button

    var button = $(".toggle");
    button.html(button.data("text"));
    button.click(function() {
        var el = $(this);
        var swap = el.data("swap");
        var text = el.data("text");
        el.data("text", swap);
        el.data("swap", text);
        el.html(swap);
    });


    //click and text show
    //perhaps not the brighest idea as it uses the same id
    $('#right').click(function() {
        $('#text').html('I\'m right!');
    });

    $('#left').click(function() {
        $('#text').html('No, I\'m right!');
    });


    //hover jquery
    //in actual fact hover has 2 callbacks
    //mouseover and mouseout
    //so in order to avoid 2 alerts
    //I choose to use mouseover 
    $('h1').mouseover(function() {
        alert('Hey, I told you not to hover over me!');

    });

    //custom event jquery
    $('.custom').on('customEvent', function() {
        alert('hello!');
    });
    $('.custom').click(function() {
        $('.custom').trigger('customEvent');
    });



}); // end document ready