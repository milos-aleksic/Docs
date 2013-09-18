var populateWindow = function(link) {
	$.get(here + 'docs/' + link, function(response) {

		// Check for custom JSON based markdown
		var reg = new RegExp(/\<\%\s*{[\s\S]+?}\s*\%\>/gm);
		var jsons = response.match(reg);

		html = response;

		if (jsons && jsons.length > 0) {
			jsons.forEach(function(raw_json){
				var json = JSON.parse(raw_json.replace(/\<\%/, '').replace(/\%\>/, ''));

				// render snippets
				if (json.type === 'snippet') {

					// get content and replace
					var content = new EJS({url: json.url}).render(json.vars);
					html = html.replace(raw_json, content);
				}
			});
		}

		$('#docwin').html(marked(html));
	});

	$('.nav-list li').each(function(i, item) {
		if ($(item).find('a').length == 0) {
			$(item).addClass('nav-header');
		}
	});

	$('.nav-list a, .mainmenu a').each(function(i, item) {
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

var populateMenu = function(section) {
	$.get(here + 'menus/menu_' + section + '.md', function (response) {
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
		var currentDoc = urlParts[1] + '.md';
	} else {
		var currentDoc = "GettingStarted/introduction.md";
	}

	marked.setOptions({
		gfm: true,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		breaks: true,
		highlight: function(code, lang) {
			var that;
			Rainbow.color(code, lang, function(hl_code) { that = hl_code; });
			return that;
		}
	})
	populateMenu('intro');
	populateWindow(currentDoc);

	$(document).on('click', '#main a, .mainmenu a', function(event){
		var target = $(this);
		if (target.attr('href').substring(0, 4) != 'http' && target.attr('href').substring(0, 1) != '#') {
			event.stopPropagation();
			populateWindow(target.attr('href'));
			populateMenu(target.data('menu'));
			history.pushState(state, target.attr('href'), "?" + target.attr('href').replace('.md', ''));
			return false;
		}
	});
});