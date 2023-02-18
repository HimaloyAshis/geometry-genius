// first card
let serial = 0;
document.getElementById('first-card').addEventListener('click', function(){
    serial +=1;
    const elemData = getData('first-card-name', 'first-card-b', 'first-card-h')

    const totalArea = 0.5 * parseFloat(elemData.elementB)* parseFloat(elemData.elementH);

    const newArea = totalArea + 'cm2'

    
    if(elemData.elementB== '' || elemData.elementB<= 0 || elemData.elementH =='' || elemData.elementH<=0){
        return alert('Please enter valid data');
    }

    cardTable(serial, elemData.elementName,newArea )
    disAbledButton('first-card')
})
// Second card
document.getElementById('second-card').addEventListener('click', function(){
    serial +=1;
    const elemData = getData('second-card-name', 'second-card-w', 'second-card-I')

    const totalArea =parseFloat(elemData.elementB)* parseFloat(elemData.elementH);

    const newArea = totalArea + 'cm2'

    
    if(elemData.elementB== '' || elemData.elementB<= 0 || elemData.elementH =='' || elemData.elementH<=0){
        return alert('Please enter valid data');
    }

    cardTable(serial, elemData.elementName,newArea )
    disAbledButton('second-card')
})
// third card
document.getElementById('third-card').addEventListener('click', function(){
    serial +=1;
    const elemData = getData('third-card-name', 'third-card-b', 'third-card-h')

    const totalArea =parseFloat(elemData.elementB)* parseFloat(elemData.elementH);

    const newArea = totalArea + 'cm2'

    
    if(elemData.elementB== '' || elemData.elementB<= 0 || elemData.elementH =='' || elemData.elementH<=0){
        return alert('Please enter valid data');
    }

    cardTable(serial, elemData.elementName,newArea )
    disAbledButton('third-card')
})
// fourth-card
document.getElementById('four-card').addEventListener('click', function(){
    serial +=1;
    const elemData = getData('four-card-name', 'four-card-d1', 'four-card-d2')

    const totalArea = 0.5 * parseFloat(elemData.elementB)* parseFloat(elemData.elementH);

    const newArea = totalArea + 'cm2'

    // console.log(totalArea);
    if(elemData.elementB== '' || elemData.elementB<= 0 || elemData.elementH =='' || elemData.elementH<=0){
        return alert('Please enter valid data');
    }

    cardTable(serial, elemData.elementName,newArea )
    disAbledButton('four-card')
})

// fifth-card
document.getElementById('five-card').addEventListener('click', function(){
    serial +=1;
    const elemData = getData('five-card-name', 'five-card-p', 'five-card-b')

    const totalArea =0.5*parseFloat(elemData.elementB)* parseFloat(elemData.elementH);

    const newArea = totalArea + 'cm2'

    // console.log(totalArea);
    if(elemData.elementB== '' || elemData.elementB<= 0 || elemData.elementH =='' || elemData.elementH<=0){
        return alert('Please enter valid data');
    }

    cardTable(serial, elemData.elementName,newArea )
    disAbledButton('five-card')
})
document.getElementById('six-card').addEventListener('click', function(){
    serial +=1;
    const elemData = getData('six-card-name', 'six-card-a', 'six-card-b')

    const totalArea = 3.14 * parseFloat(elemData.elementB)* parseFloat(elemData.elementH);

    const newArea = totalArea + 'cm2'

    // console.log(totalArea);
    if(elemData.elementB== '' || elemData.elementB<= 0 || elemData.elementH =='' || elemData.elementH<=0){
        return alert('Please enter valid data');
    }

    cardTable(serial, elemData.elementName,newArea )
    disAbledButton('six-card')
})


function disAbledButton(id){
    document.getElementById(id).setAttribute('disabled', true)
}

function getData(id1,id2, id3){
    const elementName = document.getElementById(id1).innerText
    const elementB = document.getElementById(id2).value;
    const elementH = document.getElementById(id3).value;

    const elem= {
        elementName: elementName,
        elementB: elementB,
        elementH: elementH,
    }
    return elem;
}

function randomColor(){
    let color = [];
    for(let i = 0; i> 3; i++){
        color.push(Math.floor(Math.random() * 258));

    }
    return 'rgb(' + color.join(', ') + ')';
}

document.getElementById('card-hover').addEventListener('mouseover', function(){
    document.card-hover.style.backgroundColor==randomColor();
})



// show data
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