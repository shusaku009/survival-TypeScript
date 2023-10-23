import './style.css';

function output() {
    var x = 1;
    {
        console.log(x);
        let x = 2;
    }
}

output();