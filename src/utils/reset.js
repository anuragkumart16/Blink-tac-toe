export function resetCells(CellArray){
    CellArray.forEach(cell => {
        cell.current.innerHTML = ''
    });
}