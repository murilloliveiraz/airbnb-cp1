import './Navbar.css';

const Navbar = () => {
  return (
    <header>
        <img className="logo-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="Logo AirBnb" />
        <ul className='header-buttons'>
            <li className='button-border'>Qualquer lugar</li>
            <li className='button-border'>Qualquer semana</li>
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
  )
}

export default Navbar