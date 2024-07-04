import './Header.css';
import logo from '../../assets/logos/tpcLogo.svg';
import hamburger from '../../assets/icons/burger.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo"  height={53} width={134}/>
        </a>
        <nav className="nav">

          <div className="hamburger-menu">
              <img src={hamburger} alt="" width={42} height={35}/>
          </div>

            <ul className="nav-links">
              <li><button>Home</button></li>
              <li><button>About</button></li>
              <li><button>Services</button></li>
              <li><button>Contact</button></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
