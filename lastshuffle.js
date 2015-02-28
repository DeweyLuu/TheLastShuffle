$(document).ready(function() {
	$('.shoes').on('click', 'li', function() {
		$(this).find('span').slideToggle();
	});

	$('#startShuffle').on('click', function() {
		$('.shoes').hide();

		function Nike(r) {
			this.retro = r;
			this.toHTML = function() {
				return "<li class='retroJordan'>" + this.retro + "</li>";
			}
		}

		function Shoe() {
			var thisShoe = this;
			var kicks = new Array();
				kicks[0] = document.getElementById('jthree').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/679zanqe2dgs37d/jordan3.jpg" />';
				kicks[1] = document.getElementById('jfour').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/tr6wptbk6bs971g/jordan4.jpg" />';
				kicks[2] = document.getElementById('jfive').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/vf30kds9djcvch8/jordan5.jpg" />';
				kicks[3] = document.getElementById('jsix').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/1vv71cvijjqvb71/jordan6.jpg" />';
				kicks[4] = document.getElementById('jseven').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/wrxefc4l41dyshv/jordan7.jpg" />';
				kicks[5] = document.getElementById('jeight').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/1kx13abdj6tdmo3/jordan8.jpg" />';
				kicks[6] = document.getElementById('jten').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/ken50fgwgehk8ii/jordan10.jpg" />';
				kicks[7] = document.getElementById('jeleven').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/rop452o4byuh5ye/jordan11.jpg" />';
				kicks[8] = document.getElementById('jtwelve').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/ohab75cu540jj94/jordan12.jpg" />';
				kicks[9] = document.getElementById('jthirteen').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/sbzhx8jjocd621x/jordan13.jpg" />';
				kicks[10] = document.getElementById('jfourteen').innerHTML = '<img src="https://dl.dropboxusercontent.com/s/xaz1agsgvixe4d0/jordan14.jpg" />';
			this.ranks = [kicks[0], kicks[1], kicks[2], kicks[3], kicks[4], kicks[5], kicks[6], kicks[7], kicks[8], kicks[9], kicks[10]];

			$.each(thisShoe.ranks, function() {
				var retro = this;
				var nike = new Nike(retro);
				$('#jordanShoe').append(nike.toHTML());
			});
		}

		var shuffle = function(m) {
			var rand, $rand;
			rand = Math.floor(Math.random() * m--);

			$('.retroJordan:nth-child(' + m + ')').
				after($('.retroJordan:nth-child(' + rand + ')')).
				insertBefore($('.retroJordan:nth-child(' + rand + ')'))

			if(m) {
				setTimeout(shuffle, 10, m);
			}
		};

		var shoe = new Shoe();
		shuffle($('.retroJordan').length);
	});

	$('#reset').on('click', function() {
		$('#jordanShoe').empty();
		$('.shoes').show();
	});

});
