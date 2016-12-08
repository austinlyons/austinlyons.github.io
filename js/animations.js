var controller = new ScrollMagic.Controller();
var height = $(window).height();
function toPx(amount) {
  return amount * height;
}
PARALLAX = 3;
for (var i = 0; i < PARALLAX; i++) {
  new ScrollMagic.Scene({
    triggerElement: "#parallax" + i,
    triggerHook: "onEnter",
    duration: "200%",
  })
    .setTween("#parallax" + i + " > div", {y: "80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);
}

var scene = new ScrollMagic.Scene({
  triggerElement: "#main",
  duration: toPx(0.8),
  triggerHook: "onLeave",
})
.setPin("#name")
.setTween("#name", {autoAlpha: 0})
.addTo(controller);

var tween = TweenMax.fromTo("#main-content", 1, {autoAlpha: 0.5}, {autoAlpha: 1});
scene = new ScrollMagic.Scene({
  triggerElement: "#main-content",
  duration: toPx(0.3),
  triggerHook: "onCenter",
})
.setTween(tween)
.addTo(controller);
