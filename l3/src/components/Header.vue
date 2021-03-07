<template>
<div>
<header class="a-c j-start flex">
    <div class="top_logo mar_lef"></div>
    <div class="top_list j-end mar_rig" style="width:100%">
      <ul>
        <li>开通滤镜</li>
        <li class="top_change">内部组件文档</li>
        <li>组件反馈</li>
        <li>运营数据</li>
        <li>我的权限</li>
      </ul>
    </div>
  </header>
    <div class="public a-c flex">
      <div class="pub_text mar_lef font-weight">内部组件仓库</div>
      <div class="pub_ann flex a-c">
        <div class="pub_item"></div>
        <div class="pub_anTex1 font-weight">公告：</div>
        <div class="pub_anTex2">新版本上线，使用问题及建议请向leoliuhe反馈</div>
      </div>
      <div class="pub_btn flex a-c j-end mar_rig">
        <div class="btn pub_btn1 a-c mar_rig">仓库自助迁移</div>
        <div class="btn pub_btn2">获取访问token</div>
      </div>
    </div>
</div>
  
</template>

<script>
export default {
  el: "app",
  data() {
    return {};
  },
};
</script>
<styl lang="less" src="../assets/css/header.less">
</styl>