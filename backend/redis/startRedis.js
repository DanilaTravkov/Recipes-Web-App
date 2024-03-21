// scripts/startRedis.js
import { execSync } from 'child_process';

const userToken = process.argv[2];

const connectionString = `redis-cli -u redis://default:pTIM1d9ZNn2jmUKN8K4fbIecuSCPthzP@redis-11066.c3.eu-west-1-1.ec2.cloud.redislabs.com:11066`;

execSync(connectionString, { stdio: 'inherit' });
