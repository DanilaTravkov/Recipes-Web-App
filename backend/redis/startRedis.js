// scripts/startRedis.js
import { execSync } from 'child_process';

const userToken = process.argv[2];

const connectionString = `redis-cli -u redis://default:${userToken}@redis-19370.c77.eu-west-1-1.ec2.cloud.redislabs.com:19370`;

execSync(connectionString, { stdio: 'inherit' });
