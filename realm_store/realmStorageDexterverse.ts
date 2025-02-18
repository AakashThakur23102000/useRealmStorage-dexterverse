import Realm from 'realm';
import { ReactNativeStorageSchemaDexterverse } from './realmSchemasDexterverse';
import { realmDexterverse } from './RealmWrapperDexterverse';


export const RealmStorage = {

    // ✅ Set an item
    setItem: (key: string, value: any) => {
        try {
            realmDexterverse.write(() => {
                realmDexterverse.create('ReactNativeStorage', { key, value: JSON.stringify(value) }, Realm.UpdateMode.Modified);
            });
        } catch (error) {
            console.error('Error setting item:', error);
        }
    },

    // ✅ Get an item
    getItem: (key: string): any | null => {
        try {
            const item = realmDexterverse.objectForPrimaryKey('ReactNativeStorage', key);
            return item ? JSON.parse(item.value as string) : null; // ✅ Explicit type assertion
        } catch (error) {
            console.error('Error getting item:', error);
            return null;
        }
    },


    // ✅ Remove an item
    removeItem: (key: string) => {
        try {
            realmDexterverse.write(() => {
                const item = realmDexterverse.objectForPrimaryKey('ReactNativeStorage', key);
                if (item) realmDexterverse.delete(item);
            });
        } catch (error) {
            console.error('Error removing item:', error);
        }
    },

    // ✅ Get all keys
    // ✅ Get all keys
    getAllKeys: (): string[] => {
        try {
            const items = realmDexterverse.objects('ReactNativeStorage');
            return items.map((item) => item.key as string); // ✅ Explicit type assertion
        } catch (error) {
            console.error('Error getting all keys:', error);
            return [];
        }
    },


    // ✅ Clear storage
    clear: () => {
        try {
            realmDexterverse.write(() => {
                const allItems = realmDexterverse.objects('ReactNativeStorage');
                realmDexterverse.delete(allItems);
            });
        } catch (error) {
            console.error('Error clearing storage:', error);
        }
    },


    // new 
    // ✅ Get all data (key-value pairs)
    getAllData: (): { key: string; value: any }[] => {
        try {
            const items = realmDexterverse.objects('ReactNativeStorage');
            const data = items.map((item) => ({
                key: item.key as string,
                value: JSON.parse(item.value as string), // Parse the value if it's stringified JSON
            }));
            return data;
        } catch (error) {
            console.error('Error getting all data:', error);
            return [];
        }
    },
};
