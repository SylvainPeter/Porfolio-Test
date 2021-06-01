/* Animations au survol des éléments du menu */

const html = document.querySelector('#html5');
const css = document.querySelector('#css3');
const sass = document.querySelector('#sass');
const bootstrap = document.querySelector('#bootstrap4');
const javascript = document.querySelector('#javascript');
const wordpress = document.querySelector('#wordpress');
const versionning = document.querySelector('#versionning');
const audit = document.querySelector('#seo');
const target1 = document.querySelector('#target1');
const target2 = document.querySelector('#target2');
const target3 = document.querySelector('#target3');
const target4 = document.querySelector('#target4');
const target5 = document.querySelector('#target5');
const target6 = document.querySelector('#target6');
const target7 = document.querySelector('#target7');
const target8 = document.querySelector('#target8');

target1.addEventListener ("mouseenter", event => {
	html.classList.add('animated', 'heartBeat')
	});

target1.addEventListener ("mouseleave", event => {
	html.classList.remove('animated', 'heartBeat')
	});

target2.addEventListener ("mouseenter", event => {
	css.classList.add('animated', 'heartBeat')
	});

target2.addEventListener ("mouseleave", event => {
	css.classList.remove('animated', 'heartBeat')
	});

target3.addEventListener ("mouseenter", event => {
	sass.classList.add('animated', 'heartBeat')
	});

target3.addEventListener ("mouseleave", event => {
	sass.classList.remove('animated', 'heartBeat')
	});

target4.addEventListener ("mouseenter", event => {
	bootstrap.classList.add('animated', 'heartBeat')
	});

target4.addEventListener ("mouseleave", event => {
	bootstrap.classList.remove('animated', 'heartBeat')
	});

target5.addEventListener ("mouseenter", event => {
	wordpress.classList.add('animated', 'heartBeat')
	});

target5.addEventListener ("mouseleave", event => {
	wordpress.classList.remove('animated', 'heartBeat')
	});

target6.addEventListener ("mouseenter", event => {
	vue.classList.add('animated', 'heartBeat')
	});

target6.addEventListener ("mouseleave", event => {
	vue.classList.remove('animated', 'heartBeat')
	});

target7.addEventListener ("mouseenter", event => {
	node.classList.add('animated', 'heartBeat')
	});

target7.addEventListener ("mouseleave", event => {
	node.classList.remove('animated', 'heartBeat')
	});

target8.addEventListener ("mouseenter", event => {
	seo.classList.add('animated', 'heartBeat')
	});

target8.addEventListener ("mouseleave", event => {
	seo.classList.remove('animated', 'heartBeat')
	});
