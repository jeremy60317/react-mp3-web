import React from 'react'

const Logo = (props) => {
    const { logo, cssClass, href } = props
    return (
        <a className={cssClass} href={href && href}>
            <img src={logo} />
        </a>
    )
}

export default Logo
