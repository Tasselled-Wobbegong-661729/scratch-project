import React from 'react'
function Signup(props) {
    return (props.triger) ? (
        <div className='signup'>
            <div className='signup-inner'>
                <button className='close-signup'>
                    close
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Signup