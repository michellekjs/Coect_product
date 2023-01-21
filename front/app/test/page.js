import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CustomModal from './modal.js'
import Checkbox from './checkbox.js'
import Dropdown from './dropdown.js'

const Test = props => {

  const style= {
    dbButton : {
      border: 'none',
      borderRadius: '20px',
      width: '200px',
      height : '80px',
      marginBottom : '20px'
    },
    pageStyle: {
      margin:'40px',
      fontFamily: 'Open Sans',
    },
    dropdown: {
      marginTop: '20px'
    }
  };

  //get information using the router - written in back/routes/nodedb.js
  const [data , setData] = useState();
  const [visible, setVisible] = useState(false);
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/test/showexample').then((response)=>{
      setData(JSON.stringify(response.data))
    }).catch((error)=>{
      console.log(error);
  })
  }, [])

  return (
    <div style={style.pageStyle}>
      {/* title */}
      <h2> Template Components </h2>

      {/* getting data from db */}
      <div>
        <button 
          style={style.dbButton}
          onClick={()=> setVisible(!visible)}>
            DB data display
        </button>
        {visible && <div> {data} </div>}
      </div>

      {/* custom modal component */}
      <div> <CustomModal/> </div>

      {/* custom toggle component */}
      <div> Toggle button <Checkbox/> </div>

      {/* custom animated dropdown component */}
      <div style={style.dropdown}> Animated Dropdown </div>
      <button style={style.dbButton} onClick={e => setDropdownVisibility(!dropdownVisibility)}>
          {
              dropdownVisibility
                  ? 'Close'
                  : 'Open'
          }
      </button>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
        </ul>
      </Dropdown>
    </div>
  )
};

export default Test;