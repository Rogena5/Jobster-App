import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrapper/ErrorPage'

function Error() {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt="not found"/>
        <h3>ooh!Page not found</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur.</p>
      <Link to="/">back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error