var populateWindow = function(link) {
	$.get(here + 'docs/' + link, function(response) {
		$('#docwin').html(marked(response));
	});

	$('.nav-list li').each(function(i, item) {
		if ($(item).find('a').length == 0) {
			$(item).addClass('nav-header');
		}
	});

	$('.nav-list a').each(function(i, item) {
		if (link == $(item).attr('href'))
		{
			$(item).parents('li').addClass('active');
		}
		else
		{
			$(item).parents('li').removeClass('active');
		}		
	});
}

var populateMenu = function() {
	$.get(here + 'docs/menu.md', function (response) {
		$('#doc-menu').html(marked(response));
		$('#doc-menu ul').addClass('nav').addClass('nav-list');

		$('.nav-list li').each(function(i, item) {
			if ($(item).find('a').length == 0) {
				$(item).addClass('nav-header');
			}
		});
	})
}

$(document).ready(function(){
	var urlParts = document.URL.split('?', 2);
	state = {};
	here = urlParts[0];

	if (urlParts.length > 1) {
		var currentDoc = urlParts[1];
	} else {
		var currentDoc = "introduction.md";
	}

	marked.setOptions({
		gfm: true,
		pedantic: false,
		sanitize: false,
		highlight: function(code, lang) {
			var that;
			Rainbow.color(code, lang, function(hl_code) { that = hl_code; });
			return that;
		}
	})
	populateMenu();
	populateWindow(currentDoc);

	$(document).on('click', '#main a', function(event){
		var target = $(this);
		if (target.attr('href').substring(0, 4) != 'http' && target.attr('href').substring(0, 1) != '#') {
			event.stopPropagation();
			populateWindow(target.attr('href'));
			var timestamp = new Date();
			timestamp = timestamp.getTime();
			history.pushState(state, target.attr('href'), "?" + target.attr('href') + '&v=' + timestamp);
			return false;
		}
	});
});