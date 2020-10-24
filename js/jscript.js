
const lbBtn = document.getElementById('pound');
const kgBtn = document.getElementById('kg');
const reset = document.getElementById('delete');
const para = document.getElementById('para');



lbBtn.addEventListener('click', function(e){
    let input = document.getElementById('input').value;
    input = input / 2.205 + " kg";
    let number = document.createTextNode(input);
    para.appendChild(number);
    console.log(para);
})

kgBtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    input = input * 2.205 + " lbs";
    let number = document.createTextNode(input);
    para.appendChild(number);
    console.log(para);

})


reset.addEventListener('click', function(){
    document.getElementById('para').innerHTML = '';
    document.getElementById('input').value = '';
})