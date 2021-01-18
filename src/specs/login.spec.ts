import * as loadJsonFile from 'load-json-file';
import { Role, Selector } from 'testcafe';

import loginPage from '../pages/Login.page';
import { Admin } from '../utils/roles.helper';

fixture.only('login')
.meta({
  type: 'smoke',
});

test('Login as a admin', async (t) => {
  await t
    .useRole(Admin)
    .expect(Selector('#nameofuser').visible)
    .ok();
});
