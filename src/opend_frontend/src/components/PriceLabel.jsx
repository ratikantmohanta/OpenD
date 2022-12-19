import React from 'react'

function PriceLabel(props) {
    console.log(props.sellPrice);
    return (
        <div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
            <span className="disChip-label">{props.sellPrice} RATMO</span>
        </div>
    )
}
export default PriceLabel;