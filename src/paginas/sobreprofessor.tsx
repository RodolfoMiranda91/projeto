import '../estilo/estilo.css'
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';


function SobreProfessor() {    
  return (
    <div>
      <Cabecalho titulo="Você está em: ./home/sobre/sobreprofessor"/> 
         <h1> Pagina Sobre Professor</h1>
      <Rodape/> 
    </div>
  );
}

export default SobreProfessor;
