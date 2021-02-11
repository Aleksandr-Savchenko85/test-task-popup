import React from 'react';

const ButtonSend = () => {
    
    function getValue() {
        let select = document.getElementById("select");
         let value = select.options[select.selectedIndex].value;
         alert(`Пополнение выполнено с помощью ${value}. Ваш счет пополнен на n $`);
 }
     
    return (
        <input className="send" type="submit" value="Пополнить" onClick={getValue}></input>
    )
}


export default ButtonSend;