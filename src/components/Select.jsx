import React from 'react';

const Select = () => {

    return (
        <>
            <form>
                <select id="select" name="select" className="select">
                    <option value="Банковскаой карты" defaultValue>Банковская карта</option>
                    <option value="Биткоина">Биткоин</option>
                    <option value="Банковского счета">Выставить счет</option>
                </select>
            </form>

        </>
    )
}

export default Select;