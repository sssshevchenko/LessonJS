// LIFO - last in first out ------ stack

// FIFO - first in first out ----- queue


/*
const tree = [
    {
        tagName: 'section',
        text: null,
        children: [
            {
                tagName: 'div',
                text: 'Hello'
            },
            {
                tagName: 'ul',
                children: [
                    {
                        tagName: 'li',
                        text: 'Item 1'
                    },
                    {
                        tagName: 'li',
                        text: 'Item 2'
                    }
                ]
            }
        ]
    },
    {
        tagName: 'p',
        text: 'Lorem ipsum dolor sit amet'
    },
    {
        tagName: 'span',
        text: 'I am span',
        style: 'color: red'
    }
];

console.log(tree);

function buildTree(data = [], target = document.body) {
    data.forEach(item => {
        const node = document.createElement(item.tagName);
        target.appendChild(node);

        if(item.text){
            node.innerText = item.text;
        }

        if(item.style){
            node.style = item.style;
        }

        if(item.children && item.children.length) {
            buildTree(item.children, node);
        }
    });
}

buildTree(tree);    */




/*
var dog = {
    name: 'Pluto',
    color: 'orange',
    bark: function(){
        alert('WOOF');
    },
    sayhi(){
        alert('Hi');
    }
};

dog.sayhi();  */





/*Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное*/

/*const calculator = {
    x: null,
    y: null,
    read() {
        this.x = +prompt('Enter X value', '0');
        this.y = +prompt('Enter Y value', '0');
    },
    sum() {
        return this.x + this.y;
    },
    multi() {
        return this.x * this.y;
    },
    diff: function() {
        return this.x - this.y;
    },
    div: function() {
        return this.x / this.y;
    }
};

calculator.read();
console.log(calculator.sum() );
console.log(calculator.diff() );  */




/*Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только возвращают сообщения вида
’1 + 1 = 2’ или ’1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.*/

/*const lazyObject = {
    x: 10,
    y: 2,
    getSum() {
        return calculator.sum.call(this);
    },
    getDiff() {},
    getMulti() {},
    getDiv() {}
};

console.log(lazyObject.getSum() );   */





//Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.

const counter = {
    value: 0,
    getValue() {
        return this.value;
    },
    inc() {
        this.value ++;
        return this;
    },
    dec() {
        this.value--;
        return this;
    }
};

counter.inc().inc().dec().dec();
console.log(counter.getValue() );