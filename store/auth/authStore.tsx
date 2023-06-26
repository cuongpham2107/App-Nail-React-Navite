import { create } from "zustand";
import { UserModel } from "../../models";

type State ={
    token: string | null
    user: UserModel | null
}

type Action = {
    login:(data : UserModel, token: string) => void,
    logout: () => void
}

const useAuthStore = create<State & Action>((set) => ({
    token: null,
    user : null,
    login: (data,token) => set({
        user : data,
        token : token
    }),
    logout: () => set({
        user: null,
        token: null
    }) ,
}))

export default useAuthStore