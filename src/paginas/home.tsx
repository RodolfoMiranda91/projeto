import '../estilo/estilo.css'
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';


function handleClickButton(){
    alert('Clicou no botão...');
}

function Home() {    
  return (
    <div>
      <Cabecalho titulo="Você está em: ./home"/> 
        <h1> Pagina Home</h1>
        <br/>
        <button onClick={handleClickButton}>CLIQUE AQUI</button>
      <Rodape/> 
    </div>
  );
}

export default Home;
