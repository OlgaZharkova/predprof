document.addEventListener('DOMContentLoaded', () => {
	const inputN = document.getElementById('inN');
    const submitN = document.getElementById('subN');

    const inputS1 = document.getElementById('inS1');
    const inputS2 = document.getElementById('inS2');

    console.log(submitN);

    submitN.addEventListener('click', () => {
    	console.log('btn clicked');
        if (inputN.value != 0){
    	    mkTbl((window.innerHeight - 200)/inputN.value, inputN.value);
            mkSp(inputS1, inputS2)
        }
        else{
            if (inputN.value == ""){
                alert('Введие значение N!')
            }
            else{
                alert('Введие значение, неравное 0!')
            }
        }
    });
});


mT = 0;
function mkTbl(tdSz, n) {
    mT = n;
    const table = document.createElement('table');
    const container2 = document.querySelector('#table-container');
    for (i = 0; i < mT; i++) {
        row = table.insertRow();
        row.style.height = tdSz + 'px';
        for (j = 0; j < mT; j++) {
            cell = row.insertCell();
            cell.style.width = tdSz + 'px';
        }         
    }  
    container2.append(table);
}

$('td').click(function(){
    alert('!!!!!!!')
  var col = $(this).parent().children().index($(this));
  var row = $(this).parent().parent().children().index($(this).parent());
  alert('Row: ' + row + ', Column: ' + col);
});


/*
function sayRC(cll) {
 // Номер столбца текущей ячейки
    c = cll.cellIndex;
    r = gtRw(cll, c);
    alert("Ячейка " + r + ":" + c);
}
// Возвращает номер строки, которой расположена ячейка cll
function gtRw(cll, c) {
    for (i = 0; i < mT; i++) {
        rw = tbl.rows[i];
        if (rw.cells[c] == cll) return i;
 }
}
*/
function mkSp(S1, S2){
    const img = document.createElement('img');
    img.src = 'img/ship.png';
    img.alt = 'Корабль';
    const container1 = document.querySelector('#image-container');
    container1.append(img);
    
}