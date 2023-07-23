import { getHomeData } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    homeData: []
  }),
  actions: {
    async fetchHomeData() {
      const res = await getHomeData()
      console.log("home:", res)
      this.homeData = res.data
    },
  }
})

export default useHomeStore