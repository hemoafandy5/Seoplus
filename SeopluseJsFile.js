<b:if cond='data:view.isHomepage'>
    //<![CDATA[
// 5 ٍstyle Posts
$(function(){$("#Blog1 .LabLink").attr("href",$("#Blog1 .LabLink").attr("href")+"?&max-results="+m_res),$("#main .Label .widget-content").each(function(){var j,k=$(this),q=k.prev("h2");if(k.parent().addClass("Widgetspost"),k.hasClass("list-label-widget-content"))var w=k.find("li:first a").text();else if(k.hasClass("cloud-label-widget-content"))var w=k.find("span:first a").text();if(k.html(""),-1!=q.text().indexOf("[")&&-1!=q.text().indexOf("]"))var x=q.text().match(/\[(.*?)\]/)[1];else var x="list";k.addClass(x);var z=q.text().indexOf("["),A=-1==z?q.text():q.text().substring(0,z);q.text(A),x.match("list")&&(j="/feeds/posts/summary/-/"+w+"?alt=json-in-script&max-results="+b_list),x.match("cover")&&(j="/feeds/posts/summary/-/"+w+"?alt=json-in-script&max-results="+b_cover),x.match("vcover")&&(j="/feeds/posts/summary/-/"+w+"?alt=json-in-script&max-results="+b_vcover),x.match("sided")&&(j="/feeds/posts/summary/-/"+w+"?alt=json-in-script&max-results="+b_sided),x.match("cards")&&(j="/feeds/posts/summary/-/"+w+"?alt=json-in-script&max-results="+b_cards),x.match("broadcard")&&(j="/feeds/posts/summary/-/"+w+"?alt=json-in-script&max-results=5"),1<w.length?($(this).prev("h2").append("<a class='LabLink' href='/search/label/"+w+"?&max-results="+m_res+"'></a>"),k.parent().fadeIn(),$.ajax({url:j,method:"GET",dataType:"jsonp",success:function(B){var C,D,E="";for(C=0;C<B.feed.entry.length;C+=1){for(D=0;D<B.feed.entry[C].link.length;D+=1){var F=B.feed.entry[C].link[D];if("alternate"==F.rel){var G=F.href;-1!==G.indexOf(".blogspot.")&&(G=G.replace("http://","https://"));break}}var H=B.feed.entry[C].summary.$t.replace(/<\S[^>]*>/g,""),I=B.feed.entry[C].title.$t;if(0<$("#b-author").length&&$("#b-author").text().match("false"))var J="";else if(0<$("#b-author-link").length&&$("#b-author-link").text().match("false"))var J="<span class='Author'>"+B.feed.entry[C].author[0].name.$t+"</span>";else if(void 0!==B.feed.entry[C].author[0].uri)var J="<a href='"+B.feed.entry[C].author[0].uri.$t+"' class='Author' target='_blank'>"+B.feed.entry[C].author[0].name.$t+"</a>";else var J="<span class='Author'>"+B.feed.entry[C].author[0].name.$t+"</span>";var K=B.feed.entry[C].published.$t.substr(5,2),L=[];if(L[1]="\u064A\u0646\u0627\u064A\u0631",L[2]="\u0641\u0628\u0631\u0627\u064A\u0631",L[3]="\u0645\u0627\u0631\u0633",L[4]="\u0627\u0628\u0631\u064A\u0644",L[5]="\u0645\u0627\u064A\u0648",L[6]="\u064A\u0648\u0646\u064A\u0648",L[7]="\u064A\u0648\u0644\u064A\u0648",L[8]="\u0627\u063A\u0633\u0637\u0633",L[9]="\u0633\u062A\u0645\u0628\u0631",L[10]="\u0627\u0643\u062A\u0648\u0628\u0631",L[11]="\u0646\u0648\u0641\u0645\u0628\u0631",L[12]="\u062F\u064A\u0633\u0645\u0628\u0631",0===K.indexOf("0"))var M=L[K.replace("0","")];else var M=L[K];var N=B.feed.entry[C].published.$t.substr(8,2)+" "+M+" "+B.feed.entry[C].published.$t.substr(0,4),O="/"+B.feed.entry[C].published.$t.substr(0,10).replace(/\-/g,"_")+"_archive.html",P=0<$(B.feed.entry[C].media$thumbnail).length?B.feed.entry[C].media$thumbnail.url.replace("s72-c","s350-c"):-1==alt_Img.indexOf("s1600-r")?alt_Img:alt_Img.replace("s1600-r","s72-c"),Q=0<$(B.feed.entry[C].media$thumbnail).length?B.feed.entry[C].media$thumbnail.url.replace("s72-c","s350"):-1==alt_Img.indexOf("s1600-r")?alt_Img:alt_Img.replace("s1600-r","s300"),R=0<$(B.feed.entry[C].media$thumbnail).length?B.feed.entry[C].media$thumbnail.url.replace("s72-c","s350"):-1==alt_Img.indexOf("s1600-r")?alt_Img:alt_Img.replace("s1600-r","s320");P=P.replace(/http:\/\//,"https://"),Q=Q.replace(/http:\/\//,"https://"),R=R.replace(/http:\/\//,"https://");var S=300<H.length?H.substring(0,230)+"...":H,T=100<H.length?H.substring(0,100)+"...":H;k.hasClass("list")?E+="<div class='Post'><a class='Thumb' href='"+G+"'><h7 style='background:url("+P+")'/><div class='boxs'/></a><a class='Title' href='"+G+"'>"+I+"</a><div class='details'>"+J+"<a class='Date' href='"+O+"'>"+N+"</a></div></div>":k.hasClass("cover")?(E+="<div class='Post'><a class='Thumb' href='"+G+"'>",E+=0==C?"<h7 style='background:url("+Q+")'/>":"<h7 style='background:url("+P+")'/>",E+="<div class='boxs'/></a><a class='Title' href='"+G+"'>"+I+"</a><div class='details'>"+J+"<a class='Date' href='"+O+"'>"+N+"</a></div><p class='Snippet'>"+S+"</p></div>"):k.hasClass("vcover")?(E+="<div class='Post'><a class='Thumb' href='"+G+"'>",E+=0==C?"<h7 style='background:url("+Q+")'/>":"<h7 style='background:url("+P+")'/>",E+="<div class='boxs'/></a><div class='posts-title'><a class='Title' href='"+G+"'>"+I+"</a></div><div class='details'>"+J+"<a class='Date' href='"+O+"'>"+N+"</a></div><p class='Snippet'>"+S+"</p></div>"):k.hasClass("sided")?(E+="<div class='Post'><a class='Thumb' href='"+G+"'>",E+=0==C?"<h7 style='background:url("+Q+")'/>":"<h7 style='background:url("+P+")'/>",E+="<div class='boxs'/></a><a class='Title' href='"+G+"'>"+I+"</a><div class='details'>"+J+"<a class='Date' href='"+O+"'>"+N+"</a></div><p class='Snippet'>"+T+"</p></div>"):k.hasClass("broadcard")?(E+="<div class='Post current'><a class='Thumb' href='"+G+"'>",E+=0==C?"<h7 style='background:url("+R+")'/>":"<h7 style='background:url("+P+")'/>",E+="</a><a class='Title' href='"+G+"'>"+I+"</a></div><div class='Post'><a class='Thumb'><h7 data-thumb='"+Q+"' style='background:url("+P+")'/></a><a class='Title' data-url='"+G+"'>"+I+"</a></div>"):k.hasClass("cards")&&(E+="<div class='Post'><a class='Thumb' href='"+G+"'><h7 style='background:url("+Q+")'/><div class='boxs'/></a><div class='posts-title'><a class='Title' href='"+G+"'>"+I+"</a></div><div class='details'>"+J+"<a class='Date' href='"+O+"'>"+N+"</a></div><p class='Snippet'>"+T+"</p></div>")}k.html(E)},complete:function(){$(".cover").each(function(){$(this).find(".Post:not(:first)").addClass("cov")}),$(".broadcard").each(function(){$(this).find(".current:not(:first)").remove()})}})):k.parent().remove()}),$(document).ajaxStop(function(){$(".broadcard").each(function(){function j(){q==w.find(".Post:last").index()?q=1:q++;var x=w.find(".Post:eq("+q+")");w.find(".b-current").removeClass("b-current"),x.addClass("b-current"),w.find(".current a").attr("href",x.find(".Title").attr("data-url")),w.find(".current .Title").text(x.find(".Title").text()),w.find(".current h7").attr("style","background:url("+x.find("h7").attr("data-thumb")+")")}var k,q=0,w=$(this);k=setInterval(j,5e3),$(this).mouseenter(function(){clearInterval(k)}),$(this).mouseleave(function(){k=setInterval(j,5e3)}),w.on("click",".Post:not(.current)",function(){$(this).addClass("b-current").siblings().removeClass("b-current"),w.find(".current a").attr("href",$(this).find(".Title").attr("data-url")),w.find(".current .Title").text($(this).find(".Title").text()),w.find(".current h7").attr("style","background:url("+$(this).find("h7").attr("data-thumb")+")"),q=$(this).index()})})})});
//]]>
</b:if>
// Short cods [ ContactForm + Full Width + ArchivePage ]
    //<![CDATA[
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
//]]>
<b:if cond='data:view.isPost'>
    //<![CDATA[
// retled post
$(document).ready(function(){function r(s,t,u){$.ajax({url:'/feeds/posts/default/-/'+t+'?alt=json-in-script&max-results='+u,type:'get',dataType:'jsonp',success:function(v){for(var w='',x='<div class="related">',y=0;y<v.feed.entry.length;y++){for(var z=0;z<v.feed.entry[y].link.length;z++)if('alternate'==v.feed.entry[y].link[z].rel){w=v.feed.entry[y].link[z].href;break}var A=v.feed.entry[y].title.$t,B=v.feed.entry[y].content.$t,C=$('<div>').html(B);if(-1<B.indexOf('http://www.youtube.com/embed/')||-1<B.indexOf('https://www.youtube.com/embed/'))var D=v.feed.entry[y].media$thumbnail.url,E=D.replace('/default.jpg','/mqdefault.jpg'),F=E;else if(-1<B.indexOf('<img'))var G=C.find('img:first').attr('src'),H=G.replace('s72-c','s350'),F=H;else var F='http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png';x+='<li class="relatedP"><div class="related-thumb"><a class="related-img" href="'+w+'" style="background:url('+F+') no-repeat center center;background-size: cover"/></div><a href="'+w+'"><h3 class="related-title">'+A+'</h3></a></li>'}x+='</div>',s.html(x)}})}$('#related-posts').each(function(){var s=$(this),t=s.text(),u=m_rtlred;r(s,t,u)})});
//]]>
</b:if>
//<![CDATA[
// Ads 
$(function(){'use strict';$('#postAD-top')['append']($('#HTML201'));$('#postAD-bottom')['append']($('#HTML203'));var _0xa350x1=Math['floor']($('.post-body *')['length']/2.5);$('.post-body *:eq('+_0xa350x1+')')['after']($('#HTML204'));var _0xa350x2=Math['floor']($('.post-body *')['length']/1.5);$('.post-body *:eq('+_0xa350x2+')')['before']($('#HTML202'));var _0xa350x3=Math['floor']($('.post-body *')['length']/4.5);$('.post-body *:eq('+_0xa350x3+')')['after']($('#HTML205'))})
//]]>
// Load More Posts
<b:if cond='data:blog.pageType == &quot;index&quot;'>
    //<![CDATA[
!function(e){function i(){o||(o=!0,t?(n.find(".loaderbtn").hide(),n.find(".loadersvg").show(),e.ajax(t,{dataType:"html"}).done(function(i){var a,r=e("<div></div>").append(i.replace(w,"")),s=r.find("a.blog-pager-older-link"),l=r.find(d).children();e(d).append(l),window._gaq&&window._gaq.push(["_trackPageview",t]),window.gapi&&window.gapi.plusone&&window.gapi.plusone.go&&window.gapi.plusone.go(),window.disqus_shortname&&(a=window.disqus_shortname,e.getScript("//"+a+".disqus.com/blogger_index.js")),window.FB&&window.FB.XFBML&&window.FB.XFBML.parse&&window.FB.XFBML.parse(),window.twttr&&window.twttr.widgets&&window.twttr.widgets.load&&window.twttr.widgets.load(),s?t=s.attr("href"):(t="",n.hide()),n.find(".loadersvg").hide(),n.find(".loaderbtn").show(),o=!1})):n.hide())}function a(){0>Math.max(r.height(),s.height(),document.documentElement.clientHeight)-(r.scrollTop()+r.height())&&i()}var t="",n=null,d="div.blog-posts",o=!1,r=e(window),s=e(document),w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;e(document).ready(function(){if("item"!=_WidgetManager._GetAllData().blog.pageType&&(t=e("a.blog-pager-older-link").attr("href"))){var d=e('<a class="loaderbtn" href="javascript:;"><span>إظهار المزيد</span></a>');d.click(i);var o=e('<div class="loader"><div class="loadersvg" style="display: none;"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><path fill="#f00" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml"attributeName="transform"type="rotate"from="0 25 25"to="360 25 25"dur="0.6s"repeatCount="indefinite" /></path></svg></div>');r.scroll(a),(n=e('<div class="techirshloader wow fadeInUp animated"></div>')).append(d),n.append(o),n.insertBefore(e("#blog-pager")),e("#blog-pager").hide()}})}(jQuery);
//]]>
</b:if>

// COOKIES
cookieChoices = {};
