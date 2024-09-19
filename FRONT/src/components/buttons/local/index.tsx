import { Link } from "react-router-dom";

function BotaoLocal(){
    return(
        <div className="button_local">
        <Link className="button_local" to='/locais'>
            <button className="button_local">
                <span className="button_letra">LOCAL</span>
            </button>
        </Link>
        </div>
    )
}

export default BotaoLocal;