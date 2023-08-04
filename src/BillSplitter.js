import React from "react";

const BillSplitter = (props) => {
    const { bill, tip, split, splitTotal, billChange, tipChange, splitPlus, splitMinus, calculateSplit } = props;
    return (
        <div className='container'>
      <label>Bill Total</label>
      <input type='text' placeholder='0.00' onChange={billChange} value={bill}></input>
      <label>Tip</label>
      <input type='text' placeholder='0%' onChange={tipChange} value={tip}></input>
      <div className='summary'>
        <div className='split'>
          <label>Split</label>
          <div className='split-control'>
            <button onClick={splitMinus}>-</button>
            <span>{split}</span>
            <button onClick={splitPlus}>+</button>
          </div>
        </div>
        <div className='result'>
          <label>Split Total</label>
          <span>{splitTotal}</span>
        </div>
      </div>
    </div>
    )
}
export default BillSplitter;