const keyboard = [
    [{key: '`', shift: '~'}, {key: '1', shift: '!'}, {key: '2', shift: '@'}, {key: '3', shift: '#'}, {key: '4', shift: '$'}, {key: '5', shift: '%'}, {key: '6', shift: '^'}, {key: '7', shift: '&'}, {key: '8', shift: '*'}, {key: '9', shift: '('}, {key: '0', shift: ')'}, {key: '-', shift: '_'}, {key: '=', shift: '+'}, {key: 'Backspace', shift: 'Backspace'}],
    [{key: 'Tab', shift: 'Tab'}, {key: 'q', shift: 'Q'}, {key: 'w', shift: 'W'}, {key: 'e', shift: 'E'}, {key: 'r', shift: 'R'}, {key: 't', shift: 'T'}, {key: 'y', shift: 'Y'}, {key: 'u', shift: 'U'}, {key: 'i', shift: 'I'}, {key: 'o', shift: 'O'}, {key: 'p', shift: 'P'}, {key: '[', shift: '{'}, {key: ']', shift: '}'}, {key: '\\', shift: '|'}],
    [{key: 'Caps Lock', shift: 'Caps Lock'}, {key: 'a', shift: 'A'}, {key: 's', shift: 'S'}, {key: 'd', shift: 'D'}, {key: 'f', shift: 'F'}, {key: 'g', shift: 'G'}, {key: 'h', shift: 'H'}, {key: 'j', shift: 'J'}, {key: 'k', shift: 'K'}, {key: 'l', shift: 'L'}, {key: ';', shift: ':'}, {key: '\'', shift: '"'}, {key: 'Enter', shift: 'Enter'}],
    [{key: 'Shift', shift: 'Shift'}, {key: 'z', shift: 'Z'}, {key: 'x', shift: 'X'}, {key: 'c', shift: 'C'}, {key: 'v', shift: 'V'}, {key: 'b', shift: 'B'}, {key: 'n', shift: 'N'}, {key: 'm', shift: 'M'}, {key: ',', shift: '<'}, {key: '.', shift: '>'}, {key: '/', shift: '?'}, {key: 'up', shift: 'up'}, {key: 'Shift', shift: 'Shift'}],
    [{key: 'Ctrl', shift: 'Ctrl'}, {key: 'Win', shift: 'Win'}, {key: 'Alt', shift: 'Alt'}, {key: 'Space', shift: 'Space'}, {key: 'Alt', shift: 'Alt'}, {key: 'Win', shift: 'Win'}, {key: 'Ctrl', shift: 'Ctrl'}, {key: 'left', shift: 'left'}, {key: 'down', shift: 'down'}, {key: 'right', shift: 'right'}]
]

const generateKeyboard = () => {
    let keyboardContainer = document.createElement('div')
    keyboardContainer.classList.add('keyboard-container')
    let keyboardWrapper = document.createElement('div')
    keyboardWrapper.classList.add('keyboard-wrapper')
    keyboardContainer.appendChild(keyboardWrapper)
    for (let i = 0; i < keyboard.length; i++) {
        let row = document.createElement('div')
        row.classList.add('keyboard-row')
        keyboardWrapper.appendChild(row)
        for (let j = 0; j < keyboard[i].length; j++) {
            let key = document.createElement('div')
            const keyShift = document.createElement('div')
            key.classList.add('key')
            keyShift.classList.add('key-shift')
            key.innerText = keyboard[i][j].key
            key.dataset.key = keyboard[i][j].key
            key.dataset.shift = keyboard[i][j].shift
            keyShift.innerText = keyboard[i][j].shift
            key.appendChild(keyShift)
            row.appendChild(key)
        }
    }
    return keyboardContainer;
}

const keyboardContainer = generateKeyboard();

keyboardContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        state.isKeyDown = true;
    }
})

const root = document.createElement('div');
root.id='root';

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');

root.appendChild(textarea);
root.appendChild(keyboardContainer);

document.body.appendChild(root);
