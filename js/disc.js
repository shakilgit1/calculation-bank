document.getElementById('btn-disc').addEventListener('click', function(){
    const price = document.getElementById('price');
    const priceString = price.innerText;
    const priceValue = parseFloat(priceString);
    const discount = priceValue - (priceValue * .30);
    const pay = document.getElementById('pay');
    // const payString = pay.innerText;
    // const payValue = parseFloat(payString);
    pay.innerText = discount;
    
});
document.getElementById('btn-disc2').addEventListener('click', function(){
    const price2 = document.getElementById('price');
    const priceString = price2.innerText;
    const priceValue = parseFloat(priceString);
    const discount = priceValue - (priceValue * .30);
    const pay2 = document.getElementById('pay2');
    const inputField = document.getElementById('input');
    const inputString = inputField.value;
    const inputValue = parseFloat(inputString);
    if(inputString === 'DISC30'){
        pay2.innerText = discount;
    }else{
        return alert('give right Cuppon')
    }
      
});

