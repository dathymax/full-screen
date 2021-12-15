import { Switch } from 'antd';
import React, { useState } from 'react'

const ChangeTheme = (props) => {
    
    return (
        <div>
            <Switch
                checked={props.theme}
                onChange={props.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
        </div>
    )
}

export default ChangeTheme
