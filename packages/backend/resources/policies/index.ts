import { tableArn1, tableArn2 } from '..';

export const nftTableDynamoDBReadPolicies = {
  Effect: 'Allow',
  Resource: [tableArn1],
  Action: ['dynamodb:GetItem', 'dynamodb:Query'],
};

export const nftTableDynamoDBWritePolicies = {
  Effect: 'Allow',
  Resource: [tableArn1],
  Action: ['dynamodb:PutItem'],
};

export const nftTableDynamoDBDeletePolicies = {
  Effect: 'Allow',
  Resource: [tableArn1],
  Action: ['dynamodb:DeleteItem'],
};

export const userTableDynamoDBReadPolicies = {
  Effect: 'Allow',
  Resource: [tableArn2],
  Action: ['dynamodb:GetItem', 'dynamodb:Query'],
};

export const userTableDynamoDBWritePolicies = {
  Effect: 'Allow',
  Resource: [tableArn2],
  Action: ['dynamodb:PutItem'],
};

export const userTableDynamoDBDeletePolicies = {
  Effect: 'Allow',
  Resource: [tableArn2],
  Action: ['dynamodb:DeleteItem'],
};
