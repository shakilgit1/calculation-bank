document.getElementById('btn-deposit').addEventListener('click', function(){
     const NewDepositAmount = getInputValue('deposit-field');
     if(isNaN(NewDepositAmount)){
        alert('empty field');
        return;
     }
     const previousDeposit = getTextValue('deposit-total');
     const totalDeposit = previousDeposit + NewDepositAmount;
     setDeposit = setValue('deposit-total', totalDeposit);
     const previousBalance = getTextValue('balance-total');
     const totalBalance = previousBalance + NewDepositAmount;
     setBalance = setValue('balance-total', totalBalance);   

});

document.getElementById('btn-next').addEventListener('click', function(){
    window.location.href = 'practise.html'
    console.log('next');
    
});