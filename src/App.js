import React, {Component} from "react";
import TableBody from "./components/TableBody";
import TableFoot from "./components/TableFoot";
import TableHead from "./components/TableHead";

class App extends Component {
  state = {
    livros: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(livros => this.setState({ livros }))
    .catch(function(error) {
      alert("Erro na requisição");
    }) 
    .finally(function() {
      console.log("Sempre retorna");
    })
  };

  handleRemoverLinha = (id) => { 
    const livros = this.state.livros.filter( l => l.id !== id);
    this.setState({ livros }); 
  }

  handleOrdenarCrescente = (headType) => {
    console.log("Ctype", headType);

    let livros = [];
    
    switch (headType) {
      case ("isbn"):
        livros = this.state.livros.sort( (a, b) => 
          a.id < b.id ? -1 : 0
        );
        break;

      case ("titulo"):
        livros = this.state.livros.sort( (a, b) => 
          a.titulo < b.titulo ? -1 : 0
        );
        break;

      case ("autor"):
        livros = this.state.livros.sort( (a, b) => 
          a.autor < b.autor ? -1 : 0
        );
        break;

      default:
        return;
    }

    this.setState({ livros });
  };

  handleOrdenarDecrescente = (headType) => {
    console.log("Dtype", headType);

    let livros = [];

    switch (headType) {
      case ("isbn"):
        livros = this.state.livros.sort( (a, b) => 
        {
          return a.id < b.id ? -1 : 0
        }
        );
        break;

      case ("titulo"):
        livros = this.state.livros.sort( (a, b) => 
          a.titulo < b.titulo ? -1 : 0
        );
        break;

      case ("autor"):
        livros = this.state.livros.sort( (a, b) => 
          a.autor < b.autor ? -1 : 0
        );
        break;

      default:
        return;
    }

    livros.reverse();  //<----
    this.setState({ livros });
  };

render() { 
    return (
      <table className="tabela">
        <TableHead
            ordenarCrescente = { this.handleOrdenarCrescente }
            ordenarDecrescente = { this.handleOrdenarDecrescente }
        />
        <TableBody 
          livros = { this.state.livros }
          removerLinha = { this.handleRemoverLinha }
        />
        <TableFoot 
          qtdLivros = { this.state.livros.length }
        />
      </table>
    );
  }
}

export default App;
