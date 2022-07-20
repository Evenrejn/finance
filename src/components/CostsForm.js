import React, {useState} from "react"

export const CostsForm = (props) => {

    const [description, setDescription] = useState('');
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    const [amount, setAmount] = useState('');
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const [date, setDate] = useState('');
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {description, amount, date};
        props.onSaveCostData(costData);
        setDescription('');
        setAmount('');
        setDate('');
    }

    let [formToggle, setFormToggle] = useState(false);
    let toggleFormHandler = (event) => {
        setFormToggle(formToggle ? formToggle = false : formToggle = true);
    }

    return (
        <>
            {formToggle ? (
                <form className="form" onSubmit={submitHandler}>
                    <div className="form-wrap">
                        <div className="input-wrap">
                            <label className="form-label">Название</label>
                            <input value={description} onChange={descriptionChangeHandler} className="input" placeholder="Корм для котика"></input>
                        </div>
                        <div className="input-wrap">
                            <label className="form-label">Сумма</label>
                            <input value={amount} onChange={amountChangeHandler} className="input" placeholder="199.99"></input>
                        </div>
                        <div className="input-wrap">
                            <label className="form-label">Дата</label>
                            <input value={date} onChange={dateChangeHandler} className="input" placeholder="17.11.2022"></input>
                        </div>
                        <div className="form-btn-wrap">
                            <button className="form-btn" type="submit">Добавить расход</button>
                            <button onClick={toggleFormHandler} className="form-btn">Отменить</button>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="form title">
                    <button className="form-btn" onClick={toggleFormHandler}>Добавить расход</button>
                </div>
            )}
        </>
    )
}