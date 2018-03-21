// Ads
$(function(){'use strict';$('#postAD-top')['append']($('#HTML201'));$('#postAD-bottom')['append']($('#HTML203'));var _0xa350x1=Math['floor']($('.post-body *')['length']/2.5);$('.post-body *:eq('+_0xa350x1+')')['after']($('#HTML204'));var _0xa350x2=Math['floor']($('.post-body *')['length']/1.5);$('.post-body *:eq('+_0xa350x2+')')['before']($('#HTML202'));var _0xa350x3=Math['floor']($('.post-body *')['length']/4.5);$('.post-body *:eq('+_0xa350x3+')')['after']($('#HTML205'))})
// Short cods [ ContactForm + Full Width + ArchivePage ]
document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("ContactForm2"),t=document.querySelector(".contact");null!==e&&null!==t&&t.appendChild(e)}),$(function(){$(".post-body");0<$(".post-body .ArchivePage").length&&$.get("/feeds/posts/summary?alt=json-in-script&max-results=0",function(e){var t=e.feed.category;$.each(t,function(e,t){var n='<h2 class="Category-ArchivePage">'+t.term+'</h2><ul class="clear">';$.get("/feeds/posts/summary/-/"+t.term+"?alt=json-in-script&max-results=1000",function(e){for(var t=0;t<e.feed.entry.length;t+=1){var r=e.feed.entry[t].link.map(function(e){return e.rel}).indexOf("alternate"),a=e.feed.entry[t].link[r].href,o=e.feed.entry[t].title.$t;-1!==a.indexOf(".blogspot.")&&(a=a.replace("http://","https://")),n+="<li><a class='ArchivePage-posts' title='"+o+"' href='"+a+"'>"+o+"</a></li>"}$(".ArchivePage").append("</ul>"+n)},"jsonp")})},"jsonp")});
// Min Sc [footer-aside-headar]
$(".footer-wrapper h2").wrap("<div class='widget-title'></div>"),$(".res-butt").click(function(){$(this).next("ul").toggleClass("menu-active"),$(this).toggleClass("but-active")}),$(".res-buttw").click(function(){$(this).next("ul").toggleClass("menu-active"),$(this).toggleClass("but-active")}),$(".search").click(function(){return $(".search-wrap").slideToggle(),!1}),$(".SidePar h2").wrap("<div class='widget-title'></div>"),$(".item-thumbnail img").each(function(){var t=$(this).attr("src").replace("72","220");$(this).after("<h7 style='background:url("+t+") no-repeat'/>"),$(this).next().fadeTo("1",100),$(this).remove()}),$(".label-size a:only-child").each(function(){$(this).parent().addClass("Lp-no-number")});
// Slide Posts In Home Page + Page load
for(i=0;i<=6;i++)$(".post-outer:eq( "+i+" )").addClass("post"+i);
$(window).ready(function(){$(".loderw").delay(100).fadeOut(150)});
// Aside Show + Hiden
if ( SidePar === 'show' ) {
document.getElementsByClassName("SidePar")[0].classList.remove("hidetest");
document.getElementsByClassName("Widgetspost")[0].classList.remove("posten");
document.getElementsByClassName("site-post")[0].classList.remove("Fullpost");
}
// COOKIES
cookieChoices = {};
