import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import crypto from 'crypto';

const client = new DynamoDBClient({ region: 'eu-west-1' });

export const main = async (): Promise<any> => {
  console.log(Event);
  const id = crypto.randomUUID();

  const params = {
    TableName: process.env.NFT_TABLE_NAME,
    Item: {
      PK: { S: 'Nft' },
      SK: { S: id },
      id: { S: id },
      pseudo: { S: 'pseudo'}
    },
  };

  await client.send(new PutItemCommand(params));

  return {
    id,
    pseudo: params.Item.pseudo.S,
  };
};
