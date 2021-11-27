if (navigator.serviceWorker) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function(registration) {
			// console.log(
			// 	'ServiceWorker registration successful with scope:',
			// 	registration.scope
			// );
		})
		.catch(function(error) {
			// console.log('ServiceWorker registration failed:', error);
		});
}
// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------
setTimeout(function() {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		setTimeout(function() {
			document.getElementById('preloader').classList.add('preloaded');
		}, 500);
		setTimeout(function() {
			document.getElementById('preloader').remove();
			document
				.getElementsByClassName('beny_tm_all_wrap')[0]
				.classList.add('animate');
		}, 1500);
	} else {
		setTimeout(function() {
			document.getElementById('preloader').classList.add('preloaded');
		}, 500);
		setTimeout(function() {
			document.getElementById('preloader').remove();
			document
				.getElementsByClassName('beny_tm_all_wrap')[0]
				.classList.add('animate');
		}, 1500);
	}
}, 500);
// -----------------------------------------------------
// -----------------   Carousel    ---------------------
// -----------------------------------------------------
var glide = new Glide('.glide', {
	type: 'carousel',
	animationDuration: 500,
	autoplay: false,
	focusAt: '2',
	startAt: 2,
	perView: 1
});
window.onload = event => {
	glide.mount();
	// -----------------------------------------------------
	// -----------------   Contact    ----------------------
	// -----------------------------------------------------
	const firebaseConfig = {
		apiKey: 'AIzaSyC8C5_WNvOWNs46wcVJiBwPLbcewJOGNfU',
		authDomain: 'callouts-evolved.firebaseapp.com',
		projectId: 'callouts-evolved',
		storageBucket: 'callouts-evolved.appspot.com',
		messagingSenderId: '682142902161',
		appId: '1:682142902161:web:bdb6868dbb2a4b53769c30',
		measurementId: 'G-PBF9ZRCMEX'
	};
	const app = firebase.initializeApp(firebaseConfig);
	const db = firebase.firestore();
	document.getElementById('contact-form').addEventListener(
		'submit',
		function(e) {
			e.preventDefault();
			contact(db);
			return false;
		},
		false
	);
	// -----------------------------------------------------
	// ---------------   Mobile Menu    --------------------
	// -----------------------------------------------------
	document.getElementsByClassName('my_trigger')[0].addEventListener(
		'click',
		function(e) {
			document
				.getElementsByClassName('hamburger')[0]
				.classList.toggle('is-active');
			document
				.getElementsByClassName('mobile_menu_dropdown')[0]
				.classList.toggle('is-active');
		},
		false
	);

	let mobile_links = document.getElementsByClassName('mobile_link');
	for (var i = 0; i < mobile_links.length; i++) {
		(index => {
			mobile_links[index].addEventListener('click', () => {
				document
					.getElementsByClassName('hamburger')[0]
					.className.remove('is-active');
				document
					.getElementsByClassName('my_trigger')[0]
					.classList.remove('is-active');
			});
		})(i);
	}
	// -----------------------------------------------------
	// ----------------   Scroll Spy    --------------------
	// -----------------------------------------------------
	const sections = document.querySelectorAll('section[id]');
	function scrollActive() {
		const scrollY = window.pageYOffset;
		sections.forEach(current => {
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - 50;
			sectionId = current.getAttribute('id');
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				document
					.querySelector('.anchor_nav a[href*=' + sectionId + ']')
					.classList.add('current');
			} else {
				document
					.querySelector('.anchor_nav a[href*=' + sectionId + ']')
					.classList.remove('current');
			}
		});
	}
	window.addEventListener('scroll', scrollActive);
	// -------------------------------------------------
	// -------------  MODALBOX SERVICE -----------------
	// -------------------------------------------------
	var modalBox = document.getElementsByClassName(
		'beny_tm_modalbox_portfolio'
	)[0];
	var list = document.getElementsByClassName('portfolio_list_item');
	var closePopup = document.getElementsByClassName('close_modalbox')[0];
	for (var i = 0; i < list.length; i++) {
		(index => {
			list[index].addEventListener('click', () => {
				document.getElementsByClassName('description_wrap')[0].innerHTML = list[
					index
				].querySelector('.popup_informations').innerHTML;
				document
					.getElementsByClassName('beny_tm_modalbox_portfolio')[0]
					.classList.add('opened');
			});
		})(i);
	}
	document
		.getElementsByClassName('close_modalbox')[0]
		.addEventListener('click', () => {
			document
				.getElementsByClassName('beny_tm_modalbox_portfolio')[0]
				.classList.remove('opened');
			document.getElementsByClassName('description_wrap')[0].innerHTML = '';
			return false;
		});
};
