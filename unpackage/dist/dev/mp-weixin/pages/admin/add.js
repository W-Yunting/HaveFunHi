"use strict";
const common_vendor = require("../../common/vendor.js");
const Category = common_vendor.Es.importObject("Category");
const _sfc_main = {
  data() {
    return {
      categories: [],
      info: {
        "name": "\u601D\u853B\u751C\u54C188\u6298\u4EE3\u4E0B\xB7\u5C0F\u7A0B\u5E8F\u9009\u6B3E",
        "remain_count": "99",
        "is_on_sale": true,
        "is_new": true,
        "is_hot": true,
        "goods_thumb": "//w-yunting.github.io/images/circle.jpg",
        "category_id": "63e9feffe1a35c8785916496"
      },
      index: 1
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    categoryChange(e) {
      const cates = JSON.parse(JSON.stringify(this.categories));
      this.info.category_id = cates[e.detail.value];
      this.index = e.detail.value;
    },
    onEditorReady() {
      common_vendor.index.createSelectorQuery().select("#editor").context((res) => {
        this.editorCtx = res.context;
      }).exec();
    },
    undo() {
      this.editorCtx.undo();
    },
    getCategories() {
      Category.getList().then((res) => {
        console.log(res);
        this.categories = res.data;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.info.name,
    b: common_vendor.o(($event) => $data.info.name = $event.detail.value),
    c: common_vendor.t($data.categories[$data.index].name),
    d: common_vendor.o((...args) => $options.categoryChange && $options.categoryChange(...args)),
    e: $data.index,
    f: $data.categories,
    g: $data.info.remain_count,
    h: common_vendor.o(($event) => $data.info.remain_count = $event.detail.value),
    i: common_vendor.o((...args) => $options.onEditorReady && $options.onEditorReady(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/gamersky/Documents/HBuilderProjects/HaveFunHi/pages/admin/add.vue"]]);
wx.createPage(MiniProgramPage);
