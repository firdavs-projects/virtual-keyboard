import { keysData, functionalKeys, letters } from '../accets/data';

const state = {
    lang: localStorage.getItem('lang') || 'en',
    CapsLock: false,
    Shift: false,
    Ctrl: false,
    Alt: false,
}

const generateKeyboard = () => {
    const keyboardWrapper = document.createElement('div')
    keyboardWrapper.classList.add('keyboard-wrapper')
    keyboardContainer.appendChild(keyboardWrapper)
    for (let i = 0; i < keysData.length; i++) {
        const row = document.createElement('div')
        row.classList.add('keyboard-row')
        keyboardWrapper.appendChild(row)
        for (let j = 0; j < keysData[i].length; j++) {
            const key = document.createElement('div')
            key.classList.add('key')
            key.innerText = keysData[i][j].key[state.lang]
            key.id = keysData[i][j].code
            key.dataset.en = keysData[i][j].key.en
            key.dataset.ru = keysData[i][j].key.ru
            key.dataset.enshift = keysData[i][j].shift.en
            key.dataset.rushift = keysData[i][j].shift.ru
            row.appendChild(key)
        }
    }
    return keyboardWrapper;
}

const clickHandler = (e) => {
    if (e.target.classList.contains('key')) {
        const key = e.target;
        textarea.focus();
        if (key.id !== 'CapsLock' && key.id !== 'ShiftLeft' && key.id !== 'ShiftRight' && key.id !== 'ControlLeft' && key.id !== 'ControlRight' && key.id !== 'AltLeft' && key.id !== 'AltRight' && key.id !== 'MetaLeft') {
            key.classList.add('pressed');
            setTimeout(() => {
                key.classList.remove('pressed');
            }, 200);
        }
        if (!functionalKeys.includes(key.id)) {
            textarea.value += key.innerText;
        }
        if (key.id === 'CapsLock') {
            state.CapsLock = !state.CapsLock;
            key.classList.toggle('pressed')
            updateKeyboard();
        }
        if (key.id === 'ShiftLeft' || key.id === 'ShiftRight') {
            state.Shift = !state.Shift;
            key.classList.toggle('pressed')
            updateKeyboard();
        }
        if (key.id === 'ControlLeft' || key.id === 'ControlRight') {
            state.Ctrl = !state.Ctrl;
            key.classList.toggle('pressed')
            updateKeyboard();
        }
        if (key.id === 'AltLeft' || key.id === 'AltRight') {
            state.Alt = !state.Alt;
            key.classList.toggle('pressed')
            updateKeyboard();
        }
        if (key.id === 'ArrowLeft') {
            textarea.selectionStart--;
        }
        if (key.id === 'ArrowRight') {
            textarea.selectionStart++;
        }
        if (key.id === 'ArrowUp') {
            textarea.selectionStart -= textarea.value.length;
        }
        if (key.id === 'ArrowDown') {
            textarea.selectionStart += textarea.value.length;
        }
        if (key.id === 'Backspace') {
            textarea.value = textarea.value.slice(0, -1);
        }
        if (key.id === 'Enter') {
            textarea.value += '\n';
        }
        if (key.id === 'Tab') {
            textarea.value += '\t';
        }
        if (e.key === 'Space') {
            textarea.value += ' ';
        }
    }
}

const handleKeyDown = (e) => {
    e.preventDefault();
    textarea.focus();
    const key = document.getElementById(e.code);
    key.classList.add('pressed');
    if (!functionalKeys.includes(e.key)) {
        if (state.CapsLock && letters[state.lang].includes(e.key)) {
            textarea.value += key.dataset[state.lang + 'shift'];
            return;
        }
        if (state.Shift || state.CapsLock) {
            textarea.value += key.dataset[state.lang + 'shift'];
            return;
        }
        textarea.value += key.dataset[state.lang];
    }
    if (e.code === 'Tab') {
        textarea.value += '\t';
    }
    if (e.code === 'Backspace') {
        textarea.value = textarea.value.slice(0, -1);
    }
    if (e.code === 'Enter') {
        textarea.value += '\n';
    }
    if (e.code === 'ArrowUp') {
        textarea.selectionStart -= textarea.value.length;
    }
    if (e.code === 'ArrowDown') {
        textarea.selectionStart += textarea.value.length;
    }
    if (e.code === 'ArrowLeft') {
        textarea.selectionStart--;
    }
    if (e.code === 'ArrowRight') {
        textarea.selectionStart++;
    }
    if (e.code === 'CapsLock') {
        state.CapsLock = !state.CapsLock;
    }
    if (e.key === 'Shift') {
        state.Shift = true;
    }
    if (e.key === 'Alt') {
        state.Alt = true;
    }
    if (e.key === 'Control') {
        state.Ctrl = true;
    }
    updateKeyboard('down', e);
}

const handleKeyUp = (e) => {
    const key = document.getElementById(e.code);
    if (e.code === 'CapsLock' && state.CapsLock) {
        return;
    }
    updateKeyboard('up', e);
    key.classList.remove('pressed');
}

