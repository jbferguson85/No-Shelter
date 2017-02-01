/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#about").click(function() {
        $("html, body").animate({
            scrollTop: $("#absection").offset().top
            }, "fast");
    });
    
    $("#media").click(function() {
        $("html, body").animate({
            scrollTop: $("#mediasection").offset().top
            }, "fast");
    });

    $("#shows").click(function() {
        $("html, body").animate({
            scrollTop: $("#showsection").offset().top
            }, "fast");
    });

    $("#contact").click(function() {
        $("html, body").animate({
            scrollTop: $("#consection").offset().top
            }, "fast");
    });

    $("#home").click(function() {
        $("html, body").animate({
            scrollTop: $("body").offset().top
            }, "fast");
    });
});

