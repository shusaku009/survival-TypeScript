import './style.css';

function output() {
    var x = 1;
    {
        console.log(x);
        let x = 2;
    }
}

output();

// 型推論によって下記のコードはエラーになる
// let x = 1;
// x = "hello";

// let x = 1;
// x = "hello";
// console.log(x.subs)