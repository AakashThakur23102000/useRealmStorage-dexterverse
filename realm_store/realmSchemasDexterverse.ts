import Realm from 'realm';

// Define a generic key-value schema
export const ReactNativeStorageSchemaDexterverse = {
    name: 'ReactNativeStorage',
    primaryKey: 'key',
    properties: {
        key: 'string',  // The key used to access the value
        value: 'string',  // The value will be stored as a string (JSON.stringified data can be used)
    },
};

// Type for ReactNativeStorage schema (to use with TypeScript)
export type ReactNativeStorageSchemaDexterverseType = Realm.Object & {
    key: string;
    value: string;
};
