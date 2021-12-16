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
			let name = document.getElementById('contact-form__name').value;
			let email = document.getElementById('contact-form__email').value;
			let message = document.getElementById('contact-form__message').value;
			let contact = `${name} <${email}>`;
			console.log('click');
			if (!name) return console.log('No Name');
			if (!email) return console.log('No Email');
			if (!message) return console.log('No Message');
			db.collection('mail')
				.add({
					from: 'Maverick Manasco',
					to: email,
					replyTo: 'maverickcer@gmail.com',
					bcc: 'maverickcer@gmail.com',
					template: {
						name: 'thanks',
						data: {
							name: name,
							email: email,
							message: message
						}
					}
				})
				.then(() => {
					let parent = document.getElementsByClassName('contact-form')[0];
					let child = document.getElementsByClassName(
						'contact-form__input-row'
					)[0];
					let node =
						'<div class="contact-form__head-success">Message Sent</div>';
					parent.insertBefore(node, child);
					setTimeout(() => {
						document
							.getElementsByClassName('contact-form__head-success')[0]
							.remove();
					}, 5000);
				})
				.catch(e => {
					let parent = document.getElementsByClassName('contact-form')[0];
					let child = document.getElementsByClassName(
						'contact-form__input-row'
					)[0];
					let node =
						'<div class="contact-form__head-error">Error: Try Agian</div>';
					parent.insertBefore(node, child);
					setTimeout(() => {
						document
							.getElementsByClassName('contact-form__head-error')[0]
							.remove();
					}, 5000);
				});
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
					.querySelctor('.anchor_nav a[href*=' + sectionId + ']')
					.classList.remove('current');
			}
		});
	}
	window.addEventListener('scroll', scrollActive);

	// -------------------------------------------------
	// -------------  Portfolio Filter -----------------
	// -------------------------------------------------
	let filter__buttons = document.getElementsByClassName('portfolio_filter_btn');
	let filter__items = document.getElementsByClassName('portfolio_list_item');
	let filter__content = document.getElementsByClassName('list_outer');
	for (var i = 0; i < filter__buttons.length; i++) {
		(index => {
			filter__buttons[index].addEventListener('click', () => {
				for (var i = 0; i < filter__buttons.length; i++) {
					(ind => {
						filter__buttons[ind].classList.remove('selected');
					})(i);
				}
				filter__buttons[index].classList.add('selected');
				let target = filter__buttons[index].getAttribute('data-role');
				if (target == 'filter_none') {
					for (var i = 0; i < filter__items.length; i++) {
						(ind => {
							filter__content[ind].classList.remove('active');
							setTimeout(() => {
								if (!filter__items[ind].classList.contains('active')) {
									filter__items[ind].classList.add('active');
								}
							}, 480);
							setTimeout(() => {
								if (!filter__content[ind].classList.contains('active')) {
									filter__content[ind].classList.add('active');
								}
							}, 500);
						})(i);
					}
				} else {
					for (var i = 0; i < filter__items.length; i++) {
						(ind => {
							filter__content[ind].classList.remove('active');
							setTimeout(() => {
								if (filter__items[ind].classList.contains(target)) {
									if (!filter__items[ind].classList.contains('active')) {
										filter__items[ind].classList.add('active');
									}
								} else {
									if (filter__items[ind].classList.contains('active')) {
										filter__items[ind].classList.remove('active');
									}
								}
							}, 480);
							setTimeout(() => {
								if (filter__items[ind].classList.contains(target)) {
									if (!filter__content[ind].classList.contains('active')) {
										filter__content[ind].classList.add('active');
									}
								}
							}, 500);
						})(i);
					}
				}
			});
		})(i);
	}

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
