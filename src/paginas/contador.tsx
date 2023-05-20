import Estado from "../componentes/estado/estado";
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";


function Contador(){
    return(
        <div>
            <Cabecalho titulo="Você está em: ./home/contador" />
            <Estado />
            <Rodape />
        </div>
    )
}

export default Contador;