const updateKeyboard = (keyState = 'down', e) => {
    const keys = document.querySelectorAll('.key');
    if (keyState === 'down') {
        if (state.CapsLock && !state.Shift) {
            keys.forEach(key => {
                if (letters[state.lang].includes(key.dataset[state.lang])) {
                    key.innerText = key.dataset[state.lang + 'shift'];
                }
                if (key.dataset[state.lang + 'shift'] && !letters[state.lang].includes(key.dataset[state.lang])) {
                    key.innerText = key.dataset[state.lang];
                }
            });
        }
        if (!state.Shift && !state.CapsLock) {
            keys.forEach(key => {
                if (key.dataset[state.lang + 'shift']) {
                    key.innerText = key.dataset[state.lang];
                }
                if (letters[state.lang].includes(key.dataset[state.lang])) {
                    key.innerText = key.dataset[state.lang];
                }
            })
        }
        if (state.Shift && !state.CapsLock) {
            keys.forEach(key => {
                if (key.dataset[state.lang + 'shift']) {
                    key.innerText = key.dataset[state.lang + 'shift'];
                }
            })
        }
        if (state.Shift && state.CapsLock) {
            keys.forEach(key => {
                if (key.dataset[state.lang + 'shift'] && letters[state.lang].includes(key.dataset[state.lang])) {
                    key.innerText = key.dataset[state.lang];
                }
                if (key.dataset[state.lang + 'shift'] && !letters[state.lang].includes(key.dataset[state.lang])) {
                    key.innerText = key.dataset[state.lang + 'shift'];
                }
            })
        }
        if (state.Alt && state.Ctrl) {
            state.lang = state.lang === 'en' ? 'ru' : 'en';
            langEl.innerText = state.lang;
            localStorage.setItem('lang', state.lang);
            state.Alt = false;
            state.Ctrl = false;
            keys.forEach(key => {
                if (key.dataset[state.lang] === 'Alt' || key.dataset[state.lang] === 'Control') {
                    key.classList.remove('pressed');
                }
                if (key.dataset[state.lang + 'shift']) {
                    if (state.CapsLock && !state.Shift) {
                        if (letters[state.lang].includes(key.dataset[state.lang])) {
                            key.innerText = key.dataset[state.lang + 'shift'];
                        } else {
                            key.innerText = key.dataset[state.lang];
                        }
                    }
                    if (!state.CapsLock && state.Shift){
                        key.innerHTML = key.dataset[state.lang + 'shift']
                    }
                    if (!state.CapsLock && !state.Shift){
                        key.innerHTML = key.dataset[state.lang]
                    }
                    if (state.CapsLock && state.Shift) {
                        if (letters[state.lang].includes(key.dataset[state.lang])) {
                            key.innerText = key.dataset[state.lang];
                        } else {
                            key.innerText = key.dataset[state.lang  + 'shift'];
                        }
                    }
                }
            });
        }
    }
    if (keyState === 'up') {
        if (e?.key === 'Shift') {
            state.Shift = false;
            keys.forEach(key => {
                if (state.CapsLock && letters[state.lang].includes(key.dataset[state.lang])) {
                    key.innerText = key.dataset[state.lang + 'shift'];
                } else if (!state.CapsLock && letters[state.lang].includes(key.dataset[state.lang])) {
                    key.innerText = key.dataset[state.lang];
                }
                if (!letters[state.lang].includes(key.dataset[state.lang])) {
                    key.innerText = key.dataset[state.lang];
                }
            })
        }
        if (e.key === 'Alt') {
            state.Alt = false;
        }
        if (e.key === 'Control') {
            state.Ctrl = false;
        }
    }
}

const render = () => {
    keyboardContainer.innerHTML = '';
    keyboardContainer.appendChild(generateKeyboard());
    root.appendChild(textarea);
    root.appendChild(infoEl);
    infoEl.appendChild(langEl);
    root.appendChild(keyboardContainer);
    formatKeyboard();
    updateKeyboard();
}

const formatKeyboard = () => {
    const backspace = document.getElementById('Backspace');
    backspace.classList.add('min100');
    const enter = document.getElementById('Enter');
    enter.classList.add('min100');
    const capslock = document.getElementById('CapsLock');
    capslock.classList.add('min100');
    const shift = document.getElementById('ShiftLeft');
    shift.classList.add('min130');
    const space = document.getElementById('Space');
    space.classList.add('min300');
}

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

const infoEl = document.createElement('div');
infoEl.id = 'info';
infoEl.innerText = 'Ctrl+Alt to toggle language';
const langEl = document.createElement('div');
langEl.id = 'lang';
langEl.innerText = state.lang;
localStorage.setItem('lang', state.lang);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.value = `<h1>Hello World</h1>
P.S. Ctrl + Alt to toggle language

Developed from Windows OS by Firdavs Abdulloev, 2022
`

const keyboardContainer = document.createElement('div')
keyboardContainer.classList.add('keyboard-container')
keyboardContainer.addEventListener('click', clickHandler);

render();
