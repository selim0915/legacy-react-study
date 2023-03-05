import React from 'react';
import { createPortal } from 'react-dom';
import ThankDialog from './ThankDialog';

const Portal = (props) => {
    return createPortal(props.children, document.getElementById("portal"));
}

function Example() {
    return (
        <div onClick={() => {console.log("div")}}>
            <Portal>
                <ThankDialog />
            </Portal>
            <div style={{position: "absolute"}}>
                <button>button</button>
            </div>
        </div>
    );
}

export default Example;