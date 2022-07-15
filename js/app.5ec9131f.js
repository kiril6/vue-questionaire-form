(function(){"use strict";var t={223:function(t,e,i){var o=i(6369),s=(i(6699),function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("Form",{attrs:{title:t.formTitle}},[e("ol",t._l(t.data.questions,(function(i){return e("li",{key:i.id},[e("rating"===i.type||"age"===i.type?"RadioGroup":"Input",{tag:"component",attrs:{item:i,title:i.label,getValue:t.getInputValue,type:"rating"===i.type?"radio":"age"===i.type?"square":"password"===i.type?"password":"email"===i.type?"email":"",subQuestions:i.sub_questions,isRequired:i.validation.required,validateEmail:t.emailIsInvalid?"the email is not in correct format":"",validatePassword:t.passwordIsInvalid?"please use at least one capital and one numeric character":"",readOnly:t.readOnly,radioButtonIsInvalid:t.radioButtonNotChoosed}})],1)})),0),e("Button",{attrs:{title:"Submit"},on:{"button-click":function(e){return t.submit()}}}),t.checkForm?e("div",{class:t.submitMessage.includes("Success")?"cmp-form__result cmp-form__result--success":"cmp-form__result cmp-form__result--error",domProps:{textContent:t._s(t.submitMessage)}}):t._e(),t.answeredQuestions.length>0?e("Modal",{attrs:{date:t.showDate()}},[e("ol",t._l(t.answeredQuestions,(function(i,o){return e("li",{key:o},[e("div",{domProps:{textContent:t._s(i.title)}}),e("div",{domProps:{textContent:t._s("- "+i.inputValue)}})])})),0)]):t._e()],1)],1)}),n=[],r=i(2482),a=i(452),l=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"cmp-form"},[e("h2",{staticClass:"cmp-form__title",domProps:{textContent:t._s(t.title)}}),t._t("default")],2)},u=[],d=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let p=class extends a.w3{constructor(...t){super(...t),(0,r.Z)(this,"title",void 0)}};d([(0,a.fI)()],p.prototype,"title",void 0),p=d([a.wA],p);var c=p,f=c,v=i(1001),m=(0,v.Z)(f,l,u,!1,null,null,null),h=m.exports,y=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{class:"square"===t.type?"cmp-radio-group cmp-radio-group--square":"cmp-radio-group"},[e("h5",{staticClass:"cmp-radio-group__title",class:t.isRequired?"cmp-radio-group--required":"",domProps:{textContent:t._s(t.title)}}),"radio"===t.type?[t._l([1,2,3,4,5],(function(i,o){return e("div",{key:o},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{id:"Radio"+i,name:"Radios",type:"radio",disabled:t.readOnly},domProps:{value:i,checked:t._q(t.inputValue,i)},on:{change:[function(e){t.inputValue=i},function(e){t.onChange(e),t.getValue({title:t.title,inputValue:t.inputValue})}]}}),e("label",{class:t.radioButtonIsInvalid?"cmp-radio-group--invalid":"",attrs:{for:"Radio"+i},domProps:{textContent:t._s(i)}})])})),t._l(t.subQuestions,(function(i){return e("div",{key:i.questions.id,staticClass:"cmp-radio-group__textarea"},[i.values.indexOf(t.inputValue)>-1?e("textarea",{attrs:{rows:"2",id:i.values,placeholder:i.questions[0].label}}):t._e()])}))]:t._e(),"square"===t.type?t._l(t.ageGroup,(function(i,o){return e("div",{key:o},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{id:"Square"+(o+1),name:"Squares",type:"radio",disabled:t.readOnly},domProps:{value:i,checked:t._q(t.inputValue,i)},on:{change:[function(e){t.inputValue=i},function(e){t.onChange(e),t.getValue({title:t.title,inputValue:t.inputValue})}]}}),e("label",{class:0===o?"first":7===o?"last":"",attrs:{for:"Square"+(o+1)},domProps:{textContent:t._s(i)}})])})):t._e()],2)},_=[],g=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let b=class extends a.w3{constructor(...t){super(...t),(0,r.Z)(this,"title",void 0),(0,r.Z)(this,"type",void 0),(0,r.Z)(this,"getValue",void 0),(0,r.Z)(this,"isRequired",void 0),(0,r.Z)(this,"subQuestions",void 0),(0,r.Z)(this,"radioButtonIsInvalid",void 0),(0,r.Z)(this,"inputValue",0),(0,r.Z)(this,"showComment",!1),(0,r.Z)(this,"readOnly",!1),(0,r.Z)(this,"ageGroup",["<20","20-29","30-39","40-49","50-59","60-69","70-79","80+"])}onChange(t){let e=t.target.value;this.inputValue=e,0!==this.inputValue?this.readOnly=!0:this.readOnly=!1}};g([(0,a.fI)()],b.prototype,"title",void 0),g([(0,a.fI)()],b.prototype,"type",void 0),g([(0,a.fI)({type:Function})],b.prototype,"getValue",void 0),g([(0,a.fI)()],b.prototype,"isRequired",void 0),g([(0,a.fI)()],b.prototype,"subQuestions",void 0),g([(0,a.fI)()],b.prototype,"radioButtonIsInvalid",void 0),b=g([a.wA],b);var w=b,I=w,V=(0,v.Z)(I,y,_,!1,null,"38986ce0",null),O=V.exports,P=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"cmp-input"},[e("h5",{staticClass:"cmp-input__title",class:t.isRequired?"cmp-input--required":"",domProps:{textContent:t._s(t.title)}}),"email"===t.type?[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"cmp-input__input",attrs:{type:"email",readonly:t.readOnly["email"]},domProps:{value:t.inputValue},on:{blur:function(e){return t.getValue({title:t.title,inputValue:t.inputValue})},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),e("div",{staticClass:"cmp-input__validate",domProps:{textContent:t._s(t.validateEmail)}})]:t._e(),"password"===t.type?[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"cmp-input__input",attrs:{type:"password",readonly:t.readOnly["password"]},domProps:{value:t.inputValue},on:{blur:function(e){return t.getValue({title:t.title,inputValue:t.inputValue})},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),e("div",{staticClass:"cmp-input__validate",domProps:{textContent:t._s(t.validatePassword)}})]:t._e()],2)},x=[],Z=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let C=class extends a.w3{constructor(...t){super(...t),(0,r.Z)(this,"title",void 0),(0,r.Z)(this,"type",void 0),(0,r.Z)(this,"getValue",void 0),(0,r.Z)(this,"isRequired",void 0),(0,r.Z)(this,"readOnly",void 0),(0,r.Z)(this,"validateEmail",void 0),(0,r.Z)(this,"validatePassword",void 0),(0,r.Z)(this,"inputValue","")}setReadOnly(){this.inputValue.length>0&&(this.readOnly=!0)}};Z([(0,a.fI)()],C.prototype,"title",void 0),Z([(0,a.fI)()],C.prototype,"type",void 0),Z([(0,a.fI)({type:Function})],C.prototype,"getValue",void 0),Z([(0,a.fI)()],C.prototype,"isRequired",void 0),Z([(0,a.fI)()],C.prototype,"readOnly",void 0),Z([(0,a.fI)()],C.prototype,"validateEmail",void 0),Z([(0,a.fI)()],C.prototype,"validatePassword",void 0),C=Z([a.wA],C);var q=C,R=q,j=(0,v.Z)(R,P,x,!1,null,"58d1355a",null),k=j.exports,B=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"cmp-button"},[e("button",{staticClass:"cmp-button__button",attrs:{id:"btnSubmit"},domProps:{textContent:t._s(t.title)},on:{click:function(e){return t.$emit("button-click")}}})])},E=[],N=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let D=class extends a.w3{constructor(...t){super(...t),(0,r.Z)(this,"title",void 0)}};N([(0,a.fI)()],D.prototype,"title",void 0),D=N([a.wA],D);var F=D,A=F,M=(0,v.Z)(A,B,E,!1,null,"01167473",null),Q=M.exports,S=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"cmp-modal"},[t._t("default"),e("span",{staticClass:"cmp-modal__date",domProps:{textContent:t._s(t.date)}})],2)},T=[],G=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Y=class extends a.w3{constructor(...t){super(...t),(0,r.Z)(this,"date",void 0)}};G([(0,a.fI)()],Y.prototype,"date",void 0),Y=G([a.wA],Y);var $=Y,H=$,J=(0,v.Z)(H,S,T,!1,null,"2ec2f5f0",null),X=J.exports,z=JSON.parse('{"questions":[{"id":1,"type":"rating","label":"How do you feel today?","validation":{"required":true},"sub_questions":[{"values":["1","2"],"questions":[{"id":3,"type":"comment","label":"How can we improve?","validation":{"required":false}}]},{"values":["4","5"],"questions":[{"id":4,"type":"comment","label":"Tell us what you loved!","validation":{"required":false}}]}]},{"id":5,"type":"age","label":"Your age","validation":{"required":false},"sub_questions":[]},{"id":6,"type":"password","label":"Your password","validation":{"required":true},"sub_questions":[]},{"id":7,"type":"email","label":"Your email","validation":{"required":true},"sub_questions":[]}]}'),K=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let L=class extends a.w3{constructor(...t){super(...t),(0,r.Z)(this,"formTitle","Customer Alliance Form"),(0,r.Z)(this,"data",z),(0,r.Z)(this,"checkForm",!1),(0,r.Z)(this,"submitMessage",""),(0,r.Z)(this,"passwordIsInvalid",!1),(0,r.Z)(this,"emailIsInvalid",!1),(0,r.Z)(this,"radioButtonNotChoosed",!1),(0,r.Z)(this,"someValue",""),(0,r.Z)(this,"answeredQuestions",[]),(0,r.Z)(this,"readOnly",{email:!1,password:!1})}mounted(){console.log(this.data.questions)}showDate(){const t=new Date;return"DATE OF EXPERIENCE "+t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()}getInputValue(t){const e=/(?:[A-Z].*[0-9])|(?:[0-9].*[A-Z])/,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(t.title.includes("password")&&t.inputValue.length>0){if(!e.test(t.inputValue))return void(this.passwordIsInvalid=!0);this.passwordIsInvalid=!1,this.readOnly["password"]=!0}else if(t.title.includes("email")&&t.inputValue.length>0){if(!i.test(t.inputValue))return void(this.emailIsInvalid=!0);this.emailIsInvalid=!1,this.readOnly["email"]=!0}else t.title.includes("feel")&&t.inputValue.length>0?this.radioButtonNotChoosed=!1:this.radioButtonNotChoosed=!0;t.inputValue.length>0&&!this.answeredQuestions.filter((e=>e.title===t.title)).length&&this.answeredQuestions.push(t)}submit(){this.checkForm=!0,(this.emailIsInvalid||this.passwordIsInvalid||this.radioButtonNotChoosed)&&(this.submitMessage="Error - check error messages for correctness of the form"),this.answeredQuestions.length>=2?(this.radioButtonNotChoosed=!1,this.submitMessage="Success - form has been sent successfully"):this.submitMessage="Error - please complete the form"}};L=K([(0,a.wA)({components:{Form:h,RadioGroup:O,Input:k,Button:Q,Modal:X}})],L);var U=L,W=U,tt=(0,v.Z)(W,s,n,!1,null,null,null),et=tt.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(et)}).$mount("#app")}},e={};function i(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,o,s,n){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],n=t[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&n||r>=n)&&Object.keys(i.O).every((function(t){return i.O[t](o[l])}))?o.splice(l--,1):(a=!1,n<r&&(r=n));if(a){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,s,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,n,r=o[0],a=o[1],l=o[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(l)var d=l(i)}for(e&&e(o);u<r.length;u++)n=r[u],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},o=self["webpackChunkvue_questionaire"]=self["webpackChunkvue_questionaire"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(223)}));o=i.O(o)})();
//# sourceMappingURL=app.5ec9131f.js.map