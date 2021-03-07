<template>
  <nav class="flex sel">
    <Sect></Sect>
    <div class="nav">
      <div class="nav_titl">组件搜索</div>
      <div class="nav_input flex">
        <el-dropdown>
          <el-button type="primary">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-input
          class="nav_input_sel"
          v-model="input"
          placeholder="请输入内容"
        ></el-input>
        <el-button type="primary" size="mini">主要按钮</el-button>
        <div class="radio">
          <el-checkbox v-model="checked"
            ><span class="tex"
              >搜索结果包含我没有权限访问的Repo</span
            ></el-checkbox
          >
        </div>
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
            <td>jar</td>
          </tr>
          <tr>
            <td>maven_repo1</td>
            <td>This is maven repo description.</td>
            <td>公开</td>
            <td>leoliuhe</td>
            <td>收藏</td>
            <td>jar</td>
          </tr>
        </tbody>
      </table>
      <div class="sel_tex">搜索详情</div>
      <el-row class="lay_one">
        <el-col :span="12"
          ><div class="grid-content bg-purple">
          
            <div id="areaTree">
                <div class="tree-box">
                  <div class="zTreeDemoBackground left">
                    <ul id="treeDemo" class="ztree"></ul>
                  </div>
                </div>
              </div>
      </div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light lay_tow">
            <el-tabs
            class="tabs"
              v-model="activeName"
              type="border-card"
           
            >
              <el-tab-pane label="用户管理" name="first">
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">Name：</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">com</div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">Name：</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">com</div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">Name：</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">com</div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">Name：</div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">com</div></el-col
                  >
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second"
                ><div class="ht">
                  <div>&lt;sapn&gt;1232311222&lt;/sapn&gt;</div>
                  <div style="text-indent: 10px">
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;sapn&gt;1232311222&lt;/sapn&gt;
                  </div>
                  <div>&lt;sapn&gt;1232311222&lt;/sapn&gt;</div>
                </div></el-tab-pane
              >
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth"
                >定时任务补偿</el-tab-pane
              >
            </el-tabs>
          </div></el-col
        >
      </el-row>
    </div>
  </nav>
</template>
<script>
import Sect from './section.vue'
export default {
  name: "zTree",
   components: { Sect },
  data() {
    return {
       
      input: "",
      checked:'',
      defaultProps: {
        children: "children",
        label: "label",
      
      },
      activeName: "first",
      setting: {
        data: {
          simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: 0,

          },
        },
      },
      zNodes: [
        {
          name: "repo_name",
          open: true,
          children: [
            {
              name: "com",
              open: true,
              children: [
                {
                  name: "tencent",
                  open: true,
                  children: [
                    {
                      name: "sid",
                      open: true,
                      children: [
                        {
                          name: "devops_tools",
                          open: true,
                          children: [
                            {
                              name: "1.0",
                              open: true,
                              children: [
                                {
                                  name: "devops_tools-1.0.pom",
                                  open: true,
                                },
                                {
                                  name: "devops_tools-1.0.jar",
                                  open: true,
                                },
                              ],
                            },
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      
      ],
    };
  },
  methods: {
    freshArea: function () {
      $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
    },
   
  },
  mounted() {
    $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
  },
};
</script>
<style lang="less" src="../assets/css/sel.less">
</style>
<style>
@import "../assets/css/zTree/zTreeStyle/zTreeStyle.scss";
</style>