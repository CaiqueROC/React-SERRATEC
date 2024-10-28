import Logo from "../assets/react.svg";
export default function Time() {
  const times = ["Vasco", "Flamengo", "Botafogo", "Fluminense"];
  const pessoa = {
    nome: "Marcos",
    idade: 25,
  };

  const dadosPessoa = (pessoa)=>{
    return pessoa.nome + " - " + pessoa.idade
  }

  const listaTimes = times.map((time, index) => <li key={index}>{time}</li>);

  const soma = (a,b)=> a+b;

//criar uma função que receberá um texto e retornar ele maiúsculo

  const texto = (msg) => msg.toUpperCase();

  return (
    <div>
      <h1>Lista de Times</h1>
      <p>Olá, {dadosPessoa(pessoa)}</p>
      <p>Texto:{texto("Aula de React")}</p>
      <p>Soma:{soma(10,50)}</p>
      <img src={Logo} alt="React" />
      {/* <img src={require("../assets/react.svg")} alt="React Logo" /> */}
      <ul>{listaTimes}</ul>
    </div>
  );
}
