export const ShopItemFunc = (props) => {
    return (
        <div class="main-content">
            <h2>{props.brand}</h2>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <div class="description">
                {props.descriptionFull}
            </div>
            <div class="highlight-window mobile">
                <div class="highlight-overlay"></div>
            </div>
            <div class="divider"></div>
            <div class="purchase-info">
                <div class="price">{props.currency}{props.price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}