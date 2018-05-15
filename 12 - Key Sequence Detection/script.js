// When typing the secret code 'coolio' a message appears.
const pressed = [];
const secretCode = 'coolio';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('DING YOU DID IT!');
        cornify_add();
    }
});
