<template>
  <nav class="flex mav">
    <Sect></Sect>
    <div class="nav">
      <div class="nav_titl">Repo列表</div>
      <div class="nav_input flex">
        <div class="tabs">
          <el-tabs v-model="activeName">
            <el-tab-pane label="用户管理" name="first" class="menu-use">
              <div class="first_box">
                <div id="areaTree">
                  <div class="tree-box">
                    <div class="zTreeDemoBackground left">
                      <ul id="treeDemo" class="ztree"></ul>
                    </div>
                  </div>
                </div>
              </div>
              <el-button type="primary">确定</el-button>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
              <div class="option">
                <el-row>
                  <el-col :span="2"
                    ><div class="grid-content bg-purple">所有者</div></el-col
                  >
                  <el-col :span="22"
                    ><div class="grid-content bg-purple-light">
                      Ieoliuhe
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="2"
                    ><div class="grid-content bg-purple">Repo名称</div></el-col
                  >
                  <el-col :span="22"
                    ><div class="grid-content bg-purple-light">
                      <el-input v-model="input" placeholder="请输入内容"
                        >123</el-input
                      >
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="2"
                    ><div class="grid-content bg-purple">所属组织</div></el-col
                  >
                  <el-col :span="22"
                    ><div class="grid-content bg-purple-light">
                      <el-input v-model="input" placeholder="请输入内容"
                        >123</el-input
                      >
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="2"
                    ><div class="grid-content bg-purple">所属业务</div></el-col
                  >
                  <el-col :span="22"
                    ><div class="grid-content bg-purple-light">
                      <el-input v-model="input" placeholder="请输入内容"
                        >123</el-input
                      >
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="2"
                    ><div class="grid-content bg-purple">Repo简介</div></el-col
                  >
                  <el-col :span="22"
                    ><div class="grid-content bg-purple-light">
                      <el-input v-model="input" placeholder="请输入内容"
                        >123</el-input
                      >
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="2"
                    ><div class="grid-content bg-purple">是否公开</div></el-col
                  >
                  <el-col :span="22"
                    ><div class="grid-content bg-purple-light">
                      <el-radio v-model="radio" label="1">是</el-radio>
                      <el-radio v-model="radio" label="2">否</el-radio>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="2"
                    ><div class="grid-content bg-purple">是否公开</div></el-col
                  >
                  <el-col :span="22"
                    ><div class="grid-content bg-purple-light">
                      <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="Repo描述Repo描述Repo描述Repo描述Repo描述Repo描述Repo描述Repo描述Repo描述Repo描述Repo描述"
                        v-model="textarea"
                        resize="none"
                      >
                      </el-input></div
                  ></el-col>
                </el-row>
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple" style="float: right">
                      <el-button>取消</el-button>
                    </div></el-col
                  >
                  <el-col :span="18"
                    ><div
                      class="grid-content bg-purple-light"
                      style="margin-left: 20px"
                    >
                      <el-button type="primary">确定</el-button>
                    </div></el-col
                  >
                </el-row>
              </div></el-tab-pane
            >
            <el-tab-pane label="角色管理" name="third">
              <div class="mav_tex">新增账户权限</div>
              <div class="power">
                <span
                  class="liMenu"
                  :class="idx == index ? 'hover' : ''"
                  @click="son(item, idx)"
                  v-for="(item, idx) in menu"
                  :key="idx"
                  >{{ item }}</span
                >
                <div class="input_use">
                  <span>账户名：</span>
                  <input type="text" />
                </div>
                <div class="input_jur">
                  <span>账户名：</span>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      {{ listDef
                      }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        v-for="(item, index) in list"
                        :key="index"
                      >
                        <span
                          @click="getlist(item)"
                          style="display: inline-block"
                          >{{ item }}</span
                        ></el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <el-button type="primary">确定</el-button>
              </div>
              <div class="mav_tex" style="margin-top: 40px">现有账户权限</div>
              <table class="tal">
                <thead>
                  <tr>
                    <th>userB</th>
                    <th class="list-acc">个人帐户</th>
                    <th class="list-jur">可读</th>
                    <th colspan="2">操作</th>
                  </tr>
                </thead>
                <tbody class="tal_body">
                  <tr>
                    <td>userB</td>
                    <td class="list_acc">公共帐户</td>
                    <td class="list-jur">可读</td>
                    <td>
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          更改权限<i
                            class="el-icon-arrow-down el-icon--right"
                          ></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>1</el-dropdown-item>
                          <el-dropdown-item>2</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                      <span>删除</span>
                    </td>
                  </tr>
                  <tr>
                    <td>userB</td>
                    <td>个人帐户</td>
                    <td>可读</td>
                    <td>
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          更改权限<i
                            class="el-icon-arrow-down el-icon--right"
                          ></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>1</el-dropdown-item>
                          <el-dropdown-item>2</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                      <span>删除</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"
              >定时任务补偿</el-tab-pane
            >
          </el-tabs>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Sect from "./section";
export default {
  components: { Sect },
  data() {
    return {
      menu: ["个人", "公共"],
      list: ["可上传", "可覆写/删除", "可管理"],
      listDef: "可读",
      index: 0,
      activeName: "first",
      textarea: "",
      radio: "1",
      input: "",
      setting: {
        data: {
          simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: 1,
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
                             {
                              name: "1.1",
                              open: true,
                              children: [
                                {
                                  name: "devops_tools-1.1.pom",
                                  open: true,
                                },
                                {
                                  name: "devops_tools-1.1.jar",
                                  open: true,
                                },
                              ],
                            },
                          ],
                        },
                        {name: "maven-metadata.xml",
                          open: true,}
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
  mounted() {
    $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
  },
  methods: {
    freshArea: function () {
      $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
    },
    son(item, idx) {
      this.index = idx;
    },
    get(index) {
      this.avctindex == index;
      console.log(index);
    },
    getlist(item) {
      this.listDef = item;
      console.log(1);
    },
  },
};
</script>

<style lang="less" src="../assets/css/mav.less">
</style>
<style>
@import "../assets/css/zTree/zTreeStyle/zTreeStyle.scss";

.box-title {
  border-radius: 3px 3px 0 0;
  background-color: #f5f5f5;
}
.box-title a {
  color: #2fa4e7;
  text-decoration: none;
  font-size: 14px;
  display: block;
  padding: 8px 15px;
  cursor: pointer;
}
.box-title .fa {
  float: right;
  line-height: 20px;
}
</style>