import React, { useEffect, useState } from "react";
import "../../../public/assets/checkList/bootstrap/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Checked({ index, isChecked, onChange }: { index: number, isChecked: boolean, onChange: (index: number) => void }) {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/checkList/bootstrap/js/bootstrap.min.js");
    }
  }, []);

  return (
    
    <div style={{display:"inline-block"}} onClick={() => onChange(index)}>
 
      {!isChecked && (
        <div className="checked1" >
          
          <svg
            color="black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="icon-hov"
            style={{ fontSize: "34px", marginRight: "10px" }}
          >
           <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
          </svg>
        </div>
      )}
      {isChecked && (
       
     <div className="checked1"
         style={{textDecoration:'line-through'}} 
         
         >
          <svg
            
            
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="icon-hov"
            style={{ fontSize: "34px", marginRight: "10px" }}
          >
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00a976', height: '112px', width:'115px'}}/>
          </svg>
          </div>
          
      )}
    </div>
  );
}

export default Checked;