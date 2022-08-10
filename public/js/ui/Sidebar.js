/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const main = document.querySelector('.sidebar-mini');
    const toggleBtn = document.querySelector('.sidebar-toggle');

    toggleBtn.addEventListener('click', e => {
      e.preventDefault();
      main.classList.toggle('sidebar-open');
      main.classList.toggle('sidebar-collapse');
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const menuBtn = document.querySelector('.menu-item_login');
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('login').open();
    });
    const menuReg = document.querySelector('.menu-item_register');
    menuReg.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('register').open();
    })
    const menuLogOut = document.querySelector('.menu-item_logout');
    menuLogOut.addEventListener('click', (e) => {
      e.preventDefault();
      User.logout((err, response) => {
        if (response && response.success) {
          App.setState('init');
        }
      });
    });
  }
}