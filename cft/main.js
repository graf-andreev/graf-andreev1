function colorNameToHex(color) {
	
	if(typeof color !== 'string')
	{
		return false;
	}
    var colors = {
        "aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"
    };
	
    if (typeof colors[color.toLowerCase()] != 'undefined')
        return colors[color.toLowerCase()];

    return false;
}


function getStyleSheetPropertyValue(selectorText, propertyName) {
    
    for (var s= document.styleSheets.length - 1; s >= 0; s--) {
        var cssRules = document.styleSheets[s].cssRules ||
                document.styleSheets[s].rules || [];
        for (var c=0; c < cssRules.length; c++) {
            if (cssRules[c].selectorText === selectorText && cssRules[c].style[propertyName]) 
                return cssRules[c].style[propertyName].split(';')[0].split('/(\d+)/')[0];
        }
    }
    return null;
}
var olds = [];
function getCssNext() {
    
    for (var s= document.styleSheets.length - 1; s >= 0; s--) {
        var cssRules = document.styleSheets[s].cssRules ||
                document.styleSheets[s].rules || [];
				var cssRule = false;

				for (var c=0; c < cssRules.length; c++) {
				cssRule = cssRules[c];
					
					var bg = false;
						for(var key in cssRule.style)
						{
							bg = cssRule.style[key];

								
							if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|rgba|rgb/i.test(bg) || colorNameToHex(bg))
							{

								var isOld = false;
								for(var x = 0; x < olds.length; x++)
								{
									if(bg == olds[x])
									{
										isOld = true;
									}
								}
								if(!isOld){olds.push(bg); return bg;}
							}
							else
							{
								var found = false;
								
								if(bg.split)
								{
									
										bg = bg.split(/-?-?[a-z\-?A-Z]+:\s*/gi);
									

									for(var i = 0 ;i < bg.length; i++)
									{
										if(bg[i])
										{
											var hex = bg[i].split(';')[0];
											
											if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|rgba|rgb/i.test(hex) || colorNameToHex(hex))
											{
												var isOld = false;
												for(var x = 0; x < olds.length; x++)
												{
													if(hex == olds[x])
													{
														isOld = true;
													}
												}
												if(!isOld)
												{
													bg = hex;
													console.log('times: ' + hex);
													found = true;
													olds.push(bg);
													return bg;
												}
											}
										}
										
									}
								}
								if(!found)
								bg = false;
							}
						}
					
						if(!bg)
						{
							continue;
							
							
						}
						
						

					
					
				}
				
				return bg;
    }
    return null;
}

window.onload = function(){
	
	//getCss();
	var rows = 19;
	var cols = 3;
	var html = '<table border="1" style="width: 100%;">';
	
	for(var i = 0; i < rows; i++)
	{
		html += '<tr>';
		for(var y = 0; y < cols; y++)
		{
			isOld = false;

			var bg = getCssNext();
			//console.log(bg);
			var rgba;
			if(bg.match && bg.match(/rgb|rgba/gi))
			{
				//console.log(bg);
				rgba = bg.match(/(\d+(\.\d+)|\d+)/gi);
			if(rgba[3] === undefined){rgba[3] = 255;}
			html += '<td style="color: black; background-color: rgba(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ', ' + rgba[3] + ');">' + i + '-' + y + '</td>';
			}
			else
			{
			html += '<td style="color: black; background-color: ' + bg + '">' + i + '-' + y + '</td>';
			}
			
			
		}
		html += '</tr>';
	}
	
	document.getElementById('table').innerHTML = html;
	var info = '<p>Плиток: ' + rows * cols + '</p>';
	for(var i = 0; i < olds.length; i++)

	document.getElementById('info').innerHTML = info;
	
};