import React from "react";
import "./App.css";

function App() {
  type Account = {
    id: number;
    name: string;
    parent: number | null;
  };

  const accounts: Account[] = [
    { id: 3, name: "Insurance Cost", parent: 10 },
    { id: 8, name: "Offline Marketing", parent: 12 },
    { id: 10, name: "Employee Expenses", parent: null },
    { id: 12, name: "Marketing", parent: null },
    { id: 7, name: "Bonuses", parent: 10 },
    { id: 5, name: "Performance bonus", parent: 7 },
    { id: 13, name: "Sub Performance bonus", parent: 5 },
    { id: 11, name: "Digital Marketing", parent: 12 },
    { id: 6, name: "Stock Options", parent: 10 },
  ];

  const getChildren = (accountId: number) =>
    accounts.filter((account) => account.parent === accountId);

  const renderAccounts = (
    parentId: number | null,
    indentLevel: number = 0,
    parentNumber: string = ""
  ) => {
    return accounts
      .filter((account) => account.parent === parentId)
      .map((account, index) => {
        const accountNumber = parentNumber
          ? `${parentNumber}.${index + 1}`
          : `${index + 1}`;
        return (
          <React.Fragment key={account.id}>
            <tr className="account-row">
              <td style={{ paddingLeft: `${indentLevel * 40}px` }}>
                {accountNumber} {account.name}
              </td>
            </tr>
            {renderAccounts(account.id, indentLevel + 1, accountNumber)}
          </React.Fragment>
        );
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Accounts</h1>
        <table>
          <tbody>{renderAccounts(null)}</tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
