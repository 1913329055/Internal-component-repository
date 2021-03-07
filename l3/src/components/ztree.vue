<template>
  <div id="areaTree">
    <div class="tree-box">
      <div class="zTreeDemoBackground left">
        <ul id="treeDemo" class="ztree"></ul>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/js/jquery.ztree.core.min.js";
import "../assets/js/jquery.ztree.excheck.min.js";
export default {
  name: "zTree",
  data: function () {
    return {
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
                            }
                          ],
                        },
                        {
                             name: "maven-metadata.xml",
                      open: true,
                        }
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
           name: "archetype-catalog.xml",
           open:false
        }
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

<style>
@import "../assets/css/zTree/zTreeStyle/zTreeStyle.scss";
#areaTree {
  border: 1px solid #e5e5e5;
  margin-bottom: 2px;
  border-radius: 4px;
  overflow: hidden;
}
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
