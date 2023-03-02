"use strict";
const common_vendor = require("../../common/vendor.js");
const GetGoodsList = common_vendor.Es.importObject("GetGoodsList");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      goodsList: []
    };
  },
  onLoad() {
    this.getGoodsList();
    this.getSwiper();
  },
  methods: {
    async getGoodsList() {
      try {
        const list = await GetGoodsList.getList();
        this.list = list;
        console.log(list);
      } catch {
      }
    },
    async getSwiper() {
      try {
        const swipers = await GetGoodsList.getSwiper();
        this.swipers = swipers;
        console.log(swipers);
      } catch {
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/gamersky/Documents/HBuilderProjects/HaveFunHi/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
