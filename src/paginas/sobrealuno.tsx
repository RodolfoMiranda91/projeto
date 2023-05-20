import '../estilo/estilo.css'
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';


function SobreAluno() {    
  return (
    <div>
      <Cabecalho titulo="Você está em: ./home/sobre/sobrealuno"/> 
         <h1> Pagina Sobre Aluno</h1>
      <Rodape/> 
    </div>
  );
}

export default SobreAluno;
