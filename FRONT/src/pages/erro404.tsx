import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import BloodTypeSelector from "../components/buttons/botaoflutuante";
import '../style/style.css'
import ExpandablePopup from "../components/buttons/botaoajuda";
import Error404 from "../components/erro404";
import Footer from "../components/footer";
import Header from "../components/teste";


function Erro404(){  
  TabTitle('Erro 404 - Sangue Bom')  
  return (
    <div>
      <div className="home_posso_doar">
      <Header/>
          <Error404/>
          <BloodTypeSelector/>
          <ExpandablePopup />
          <Footer/>
      </div>    
  </div>
  )    
}

export default Erro404;