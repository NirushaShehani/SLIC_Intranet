import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import '../../Styles/IncentiveCriteria_page.css';

const Incentive_Criteria = () => {
  const [data, setData] = useState({
    tableData: [
      {
        name: "Feb and Mar 2024",
        rows: [["Feb-Mar 2024 Actual", "Eligible Incentive %"], ["43%", "5.00%"], ["40%", "1.00%"], ["875Mn", "4.00%"]],
        additionalDataTopics: [["For Feb & Mar 2024"], ["Incentive %"]],
        additionalData: [["Life (10% x 2)"], ["20%"]],
      },
      {
        name: "Apr-June 2024",
        rows: [["Apr-June 2024 Actual", "Eligible Incentive %"], ["44.23%", "5.00%"], ["36.60%", "2.50%"], ["990Mn", "2.50%"]],
        additionalDataTopics: [["For 2nd Quarter 2024"], ["Incentive %"]],
        additionalData: [["Life (10% x 3)"], ["30%"]],
      },
      {
        name: "Apr-June 2024",
        rows: [["Apr-June 2024 Actual", "Eligible Incentive %"], ["44.23%", "5.00%"], ["36.60%", "2.50%"], ["990Mn", "2.50%"]],
        additionalDataTopics: [["For 2nd Quarter 2024"], ["Incentive %"]],
        additionalData: [["Life (10% x 3)"], ["30%"]],

      },],
  });

  const rowColors = ["#789ea6", "#79d0d6", "#85a7c4"];

  return (
    <div className="incentive-page">
      <div className="incentive-column1">
        <DrawerMenu />
      </div>
      <div className="incentive-column2">
        <div className="scrollable-tables-container">
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
                    <td className='Payout-ratio-row' rowSpan="3">Payout Ratio</td>
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
                    <td className='Expense-Ratio-row' rowSpan="3">Expense Ratio</td>
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
                  <br></br>
             
                  <tr>
                    <td colSpan="4" className='Life-Eligible-Incentive'>Life Eligible Incentive</td>
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
                        <td className="custom-row-content">{row[0]}</td>
                        <td className="custom-row-content">{row[1]}</td>
                      </tr>
                    ))}
                    <br></br>
                    {table.additionalDataTopics.length > 0 && (
                      <>
                        <tr>
                          {table.additionalDataTopics.map((topic, topicIndex) => (
                            <th key={topicIndex}>{topic}</th>
                          ))}
                        </tr>
                        <tr className="custom-row-content-2">
                          {table.additionalData.map((dataItem, dataIndex) => (
                            <td key={dataIndex}>{dataItem}</td>
                          ))}
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incentive_Criteria;
