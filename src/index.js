module.exports = function check(str, bracketsConfig) {
        let stack = [],
            stack2 = [],
            stack3 = [],
            pair = {
                '(': ')',
                '[': ']',
                '{': '}',
                '1': '2',
                '3': '4',
                '5': '6',

                '8': '0+8',
            };
    let ch;
        for (i = 0; i < str.length; i++) {
            ch = str.charAt(i);
            switch (ch) {
                case '(':
                case '[':
                case '{':
                case '1':
                case '3':
                case '5':
                case '8':

                    stack.push(pair[ch]);
                    break;

                case ')':
                case ']':
                case '}':
                case '2':
                case '4':
                case '6':

                    if (0 == stack.length)
                        return false;

                    if (stack[stack.length - 1] != ch)
                        return false;

                    stack.pop();


            };

        };
        if (stack.length)
            return false;
        return true;
};
