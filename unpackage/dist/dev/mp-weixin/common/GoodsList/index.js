"use strict";
const common_vendor = require("../vendor.js");
const GetGoodsList = common_vendor.Es.importObject("GetGoodsList");
const _sfc_main = {
  props: {
    params: Object
  },
  data() {
    return {
      list: [],
      loading: true
    };
  },
  mounted() {
  },
  methods: {
    async getList() {
      this.loading = true;
      const params = this.params;
      try {
        const list = await GetGoodsList.getList(params);
        this.list = list.data;
        this.loading = false;
        console.log("list", this.list);
      } catch {
        this.loading = false;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (good, k0, i0) => {
      return {
        a: good.goods_thumb,
        b: common_vendor.t(good.name)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/gamersky/Documents/HBuilderProjects/HaveFunHi/common/GoodsList/index.vue"]]);
wx.createComponent(Component);
