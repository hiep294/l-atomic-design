import React from 'react'

const Button = ({children, href, onClick}) => {
  return href ? (
    <a href={href}>{children}</a>
  ) : (
    <button onClick={onClick}>
      basic {children}
    </button>
  )
}

export default Button
