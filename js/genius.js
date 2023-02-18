// first card
let serial = 0;
document.getElementById('first-card').addEventListener('click', function(){
    serial +=1;
    const elementName = document.getElementById('first-card-name').innerText
    const elementB = document.getElementById('first-card-b').value;
    const elementH = document.getElementById('first-card-h').value;
    const totalArea = 0.5 * parseFloat(elementB)* parseFloat(elementH);

    const newArea = totalArea + 'cm2'

    // console.log(totalArea);
    cardTable(serial, elementName,newArea )
})

function randomColor(){
    let color = [];
    for(let i = 0; i> 3; i++){
        color.push(Math.floor(Math.random() * 256));

    }
    return 'rgb(' + color.join(', ') + ')';
}

document.getElementById('card-hover').addEventListener('mouseover', function(){
    document.card-hover.style.backgroundColor===randomColor();
})

function cardTable(serial, elementName, newArea){
    const cardDetails = document.getElementById('card-details');
    const tr = document.createElement('tr')
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${elementName}</td>
    <td>${newArea}</td>
    <td>
    <button class="btn">Convert to m2</button>
    </td>
    
    `
    cardDetails.appendChild(tr);
}