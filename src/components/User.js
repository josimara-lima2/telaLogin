import React from "react"
import Theme from './Theme/Theme'
const User = (props) => {
    return(
       <Theme>
            <div>
                <span>{props.name}</span>
            </div>
       </Theme>
    )
}

export default User