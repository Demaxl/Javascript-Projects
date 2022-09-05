function callback(){
    console.log(this.innerHTML);
}

function layout() {
    const order = ['+', '-', 'x', '/',
                   '7', '8', '9', '=',
                    '4', '5', '6',   
                    '1', '2', '3', 
                    '0', '.', 'AC'];


    for (const i of order) {

        let b = document.createElement('button')
        b.textContent = i
        b.onclick = callback

        document.getElementById('button-container').appendChild(b)
    }
}



layout()