var myFullpage = new fullpage('#fullpage', {
	//Навигация
	menu: '#menu',
    lockAnchors: false,
    navigationTooltips: ['О нас', 'Портфолио', 'Галерея', 'Цены', 'Контакты'],
	anchors:['firstPage', 'secondPage', 'thirdPage', 'fourPage', 'fivePage'],
	navigation: true,
	navigationPosition: 'right',
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Скроллинг
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
    loopBottom: true,
    loopTop: true,
	normalScrollElements: '#element1, .element2',
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Доступ
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Дизайн
	controlArrows: true,
	verticalCentered: true,
	paddingTop: '3em',
	paddingBottom: '10px',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Настроить селекторы
	sectionSelector: '.section',
	lazyLoading: true,

	//события
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});