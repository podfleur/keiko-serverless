import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBReadPolicies } from 'resources/policies';
import { tableName1 } from 'resources/index';

export const getNft = {
  environment: { NFT_TABLE_NAME: tableName1 },
  iamRoleStatements: [nftTableDynamoDBReadPolicies],
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/nfts',
      },
    },
  ],
};
