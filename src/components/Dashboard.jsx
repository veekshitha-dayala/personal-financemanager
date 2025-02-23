import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaPlusCircle } from "react-icons/fa";
import "./Dashboard.css"; // Import the CSS file for styling

const Dashboard = () => {
  const navigate = useNavigate();

  // Sample Data (You can replace this with API data)
  const [balance, setBalance] = useState(5000);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "income", amount: 2000, category: "Salary", date: "2025-02-20" },
    { id: 2, type: "expense", amount: 500, category: "Food", date: "2025-02-19" },
    { id: 3, type: "expense", amount: 700, category: "Shopping", date: "2025-02-18" },
  ]);

  // Calculate Total Income and Expenses
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalBalance = income - expenses;

  // Logout function
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Balance Overview */}
      <div className="balance-section">
        <h3>Total Balance: ₹{totalBalance}</h3>
        <div className="summary">
          <p>💰 Income: ₹{income}</p>
          <p>💸 Expenses: ₹{expenses}</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="transactions">
        <h3>Recent Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.type}>
              {transaction.category} - ₹{transaction.amount} ({transaction.date})
            </li>
          ))}
        </ul>
      </div>

      {/* Add Expense/Income Buttons */}
      <div className="buttons">
        <button className="add-btn">
          <FaPlusCircle /> Add Income
        </button>
        <button className="add-btn expense">
          <FaPlusCircle /> Add Expense
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
