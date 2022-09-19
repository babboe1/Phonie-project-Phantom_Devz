const BACKDROP = document.getElementById('backdrop');
const GRATITUDE = document.querySelector('.gratitude');
const GRATITUDE_BTN = document.querySelector('.gratitude__button');
const FORM = document.getElementById('form-content');
const [FIRST_NAME, LAST_NAME, EMAIL, PHONE] =
   document.getElementsByTagName('input');
const TRUE_ICON = document.getElementById('true-icon');
const PROVIDER_GRP = document.querySelectorAll('.provider-grp');
const [Airtel, Etisalat, Glo, Mtn] = document.querySelectorAll('.provider-grp');
const PROVIDER_TEXT = document.querySelectorAll('.provider-text');
const AUTO = document.querySelector('.auto');
const ERROR_ICON1 = document.getElementById('error-icon1');
const ERROR_ICON2 = document.getElementById('error-icon2');
const ERROR_ICON3 = document.getElementById('error-icon3');
const ERROR_TEXT1 = document.getElementById('ERROR_TEXT1');
const ERROR_TEXT2 = document.getElementById('ERROR_TEXT2');
const ERROR_TEXT3 = document.getElementById('ERROR_TEXT3');
const ERROR_TEXT4 = document.getElementById('ERROR_TEXT4');

const MTN = [
	'703',
	'704',
	'706',
	'803',
	'806',
	'810',
	'813',
	'814',
	'816',
	'903',
	'906',
	'913',
	'916',
];
const GLO = ['705', '805', '807', '811', '815', '905', '915'];
const AIRTEL = ['701', '708', '802', '808', '812', '904', '907', '912', '901'];
const ETISALAT = ['809', '817', '818', '909', '908'];
let ALL_PROVIDERS = [...GLO, ...AIRTEL, ...ETISALAT, ...MTN];

const FORM_LIST = document.querySelector('.form-list');

let list = false;

let check;
let error = false;

const BackDrop = () => {
	BACKDROP.classList.toggle('visible');
};

const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};

const modalDrop = () => {
	BackDrop();
	StopScroll();
};

FIRST_NAME.addEventListener('input', () => {
	if (FIRST_NAME.value === '') {
		ERROR_ICON1.classList.remove('hidden');
		ERROR_TEXT1.classList.remove('hidden');
		error = true;
	} else {
		ERROR_ICON1.classList.add('hidden');
		ERROR_TEXT1.classList.add('hidden');
		error = false;
	}
});

LAST_NAME.addEventListener('input', () => {
	if (LAST_NAME.value === '') {
		ERROR_ICON2.classList.remove('hidden');
		ERROR_TEXT2.classList.remove('hidden');
		error = true;
	} else {
		ERROR_ICON2.classList.add('hidden');
		ERROR_TEXT2.classList.add('hidden');
		error = false;
	}
});

EMAIL.addEventListener('input', () => {
	if (EMAIL.value === '') {
		EMAIL.classList.add('invalid');
		EMAIL.classList.add('place-holder');
		EMAIL.placeholder = 'email@example/com';
		ERROR_ICON3.classList.remove('hidden');
		ERROR_TEXT3.classList.remove('hidden');
		error = true;
	} else {
		const emailTestRe =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var isValidEmail = emailTestRe.test(String(EMAIL.value).toLowerCase());

		if (!isValidEmail) {
			EMAIL.classList.add('invalid');
			EMAIL.classList.add('place-holder');
			EMAIL.placeholder = 'email@example/com';
			ERROR_ICON3.classList.remove('hidden');
			ERROR_TEXT3.classList.remove('hidden');
			error = true;
		} else {
			EMAIL.classList.remove('invalid');
			ERROR_ICON3.classList.add('hidden');
			ERROR_TEXT3.classList.add('hidden');
			error = false;
		}
	}
});

let count = 0;

