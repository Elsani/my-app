import React, {forwardRef, useImperativeHandle,useState } from 'react';

const Button = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
        <Button 
        onClick={() => {
        setToggle(!toggle);
        }}
        > Button from Child 
        </Button>
        {toggle && <span>Toggle</span>}
        </>
    );
};

export default Button;