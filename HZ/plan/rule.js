webpackJsonp([4, 42], {
    0: function (i, e, s) {
        "use strict";
        s(5);
        var n = ruleInfo.insuranceId;
        1 == n ? ($(".young-tab").addClass("tab-active"), $("#youngIp").show(), $("#childIp,#parentIp").hide()) : 2 == n ? ($(".child-tab").addClass("tab-active"), $("#childIp").show(), $("#youngIp,#parentIp").hide()) : 3 == n && ($(".old-tab").addClass("tab-active"), $("#parentIp").show(), $("#youngIp,#childIp").hide());
        var t = $(".ruleIp");
        $(".ipList").hide(), t.click(function () {
            var i = $(this), e = i.siblings(".ruleIp");
            i.find(".downImg").toggleClass("down"), i.next(".ipList").toggle(), i.toggleClass("border-none").siblings().removeClass("border-none"), e.find(".downImg").removeClass("down"), e.next(".ipList").hide()
        }), $('[node-type="tab-list"]').click(function () {
            var i = $(this).index();
            $(this).addClass("tab-active").siblings().removeClass("tab-active"), $(".ruleIp-content-wrap div").eq(i).show(100).siblings().hide()
        })
    }, 5: function (i, e) {
    }
});