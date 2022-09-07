
var expression = "",
display = "0",
result = document.getElementById('result'),
char;

function callback() {
    char = this.innerHTML;

    if (char == 'x') {char = '*'};

    if (char == '=') {
        evaluate()
    } else if (char == "AC") {
        expression = "";
        display = "0";
        result.innerHTML = display;
    } else {
        expression += char;

        display = (display == "0") ? this.innerHTML : display + this.innerHTML 
        result.innerHTML = display;
    }

}   

function evaluate() {
    try {
        var res = eval(expression);

        if (res === Infinity) {
            res = "Math error";
            expression = "";
            display = "0";
            result.innerHTML = res
        } else {
            expression = res; display = res;
            result.innerHTML = display
        }
        

    } catch (err) {
        res = err.name
        result.innerHTML = res
        expression = "";
        display = "0";

    }

    

}

window.onload =  function () {
    const order = ['+', '-', 'x', '/',
                   '7', '8', '9', '=',
                    '4', '5', '6',   
                    '1', '2', '3', 
                    '0', '.', 'AC'];
    
    const grid_ares = ['plus', 'minus', 'times', 'divide',
                      'seven', 'eight', 'nine', 'equal',
                      'four', 'five', 'six', 
                      'one', 'two', 'three',
                      'zero', 'dot', 'AC']


    for (var i = 0; i < order.length; i++) {
        
        let b = document.createElement('button')

        let extra = (i < 4) ? "background-color:rgb(211, 221, 229);" : ""
        b.textContent = order[i]
        b.onclick = callback
        b.setAttribute('style', `grid-area:${grid_ares[i]};${extra}`)
        b.id = grid_ares[i] + '_btn';


        document.getElementById('button-container').appendChild(b)
    }
    result.innerHTML = display
}


