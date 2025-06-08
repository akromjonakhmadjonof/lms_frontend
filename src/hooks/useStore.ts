import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import type {StoreKeyTypeMap} from '@/types/store'

type DynamicStore = {
    [K in keyof StoreKeyTypeMap]?: StoreKeyTypeMap[K]
}

interface StoreState {
    store: DynamicStore
    set: <K extends keyof StoreKeyTypeMap>(
        key: K,
        value: StoreKeyTypeMap[K]
    ) => void
    get: <K extends keyof StoreKeyTypeMap>(key: K) => StoreKeyTypeMap[K] | undefined
    remove: (key: keyof StoreKeyTypeMap) => void
    reset: () => void
}

function pickStoreValues<K extends keyof StoreKeyTypeMap>(
    store: DynamicStore,
    keys: K[]
): Pick<DynamicStore, K> {
    const filtered: Partial<DynamicStore> = {};
    for (const key of keys) {
        const value = store[key];
        if (value !== undefined) {
            filtered[key] = value;
        }
    }
    return filtered as Pick<DynamicStore, K>;
}


export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            store: {},
            set: (key, value) =>
                set((state) => ({
                    store: {...state.store, [key]: value},
                })),
            get: (key) => get().store[key],
            remove: (key) =>
                set((state) => {
                    const newStore = {...state.store}
                    delete newStore[key]
                    return {store: newStore}
                }),
            reset: () => set({store: {}}),
        }),
        {
            name: 'ui-store',
            partialize: (state: StoreState) => {
                const allowedKeys: (keyof StoreKeyTypeMap)[] = ['theme', 'language'];

                return {
                    store: pickStoreValues(state.store, allowedKeys),
                }
            }
        }
    )
)
