parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"icpy":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("mongoose")),r=new t.default.Schema({email:String,password:String,displayName:String,avatar:String,colors:{bg:String,front:String}});r.virtual("id").get(function(){return this._id}),r.set("toJSON",{virtuals:!0,versionKey:!1,transform:function(e,t){return delete t._id,delete t.password,t}});var i=t.default.model("User",r);exports.default=i;
},{}],"Iwez":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function s(e){try{i(r.next(e))}catch(t){a(t)}}function u(e){try{i(r.throw(e))}catch(t){a(t)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,u)}i((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("bcrypt")),o=n(require("../models/user")),a=n(require("jsonwebtoken")),s=function(n,s){return e(void 0,void 0,void 0,function(){var e,u,i;return t(this,function(t){switch(t.label){case 0:if(!n.body.email||!n.body.password)return[2,s.sendStatus(400)];t.label=1;case 1:return t.trys.push([1,6,,7]),[4,o.default.findOne({email:n.body.email}).exec()];case 2:return(e=t.sent())?[4,r.default.compare(n.body.password,e.password)]:[3,4];case 3:return t.sent()?(u=a.default.sign({email:n.body.email,password:n.body.password},process.env.SECRET_KEY),s.cookie("jwt",u,{httpOnly:!0}).status(200).json(e)):s.sendStatus(401),[3,5];case 4:s.sendStatus(404),t.label=5;case 5:return[3,7];case 6:return i=t.sent(),console.log(i),s.sendStatus(500),[3,7];case 7:return[2]}})})};exports.default=s;
},{"../models/user":"icpy"}],"qkzG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,t){t.clearCookie("jwt").sendStatus(200)};exports.default=e;
},{}],"8k8p":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function u(e){try{i(r.next(e))}catch(t){o(t)}}function s(e){try{i(r.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,s)}i((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=(a=u.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(s){o=[6,s],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("bcrypt")),a=n(require("jsonwebtoken")),o=n(require("../models/user")),u=function(n,u){return e(void 0,void 0,void 0,function(){var e,s,i,c,l;return t(this,function(t){switch(t.label){case 0:e=n.cookies.jwt,t.label=1;case 1:return t.trys.push([1,6,,7]),s=a.default.verify(e,process.env.SECRET_KEY),i=s.email,c=s.password,[4,o.default.findOne({email:i}).exec()];case 2:return(l=t.sent())?[4,r.default.compare(c,l.password)]:[3,4];case 3:return t.sent()?u.json(l):u.sendStatus(401),[3,5];case 4:u.sendStatus(404),t.label=5;case 5:return[3,7];case 6:return t.sent(),u.sendStatus(401),[3,7];case 7:return[2]}})})};exports.default=u;
},{"../models/user":"icpy"}],"LS8+":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("mongoose")),r=new t.default.Schema({text:String,user:{type:t.default.Schema.Types.ObjectId,ref:"User"},sentAt:Date});r.virtual("id").get(function(){return this._id}),r.set("toJSON",{virtuals:!0,versionKey:!1,transform:function(e,t){return delete t._id,t}});var s=t.default.model("Message",r);exports.default=s;
},{}],"dGME":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(u,a){function o(e){try{s(r.next(e))}catch(t){a(t)}}function l(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,l)}s((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,u,a,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(u=2&a[0]?r.return:a[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,a[1])).done)return u;switch(r=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(u=(u=o.trys).length>0&&u[u.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){o.label=a[1];break}if(6===a[0]&&o.label<u[1]){o.label=u[1],u=a;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(a);break}u[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(l){a=[6,l],r=0}finally{n=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("moment")),u=n(require("../models/message")),a=function(n,a){return e(void 0,void 0,void 0,function(){var e,o,l,s,i,c,f,h;return t(this,function(t){switch(t.label){case 0:return e=n.payload,[4,u.default.where("sentAt").lt(r.default(e).utc().toDate()).sort("-sentAt").populate("user").cursor()];case 1:o=t.sent(),l=[],t.label=2;case 2:return[4,o.next()];case 3:return null===(s=t.sent())?[3,4]:(i=r.default(s.sentAt).utc(),c=l[l.length-1],(f=c&&r.default(c.sentAt).utc())&&i.isBefore(f,"day")?[3,4]:(l.push(s),[3,2]));case 4:return h=0===l.length?{isEnd:!0}:{messages:l.reverse()},a.send({type:"FETCH_MESSAGES",payload:h}),[2]}})})};exports.default=a;
},{"../models/message":"LS8+"}],"rIiH":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(u,o){function a(e){try{s(r.next(e))}catch(t){o(t)}}function i(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}s((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,u,o,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(u=2&o[0]?r.return:o[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,o[1])).done)return u;switch(r=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(u=(u=a.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){a.label=o[1];break}if(6===o[0]&&a.label<u[1]){a.label=u[1],u=o;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(o);break}u[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(i){o=[6,i],r=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("moment")),u=n(require("../models/message")),o=function(n){return e(void 0,void 0,void 0,function(){var e,o,a,i,s;return t(this,function(t){switch(t.label){case 0:return[4,u.default.find({}).sort("-sentAt").populate("user").cursor()];case 1:e=t.sent(),o=[],t.label=2;case 2:return[4,e.next()];case 3:return null===(a=t.sent())?[3,4]:i&&r.default(a.sentAt).utc().isBefore(r.default(i.sentAt).utc(),"day")?[3,4]:(o.push(a),i=a,[3,2]);case 4:return s=0===o.length?{isEnd:!0}:{messages:o.reverse()},n.emit("init",s),[2]}})})};exports.default=o;
},{"../models/message":"LS8+"}],"nygL":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function u(e){try{l(r.next(e))}catch(t){a(t)}}function i(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,i)}l((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("../models/message")),o=function(n,o){return e(void 0,void 0,void 0,function(){var e,a,u,i;return t(this,function(t){switch(t.label){case 0:return e=n.payload,a=e.text,u=e.userId,[4,r.default.create({text:a,user:u,sentAt:new Date})];case 1:return[4,t.sent().populate("user").execPopulate()];case 2:return i=t.sent(),o.send({type:"NEW_MESSAGE",payload:i}),[2]}})})};exports.default=o;
},{"../models/message":"LS8+"}],"7QCb":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))(function(n,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(u,s)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var o,r,n,i,u={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(n=(n=u.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){u.label=i[1];break}if(6===i[0]&&u.label<n[1]){u.label=n[1],n=i;break}if(n&&u.label<n[2]){u.label=n[2],u.ops.push(i);break}n[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(s){i=[6,s],r=0}finally{o=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=o(require("body-parser")),n=o(require("cookie-parser")),i=o(require("cors")),u=o(require("dotenv")),s=o(require("express")),c=require("http"),l=o(require("mongoose")),a=o(require("socket.io")),f=o(require("./routes/login")),d=o(require("./routes/logout")),p=o(require("./routes/verifyToken")),v=o(require("./socket/fetchMessages")),h=o(require("./socket/init")),g=o(require("./socket/sendMessage"));u.default.config();var y,b=process.env.port||5e3;y="development"===process.env.NODE_ENV?"mongodb://localhost/chat":"mongodb://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_URL,console.log(y);try{l.default.connect(y,{useNewUrlParser:!0,useUnifiedTopology:!0})}catch(w){console.log(w)}var _=s.default(),k=c.createServer(_),q=a.default(k,{origins:"http://localhost:1234"});_.use(i.default({origin:"http://localhost:1234",credentials:!0})),_.use(r.default.json()),_.use(n.default()),_.post("/login",f.default),_.get("/logout",d.default),_.get("/verifyToken",p.default),q.on("connection",function(o){return e(void 0,void 0,void 0,function(){return t(this,function(r){return"development"===process.env.NODE_ENV&&console.log("New socket connected: "+o.id),h.default(o),o.on("message",function(r){return e(void 0,void 0,void 0,function(){return t(this,function(e){switch(r.type){case"SEND_MESSAGE":g.default(r,o);break;case"FETCH_MESSAGES":v.default(r,o)}return[2]})})}),"development"===process.env.NODE_ENV&&o.on("disconnect",function(){return console.log("Socket disconnected: "+o.id)}),[2]})})}),k.listen(b,function(){return console.log("Server started on port "+b)});
},{"./routes/login":"Iwez","./routes/logout":"qkzG","./routes/verifyToken":"8k8p","./socket/fetchMessages":"dGME","./socket/init":"rIiH","./socket/sendMessage":"nygL"}]},{},["7QCb"], null)
//# sourceMappingURL=/index.js.map