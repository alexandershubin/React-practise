import React, {Component} from 'react';
import '../css/Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        {link: 'Главная'},
        {link: 'Контакты'},
        {link: 'О нас'},
        {link: 'Иное'}
      ],
      showMenu: false
    }
  };

  clickHandlerMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  };

  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <nav className="nav">
            <div onClick={this.clickHandlerMenu} className={!this.state.showMenu ? 'header__burger' : 'header__burger active'}>
              <span></span>
            </div>
            <ul className="nav__list">
              {this.state.showMenu
                ? this.state.menu.map((links, index) => {
                  return (
                    <li key={index} className="nav__item">
                      <a className="nav__link" href="">
                        {links.link}
                      </a>
                    </li>
                  )
                })
                : null
              }
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Menu;