const checkNumber = (array, provider) => {
	error = true;
	check = PHONE.value;
	for (const element of array) {
		if (
			check.includes(`${+234}${element}`) ||
			check.includes(`0${element}`)
		) {
			ERROR_TEXT4.classList.add('hidden');
			error = false;
			if (provider === 'AIRTEL') {
				count = 1;
				TRUE_ICON.src = './assets/Icons/airtel-nigeria.svg';
				TRUE_ICON.classList.add('white');
			} else if (provider === '9MOBILE') {
				count = 2;
				TRUE_ICON.src = './assets/Icons/9mobile.svg';
			} else if (provider === 'GLO') {
				count = 3;
				TRUE_ICON.src = './assets/Icons/globacom-limited.svg';
			} else if (provider === 'MTN') {
				count = 4;
				TRUE_ICON.src = './assets/Icons/mtn.svg';
			}
		}

		if (
			(check.includes(`${+234}${element}`) && check.length > 14) ||
			(check.includes(`0${element}`) && check.length > 11)
		) {
			count = 0;
			ERROR_TEXT4.textContent = 'Phone number too long!!';
		}

		if (count === 0) {
			TRUE_ICON.src = './assets/Icons/icon-error.svg';
			error = true;
			ERROR_TEXT4.classList.remove('hidden');
		}
	}
};

PROVIDER_GRP.forEach((element) => {
	AUTO.addEventListener('click', () => {
		element.lastElementChild.classList.add('hidden');
	});
	element.addEventListener('click', (e) => {
		for (const el of PROVIDER_GRP) {
			el.lastElementChild.classList.add('hidden');
		}
		e.currentTarget.lastElementChild.classList.toggle('hidden');
	});
});

const phoneDetect = () => {
	ERROR_TEXT4.textContent = 'Phone number not found!!';
	count = 0;
	checkNumber(MTN, 'MTN');
	checkNumber(GLO, 'GLO');
	checkNumber(AIRTEL, 'AIRTEL');
	checkNumber(ETISALAT, '9MOBILE');
	error = false;
};

PHONE.addEventListener('input', (e) => {
	phoneDetect();
	FORM_LIST.innerHTML = '';
	autoComplete();
});

AUTO.addEventListener('click', () => {
	TRUE_ICON.src = '';
	PHONE.addEventListener('input', () => {
		phoneDetect();
	});
	ALL_PROVIDERS = [...GLO, ...AIRTEL, ...ETISALAT, ...MTN];
});

Airtel.addEventListener('click', () => {
	ERROR_TEXT4.textContent = 'Phone number not found!!';
	TRUE_ICON.src = '';
	PHONE.addEventListener('input', () => {
		count = 0;
		ERROR_TEXT4.textContent = 'Number is not a AIRTEL number!!';
		checkNumber(AIRTEL, 'AIRTEL');
		error = false;
	});
	ALL_PROVIDERS = AIRTEL;
});

Etisalat.addEventListener('click', () => {
	ERROR_TEXT4.textContent = 'Phone number not found!!';
	TRUE_ICON.src = '';
	PHONE.addEventListener('input', () => {
		count = 0;
		ERROR_TEXT4.textContent = 'Number is not a 9MOBILE number!!';
		checkNumber(ETISALAT, '9MOBILE');
		error = false;
	});
	ALL_PROVIDERS = ETISALAT;
});

Glo.addEventListener('click', () => {
	ERROR_TEXT4.textContent = 'Phone number not found!!';
	TRUE_ICON.src = '';
	PHONE.addEventListener('input', () => {
		count = 0;
		checkNumber(GLO, 'GLO');
		ERROR_TEXT4.textContent = 'Number is not a GLO number!!';
		error = false;
	});
	ALL_PROVIDERS = GLO;
});

Mtn.addEventListener('click', () => {
	ERROR_TEXT4.textContent = 'Phone number not found!!';
	TRUE_ICON.src = '';
	PHONE.addEventListener('input', () => {
		count = 0;
		ERROR_TEXT4.textContent = 'Number is not a MTN number!!';
		checkNumber(MTN, 'MTN');
		error = false;
	});
	ALL_PROVIDERS = MTN;
});

