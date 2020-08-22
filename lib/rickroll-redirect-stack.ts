import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class RickrollRedirectStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new s3.Bucket(this, "RickRollBucket", {
      bucketName: "seththeeke",
      websiteRedirect: {
        hostName: "www.youtube.com/watch?v=dQw4w9WgXcQ",
        protocol: s3.RedirectProtocol.HTTPS
      }
    });
  }
}
