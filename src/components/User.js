import React from "react"
import Theme from './Theme/Theme'
import { connect } from "react-redux"
const User = (props) => {
    return(
       <Theme>
            <div>
                <span>{''}</span>
            </div>
       </Theme>
    )
}


    
export default connect()(User)