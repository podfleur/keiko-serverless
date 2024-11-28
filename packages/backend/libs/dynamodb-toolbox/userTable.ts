import { Table } from 'dynamodb-toolbox';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { PARTITION_KEY, SORT_KEY } from 'resources/dynamoDB';

const DocumentClient = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
  marshallOptions: {
    convertEmptyValues: false,
  },
});

export const userTable = new Table({
  name: process.env.USER_TABLE_NAME || 'MISSING_USER_TABLE',
  partitionKey: PARTITION_KEY,
  sortKey: SORT_KEY,
  DocumentClient,
});