import { useEffect, useState } from 'react';
import BillSplitter from './BillSplitter';
import './App.css';
function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('5%');
  const [split, setSplit] = useState(1);
  const [splitTotal, setSplitTotal] = useState(0);

  function billChange(e) {
    setBill(e.target.value);
  }

  function tipChange(e) {
    let value = e.target.value.replace('%', '');
    if (Number(value) > 100) {
      value = Math.min(Number(value), 100)
    }
    if (value.toString().indexOf('%') === -1) {
      value = value + '%';
    }
    setTip(value);
  }
  function splitPlus() {
    setSplit((preVal) => preVal +1);
  }

  function splitMinus() {
    setSplit((preVal) => Math.max(preVal - 1, 1));
  }
  
  function calculateSplit() {
    let billi = Number(bill);
    let tipi = Number(tip.replace('%', ''));
    const result = ((billi + (billi/100*tipi))/split).toFixed(2);
    setSplitTotal(result);
  }

  useEffect(()=>{
    calculateSplit();
  },[bill, split, splitTotal])

  return (
    <BillSplitter 
    bill = {bill}
    tip = {tip}
    split = {split}
    splitTotal = {splitTotal}
    billChange = {billChange}
    tipChange = {tipChange}
    splitMinus = {splitMinus}
    splitPlus = {splitPlus}
    calculateSplit = {calculateSplit}
    />
  );
}

export default App;
