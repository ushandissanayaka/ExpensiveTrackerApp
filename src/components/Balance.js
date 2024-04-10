import React,{useContext} from 'react'
import { GlobalContaxt } from '../Context/GlobalState';

export default function Balance() {
  const { transactions }= useContext(GlobalContaxt);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <>
        <h4>Your Balance</h4>
        <h1 >${total}</h1>
    </>
  )
}
