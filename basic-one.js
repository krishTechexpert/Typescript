var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var name1 = 'krishna';
var a = 20;
var userId = '101';
userId = 122;
console.log(userId);
var user3 = {
    name: 'krish',
    age: 30,
    isAdmin: true,
    id: '121'
};
console.log(user3);
var textStorage = {
    storage: [],
    add: function (data) { this.push(data); }
};
var userStorage = {
    storage: [],
    add: function (user) { }
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: 'krish' }, { score: 100 });
console.log(newUser);
