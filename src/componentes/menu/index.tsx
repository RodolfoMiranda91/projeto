import '../../estilo/estilo.css'
import { Link } from 'react-router-dom';

const itensMenu = () =>{
    let Menu1: string = "Página Principal";
    let Menu2: string = "Sobre";
    let Menu3: string = "Sobre Aluno";
    let Menu4: string = "Sobre Professor";
    let Menu5: string = "Item Aluno";
    let Menu6: string = "Contador";
    return(
      <div className='itensMenu'>      
      <table>
        <tr>
          <td><Link to="/">{Menu1}</Link></td>
          <td><Link to="/sobre">{Menu2}</Link></td>
          <td><Link to="/sobre/sobrealuno">{Menu3}</Link></td>
          <td><Link to="/sobre/sobreprofessor">{Menu4}</Link></td>
          <td><Link to="/sobre/itemaluno">{Menu5}</Link></td>
          <td><Link to="/contador">{Menu6}</Link></td>
        </tr>
      </table>
      </div>
    );
  }

export default itensMenu;