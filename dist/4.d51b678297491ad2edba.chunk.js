webpackJsonp([4],{20:function(e,t,s){var r=s(8)(s(445),s(453),null,null);r.options.__file="D:\\gitcode\\my-iview\\src\\views\\password.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] password.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},445:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){var e=this;return{formCustom:{passwd:"",passwdCheck:"",age:""},ruleCustom:{passwd:[{validator:function(t,s,r){""===s?r(new Error("请输入密码")):(""!==e.formCustom.passwdCheck&&e.$refs.formCustom.validateField("passwdCheck"),r())},trigger:"blur"}],passwdCheck:[{validator:function(t,s,r){""===s?r(new Error("请再次输入密码")):s!==e.formCustom.passwd?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}],age:[{validator:function(e,t,s){if(!t)return s(new Error("年龄不能为空"));setTimeout(function(){Number.isInteger(t)?t<18?s(new Error("必须年满18岁")):s():s(new Error("请输入数字值"))},1e3)},trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("提交成功!"):t.$Message.error("表单验证失败!")})},handleReset:function(e){this.$refs[e].resetFields()}}}},453:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inner"},[s("Form",{ref:"formCustom",attrs:{model:e.formCustom,rules:e.ruleCustom,"label-width":80}},[s("Form-item",{attrs:{label:"密码",prop:"passwd"}},[s("Input",{attrs:{type:"password"},model:{value:e.formCustom.passwd,callback:function(t){e.formCustom.passwd=t},expression:"formCustom.passwd"}})],1),e._v(" "),s("Form-item",{attrs:{label:"确认密码",prop:"passwdCheck"}},[s("Input",{attrs:{type:"password"},model:{value:e.formCustom.passwdCheck,callback:function(t){e.formCustom.passwdCheck=t},expression:"formCustom.passwdCheck"}})],1),e._v(" "),s("Form-item",{attrs:{label:"年龄",prop:"age"}},[s("Input",{attrs:{type:"text",number:""},model:{value:e.formCustom.age,callback:function(t){e.formCustom.age=t},expression:"formCustom.age"}})],1),e._v(" "),s("Form-item",[s("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("formCustom")}}},[e._v("提交")]),e._v(" "),s("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:function(t){e.handleReset("formCustom")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});