$(function () {
	function e() {
		if ($(".post-labels a[rel='tag v:url']")
			.length > 0) var e = "/feeds/posts/summary/-/" + $(".post-labels a[rel='tag v:url']:eq(0)")
			.text() + "?alt=json-in-script&max-results=10";
		else var e = "/feeds/posts/summary?alt=json-in-script&max-results=10";
		$.ajax({
				url: e
				, type: "get"
				, dataType: "jsonp"
				, success: function (e) {
					var t, a;
					for (t = 0; t < e.feed.entry.length; t += 1) {
						for (a = 0; a < e.feed.entry[t].link.length; a += 1) {
							var s = e.feed.entry[t].link[a];
							if ("alternate" === s.rel) {
								var r = s.href; - 1 !== r.indexOf(".blogspot.") && (r = r.replace("http://", "https://"));
								break
							}
						}
						var l = e.feed.entry[t].title.$t
							, n = e.feed.entry[t].published.$t;
						if ($("#b-author")
							.length > 0 && $("#b-author")
							.text()
							.match("false")) var i = "";
						else var i = "<span class='r-author'>" + e.feed.entry[t].author[0].name.$t + "</span>";
						if ($(e.feed.entry[t].media$thumbnail)
							.length > 0) var o = e.feed.entry[t].media$thumbnail.url.replace("s72-c", "s350");
						else var o = -1 != alt_Img.indexOf("s1600-r") ? alt_Img.replace("s1600-r", "s150") : alt_Img;
						o = o.replace(/http:\/\//, "https://"), $(".related-posts")
							.append("<div class='relate-p'><a href='" + r + "'><h3 class='related-title'>" + l + "</h3></a><a class='relate-Thumb' href='" + r + "'><img src='" + o + "' alt='" + l + "'/></a><div class='r-details'><time class='r-date timeago' datetime='" + n + "'>" + n + "</time>" + i + "</div></div>")
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
	}
	var t = $(".author-profile span[itemprop='description']");
	t.text()
		.length > 270 && $(t)
		.text(t.text()
			.substring(0, 240) + " ..."), $(window)
		.one("scroll", e)
});
