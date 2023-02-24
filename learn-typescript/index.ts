// 布尔值
let isDone: boolean = false;
// 直接调用 Boolean 也会返回布尔值
let isDoneBool: boolean = Boolean(false);
// Boolean 对象
let isDoneO: Boolean = new Boolean(false);

// 数值
let num: number = 123;
// 直接调用 Number 也会返回数值
let numNum: number = Number(123);
// Number 对象
let numO: Number = new Number(123);

// 字符串
let str: string = "hello";
// 直接调用 String() 也会返回 字符串
let strStr: string = String("hello");
// String 对象
let strO: String = new String("hello");

// 空值
// void 表示没有任何返回值的函数：
function sayHi(): void {
  alert("Hi~");
}
// 声明一个 void 类型的变量没什么用， 你只能将它赋值为 undefined 和 null
let unusable: void = undefined;

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;
// 与 void 的区别： undefined 和 null 是所有类型的子类型， 而 void 类型的变量不能赋值给
// 也就是说，undefined 和 null 可以赋值给所有 类型，包括 void, 但是 void 不行, void 类
// 型变量不能够赋值给任意类型变量, 除了 void 和 any
