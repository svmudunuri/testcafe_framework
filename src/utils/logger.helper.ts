import { configure, getLogger, Logger } from 'log4js';

require('dotenv-safe').config({
  allowEmptyValues: true,
  example: `${process.cwd()}/.env`,
});

configure({
  appenders: {
    console: { type: 'console' },
    file: {
      type: 'file',
      filename: `${process.cwd()}/reports/logs/test_${new Date()
        .toISOString()
        .replace(/\W/g, '')}.log`,
    },
  },
  categories: {
    default: {
      appenders: ['console', 'file'],
      level: 'all',
    },
  },
});
export const logger: Logger = getLogger('log');
