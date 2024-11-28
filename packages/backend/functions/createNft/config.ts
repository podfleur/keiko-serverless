import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { tableName1 } from 'resources/index';
import { nftTableDynamoDBWritePolicies } from 'resources/policies';

export const createNft = {
    environment: { NFT_TABLE_NAME: tableName1 },
    iamRoleStatements: [nftTableDynamoDBWritePolicies],
    handler: getHandlerPath(__dirname),
    events: [
        {
            httpApi: {
                method: 'post',
                path: '/nfts',
            },
        },
    ],
}; 