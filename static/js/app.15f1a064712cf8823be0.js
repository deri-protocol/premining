webpackJsonp([4],{"01Rx":function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("+RKF"),o={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[this.isReloadAlive?e("router-view"):this._e()],1)},staticRenderFns:[]};var r=t("C7Lr")({name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isReloadAlive:!0}},methods:{reload:function(){this.isReloadAlive=!1,this.$nextTick(function(){this.isReloadAlive=!0})}}},o,!1,function(n){t("01Rx")},null,null).exports,a=t("IhWa");i.a.use(a.a);var c=[{path:"/",name:"pools",component:function(n){return t.e(1).then(function(){var e=[t("BA7O")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/premining/:network/:id/:address",name:"premining",component:function(n){return t.e(0).then(function(){var e=[t("iZvp")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/comingsoon",name:"comingsoon",component:function(n){return t.e(2).then(function(){var e=[t("eQav")];n.apply(null,e)}.bind(this)).catch(t.oe)}}],p=new a.a({routes:c}),s=(t("rk9e"),t("tdM/"),t("hcrA"),t("Tf9m")),u=t.n(s);i.a.config.productionTip=!1,i.a.prototype.$axios=u.a,new i.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},rk9e:function(n,e){}},["NHnr"]);