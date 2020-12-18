function colorNameToHex(color) {
	
	if(typeof color !== 'string')
	{
		return false;
	}
    var colors = {
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
	var rows = 19; //изменяем как нужно
	var cols = 3; // если много - долго грузится 
	var html = '<table border="1" style="width: 100%;">';
	
	for(var i = 0; i < rows; i++)
	{
		html += '<tr>';
		for(var y = 0; y < cols; y++)
		{
			isOld = false;

			var bg = getCssNext();
			var rgba;
			if(bg.match && bg.match(/rgb|rgba/gi))
			{
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