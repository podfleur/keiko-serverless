import { PARTITION_KEY } from 'resources/dynamoDB';
import { Entity } from 'dynamodb-toolbox';
import { userTable } from './userTable';

export const UserEntity = new Entity({
  name: 'User',
  attributes: {
    [PARTITION_KEY]: { type: 'string', partitionKey: true, default: 'Nft' },
    id: { type: 'string', sortKey: true },
    pseudo: { type: 'string' },
  },
  table: userTable,
} as const);