import { create } from 'zustand'

type UIState = {
    ui: Record<string, boolean>
    toggle: (key: string) => void
    setUI: (key: string, value: boolean) => void
    resetUI: () => void
}

export const useUIStore = create<UIState>((set) => ({
    ui: {},

    toggle: (key) =>
        set((state) => ({
            ui: { ...state.ui, [key]: !state.ui[key] },
        })),

    setUI: (key, value) =>
        set((state) => ({
            ui: { ...state.ui, [key]: value },
        })),

    resetUI: () => set({ ui: {} }),
}))
