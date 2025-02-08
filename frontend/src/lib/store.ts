import { create } from 'zustand'


type store = {
    isDropOpen: boolean,
    isEditOpen: boolean,
    isDeleteOpen: boolean,
    setIsDropOpen: () => void,
    setIsEditOpen: () => void,
    setIsDeleteOpen: () => void
};

export const useStore = create<store>((set) => ({
    isDropOpen: false,
    isEditOpen: false,
    isDeleteOpen: false,
    setIsDropOpen: () => {
        set((state) => ({ isDropOpen: !state.isDropOpen }))
    },
    setIsEditOpen: () => {
        set((state) => ({ isEditOpen: !state.isEditOpen }))
    },
    setIsDeleteOpen: () => {
        set((state) => ({ isDeleteOpen: !state.isDeleteOpen }))
    },
}))

