import '../../estilo/estilo.css';
import ItensMenu from "../menu";

type Props = {
  titulo?: String;
}

function cabecalho(parametro: Props) {
  return (
    <div>

      <div className='container_cabecalho'>

        <div className='divclass2'>
          <ItensMenu />
        </div>

      </div>      
        <div className='divclass3'> {parametro.titulo}
      </div>

    </div>
  )
}
export default cabecalho;