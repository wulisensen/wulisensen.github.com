webpackJsonp([1],{171:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(417),o=r.n(a);t.default={components:{FormC:o.a}}},172:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{formValidate:{name:"",mail:"",city:"",gender:"",interest:[],date:"",time:"",desc:""},ruleValidate:{name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],city:[{required:!0,message:"请选择城市",trigger:"change"}],gender:[{required:!0,message:"请选择性别",trigger:"change"}],interest:[{required:!0,type:"array",min:1,message:"至少选择一个爱好",trigger:"change"},{type:"array",max:2,message:"最多选择两个爱好",trigger:"change"}],date:[{required:!0,type:"date",message:"请选择日期",trigger:"change"}],time:[{required:!0,type:"date",message:"请选择时间",trigger:"change"}],desc:[{required:!0,message:"请输入个人介绍",trigger:"blur"},{type:"string",min:20,message:"介绍不能少于20字",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("提交成功!"):t.$Message.error("表单验证失败!")})},handleReset:function(e){this.$refs[e].resetFields()}}}},18:function(e,t,r){r(414);var a=r(8)(r(171),r(418),"data-v-07b0b6f4",null);a.options.__file="D:\\gitcode\\my-iview\\src\\views\\f.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] f.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},414:function(e,t){},417:function(e,t,r){var a=r(8)(r(172),r(419),null,null);a.options.__file="D:\\gitcode\\my-iview\\src\\views\\form_rule.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] form_rule.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},418:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"f"},[r("FormC")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},419:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[r("Form-item",{attrs:{label:"姓名",prop:"name"}},[r("Input",{attrs:{placeholder:"请输入姓名"},model:{value:e.formValidate.name,callback:function(t){e.formValidate.name=t},expression:"formValidate.name"}})],1),e._v(" "),r("Form-item",{attrs:{label:"邮箱",prop:"mail"}},[r("Input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.formValidate.mail,callback:function(t){e.formValidate.mail=t},expression:"formValidate.mail"}})],1),e._v(" "),r("Form-item",{attrs:{label:"城市",prop:"city"}},[r("Select",{attrs:{placeholder:"请选择所在地"},model:{value:e.formValidate.city,callback:function(t){e.formValidate.city=t},expression:"formValidate.city"}},[r("Option",{attrs:{value:"beijing"}},[e._v("北京市")]),e._v(" "),r("Option",{attrs:{value:"shanghai"}},[e._v("上海市")]),e._v(" "),r("Option",{attrs:{value:"shenzhen"}},[e._v("深圳市")])],1)],1),e._v(" "),r("Form-item",{attrs:{label:"选择日期"}},[r("Row",[r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{prop:"date"}},[r("Date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formValidate.date,callback:function(t){e.formValidate.date=t},expression:"formValidate.date"}})],1)],1),e._v(" "),r("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[e._v("-")]),e._v(" "),r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{prop:"time"}},[r("Time-picker",{attrs:{type:"time",placeholder:"选择时间"},model:{value:e.formValidate.time,callback:function(t){e.formValidate.time=t},expression:"formValidate.time"}})],1)],1)],1)],1),e._v(" "),r("Form-item",{attrs:{label:"性别",prop:"gender"}},[r("Radio-group",{model:{value:e.formValidate.gender,callback:function(t){e.formValidate.gender=t},expression:"formValidate.gender"}},[r("Radio",{attrs:{label:"male"}},[e._v("男")]),e._v(" "),r("Radio",{attrs:{label:"female"}},[e._v("女")])],1)],1),e._v(" "),r("Form-item",{attrs:{label:"爱好",prop:"interest"}},[r("Checkbox-group",{model:{value:e.formValidate.interest,callback:function(t){e.formValidate.interest=t},expression:"formValidate.interest"}},[r("Checkbox",{attrs:{label:"吃饭"}}),e._v(" "),r("Checkbox",{attrs:{label:"睡觉"}}),e._v(" "),r("Checkbox",{attrs:{label:"跑步"}}),e._v(" "),r("Checkbox",{attrs:{label:"看电影"}})],1)],1),e._v(" "),r("Form-item",{attrs:{label:"介绍",prop:"desc"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入..."},model:{value:e.formValidate.desc,callback:function(t){e.formValidate.desc=t},expression:"formValidate.desc"}})],1),e._v(" "),r("Form-item",[r("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("formValidate")}}},[e._v("提交")]),e._v(" "),r("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:function(t){e.handleReset("formValidate")}}},[e._v("重置")])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});