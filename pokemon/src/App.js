import { useState } from 'react';
import { CgPokemon } from "react-icons/cg";
import api from './services/api';
import './style.css';

function App() {
    
  const [input, setInput] = useState('')
  const [pokemon, setPokemon] = useState({})

  async function click() {

    //alert(`o input é de ${input}`)

    try{
      const response = await api.get(`pokemon/${input}`)
      setPokemon(response.data)
      
    }catch{
      alert("Pokemon não encontrado")
    }
  }
  
  return (
    <div className="container">

      <div className='interface'>

        <h1 className="title">Cards Collection</h1>

        <div className="buttonList">

          <button className="button1" id="1" onClick={(e) => {setInput(e.target.id); click()}}>
          <CgPokemon size={50} color="#f6bd20"/> Pokemon #001
          </button>

          <button className="button2" id="2" onClick={(e) => {setInput(e.target.id); click()}}>
            <CgPokemon size={50} color="#f6bd20"/> Pokemon #002
          </button>

          <button className="button3" id="3" onClick={(e) => {setInput(e.target.id); click()}}>
            <CgPokemon size={50} color="#f6bd20"/> Pokemon #003
          </button>

          <button className="button4" id="4" onClick={(e) => {setInput(e.target.id); click()}}>
            <CgPokemon size={50} color="#f6bd20"/> Pokemon #004
          </button>

          <button className="button5" id="5" onClick={(e) => {setInput(e.target.id); click()}}>
            <CgPokemon size={50} color="#f6bd20"/> Pokemon #005
          </button>

          <button className="button6" id="6" onClick={(e) => {setInput(e.target.id); click()}}>
            <CgPokemon size={50} color="#f6bd20"/> Pokemon #006
          </button>

        </div>

        {Object.keys(pokemon).length > 0 && (
        <main className='main'>

          <img></img>

          <div className='titleCard'>
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.weight}lbs</h3>
          </div>

            <span1>Ataque</span1>
            <span2>Descrição</span2>
            <span1>Ataque</span1>
            <span2>Descrição</span2>

        </main>
        )}

      </div>

    </div>
  );
}

export default App;
