$(document).ready(function () {

    $('.button').on('mouseover', function(event) {
        $('.flash').fadeIn("slow");
        $('.ship img').fadeIn("slow");
    })

    $('.button').on('mouseout', function(event) {
        $('.flash').fadeOut("slow");
        $('.ship img').fadeOut("slow");
    })

    let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    let cheat = new Date("Tues April 10 2018"); //testing
    let aprilTenth = new Date("Tues April 10 2018");
    
    console.log(today);
    console.log(aprilTenth);

    if (today < aprilTenth) {
        $('.date').css("background-image", "url(images/date.png)");
    }

    else {
        $('.date').css("background-image", "url(images/now.png)");
    }

});