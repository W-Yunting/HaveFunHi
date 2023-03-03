"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    add() {
      common_vendor.index.navigateTo({
        url: "/pages/admin/add"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.add && $options.add(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/gamersky/Documents/HBuilderProjects/HaveFunHi/pages/account/account.vue"]]);
wx.createPage(MiniProgramPage);
