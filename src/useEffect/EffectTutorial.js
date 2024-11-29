import React, { forwardRef, useImperativeHandle,useState } from 'react';

  const Button = forwardRef ((ref, props) => {
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref, () => ({
      

    }));

    return(
      <button 
      onClick={() => {
        setToggle(!toggle);
      }}
      >Button from Child</button>
      {toggle && <span>Toggle</span>


  export default LayoutEffectTutorial;