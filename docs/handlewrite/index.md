::: tip
**本篇记录常见手写题**
:::

## new

```js
function myNew(constructor, ...args) {
  // 创建一个空对象，并将其原型指向构造函数的原型
  // const obj = Object.create(constructor.prototype);
  const obj = {};
  obj.__proto__ = constructor.prototype;

  // 将构造函数的作用域赋给新对象
  const result = constructor.apply(obj, args);

  // 如果构造函数返回了一个对象，则返回该对象
  if (typeof result === "object" && result !== null) {
    return result;
  }

  // 否则返回新对象
  return obj;
}
// 使用示例
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = myNew(Person, "John", 25);
john.sayHello(); // 输出：Hello, my name is John
```
