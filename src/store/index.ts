import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
interface User {
    id: string
    name: string
    token: string
}

interface UserStore {
    userInfo: User | null
    setUser: (user: User) => void
}

const useUserStore = create<UserStore>()(immer(((set) => ({
    userInfo: {
        id: '1',
        name: '1',
        token: '1'
    },
    setUser: (user: User) => set((state) => {
        state.userInfo = user
    })
}))))

export default useUserStore;