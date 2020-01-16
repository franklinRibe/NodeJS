import React from 'react';
// Componente: Bloco isolado de HTML, CSS e JS o qual nao interfere no restante da aplicacao
// Propriedade: Informações que o componente pai passa para o componente filho
// Estado: Informaçoes mantidas pelo componente (lembrar: imutabilidade)

import './global.css'
import './app.css'
import './sidebar.css'

function App() {

  return (
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block>">
                <label htmlFor="github_username">Usuário do Github</label>
                <input name="github_username" id="github_username" required></input>
            </div>
            <div className="input-block>">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id="techs" required></input>
            </div>
            
            <div className="input-group">
              <div className="input-block>">
                  <label htmlFor="latitude">Latitude</label>
                  <input name="latitude" id="latitude" required></input>
              </div>
              <div className="input-block>">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required></input>
              </div>
            </div>
          
            <button type="submit">Salvar</button>
          </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
