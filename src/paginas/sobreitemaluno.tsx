import '../estilo/estilo.css'
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import {useParams} from "react-router-dom";

function SobreItemAluno() {    
    const params = useParams();

  return (
    <div>
      <Cabecalho titulo="Você está em: ./home/sobre/sobreitemaluno"/> 
         <h1> Pagina Sobre Item Aluno</h1>
         <hr/>
         <p>
            Esta é uma página sobre o aluno: {params.parametro} 
         </p>
      <Rodape/> 
    </div>
  );
}

export default SobreItemAluno;
