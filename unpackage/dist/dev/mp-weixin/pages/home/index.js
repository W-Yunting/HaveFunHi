"use strict";
const common_vendor = require("../../common/vendor.js");
const GoodsList = () => "../../common/GoodsList/index.js";
const GetGoodsList = common_vendor.Es.importObject("GetGoodsList");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      goodsList: [],
      swipers: [],
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  onLoad() {
  },
  methods: {
    async getSwiper() {
      try {
        const swipers = await GetGoodsList.getSwiper();
        this.swipers = swipers.data;
        console.log(swipers);
      } catch {
      }
    }
  },
  components: {
    GoodsList
  }
};
if (!Array) {
  const _component_goods_list = common_vendor.resolveComponent("goods-list");
  _component_goods_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swipers, (item, index, i0) => {
      return {
        a: item.goods_thumb,
        b: "swiper" + index
      };
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/gamersky/Documents/HBuilderProjects/HaveFunHi/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
