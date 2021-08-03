/**
 * 题目：输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
 * 解法：栈。
 */
var reverseWords = function(s) {
    let stack = []
    let word = ''
    for (let i of s) {
        if (i === ' ') {
            if (word !== ''){
                stack.push(word)    // XXX i为空格且word不为空压栈，这是为了防止多个空格造成的多次压栈
                word = ''
            }
        }
        else word += i
    }
    if (s.slice(-1) !== ' ') stack.push(word)   // XXX 最后一个单词之后如果没有空格则不会在循环里压栈，需要结束循环后额外操作。
    return stack.reverse().join(' ')
};