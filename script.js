//Let's go project #2
let turno = 0;
const tablero = [];

const btnPulsado = (e, pos) => {
    turno++;
    const btn = e.target;
    const color = turno % 2 ? '#E07A5F' : '#81B29A';
    btn.style.backgroundColor = color;
    tablero[pos] = color;
    if(haGanado()){
        Swal.fire(
            'Good job!',
            'You are the winner! :)',
            'success'
        );
    };
};

function haGanado () {
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true;
    }
    return false;    
};

document.querySelectorAll('button').forEach((obj, i) => obj.addEventListener('click', (e) =>btnPulsado(e, i)));

//---------------------------------------------------------------------------------------------------------------
const btnSwitch = document.querySelector('#nuevoContador');

btnSwitch.addEventListener('click', () => {
    var contadorNuevo = document.getElementById("nuevoTablero");
    contadorNuevo.innerHTML = `<div id="nuevoTablero" class="container">
                                    <button class="tablero"></button>
                                    <button class="tablero"></button>
                                    <button class="tablero"></button>
                                    <button class="tablero"></button>
                                    <button class="tablero"></button>
                                    <button class="tablero"></button>
                                    <button class="tablero"></button>
                                    <button class="tablero"></button>
                                    <button class="tablero"></button>
                                </div>`
    
    let turno = 0;
    const tablero = [];
                                
    const btnPulsado = (e, pos) => {
        turno++;
        const btn = e.target;
        const color = turno % 2 ? '#E07A5F' : '#81B29A';
        btn.style.backgroundColor = color;
        tablero[pos] = color;
        if(haGanado()){
            Swal.fire(
                'Good job!',
                'You are the winner! :)',
                'success'
            );
        };
    };
                                
    function haGanado () {
        if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
            return true;
        }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
            return true;
        }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
            return true;
        }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
            return true;
        }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
            return true;
        }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
            return true;
        }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
            return true;
        }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
            return true;
        }
        return false;    
    };
    
    document.querySelectorAll('button').forEach((obj, i) => obj.addEventListener('click', (e) =>btnPulsado(e, i)));
    
});
