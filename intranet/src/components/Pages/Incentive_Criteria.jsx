import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import '../../Styles/FullNoticesPage.css';
import { badgeClasses } from '@mui/material';

const Incentive_Criteria = () => {
  const [data, setData] = useState({
    tableData: [
      { name: "SLIC (For the Month of Jan 2024)", rows: [["Month Actual", "Eligible Incentive %"], ["55 %", "1.00%"], ["41%", "1.00%"], ["-47Mn", "0.00%"]] },
      { name: "Another Company", rows: [["Month Actual", "Eligible Incentive %"], ["60 %", "1.50%"], ["50%", "1.25%"], ["-30Mn", "0.50%"]] },
      { name: "Another Company", rows: [["Month Actual", "Eligible Incentive %"], ["60 %", "1.50%"], ["50%", "1.25%"], ["-30Mn", "0.50%"]] },

    ]
  });

  const rowColors = ["#789ea6", "#73bbab", "#85a7c4"];

  return (
    <div className="full-notices-page">
      <div className="full-notices-column1">
        <DrawerMenu />
      </div>
      <div className="full-notices-column2">
        <div className="scrollable-tables">
          <div className="table-wrapper static-table-wrapper">
            <table className="static-table">
              <thead>
                <tr className='Staff-Criteria'>
                  <th colSpan="4">Staff Incentive Criteria</th>
                </tr>
                <tr className='Staff-Criteria-collums'>
                  <th>Company</th>
                  <th>KPI</th>
                  <th>Criteria</th>
                  <th>Incentive %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='life-row' rowSpan="9">Life</td>
                  <td className='Payout-ratio-row' rowSpan="3">Payout Ratio (Life)</td>
                  <td className='Payout-ratio-row-data'>56%</td>
                  <td className='Payout-ratio-row-data'>1.0%</td>
                </tr>
                <tr>
                  <td className='Payout-ratio-row-data'>51%</td>
                  <td className='Payout-ratio-row-data'>2.5%</td>
                </tr>
                <tr>
                  <td className='Payout-ratio-row-data'>&lt;48%</td>
                  <td className='Payout-ratio-row-data'>5.0%</td>
                </tr>
                <tr>
                  <td className='Expense-Ratio-row' rowSpan="3">Expense Ratio (Life)</td>
                  <td className='Expense-Ratio-row-data'>43%</td>
                  <td className='Expense-Ratio-row-data'>1.0%</td>
                </tr>
                <tr>
                  <td className='Expense-Ratio-row-data'>38%</td>
                  <td className='Expense-Ratio-row-data'>2.5%</td>
                </tr>
                <tr>
                  <td className='Expense-Ratio-row-data'>&lt;35%</td>
                  <td className='Expense-Ratio-row-data'>5.0%</td>
                </tr>
                <tr>
                  <td className='Total-Shareholder-surplus-row' rowSpan="3">Total Shareholder surplus</td>
                  <td className='Total-Shareholder-surplus-row-data'>2400Mn</td>
                  <td className='Total-Shareholder-surplus-row-data'>0.5%</td>
                </tr>
                <tr>
                  <td className='Total-Shareholder-surplus-row-data'>3500Mn</td>
                  <td className='Total-Shareholder-surplus-row-data'>2.5%</td>
                </tr>
                <tr>
                  <td className='Total-Shareholder-surplus-row-data'>4500Mn</td>
                  <td className='Total-Shareholder-surplus-row-data'>4.0%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {data.tableData.map((table, index) => (
            <div className="table-wrapper-scroll" key={index}>
              <table className="table-wrapper-table">
                <thead>
                  <tr>
                    <th colSpan="2">{table.name}</th>
                  </tr>
                  <tr className="table-wrapper-table-collums">
                    {table.rows[0].map((header, idx) => (
                      <th key={idx}>{header}</th>
                    ))}
                  </tr>

                </thead>
                <tbody>
                  {table.rows.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="custom-row" style={{ backgroundColor: rowColors[rowIndex % rowColors.length] }}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incentive_Criteria;
