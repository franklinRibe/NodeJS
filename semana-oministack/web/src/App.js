import React , { useState, useEffect } from 'react';
// Componente: Bloco isolado de HTML, CSS e JS o qual nao interfere no restante da aplicacao
// Propriedade: Informações que o componente pai passa para o componente filho
// Estado: Informaçoes mantidas pelo componente (lembrar: imutabilidade)

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState(''); 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) =>{
        console.log(err);
      },{
        timeout: 30000,
      } 
    )
  }, []);

  return (
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input name="github_username" id="github_username" required></input>
            </div>
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id="techs" required></input>
            </div>
            
            <div className="input-group">
              <div className="input-block">
                  <label htmlFor="latitude">Latitude</label>
                  <input 
                    type="number" 
                    name="latitude" 
                    id="latitude" 
                    required 
                    value={latitude}
                    onChange={e => setLatitude(e.target.value)}
                  >    
                  </input>
              </div>
              <div className="input-block">
                  <label htmlFor="longitude">Longitude</label>
                  <input 
                    type="number" 
                    name="longitude" 
                    id="longitude" 
                    required value={longitude}
                    onChange={e => setLongitude(e.target.value)}
                  >
                  </input>
              </div>
            </div>
          
            <button type="submit">Salvar</button>
          </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/42845770?s=460&v=4" alt="Franklin Ribeiro"/>
              <div className="user-info">
                <strong>Franklin Ribeiro</strong>
                <span>Docker, Python, Kubernetes</span>
              </div>
            </header>
            <p>DevOps Engineer testando novas ferramentas e brincando com as Tecnologias Cloud</p>
            <a href="https://github.com/franklinRibe">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/42845770?s=460&v=4" alt="Franklin Ribeiro"/>
              <div className="user-info">
                <strong>Franklin Ribeiro</strong>
                <span>Docker, Python, Kubernetes</span>
              </div>
            </header>
            <p>DevOps Engineer testando novas ferramentas e brincando com as Tecnologias Cloud</p>
            <a href="https://github.com/franklinRibe">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/42845770?s=460&v=4" alt="Franklin Ribeiro"/>
              <div className="user-info">
                <strong>Franklin Ribeiro</strong>
                <span>Docker, Python, Kubernetes</span>
              </div>
            </header>
            <p>DevOps Engineer testando novas ferramentas e brincando com as Tecnologias Cloud</p>
            <a href="https://github.com/franklinRibe">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/42845770?s=460&v=4" alt="Franklin Ribeiro"/>
              <div className="user-info">
                <strong>Franklin Ribeiro</strong>
                <span>Docker, Python, Kubernetes</span>
              </div>
            </header>
            <p>DevOps Engineer testando novas ferramentas e brincando com as Tecnologias Cloud</p>
            <a href="https://github.com/franklinRibe">Acessar Perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
