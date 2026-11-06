/*!
 * i18n for stefkoch.de — minimal dictionary-based translation
 * Language detection: localStorage override > navigator.language > 'de' (default)
 */
(function () {
	'use strict';

	var TRANSLATIONS = {
		de: {
			'nav.about': 'Auszeichnungen',
			'nav.profile': 'Profil',
			'nav.contact': 'Kontakt',
			'header.title': 'Stefan Koch - Integration Architekt',
			'header.text': 'Zertifizierter IT-Architekt mit Erfahrung in Konzeption, Entwicklung, Test und Deployment von Softwareprodukten.',
			'header.text2': 'Tätig für 13 Jahre bei <a href="https://www.ibm.com/de-de/services">IBM</a> und seit 2020 bei der <a href="https://codecentric.de">codecentric</a> aktiv im Bereich Digital Integration.',
			'header.text3': 'Kampferprobt in den Bereichen Softwareentwicklung, DevOps und Qualitätssicherung und intransingent beim Troubleshooting.',
			'about.heading': 'Auszeichnungen',
			'about.text': 'Ausgewählte Badges von Open Group, IBM, Acclaim und Udemy',
			'about.allbadges': 'Alle Badges bei credly',
			'profile.heading': 'Profil / Interessen',
			'profile.text': 'Ich verfüge über umfassende Kenntnisse und Erfahrungen in folgenden Technologien und Themen:',
			'profile.li1': 'Modellierung von Softwarearchitekturen und BPM (PlantUML, TOGAF)',
			'profile.li2': 'Agile Softwareentwicklung',
			'profile.li3': 'Requirements Engineering (IREB) und Design Thinking',
			'profile.li4': 'Java JEE, Python, php, bash, perl, tcl',
			'profile.li5': 'MuleSoft, API-Design',
			'profile.li6': 'Datenbanken, Netzwerke, Protokolle',
			'profile.li7': 'Debugging und Test',
			'profile.li8': 'CI/CD (Gitlab, Azure, Rational, Jenkins)',
			'profile.li9': 'Cloud, Virtualisierung, Container (AWS, Azure, IBM Cloud, VMWare, k8s)',
			'profile.li10': 'Coaching und Mentoring',
			'contact.address': 'Adresse',
			'contact.email': 'Email',
			'contact.phone': 'Telefon'
		},
		en: {
			'nav.about': 'Awards',
			'nav.profile': 'Profile',
			'nav.contact': 'Contact',
			'header.title': 'Stefan Koch - Integration Architect',
			'header.text': 'Certified IT architect with experience in the conception, development, testing and deployment of software products.',
			'header.text2': 'Worked for IBM for 13 years and since 2020 active in Digital Integration at <a href="https://www.codecentric.com">codecentric</a>.',
			'header.text3': 'Battle-tested in software development, DevOps and quality assurance, and relentless when troubleshooting.',
			'about.heading': 'Awards',
			'about.text': 'Selected badges from Open Group, IBM, Acclaim and Udemy',
			'about.allbadges': 'see all 25 badges on credly',
			'profile.heading': 'Profile / Interests',
			'profile.text': 'I have extensive knowledge and experience in the following technologies and topics:',
			'profile.li1': 'Modeling of software architectures and BPM (PlantUML, TOGAF)',
			'profile.li2': 'Agile software development',
			'profile.li3': 'Requirements engineering (IREB) and Design Thinking',
			'profile.li4': 'Java JEE, Python, php, bash, perl, tcl',
			'profile.li5': 'MuleSoft, API design',
			'profile.li6': 'Databases, networks, protocols',
			'profile.li7': 'Debugging and testing',
			'profile.li8': 'CI/CD (GitLab, Azure, Rational, Jenkins)',
			'profile.li9': 'Cloud, virtualization, containers (AWS, Azure, IBM Cloud, VMWare, k8s)',
			'profile.li10': 'Coaching and mentoring',
			'contact.address': 'Address',
			'contact.email': 'Email',
			'contact.phone': 'Phone'
		}
	};

	function detectLanguage() {
		var stored = null;
		try { stored = localStorage.getItem('lang'); } catch (e) { /* private mode */ }
		if (stored === 'de' || stored === 'en') return stored;
		const lang = navigator.language;
		return (lang && lang.toLowerCase().indexOf('de') === 0) ? 'de' : 'en';
	}

	function applyLanguage(lang) {
		document.documentElement.setAttribute('lang', lang);
		var dict = TRANSLATIONS[lang];
		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var key = el.getAttribute('data-i18n');
			if (dict[key] !== undefined) el.innerHTML = dict[key];
		});
		document.querySelectorAll('.lang-switch a').forEach(function (a) {
			a.classList.toggle('active', a.getAttribute('data-lang') === lang);
		});
	}

	function setLanguage(lang) {
		try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
		applyLanguage(lang);
	}

	document.addEventListener('DOMContentLoaded', function () {
		applyLanguage(detectLanguage());
		document.querySelectorAll('.lang-switch a').forEach(function (a) {
			a.addEventListener('click', function (e) {
				e.preventDefault();
				setLanguage(a.getAttribute('data-lang'));
			});
		});
	});
})();
