import React from 'react';

const ButtonSend = ({mon}) => {
    
    function getValue() {
        let select = document.getElementById('select');
         let value = select.options[select.selectedIndex].value;
         alert(`Пополнение выполнено с помощью ${value} на сумму ${mon} $. Ваш счет с учетом акции пополнен на ${mon * 2} $`);
 }
     
    return (
        <input className='send' type='submit' value='Пополнить' onClick={getValue}></input>
    )
}


export default ButtonSend;