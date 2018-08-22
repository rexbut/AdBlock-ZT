class Parser {
  constructor(url) {
    this.url = url;
  }
  
  get parse() {
    this.url = this.url.replace(/(http|https):\/\/([a-z1-9\-\.])*\//, "");
	let result = "";

	while(this.url.length > 0) {
		result += this.dict(this.url);
	}

	return result;
  }
  
  startsWith(value) {
    if (this.url.startsWith(value)) {
		this.url = this.url.substring(value.length, this.url.length);
		return true;
	}
	return false;
  }
  
  dict(url) {		
	if (this.startsWith("062")) {
		return ":";
	} else if (this.startsWith("063")) {
		return ".";
	} else if (this.startsWith("064")) {
		return "?";
	} else if (this.startsWith("065")) {
		return "#";
	} else if (this.startsWith("066")) {
		return "-";
	} else if (this.startsWith("067")) {
		return "/";
	} else if (this.startsWith("068")) {
		return "%";
	} else if (this.startsWith("0036")) {
		return "A";
	} else if (this.startsWith("0037")) {
		return "B";
	} else if (this.startsWith("0038")) {
		return "C";
	} else if (this.startsWith("0039")) {
		return "D";
	} else if (this.startsWith("0040")) {
		return "E";
	} else if (this.startsWith("0041")) {
		return "F";
	} else if (this.startsWith("0042")) {
		return "G";
	} else if (this.startsWith("0043")) {
		return "H";
	} else if (this.startsWith("0044")) {
		return "I";
	} else if (this.startsWith("0045")) {
		return "J";
	} else if (this.startsWith("0046")) {
		return "K";
	} else if (this.startsWith("0047")) {
		return "L";
	} else if (this.startsWith("0048")) {
		return "M";
	} else if (this.startsWith("0049")) {
		return "N";
	} else if (this.startsWith("0050")) {
		return "O";
	} else if (this.startsWith("0051")) {
		return "P";
	} else if (this.startsWith("0052")) {
		return "Q";
	} else if (this.startsWith("0053")) {
		return "R";
	} else if (this.startsWith("0054")) {
		return "S";
	} else if (this.startsWith("0055")) {
		return "T";
	} else if (this.startsWith("0056")) {
		return "U";
	} else if (this.startsWith("0057")) {
		return "V";
	} else if (this.startsWith("0058")) {
		return "W";
	} else if (this.startsWith("0059")) {
		return "X";
	} else if (this.startsWith("0060")) {
		return "Y";
	} else if (this.startsWith("0061")) {
		return "Z";
	} else if (this.startsWith("36")) {
		return "a";
	} else if (this.startsWith("37")) {
		return "b";
	} else if (this.startsWith("38")) {
		return "c";
	} else if (this.startsWith("39")) {
		return "d";
	} else if (this.startsWith("40")) {
		return "e";
	} else if (this.startsWith("41")) {
		return "f";
	} else if (this.startsWith("42")) {
		return "g";
	} else if (this.startsWith("43")) {
		return "h";
	} else if (this.startsWith("44")) {
		return "i";
	} else if (this.startsWith("45")) {
		return "j";
	} else if (this.startsWith("46")) {
		return "k";
	} else if (this.startsWith("47")) {
		return "l";
	} else if (this.startsWith("48")) {
		return "m";
	} else if (this.startsWith("49")) {
		return "n";
	} else if (this.startsWith("50")) {
		return "o";
	} else if (this.startsWith("51")) {
		return "p";
	} else if (this.startsWith("52")) {
		return "q";
	} else if (this.startsWith("53")) {
		return "r";
	} else if (this.startsWith("54")) {
		return "s";
	} else if (this.startsWith("55")) {
		return "t";
	} else if (this.startsWith("56")) {
		return "u";
	} else if (this.startsWith("57")) {
		return "v";
	} else if (this.startsWith("58")) {
		return "w";
	} else if (this.startsWith("59")) {
		return "x";
	} else if (this.startsWith("60")) {
		return "y";
	} else if (this.startsWith("61")) {
		return "z";
	} else if (this.startsWith("0f")) {
		return "0";
	} else if (this.startsWith("0l")) {
		return "1";
	} else if (this.startsWith("0r")) {
		return "2";
	} else if (this.startsWith("0k")) {
		return "3";
	} else if (this.startsWith("0z")) {
		return "4";
	} else if (this.startsWith("0x")) {
		return "5";
	} else if (this.startsWith("0h")) {
		return "6";
	} else if (this.startsWith("0o")) {
		return "7";
	} else if (this.startsWith("0m")) {
		return "8";
	} else if (this.startsWith("0n")) {
		return "9";
	}
	throw this.url;
  }
}

$("a").each(function() {
	let a = $(this);
	let href = a.attr('href');
	try {
		if (href != null && href.indexOf("4355555") !== -1) {
			let url = new Parser(href);
			a.attr('href', url.parse);
		}
	} catch(e) {
		console.log("URL : " + href);
		console.log("Unknown : " + e);
	}
})
