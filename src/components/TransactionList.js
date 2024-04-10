import React,{useContext} from 'react'

import { GlobalContaxt } from '../Context/GlobalState';
import Transaction from './Transaction';

export default function TransactionList() {
const { transactions }= useContext(GlobalContaxt);

  return (
    <>
         <h3>History</h3>
    <ul className="list">
        {transactions.map( transaction => (<Transaction key ={transaction.id}  transaction={transaction}/> ))}
     
    </ul>
    </>
  )
}
