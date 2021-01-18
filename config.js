const createTestCafe = require('testcafe');
async function setupTestCafe() {
  const testcafe = await createTestCafe('localhost');
  try {
    const runner = testcafe.createRunner();
    const failedCount = await runner
      .src('./src/specs/')
      .browsers(['chrome'])
      //.reporter('allure')
      .screenshots({
        path: 'artifacts/screenshots',
        takeOnFails: true,
      })
      .concurrency(1)
      // .filter(
      //   (testName, fixtureName, fixturePath, testMeta, fixtureMeta) => testMeta.env !== 'prod'
      // )
      .run({
        color: true,
        speed: 1,
        selectorTimeout: 50000,
        assertionTimeout: 7000,
      });
    console.log(`Failed tests: ${failedCount}`);
    testcafe.close();
  } catch (error) {
    console.error(error);
    testcafe.close();
  }
}
setupTestCafe();
