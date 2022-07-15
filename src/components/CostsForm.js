export const CostsForm = () => {

    return (
        <div className="form">
            <div className="form-wrap">
                <div className="input-wrap">
                    <label className="form-label">Название</label>
                    <input className="input" placeholder="Корм для котика"></input>
                </div>
                <div className="input-wrap">
                    <label className="form-label">Сумма</label>
                    <input className="input" placeholder="199.99"></input>
                </div>
                <div className="input-wrap">
                    <label className="form-label">Дата</label>
                    <input className="input" placeholder="17.11.2022"></input>
                </div>
                <div className="form-btn-wrap">
                    <button className="form-btn">Добавить</button>
                    <button className="form-btn">Отменить</button>
                </div>
            </div>
        </div>
    )
}