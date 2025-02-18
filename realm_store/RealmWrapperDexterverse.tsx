import React, { ReactNode } from 'react';
import { RealmProvider } from '@realm/react';
import Realm from 'realm';
import { ReactNativeStorageSchemaDexterverse } from './realmSchemasDexterverse';  // Adjust the import


// Initialize Realm with the new schema
export const realmDexterverse = new Realm({
    schema: [ReactNativeStorageSchemaDexterverse],  // Use the new schema
});

interface RealmWrapperProps {
    children: ReactNode;
}

export const RealmWrapperDexterverse: React.FC<RealmWrapperProps> = ({ children }) => (
    <RealmProvider realm={realmDexterverse}>{children}</RealmProvider>
);
