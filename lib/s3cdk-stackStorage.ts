import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Asset } from 'aws-cdk-lib/aws-s3-assets';
import * as path from 'path';

export class S3CdkStackStorage extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const directoryAsset = new Asset(this, "SampleZippedDirAsset", {
      path: path.join(__dirname, "../../../build")
    });

    // Uploaded to Amazon S3 as-is
    const fileAsset = new Asset(this, 'SampleSingleFileAsset', {
      path: path.join(__dirname, '../../../build/file-asset.txt')
    });
    
  }
}
