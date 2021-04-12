import React from 'react'
import "./RememberMe.css"

function RememberMe({onChecked,checked}) {
    const handleChecked = () => {
        onChecked();
    }
    return (
        <div>
            <label className="position">
            <input
              className="space"
              type="checkbox"
              onChange={handleChecked}
              checked={checked}
            />
            Remember me
          </label> 
        </div>
    )
}

export default RememberMe
