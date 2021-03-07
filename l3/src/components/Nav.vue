<template>
  <nav class="flex def">
    <Sect></Sect>
    <div class="nav">
      <div class="nav_titl">Repo列表</div>
      <div class="nav_input flex">
        <input type="text" placeholder="按仓库名过滤" />
        <div class="inp_btn j-end" @click="dialogVisible = true">创建Repo</div>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
          class="mask"
        >
          <span>
              <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">所有者</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">
                      <span>Ieoliuhe</span>
                    </div></el-col
                  >
                </el-row>
               <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">Repo名称</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">
                      <el-input v-model="input" placeholder=""
                        ></el-input
                      >
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">所属组织</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">
                      <el-input v-model="input" placeholder=""
                        ></el-input
                      >
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">所属业务</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">
                      <el-input v-model="input" placeholder=""
                        ></el-input
                      >
                    </div></el-col
                  >
                </el-row>
                   <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">Repo简介</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">
                      <textarea name="" id="" rows="6" ></textarea>
                    </div></el-col
                  >
                </el-row>
                
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
      <table class="tal">
        <thead>
          <tr>
            <th>Repo名</th>
            <th>Repo简介</th>
            <th>类型</th>
            <th>owner</th>
            <th colspan="2">操作</th>
          </tr>
        </thead>
        <tbody class="tal_body">
          <tr>
            <td>maven_repo1</td>
            <td>This is maven repo description.</td>
            <td>公开</td>
            <td>leoliuhe</td>
            <td>收藏</td>
            <td>复制URL</td>
          </tr>
          <tr>
            <td>maven_repo1</td>
            <td>This is maven repo description.</td>
            <td>公开</td>
            <td>leoliuhe</td>
            <td>收藏</td>
            <td>复制URL</td>
          </tr>
          <tr class="change">
            <td>maven_repo1</td>
            <td>This is maven repo description.</td>
            <td>非公开</td>
            <td>leoliuhe</td>
            <td>收藏</td>
            <td>复制URL</td>
          </tr>
          <tr class="change">
            <td>maven_repo1</td>
            <td>This is maven repo description.</td>
            <td>非公开</td>
            <td>leoliuhe</td>
            <td>收藏</td>
            <td>复制URL</td>
          </tr>
          <tr class="change">
            <td>maven_repo1</td>
            <td>This is maven repo description.</td>
            <td>公开</td>
            <td>leoliuhe</td>
            <td>收藏</td>
            <td>复制URL</td>
          </tr>
        </tbody>
      </table>
    </div>
  </nav>
</template>

<script>
import Sect from "./section.vue";
export default {
  components: { Sect },
  data() {
    return {
      dialogVisible: false,
      radio: "1",
      input: "",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" src="../assets/css/nav.less">
</style>
