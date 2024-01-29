import { reactive } from "vue";
export function useSearch() {
  let form = reactive({
    name: '',
    mobile: '',
  })
  function handleSearch() {
    console.log(form)
  }
  function resetForm() {
    form.name = ''
    form.mobile = ''
  }
  return {
    form,
    handleSearch,
    resetForm
  }
}

export function useAddandEdit() {
  function add() { }
  function edit() { }

  return {
    add,
    edit
  }
}
