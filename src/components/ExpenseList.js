import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectorExpenses from "../selectors/expenses";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseList = (props) => (
    <div>
        <ExpenseListFilters />
        <p>Expense List.</p>
        {props.expenses.map((expense, index) => (
            <ExpenseListItem key = {expense.id} {...expense}/>
        ))}
    </div>
)

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// }
// )(ExpenseList);

const mapStateToProps = (state) => {
    return {
        expenses: selectorExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);;