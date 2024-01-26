import { defineStore } from "pinia"

interface Store {
  message: string
  id: number
}

const useStore = defineStore("storeId", {
  state: (): Store => ({
    message: "store",
    id: 40,
  }),
})

export default useStore
