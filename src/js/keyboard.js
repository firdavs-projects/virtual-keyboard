import {keysData, functionalKeys, letters, allowedKeys} from '../accets/data';

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
            // set after cursor position
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            // set text
            const text = textarea.value;
            const before = text.substring(0, start);
            const after = text.substring(end, text.length);
            let addedText = key.dataset[state.lang];
            if (state.Shift && !state.CapsLock) {
                addedText = key.dataset[state.lang + 'shift'];
            }
            if (state.CapsLock && !state.Shift && letters[state.lang].includes(key.dataset[state.lang])) {
                addedText = key.dataset[state.lang + 'shift'];
            }
            if (state.CapsLock && state.Shift) {
                if (letters[state.lang].includes(key.dataset[state.lang])) {
                    addedText = key.dataset[state.lang];
                } else {
                    addedText = key.dataset[state.lang + 'shift'];
                }
            }
            textarea.value = before + addedText + after;
            // set cursor position
            textarea.selectionStart = start + key.dataset[state.lang].length;
            textarea.selectionEnd = start + key.dataset[state.lang].length;
        }
        if (key.id === 'Delete') {
            // delete symbol after cursor
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            textarea.value = value.substring(0, start) + value.substring(end + 1, value.length);
            // set cursor to the end
            textarea.selectionStart = start;
            textarea.selectionEnd = start;
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
            const prev = textarea.selectionStart - 1;
            textarea.selectionStart = prev;
            textarea.selectionEnd = prev;
        }
        if (key.id === 'ArrowRight') {
            const next = textarea.selectionStart + 1;
            textarea.selectionStart = next;
            textarea.selectionEnd = next;
        }
        if (key.id === 'ArrowUp') {
            // set a cursor to the end of the previous line
            const start = textarea.selectionStart;
            const value = textarea.value;
            const prevLine = value.substring(0, start).lastIndexOf('\n');
            textarea.selectionStart = prevLine;
            textarea.selectionEnd = prevLine;
        }
        if (key.id === 'ArrowDown') {
            // set a cursor to the start of the next line
            const start = textarea.selectionStart;
            const value = textarea.value;
            const before = value.substring(0, start);
            const nextLine = value.substring(start, value.length).indexOf('\n', 1)
            textarea.selectionStart = nextLine + before.length;
            textarea.selectionEnd = nextLine + before.length;
        }
        if (key.id === 'Backspace') {
            // delete symbol before cursor
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            textarea.value = value.substring(0, start - 1) + value.substring(end, value.length);
            // set cursor to the end
            textarea.selectionStart = start - 1;
            textarea.selectionEnd = start - 1;
        }
        if (key.id === 'Enter') {
            //add new line after cursor
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            textarea.value = value.substring(0, start) + '\n' + value.substring(end, value.length);
            // set cursor to the end
            textarea.selectionStart = start + 1;
            textarea.selectionEnd = start + 1;
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
    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
    textarea.focus();
    const key = document.getElementById(e.code);
    key?.classList.add('pressed');
    if (!functionalKeys.includes(e.key)) {
        let addedText = '';
        if (state.CapsLock && !state.Shift) {
            if (letters[state.lang].includes(key.dataset[state.lang])) {
                addedText = key.dataset[state.lang + 'shift'];
            } else {
                addedText = key.dataset[state.lang];
            }
        }
        if (state.Shift && state.CapsLock) {
            if (letters[state.lang].includes(key.dataset[state.lang])) {
                addedText = key.dataset[state.lang];
            } else {
                addedText = key.dataset[state.lang + 'shift'];
            }
        }
        if (state.Shift && !state.CapsLock) {
            addedText = key.dataset[state.lang + 'shift'];
        }
        if (!state.Shift && !state.CapsLock) {
            addedText = key.dataset[state.lang];
        }
        //set key after cursor
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        textarea.value = addedText
            ? value.substring(0, start) + addedText + value.substring(end, value.length)
            : e.key.length === 1
                ? value.substring(0, start) + e.key + value.substring(end, value.length)
                : value;
        // set cursor to the end
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1;
    }
    if (e.code === 'Tab') {
        textarea.value += '\t';
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
    key?.classList.remove('pressed');
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
                    if (!state.CapsLock && state.Shift) {
                        key.innerHTML = key.dataset[state.lang + 'shift']
                    }
                    if (!state.CapsLock && !state.Shift) {
                        key.innerHTML = key.dataset[state.lang]
                    }
                    if (state.CapsLock && state.Shift) {
                        if (letters[state.lang].includes(key.dataset[state.lang])) {
                            key.innerText = key.dataset[state.lang];
                        } else {
                            key.innerText = key.dataset[state.lang + 'shift'];
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
https://github.com/firdavs-projects/virtual-keyboard/pull/1
Developed from Windows OS by Firdavs Abdulloev, 2022
`

const keyboardContainer = document.createElement('div')
keyboardContainer.classList.add('keyboard-container')
keyboardContainer.addEventListener('click', clickHandler);

render();
