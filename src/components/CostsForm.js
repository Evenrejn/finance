import React, {useState} from "react"

export const CostsForm = (props) => {

    const [name, setName] = useState('');
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const [price, setPrice] = useState('');
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    const [data, setData] = useState('');
    const dataChangeHandler = (event) => {
        setData(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {name, price, data};
        props.onSaveCostData(costData);
        setName('');
        setPrice('');
        setData('');
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="form-wrap">
                <div className="input-wrap">
                    <label className="form-label">Название</label>
                    <input value={name} onChange={nameChangeHandler} className="input" placeholder="Корм для котика"></input>
                </div>
                <div className="input-wrap">
                    <label className="form-label">Сумма</label>
                    <input value={price} onChange={priceChangeHandler} className="input" placeholder="199.99"></input>
                </div>
                <div className="input-wrap">
                    <label className="form-label">Дата</label>
                    <input value={data} onChange={dataChangeHandler} className="input" placeholder="17.11.2022"></input>
                </div>
                <div className="form-btn-wrap">
                    <button className="form-btn" type="submit">Добавить</button>
                    <button className="form-btn">Отменить</button>
                </div>
            </div>
        </form>
    )
}