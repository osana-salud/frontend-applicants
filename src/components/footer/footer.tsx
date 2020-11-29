import React from 'react'

export default function Footer() {
  return (
    <div style={{
      position: 'fixed', backgroundColor: '#084E5F', margin: '0',
      left: 0, bottom: 0,
      height: '100px', width: '100%', alignContent: 'center', alignItems: 'center'
    }} className={'page-footer'} >
      <h4>
        <p style={{ color: '#FFFFFF' }}>{`Copyright © - `}
          <a rel="stylesheet" href={'https://www.linkedin.com/in/matias-espinoza-09a736187/'} target="_blank" >
            Espinoza, Matias
        </a>
        </p>
      </h4>
    </div>
  )
}
