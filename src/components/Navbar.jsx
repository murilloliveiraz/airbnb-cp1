import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <header>
        <img className="logo-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="Logo AirBnb" />
        <img className="logo-header-mini" src="https://cdn.iconscout.com/icon/free/png-256/free-airbnb-3770993-3147610.png?f=webp" alt="Logo AirBnb" />
        <ul className='header-buttons'>
            <li className='button-border'><strong>Qualquer lugar</strong></li>
            <li className='button-border'><strong>Qualquer semana</strong></li>
            <li className='button-search'>
                Hóspedes?
                <span className="material-symbols-outlined search">search</span>
            </li>
        </ul>
        <div className='language-nav'>
          <p>Anuncie seu espaço no Airbnb</p>
          <span className="material-symbols-outlined">language</span>
        </div>
        <div className='profile-nav'>
            <span className="material-symbols-outlined">menu</span>
            <span className="material-symbols-outlined">account_circle</span>
        </div>
    </header>
    <div className='baixe-app'>
      <div className='baixe-app-div-logo'>
      <span class="material-symbols-outlined">
      close
      </span>
      <img className='logo-header-app' src="https://cdn.iconscout.com/icon/free/png-256/free-airbnb-logo-icon-download-in-svg-png-gif-file-formats--major-websites-set-pack-logos-icons-461772.png?f=webp&w=256" alt="airbnb logo" />
      </div>
      <div>
        <h3>Use o aplicativo</h3>
        <p>Acesso rápido e fácial ao Airbnb</p>
      </div>
      <button className='button-baixe-app'>ABRIR</button>
    </div>
    </>
  )
}

export default Navbar