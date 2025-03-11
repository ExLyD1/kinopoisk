import { defineStore } from "pinia";

export const useMemberStore = defineStore('memberStore', () =>{

    const memberName = ref<string>('')

    return {
        memberName
    }
})