/* Animations au survol des éléments du menu */

const a = document.querySelector('#html5');
const b = document.querySelector('#css3');
const c = document.querySelector('#sass');
const d = document.querySelector('#bootstrap4');
const e = document.querySelector('#javascript');
const f = document.querySelector('#versionning');
const g = document.querySelector('.hero_subtitle');

a.addEventListener ("mouseenter", event => {
	a.classList.add('animated', 'heartBeat')
	});

a.addEventListener ("mouseleave", event => {
	a.classList.remove('animated', 'heartBeat')
	});

b.addEventListener ("mouseenter", event => {
	b.classList.add('animated', 'heartBeat')
	});

b.addEventListener ("mouseleave", event => {
	b.classList.remove('animated', 'heartBeat')
	});

c.addEventListener ("mouseenter", event => {
	c.classList.add('animated', 'heartBeat')
	});

c.addEventListener ("mouseleave", event => {
	c.classList.remove('animated', 'heartBeat')
	});

d.addEventListener ("mouseenter", event => {
	d.classList.add('animated', 'heartBeat')
	});

d.addEventListener ("mouseleave", event => {
	d.classList.remove('animated', 'heartBeat')
	});

e.addEventListener ("mouseenter", event => {
	e.classList.add('animated', 'heartBeat')
	});

e.addEventListener ("mouseleave", event => {
	e.classList.remove('animated', 'heartBeat')
	});

f.addEventListener ("mouseenter", event => {
	f.classList.add('animated', 'heartBeat')
	});

f.addEventListener ("mouseleave", event => {
	f.classList.remove('animated', 'heartBeat')
	});


g.addEventListener ("mouseenter", event => {
	g.classList.add('animated', 'rubberBand')
	});

g.addEventListener ("mouseleave", event => {
	g.classList.remove('animated', 'rubberBand')
	});

