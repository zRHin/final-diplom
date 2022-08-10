/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    const callback = (err) => {
      if (err) {
        handleError(err);
      } else {
        this.element.reset();
        App.getModal('createAccount').close();
        App.getWidget('accounts').update();
        App.updateForms();
      }
    }
    Account.create(data, callback);
  }
}