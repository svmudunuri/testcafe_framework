import * as loadJsonFile from 'load-json-file';
import { Role, Selector, t } from 'testcafe';

import rolelogin from '../pages/Login.page';
import { RunConfig } from '../utils/RunConfig';

const runConfig: RunConfig = loadJsonFile.sync(
  './src/support/.testcaferc.json'
);

const loginDataSet = require('../data/UserLogin.data.json');
const appUrl = runConfig.baseUrl;

export const Admin = Role(
  appUrl,
  async (t) => {
    await rolelogin.adminLogin(
      loginDataSet.userLoginDetails.Admin.username,
      loginDataSet.userLoginDetails.Admin.password
    );
  },
  {
    preserveUrl: true,
  }
);

