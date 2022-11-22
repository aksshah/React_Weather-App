import { Fragment } from 'react'
import './Logo.css'

export const Logo: React.FC = () => {
  return (
    <Fragment>
      <h1 className='headline'>
        Weatherly
        <sup>2.0</sup>
      </h1>
    </Fragment>
  )
}
