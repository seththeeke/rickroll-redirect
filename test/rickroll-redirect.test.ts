import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as RickrollRedirect from '../lib/rickroll-redirect-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new RickrollRedirect.RickrollRedirectStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
