window.addEventListener('load', () => {
    const n = 10;
    makeTbl((window.innerHeight - 200)/n, n);
});


mT = 0;
function makeTbl(tdSz, n) {
    mT = n;
    const table = document.createElement('table');
    const container_2 = document.querySelector('#table-container_2');
    for (i = 0; i < mT; i++) {
        row = table.insertRow();
        row.style.height = tdSz + 'px';
        for (j = 0; j < mT; j++) {
            cell = row.insertCell();
            cell.style.width = tdSz + 'px';
        }         
    }  
    container_2.append(table);
}

