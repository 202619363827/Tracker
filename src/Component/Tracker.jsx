

























































// SummaryComponent.js
import { useState, useEffect } from 'react';
import styles from './SummaryComponent.module.css'; 

function SummaryComponent() {
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const response = await fetch('http://localhost:3000/summary');
                const data = await response.json();

                setSummary(data);
            } catch (error) {
                console.error('Error fetching summary:', error);
            }
        };

        fetchSummary();
    }, []);

    //  function to calculate total expenses
    const calculateTotalExpenses = (expenses) => {
        return expenses.reduce((total, expense) => total + expense.cost, 0);
    };

    return (
        
        <div className={styles.summaryContainer}>
        <h1 className={styles.track}>Expence Tracker</h1>
        
            {summary ? (
                <div className={styles.container}>
                    <div className={styles.totalBox}>
                        <p >Total Budget: </p>
                        <h2>${summary.budget}</h2>
                    </div>

                    <div className={styles.spentBox}>
                        <p>Spent: </p>
                        <h2>${calculateTotalExpenses(summary.expenses)}</h2>
                    </div>

                    <div className={styles.remainingbox}>
                        <p>Remaining Budget: </p>
                        <h2>${summary.budget - calculateTotalExpenses(summary.expenses)}</h2>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

        
            {summary && (
                <div className={styles.expence}>
                    <h3>Expenses:</h3>
                    <ul className={styles.expensesList}>
                        {summary.expenses.map(expense => (
                            <li key={expense.id} className={styles.expenseItem}>
                                {expense.name} - ${expense.cost}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SummaryComponent;







