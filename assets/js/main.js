(function() {

	"use strict";

	document.addEventListener('DOMContentLoaded', function() {
		var $body = document.querySelector('body');

		// Play initial animations on page load.
		window.addEventListener('load', function() {
			setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

		// Slideshow Background.
		(function() {

			// Settings.
			var settings = {
				images: [
					'images/00.jpg',
					'images/0.jpg',
					'images/11.jpg',
					'images/1.jpg',
					'images/2.jpg',
					'images/21.jpg',
					'images/3.jpg',
					'images/4.jpg',
					'images/5.jpg',
					'images/6.jpg',
					'images/55.jpg',
					'images/7.jpg',
					'images/77.jpg'
				],
				delay: 6000
			};

			// Create BG wrapper, BGs.
			var pos = 0, lastPos = 0,
				$wrapper = document.createElement('div'),
				$bgs = [];

			$wrapper.id = 'bg';
			$body.appendChild($wrapper);

			settings.images.forEach(function(src) {
				var $bg = document.createElement('div');
				$bg.style.backgroundImage = 'url("' + src + '")';
				$bg.style.backgroundPosition = 'center';
				$wrapper.appendChild($bg);
				$bgs.push($bg);
			});

			// Main loop.
			$bgs[pos].classList.add('visible', 'top');

			if ($bgs.length > 1) {
				setInterval(function() {
					lastPos = pos;
					pos = (pos + 1) % $bgs.length;

					$bgs[lastPos].classList.remove('top');
					$bgs[pos].classList.add('visible', 'top');

					setTimeout(function() {
						$bgs[lastPos].classList.remove('visible');
					}, settings.delay / 2);
				}, settings.delay);
			}

		})();
	});
})();
