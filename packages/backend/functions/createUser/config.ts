import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { tableName2 } from 'resources/index';
import { userTableDynamoDBWritePolicies } from 'resources/policies';

export const createUser = {
    environment: { NFT_TABLE_NAME: tableName2 },
    iamRoleStatements: [userTableDynamoDBWritePolicies],
    handler: getHandlerPath(__dirname),
    events: [
        {
            httpApi: {
                method: 'post',
                path: '/users',
            },
        },
    ],
}; 