FORM.addEventListener('submit', (e) => {
	e.preventDefault();

	if (PHONE.value.length < 11) {
		error = true;
		count = 0;
		ERROR_TEXT4.textContent = 'Phone number too short!!';
		TRUE_ICON.src = './assets/Icons/icon-error.svg';
		ERROR_TEXT4.classList.remove('hidden');
	}

	if (FIRST_NAME.value === '') {
		ERROR_ICON1.classList.remove('hidden');
		ERROR_TEXT1.classList.remove('hidden');
		error = true;
	}

	if (LAST_NAME.value === '') {
		ERROR_ICON2.classList.remove('hidden');
		ERROR_TEXT2.classList.remove('hidden');
		error = true;
	}

	if (EMAIL.value === '') {
		EMAIL.classList.add('invalid');
		EMAIL.classList.add('place-holder');
		EMAIL.placeholder = 'email@example/com';
		ERROR_ICON3.classList.remove('hidden');
		ERROR_TEXT3.classList.remove('hidden');
		error = true;
	}

	if (!error) {
		gratitudeHandler();
		FIRST_NAME.value = '';
		LAST_NAME.value = '';
		EMAIL.value = '';
		PHONE.value = '';
	}
});

const autoComplete = () => {
	check = PHONE.value;
	for (const element of ALL_PROVIDERS) {
		if (
			check.includes(`${+234}`) &&
			check.substring(3, check.length).includes(element) &&
			check.length == 6
		) {
			FORM_LIST.innerHTML = '';
			let a = document.createElement('li');
			a.className = 'form-list__item';
			a.textContent = `+234${element}`;
			FORM_LIST.appendChild(a);
			list = true;
		} else if (
			check.substring(0, 1) === '0' &&
			check.includes(element) &&
			check.length == 4
		) {
			FORM_LIST.innerHTML = '';
			let a = document.createElement('li');
			a.className = 'form-list__item';
			a.textContent = `0${element}`;
			FORM_LIST.appendChild(a);
			list = true;
		} else if (
			check.includes(`${+234}`) &&
			check.substring(3, check.length).includes(element.substring(0, 2)) &&
			check.length == 5
		) {
			let a = document.createElement('li');
			a.className = 'form-list__item';
			a.textContent = `+234${element}`;
			FORM_LIST.appendChild(a);
			list = true;
		} else if (
			check.substring(0, 1) === '0' &&
			check.includes(element.substring(0, 2)) &&
			check.length == 3
		) {
			let a = document.createElement('li');
			a.textContent = `0${element}`;
			a.className = 'form-list__item';
			FORM_LIST.appendChild(a);
			list = true;
		} else if (
			check.includes(`${+234}`) &&
			check.substring(3, check.length).includes(element.substring(0, 1)) &&
			check.length == 4
		) {
			let a = document.createElement('li');
			a.textContent = `+234${element}`;
			a.className = 'form-list__item';
			FORM_LIST.appendChild(a);
			list = true;
		} else if (
			check.substring(0, 1) === '0' &&
			check.includes(element.substring(0, 1)) &&
			check.length < 3
		) {
			let a = document.createElement('li');
			a.className = 'form-list__item';
			a.textContent = `0${element}`;
			FORM_LIST.appendChild(a);
			list = true;
		}
	}
	const FORM_LIST_ITEM = document.querySelectorAll('.form-list__item');

	if (list === true) {
		FORM_LIST_ITEM.forEach((element) => {
			element.addEventListener('click', () => {
				PHONE.value = element.textContent;
				phoneDetect();
			});
		});
	}
};

const gratitudeHandler = () => {
	modalDrop();
	GRATITUDE.classList.toggle('visible');
};

BACKDROP.addEventListener('click', modalDrop);
GRATITUDE_BTN.addEventListener('click', gratitudeHandler);
