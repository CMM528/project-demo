import { ref, reactive } from 'vue'
function usePagination() {
  const pageSize = [10, 20, 30, 40, 50]
  let list = reactive([])
  let page = reactive({
    pageSize: 10,
    pageIndex: 1,
    pageTotal: 0,
    pageCurrent: 1,
  })
  function handleSizeChange() { }
  function handleCurrentChange() { }
  let tableLoading = ref(false)
  return {
    pageSize,
    list,
    page,
    tableLoading,
    handleSizeChange,
    handleCurrentChange
  }
}

export default usePagination
