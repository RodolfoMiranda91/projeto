import '../estilo/estilo.css'
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';


function Sobre() {    
  return (
    <div>
      <Cabecalho titulo="Você está em: ./home/sobre"/>
         <h1> Pagina Sobre</h1>
      <Rodape/>    
    </div>
  );
}

export default Sobre;
