AOS.init();

new Typed("#typed", {
    strings: [
        "Twenty Nine Thrift",
        "Menjual berbagai jenis sepatu",
        "Sepatu branded 100% original",
    ],
    typeSpeed: 100,
    delaySpeed: 300,
    loop: true,
});

$("#btn-nav").click(function () {
    $(".nav-product").toggleClass("active");
});
$("#btn-product").click(function () {
    $(".nav-product").removeClass("active");
});
$("#nav-link").click(function () {
    $(".nav-product").removeClass("active");
});
$("#nav-link1").click(function () {
    $(".nav-product").removeClass("active");
});
$("#nav-link2").click(function () {
    $(".nav-product").removeClass("active");
});
$("#nav-link3").click(function () {
    $(".nav-product").removeClass("active");
});
$("#nav-link4").click(function () {
    $(".nav-product").removeClass("active");
});
$("#nav-link5").click(function () {
    $(".nav-product").removeClass("active");
});

$(".carousel").flickity({
    cellAlign: "left",
    contain: true,
    autoPlay: true,
    wrapAround: true,
    pageDots: false,
});
$(".main-carousel").flickity({
    cellAlign: "left",
    contain: true,
    autoPlay: 5000,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
});
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true
});
var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', { easing: 'easeInQuint' });
