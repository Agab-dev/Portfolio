var $links = $(".itemLinks");
$($links[0]).addClass("active");

$links.click(function (e) {
    $links.removeClass("active");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translateValue = "translateX("+ position * 25 +"%)";
    console.log(position);
    $("#wrapper").css({
        transform: translateValue
    });

    clickedLink.addClass("active");

});
