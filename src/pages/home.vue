<template>
  <Page>
    <template #main>
      <!-- <el-form>
        <el-form-item label="姓名">
          <el-input
            v-model="form.name"
            placeholder="请输入姓名"
            style="width: 250px"
          />
        </el-form-item>
        <el-form label="手机号">
          <el-input
            v-model="form.mobile"
            placeholder=""
            style="width: 250px"
          ></el-input>
        </el-form> -->
      <el-table :data="list">
        <el-table-column label=""></el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="page.pageCurrent"
        v-model:page-size="page.pageSize"
        :page-sizes="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.pageTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </template>
  </Page>
</template>

<script setup>
import Page from "@/components/Page.vue";
import usePagination from "@/hooks/usePagination";
import { useSearch, useAddandEdit } from "@/pages/hook/homeHooks";
import { reactive } from "vue";
const {
  pageSize,
  list,
  page,
  tableLoading,
  handleSizeChange,
  handleCurrentChange,
} = usePagination();
const { form, handleSearch, resetForm } = useSearch();
const { add, edit } = useAddandEdit();

// console.log()
</script>
<style lang="scss" scoped></style>
