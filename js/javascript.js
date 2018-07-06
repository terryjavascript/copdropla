//javascript for display font

$(document).ready(function(){

	var textArr = $('.text');
	var i = 0;

	setInterval(function(){
		$(textArr[i]).removeClass('hidden');
		i++;
		if(i > textArr.length){
			for(var j=1; j<textArr.length; j++){
				$(textArr[j]).addClass('hidden');
			}
			i %= textArr.length;
		}
	}, 500);

});

