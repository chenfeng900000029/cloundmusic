$(function() {
$.get('lyric.json').then(function(object) {
	let {lyric} = object
	let array=lyric.split('\n')
	let regex = /^\[(.+)\](.*)$/
	array = array.map(function(string, index) {
		let matches = string.match(regex)
		if(matches) {
			return {time: matches[1],words: matches[2]}
		}
	})
	let $lyric = $('.lyric')
	array.map(function(object) {
		if(!object){return}
			let $p = $('<p/>')
		$p.attr('data-time', object.time).text(object.words)
		$p.appendTo($lyric)
		})
})
	let audio=document.createElement('audio')
	//audio.autoplay='autoplay'  自动播放  手机无效

	audio.src='http://dl.stream.qqmusic.qq.com/C400000VOBAv1zQol0.m4a?guid=3712541126&vkey=899DB7123C76ED8A38DD4E6ACF02077FA1C399D94CB14BCFAC727396E263E7C4E94D61CEFBC50151AE313976ED9A6E237B4654A183E09529&uin=0&fromtag=38'
	
	//  进入页面自动播放 手机无效
	// audio.oncanplay=function(){
       // audio.play()
        //$('.disc').addClass('playing')
		//}
		$('.btn-stop').on('click',function(){
			audio.pause()
			$('.musiccontrol').removeClass('playing')
			$('.disc').removeClass('playing')
			
		})
		$('.btn-play').on('click',function(){
			audio.play()
			$('.musiccontrol').addClass('playing')
			$('.disc').addClass('playing')
		})
})

$(contaiter).on('click',function(){
	$(contaiter).hide()
	$(lyrics).show()
})
$(lyrics).on('click',function(){
	$(contaiter).show()
	$(lyrics).hide()
})


//  topcroll

	window.onscroll=function(x){
		var scrollHeight=window.scrollY
			
			if (scrollHeight>15) {
				topNavBar.classList.add('addbar')
			} else{
				topNavBar.classList.remove('addbar')
			}
			//console.log(window.scrollY)	
		}
		
