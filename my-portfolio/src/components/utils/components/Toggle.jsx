import { useState } from 'react'

import "../styles/toggle.css"

export const Toggle = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick()
    }

    return (
        <label className='toggle-label'>
            <input className="toggle-input" type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className='toggle-text'>{label}</span>
            {/* <strong className='toggle-strong'>{label}</strong> */}
        </label>
    )
}
