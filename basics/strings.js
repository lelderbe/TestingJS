/**
 * codePointAt - fromCodePoint
 */
function ex00() {
    const str = 'Hello, World! 😏';

    const codes = [];
    for (const char of str) {
        codes.push(char.codePointAt());
    }

    console.log(codes);

    const restoredString = String.fromCodePoint(...codes);
    console.log(restoredString);
}

// ex00();

/**
 * Escape symbols by regexp and switch-case
 */
function ex01() {
    function htmlEscape(text) {
        return text.replace(/[<>"&]/g, (match, pos, originalText) => {
            console.log(match, pos, originalText);
            switch (match) {
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '"':
                    return '&quot;';
                case '&':
                    return '&amp;';
            }
        });
    }

    const escapedString = htmlEscape('<p class="greeting">Hello, World!</p>');
    console.log(escapedString);
}

ex01();
