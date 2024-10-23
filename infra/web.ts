import {database} from './db'

export const nextJsDashboard2410 = new sst.aws.Nextjs("NextJsDashboard2410", {
  link: [database],
  path: 'packages/nextjs-dashboard'
});