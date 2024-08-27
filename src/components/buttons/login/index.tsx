import '../../../style/stylebotao.css'
import { Link } from 'react-router-dom'

function Botao(){
  return(
    <div>
      <Link to='/pagelogin'>
    <button>
      <div className="wave"></div>
      <span>LOGIN</span>
    </button>
    </Link>
    </div>
  )
}


export default Botao
