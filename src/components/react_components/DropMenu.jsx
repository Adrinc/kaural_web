import React, { useState } from 'react';
import DropMenuStyle from './DropMenu.module.css';

const DropMenu = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='mb-20'>
      <button className={DropMenuStyle.dropbutton} onClick={toggleOpen}>
          <div className='flex w-full justify-between items-center align-middle gap-4 '>

              <p className={DropMenuStyle.question}>{question} </p>

              <div className={isOpen ? "transform rotate-90" : ""}> 
                <svg alt-arial="button icon"  width="32" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="chevron-right 1">
                <path id="Vector" d="M11.6987 23.5705L19.4126 15.8566L11.6987 8.1427" stroke={"#ffff"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>
              </div>

          </div>
      </button>
      {isOpen && <p className={DropMenuStyle.answer}>{answer}</p>}
    </div>
  );
};

export default DropMenu;