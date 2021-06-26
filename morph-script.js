// gsap.to("#eth_up", {duration: 2, morphSVG:"#bsc_middle_cube"});
// gsap.to("#eth_down", {duration: 2, morphSVG:"#bsc_outer_elements"});


// gsap.to("#bsc_middle_cube", {duration: 2, morphSVG:"#ftm_up"});
// gsap.to("#bsc_outer_elements", {duration: 2, morphSVG:"#ftm_down"});


// gsap.to("#ftm_up", {duration: 2, morphSVG:"#eth_down"});
// gsap.to("#ftm_down", {duration: 2, morphSVG:"#eth_up"});


var tl_up = gsap.timeline({repeat: -1}), eth_up = document.getElementById("eth_up");
tl_up.to(eth_up, {morphSVG:"#bsc_middle_cube"}, "+=1")
  .to(eth_up, {morphSVG:"#ftm_up"}, "+=1")
  .to(eth_up, {morphSVG:eth_up}, "+=1");

var tl_down = gsap.timeline({repeat: -1}), eth_up = document.getElementById("eth_down");
tl_down.to(eth_down, {morphSVG:"#bsc_outer_elements"}, "+=1")
  .to(eth_down, {morphSVG:"#ftm_down"}, "+=1")
  .to(eth_down, {morphSVG:eth_down}, "+=1");

tl_up.restart();

// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous
//     xmlHttp.send(null);
// }
