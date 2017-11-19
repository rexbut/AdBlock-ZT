var KEY = "1234556";

function escapeRegExp(str) {
	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function parse(url) {
	url = url.replace(/(http|https):\/\/([a-z].)*([a-z1-9])+.(org|com)\//, "")
	url = replaceAll(url, KEY + "00", "http://");
	url = replaceAll(url, KEY + "01", "https://");
	url = replaceAll(url, KEY + "02", "uptobox");
	url = replaceAll(url, KEY + "03", "1fichier");
	url = replaceAll(url, KEY + "04", "uploaded");
	url = replaceAll(url, KEY + "05", "ul.to");
	url = replaceAll(url, KEY + "06", "rapidgator");
	url = replaceAll(url, KEY + "07", "turbobit");
	url = replaceAll(url, KEY + "08", "youwatch");
	url = replaceAll(url, KEY + "09", "uplea");
	url = replaceAll(url, KEY + "10", ".com");
	url = replaceAll(url, KEY + "11", ".net");
	url = replaceAll(url, KEY + "12", ".org");
	url = replaceAll(url, KEY + "13", "video");
	url = replaceAll(url, KEY + "14", "embed");
	url = replaceAll(url, KEY + "15", "/");
	url = replaceAll(url, KEY + "16", "#");
	url = replaceAll(url, KEY + "17", "?");
	return url;
}

$("a").each(function() {
	let a = $(this);
	let href = a.attr('href');
	if (href != null && href.indexOf(KEY) !== -1) {
		a.attr('href', parse(href));
	}
})