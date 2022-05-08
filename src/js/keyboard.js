const keysData = [
    [
        {key: {en: '`', ru: 'ё'}, code: 'Backquote', shift: {en: '~', ru: 'Ё'}},
        {key: {en: '1', ru: '1'}, code: 'Digit1', shift: {en: '!', ru: '!'}},
        {key: {en: '2', ru: '2'}, code: 'Digit2', shift: {en: '@', ru: '"'}},
        {key: {en: '3', ru: '3'}, code: 'Digit3', shift: {en: '#', ru: '№'}},
        {key: {en: '4', ru: '4'}, code: 'Digit4', shift: {en: '$', ru: ';'}},
        {key: {en: '5', ru: '5'}, code: 'Digit5', shift: {en: '%', ru: '%'}},
        {key: {en: '6', ru: '6'}, code: 'Digit6', shift: {en: '^', ru: ':'}},
        {key: {en: '7', ru: '7'}, code: 'Digit7', shift: {en: '&', ru: '?'}},
        {key: {en: '8', ru: '8'}, code: 'Digit8', shift: {en: '*', ru: '*'}},
        {key: {en: '9', ru: '9'}, code: 'Digit9', shift: {en: '(', ru: '('}},
        {key: {en: '0', ru: '0'}, code: 'Digit0', shift: {en: ')', ru: ')'}},
        {key: {en: '-', ru: '-'}, code: 'Minus', shift: {en: '_', ru: '_'}},
        {key: {en: '=', ru: '='}, code: 'Equal', shift: {en: '+', ru: '+'}},
        {key: {en: 'Backspace', ru: 'Backspace'}, code: 'Backspace', shift: {en: '', ru: ''}},
    ],
    [
        {key: {en: 'Tab', ru: 'Tab'}, code: 'Tab', shift: {en: 'Tab', ru: 'Tab'}},
        {key: {en: 'q', ru: 'й'}, code: 'KeyQ', shift: {en: 'Q', ru: 'Й'}},
        {key: {en: 'w', ru: 'ц'}, code: 'KeyW', shift: {en: 'W', ru: 'Ц'}},
        {key: {en: 'e', ru: 'у'}, code: 'KeyE', shift: {en: 'E', ru: 'У'}},
        {key: {en: 'r', ru: 'к'}, code: 'KeyR', shift: {en: 'R', ru: 'К'}},
        {key: {en: 't', ru: 'е'}, code: 'KeyT', shift: {en: 'T', ru: 'Е'}},
        {key: {en: 'y', ru: 'н'}, code: 'KeyY', shift: {en: 'Y', ru: 'Н'}},
        {key: {en: 'u', ru: 'г'}, code: 'KeyU', shift: {en: 'U', ru: 'Г'}},
        {key: {en: 'i', ru: 'ш'}, code: 'KeyI', shift: {en: 'I', ru: 'Ш'}},
        {key: {en: 'o', ru: 'щ'}, code: 'KeyO', shift: {en: 'O', ru: 'Щ'}},
        {key: {en: 'p', ru: 'з'}, code: 'KeyP', shift: {en: 'P', ru: 'З'}},
        {key: {en: '[', ru: 'х'}, code: 'BracketLeft', shift: {en: '{', ru: 'Х'}},
        {key: {en: ']', ru: 'ъ'}, code: 'BracketRight', shift: {en: '}', ru: 'Ъ'}},
        {key: {en: '\\', ru: '\\'}, code: 'Backslash', shift: {en: '|', ru: '\\'}},
    ],
    [
        {key: {en: 'CapsLock', ru: 'CapsLock'}, code: 'CapsLock', shift: {en: '', ru: ''}},
        {key: {en: 'a', ru: 'ф'}, code: 'KeyA', shift: {en: 'A', ru: 'Ф'}},
        {key: {en: 's', ru: 'ы'}, code: 'KeyS', shift: {en: 'S', ru: 'Ы'}},
        {key: {en: 'd', ru: 'в'}, code: 'KeyD', shift: {en: 'D', ru: 'В'}},
        {key: {en: 'f', ru: 'а'}, code: 'KeyF', shift: {en: 'F', ru: 'А'}},
        {key: {en: 'g', ru: 'п'}, code: 'KeyG', shift: {en: 'G', ru: 'П'}},
        {key: {en: 'h', ru: 'р'}, code: 'KeyH', shift: {en: 'H', ru: 'Р'}},
        {key: {en: 'j', ru: 'о'}, code: 'KeyJ', shift: {en: 'J', ru: 'О'}},
        {key: {en: 'k', ru: 'л'}, code: 'KeyK', shift: {en: 'K', ru: 'Л'}},
        {key: {en: 'l', ru: 'д'}, code: 'KeyL', shift: {en: 'L', ru: 'Д'}},
        {key: {en: ';', ru: 'ж'}, code: 'Semicolon', shift: {en: ':', ru: 'Ж'}},
        {key: {en: "'", ru: 'э'}, code: 'Quote', shift: {en: '"', ru: 'Э'}},
        {key: {en: 'Enter', ru: 'Enter'}, code: 'Enter', shift: {en: '', ru: ''}},
    ],
    [
        {key: {en: 'Shift', ru: 'Shift'}, code: 'ShiftLeft', shift: {en: '', ru: ''}},
        {key: {en: 'z', ru: 'я'}, code: 'KeyZ', shift: {en: 'Z', ru: 'Я'}},
        {key: {en: 'x', ru: 'ч'}, code: 'KeyX', shift: {en: 'X', ru: 'Ч'}},
        {key: {en: 'c', ru: 'с'}, code: 'KeyC', shift: {en: 'C', ru: 'С'}},
        {key: {en: 'v', ru: 'м'}, code: 'KeyV', shift: {en: 'V', ru: 'М'}},
        {key: {en: 'b', ru: 'и'}, code: 'KeyB', shift: {en: 'B', ru: 'И'}},
        {key: {en: 'n', ru: 'т'}, code: 'KeyN', shift: {en: 'N', ru: 'Т'}},
        {key: {en: 'm', ru: 'ь'}, code: 'KeyM', shift: {en: 'M', ru: 'Ь'}},
        {key: {en: ',', ru: 'б'}, code: 'Comma', shift: {en: '<', ru: 'Б'}},
        {key: {en: '.', ru: 'ю'}, code: 'Period', shift: {en: '>', ru: 'Ю'}},
        {key: {en: '/', ru: '.'}, code: 'Slash', shift: {en: '?', ru: ','}},
        {key: {en: 'Up', ru: 'Вверх'}, code: 'ArrowUp', shift: {en: '', ru: ''}},
        {key: {en: 'Shift', ru: 'Shift'}, code: 'ShiftRight', shift: {en: '', ru: ''}},
    ],
    [
        {key: {en: 'Control', ru: 'Control'}, code: 'ControlLeft', shift: {en: '', ru: ''}},
        {key: {en: 'Win', ru: 'Win'}, code: 'MetaLeft', shift: {en: '', ru: ''}},
        {key: {en: 'Alt', ru: 'Alt'}, code: 'AltLeft', shift: {en: '', ru: ''}},
        {key: {en: ' ', ru: ' '}, code: 'Space', shift: {en: ' ', ru: ' '}},
        {key: {en: 'Alt', ru: 'Alt'}, code: 'AltRight', shift: {en: '', ru: ''}},
        {key: {en: 'Control', ru: 'Control'}, code: 'ControlRight', shift: {en: '', ru: ''}},
        {key: {en: 'Left', ru: 'Влево'}, code: 'ArrowLeft', shift: {en: '', ru: ''}},
        {key: {en: 'Down', ru: 'Вниз'}, code: 'ArrowDown', shift: {en: '', ru: ''}},
        {key: {en: 'Right', ru: 'Вправо'}, code: 'ArrowRight', shift: {en: '', ru: ''}},
    ],
]
const functionalKeys = ['CapsLock', 'Shift', 'Control', 'Alt', 'Meta', 'Enter', 'Tab', 'Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft'];
const letters = {
    en: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ru: ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'],
}

