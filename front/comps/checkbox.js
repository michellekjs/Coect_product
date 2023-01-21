import React, { useState } from 'react'

const customStyles = {
  buttonStyle: {
    width: '50px',
    height : '50px',
  }
};


const Checkbox = () => {
  const {isChecked, handleToggle} = useState(false);
  // console.log(isChecked)

  return (
    <div>
      <input 
        type="checkbox"
        style={customStyles.buttonStyle}
        checked={isChecked}
        onChange={handleToggle}
      />
      {isChecked && <div> Hello? </div>}
    </div>
  );
}

export default Checkbox; 