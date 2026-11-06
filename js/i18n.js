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
			'header.title': 'Stefan Koch: Information-Integration Architekt',
			'header.subtitle': 'Ausgebildet in Information Management und Data Science.',
			'header.text': 'Zertifizierter IT-Architekt mit Erfahrung in Konzeption, Entwicklung, Test und Deployment von Softwareprodukten.',
			'header.text2': 'Ex-IBM (13 Jahre), seit 2020 bei der <a href="https://codecentric.de">codecentric</a> aktiv im Bereich Digital Integration.',
			'header.text3': 'Kampferprobt in den Bereichen Softwareentwicklung, DevOps und Qualitätssicherung und intransingent beim Troubleshooting.',
			'header.text4': 'Vertrauen entsteht aus Handwerkskunst, Transparenz und Qualität.',
			'about.heading': 'Auszeichnungen',
			'about.text': 'Ausgewählte Badges von Open Group, IBM, iSQI ISAQB und Udemy',
			'about.allbadges': 'Alle Badges bei credly',
			'profile.heading': 'Profil / Interessen',
			'profile.text': 'Ich verfüge über umfassende Kenntnisse und Erfahrungen in folgenden Technologien und Themen:',
			'profile.li1': 'Modellierung von Softwarearchitekturen und BPM (Mermaid, PlantUML, TOGAF, BPMN/BPEL)',
			'profile.li2': 'Agile Softwareentwicklung (Disciplined Agile Delivery, SCRUM)',
			'profile.li3': 'Requirements Engineering (IREB) und Design Thinking',
			'profile.li4': 'Java JEE, Spring Boot, Python, php, bash, perl, tcl',
			'profile.li5': 'Camunda/Operaton, MuleSoft, API-Design',
			'profile.li6': 'Datenbanken, Netzwerke, Protokolle',
			'profile.li7': 'Debugging, Test (TDD, ISTQB), Benchmarking und Reifegradmodelle',
			'profile.li8': 'CI/CD (Gitlab, Azure, Rational, Jenkins)',
			'profile.li9': 'Cloud, Virtualisierung, Container (AWS, Azure, IBM Cloud, VMWare, k8s)',
			'profile.li10': 'Coaching und Mentoring',
			'profile.li11': 'Information und Data Science (Machine Learning, Datenmodellierung, Natural Language Processing)',
			'profile.li12': 'AI-Harness-, Skill- und Kontextmanagement-Tools (apm, opencode, codex, claude)',
			'contact.address': 'Adresse',
			'contact.email': 'Email',
			'contact.phone': 'Telefon'
		},
		en: {
			'nav.about': 'Awards',
			'nav.profile': 'Profile',
			'nav.contact': 'Contact',
			'header.title': 'Stefan Koch: Information-Integration Architect',
			'header.subtitle': 'Educated in Information Management and Data Science.',
			'header.text': 'Certified IT architect with experience in the conception, development, testing and deployment of software products.',
			'header.text2': 'Ex-IBM (13 years), active in Digital Integration at <a href="https://www.codecentric.com">codecentric</a> since 2020.',
			'header.text3': 'Battle-tested in software development, DevOps and quality assurance, and relentless when troubleshooting.',
			'header.text4': 'Trust is built on craftsmanship, transparency, and quality.',
			'about.heading': 'Awards',
			'about.text': 'Selected badges from Open Group, IBM, iSQI ISAQB and Udemy',
			'about.allbadges': 'see all 25 badges on credly',
			'profile.heading': 'Profile / Interests',
			'profile.text': 'I have extensive knowledge and experience in the following technologies and topics:',
			'profile.li1': 'Modeling of software architectures and BPM (Mermaid, PlantUML, TOGAF, BPMN/BPEL)',
			'profile.li2': 'Agile software development (Disciplined Agile Delivery, SCRUM)',
			'profile.li3': 'Requirements engineering (IREB) and Design Thinking',
			'profile.li4': 'Java JEE, Spring Boot, Python, php, bash, perl, tcl',
			'profile.li5': 'Camunda/Operaton, MuleSoft, API design',
			'profile.li6': 'Databases, networks, protocols',
			'profile.li7': 'Debugging, testing (TDD, ISTQB), benchmarking and maturity models',
			'profile.li8': 'CI/CD (GitLab, Azure, Rational, Jenkins)',
			'profile.li9': 'Cloud, virtualization, containers (AWS, Azure, IBM Cloud, VMWare, k8s)',
			'profile.li10': 'Coaching and mentoring',
			'profile.li11': 'Information and data science (machine learning, data modeling, natural language processing)',
			'profile.li12': 'AI harness, skill and context management tools (apm, opencode, codex, claude)',
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
