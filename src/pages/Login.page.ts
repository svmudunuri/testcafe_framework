import { Selector, t } from 'testcafe';

import Xpath from '../utils/selector.helper';

class login {
  homeScreenLoginButton: Selector = Selector('#login2');
  userNameInput: Selector = Selector('#loginusername');
  passwordInput: Selector = Selector('#loginpassword');
  signInBtn: Selector = Selector('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
 

  async adminLogin(userNameInput: string, passwordInput: string) {
    await t
      .wait(200)
      .click(this.homeScreenLoginButton)
      .typeText(this.userNameInput, userNameInput, { paste: true })
      .typeText(this.passwordInput, passwordInput, { paste: true })
      .click(this.signInBtn)
      //.click(Xpath('//button[contains(text(),"Continue")]'));
  }

}

export default new login();
