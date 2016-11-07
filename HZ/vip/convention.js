webpackJsonp([1, 42], [function (n, e, o) {
    "use strict";
    o(2);
    var i = $(".convention-title");
    $(".convention-hide").hide(), i.click(function () {
        var n = $(this), e = n.siblings(".convention-title");
        n.find(".downImg").toggleClass("down"), n.next(".convention-hide").toggle(), n.toggleClass("border-none").siblings().removeClass("border-none"), e.find(".downImg").removeClass("down"), e.next(".convention-hide").hide()
    })
}, , function (n, e) {
}]);