const state = {
    lang: 'en',
    CapsLock: false,
    Shift: false,
    Ctrl: false,
    Alt: false,
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

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');

const keyboardContainer = document.createElement('div')
keyboardContainer.classList.add('keyboard-container')
keyboardContainer.addEventListener('click', clickHandler);
// keyboardContainer.addEventListener('touchstart', (e) => {
//     // e.preventDefault();
//     console.log('touchstart', e);
// });

function generateKeyboard() {
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

function clickHandler(e) {
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

function handleKeyDown(e) {
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

function handleKeyUp(e) {
    const key = document.getElementById(e.code);
    if (e.code === 'CapsLock' && state.CapsLock) {
        return;
    }
    updateKeyboard('up', e);
    key.classList.remove('pressed');
}

function updateKeyboard(keyState = 'down', e) {
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
            state.Alt = false;
            state.Ctrl = false;
            keys.forEach(key => {
                if (key.dataset[state.lang] === 'Alt' || key.dataset[state.lang] === 'Control') {
                    key.classList.remove('pressed');
                }
                if (key.dataset[state.lang + 'shift']) {
                    (state.CapsLock && !state.Shift)
                        ? letters[state.lang].includes(key.dataset[state.lang])
                            ? key.innerHTML = key.dataset[state.lang + 'shift']
                            : key.innerHTML = key.dataset[state.lang]
                        : (state.Shift && !state.CapsLock)
                            ? key.innerHTML = key.dataset[state.lang + 'shift']
                            : key.innerText = key.dataset[state.lang];
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

function render() {
    keyboardContainer.innerHTML = '';
    keyboardContainer.appendChild(generateKeyboard());
    root.appendChild(textarea);
    root.appendChild(infoEl);
    root.appendChild(langEl);
    root.appendChild(keyboardContainer);
    formatKeyboard();
    updateKeyboard();
}

function formatKeyboard() {
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

render();




