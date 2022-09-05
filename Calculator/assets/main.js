function callback(){
    console.log(this.innerHTML);
}

function layout() {
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
}



layout()