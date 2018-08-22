var url;

function startsWith(value) {
	if (url.startsWith(value)) {
		url = url.substring(value.length, url.length);
		return true;
	}
	return false;
}

function dict(url) {		
	if (startsWith("062")) {
		return ":";
	} else if (startsWith("063")) {
		return ".";
	} else if (startsWith("064")) {
		return "?";
	} else if (startsWith("065")) {
		return "#";
	} else if (startsWith("066")) {
		return "-";
	} else if (startsWith("067")) {
		return "/";
	} else if (startsWith("068")) {
		return "%";
	} else if (startsWith("0036")) {
		return "A";
	} else if (startsWith("0037")) {
		return "B";
	} else if (startsWith("0038")) {
		return "C";
	} else if (startsWith("0039")) {
		return "D";
	} else if (startsWith("0040")) {
		return "E";
	} else if (startsWith("0041")) {
		return "F";
	} else if (startsWith("0042")) {
		return "G";
	} else if (startsWith("0043")) {
		return "H";
	} else if (startsWith("0044")) {
		return "I";
	} else if (startsWith("0045")) {
		return "J";
	} else if (startsWith("0046")) {
		return "K";
	} else if (startsWith("0047")) {
		return "L";
	} else if (startsWith("0048")) {
		return "M";
	} else if (startsWith("0049")) {
		return "N";
	} else if (startsWith("0050")) {
		return "O";
	} else if (startsWith("0051")) {
		return "P";
	} else if (startsWith("0052")) {
		return "Q";
	} else if (startsWith("0053")) {
		return "R";
	} else if (startsWith("0054")) {
		return "S";
	} else if (startsWith("0055")) {
		return "T";
	} else if (startsWith("0056")) {
		return "U";
	} else if (startsWith("0057")) {
		return "V";
	} else if (startsWith("0058")) {
		return "W";
	} else if (startsWith("0059")) {
		return "X";
	} else if (startsWith("0060")) {
		return "Y";
	} else if (startsWith("0061")) {
		return "Z";
	} else if (startsWith("36")) {
		return "a";
	} else if (startsWith("37")) {
		return "b";
	} else if (startsWith("38")) {
		return "c";
	} else if (startsWith("39")) {
		return "d";
	} else if (startsWith("40")) {
		return "e";
	} else if (startsWith("41")) {
		return "f";
	} else if (startsWith("42")) {
		return "g";
	} else if (startsWith("43")) {
		return "h";
	} else if (startsWith("44")) {
		return "i";
	} else if (startsWith("45")) {
		return "j";
	} else if (startsWith("46")) {
		return "k";
	} else if (startsWith("47")) {
		return "l";
	} else if (startsWith("48")) {
		return "m";
	} else if (startsWith("49")) {
		return "n";
	} else if (startsWith("50")) {
		return "o";
	} else if (startsWith("51")) {
		return "p";
	} else if (startsWith("52")) {
		return "q";
	} else if (startsWith("53")) {
		return "r";
	} else if (startsWith("54")) {
		return "s";
	} else if (startsWith("55")) {
		return "t";
	} else if (startsWith("56")) {
		return "u";
	} else if (startsWith("57")) {
		return "v";
	} else if (startsWith("58")) {
		return "w";
	} else if (startsWith("59")) {
		return "x";
	} else if (startsWith("60")) {
		return "y";
	} else if (startsWith("61")) {
		return "z";
	} else if (startsWith("0f")) {
		return "0";
	} else if (startsWith("0l")) {
		return "1";
	} else if (startsWith("0r")) {
		return "2";
	} else if (startsWith("0k")) {
		return "3";
	} else if (startsWith("0z")) {
		return "4";
	} else if (startsWith("0x")) {
		return "5";
	} else if (startsWith("0h")) {
		return "6";
	} else if (startsWith("0o")) {
		return "7";
	} else if (startsWith("0m")) {
		return "8";
	} else if (startsWith("0n")) {
		return "9";
	}
	throw url;
}

function parse(url) {
	url = url.replace(/(http|https):\/\/([a-z1-9\-\.])*\//, "");
	let result = "";

	while(url.length > 0) {
		result += dict(url);
	}

	return result;
}

$("a").each(function() {
	let a = $(this);
	let href = a.attr('href');
	try {
		if (href != null && href.indexOf("4355555") !== -1) {
			a.attr('href', parse(href));
		}
	} catch(e) {
		console.log("URL : " + href);
		console.log("Unknown : " + e);
	}
})
