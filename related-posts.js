// retled post
$(document).ready(function(){function r(s,t,u){$.ajax({url:'/feeds/posts/default/-/'+t+'?alt=json-in-script&max-results='+u,type:'get',dataType:'jsonp',success:function(v){for(var w='',x='<div class="related">',y=0;y<v.feed.entry.length;y++){for(var z=0;z<v.feed.entry[y].link.length;z++)if('alternate'==v.feed.entry[y].link[z].rel){w=v.feed.entry[y].link[z].href;break}var A=v.feed.entry[y].title.$t,B=v.feed.entry[y].content.$t,C=$('<div>').html(B);if(-1<B.indexOf('http://www.youtube.com/embed/')||-1<B.indexOf('https://www.youtube.com/embed/'))var D=v.feed.entry[y].media$thumbnail.url,E=D.replace('/default.jpg','/mqdefault.jpg'),F=E;else if(-1<B.indexOf('<img'))var G=C.find('img:first').attr('src'),H=G.replace('s72-c','s350'),F=H;else var F='http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png';x+='<li class="relatedP"><div class="related-thumb"><a class="related-img" href="'+w+'" style="background:url('+F+') no-repeat center center;background-size: cover"/></div><a href="'+w+'"><h3 class="related-title">'+A+'</h3></a></li>'}x+='</div>',s.html(x)}})}$('#related-posts').each(function(){var s=$(this),t=s.text(),u=m_rtlred;r(s,t,u)})});
