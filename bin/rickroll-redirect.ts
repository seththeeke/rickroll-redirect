#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RickrollRedirectStack } from '../lib/rickroll-redirect-stack';

const app = new cdk.App();
new RickrollRedirectStack(app, 'RickrollRedirectStack');
