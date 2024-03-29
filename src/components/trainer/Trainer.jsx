import './trainer.scss'
import React, { useState } from "react";

export default function Trainer() {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Bank Account",
      title: "Bank Details",
      name: "Fatima Raza",
      bank: "Habib Bank Limited",
      accountNumber: "12707901027899",
      amount: "Rs xxxx",
    },
    
  ];
{/*    incase if you want to add then add this after id 1 above
      id: 2,
      tabTitle: "Easypaisa",
      title: "Easypaisa Details",
      name: "ABCDERF",
      bank: "Telenor Microfinance Bank",
      accountNumber: "XXXX-XXXXXXX",
      amount: "Rs 2000",
  */}
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  


  return (
    <div className='trainer' id='trainer'> 
      <div className="wrapper">
      <a href='#register' className='aaa'><i class="fa fa-close fa-1x"></i></a>
      <h1>Payment As Corporate Trainee</h1>
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div className="details">
                <p className="title">{tab.title}</p>
                <p>Name: {tab.name}</p>
                <p>Bank: {tab.bank}</p>
                <p>Account Number: {tab.accountNumber}</p>
                <p>Amount: {tab.amount}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="buttons">
        <a href="https://forms.gle/qLuvPs9iHoZR8rxm8" target="_blank" className='register'>Click To Register</a>
      </div>
    </div>        
    </div>
  )
}
