import './estilo/estilo.css';
import {Routes, Route} from 'react-router-dom';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import SobreAluno from './paginas/sobrealuno';
import SobreProfessor from './paginas/sobreprofessor';
import SobreItemAluno from './paginas/sobreitemaluno';
import Contador from './paginas/contador';
import Notfound from './paginas/notfound';



function App() {      
  return (
    <div>     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/sobre/sobrealuno" element={<SobreAluno/>}/>
        <Route path="/sobre/sobreprofessor" element={<SobreProfessor/>}/>
        <Route path="/sobre/:parametro" element={<SobreItemAluno/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path="/contador" element={<Contador/>}/>
      </Routes>  
    </div>
  );
}

export default App;
