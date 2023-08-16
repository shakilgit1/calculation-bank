document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdraw = getInputValue('withdraw-field');
    if(isNaN(newWithdraw)){
        alert('empty field');
        return;
     };
    const previousWithdraw = getTextValue('withdraw-total');
    const totalWithdraw = previousWithdraw + newWithdraw;
    
    const mainBalance = getTextValue('balance-total');
    if(newWithdraw > mainBalance){
        return alert('balance short')
    };
    
    setWithdraw = setValue('withdraw-total', totalWithdraw);
    const newBalance = mainBalance - newWithdraw;
    setBalance = setValue('balance-total', newBalance);
});