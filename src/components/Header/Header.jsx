import './Header.css';
import logo from '../../assets/img/myteam.png';
function Header(){
  return(
    <div class="container header__container">
      <div className="header-flex">
      <div class="team__logo"><img src={logo} alt="logo-myteam" /></div>
      <ul class="list">
        <li class="li1">home</li>
        <li>about</li>
      </ul>
      </div>
      <button class="contact">Contact us</button>
    </div>
  );
}

export default Header;