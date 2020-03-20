// Animations au survol des éléments du menu

const a = document.querySelector('#accueil');
const b = document.querySelector('#parcours');
const c = document.querySelector('#compétences');
const d = document.querySelector('#projets');
const e = document.querySelector('#contact1');

a.addEventListener ("mouseenter", event => {
	a.classList.add('animated', 'swing')
	});

a.addEventListener ("mouseleave", event => {
	a.classList.remove('animated', 'swing')
	});

b.addEventListener ("mouseenter", event => {
	b.classList.add('animated', 'swing')
	});

b.addEventListener ("mouseleave", event => {
	b.classList.remove('animated', 'swing')
	});

c.addEventListener ("mouseenter", event => {
	c.classList.add('animated', 'swing')
	});

c.addEventListener ("mouseleave", event => {
	c.classList.remove('animated', 'swing')
	});

d.addEventListener ("mouseenter", event => {
	d.classList.add('animated', 'swing')
	});

d.addEventListener ("mouseleave", event => {
	d.classList.remove('animated', 'swing')
	});

e.addEventListener ("mouseenter", event => {
	e.classList.add('animated', 'swing')
	});

e.addEventListener ("mouseleave", event => {
	e.classList.remove('animated', 'swing')
	});

