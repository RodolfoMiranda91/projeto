const ItensMenu = () =>{
    let Menu1: string = "Página Principal";
    let Menu2: string = "Sobre";
    let Menu3: string = "Serviços";
    let Menu4: string = "Contato";
    return(
      <div>      
      <table>
        <tr>
          <td>{Menu1}</td>
          <td>{Menu2}</td>
          <td>{Menu3}</td>
          <td>{Menu4}</td>
        </tr>
      </table>
      </div>
    );
  }