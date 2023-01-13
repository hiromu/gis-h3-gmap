(function(){var t={357:function(t,e,r){"use strict";r(6992),r(8674),r(9601),r(7727);var i=r(144),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"map"}},[r("GmapMap",{ref:"gmap",staticStyle:{width:"100%",height:"100%"},attrs:{center:{lat:35.681236,lng:139.767125},zoom:9}},[t.activeMarker?r("GmapInfoWindow",{attrs:{position:t.activeMarker.position},on:{closeclick:function(e){t.activeMarker=null}}},[r("div",{domProps:{innerHTML:t._s(t.activeMarker.info)}})]):t._e(),t._l(t.markers,(function(e,i){return r("GmapMarker",{key:i,attrs:{label:e.label,position:e.position,icon:e.icon,clickable:!0},on:{click:function(r){t.activeMarker=e}}})}))],2)],1),r("div",{attrs:{id:"menu"}},[r("form",[r("div",{staticClass:"form-group"},[r("label",[t._v(" Resolution: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.resolution,expression:"resolution"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.resolution=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"4"}},[t._v("4")]),r("option",{attrs:{value:"5"}},[t._v("5")]),r("option",{attrs:{value:"6"}},[t._v("6")]),r("option",{attrs:{value:"7"}},[t._v("7")]),r("option",{attrs:{value:"8"}},[t._v("8")])])]),r("div",{staticClass:"form-group"},[r("label",[t._v(" Region: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.region,expression:"region"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.region=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"832e29fffffffff"}},[t._v("茨城県北部 (832e29fffffffff)")]),r("option",{attrs:{value:"832e74fffffffff"}},[t._v("群馬県・栃木県南部 (832e74fffffffff)")]),r("option",{attrs:{value:"832e75fffffffff"}},[t._v("長野県東部 (832e75fffffffff)")]),r("option",{attrs:{value:"832f58fffffffff"}},[t._v("房総半島・三浦半島 (832f58fffffffff)")]),r("option",{attrs:{value:"832f59fffffffff"}},[t._v("静岡市・伊豆半島 (832f59fffffffff)")]),r("option",{attrs:{value:"832f5afffffffff"}},[t._v("東京都心・千葉県 (832f5afffffffff)")]),r("option",{attrs:{value:"832f5bfffffffff"}},[t._v("神奈川県・多摩地方 (832f5bfffffffff")])])]),r("div",{staticClass:"form-group"},[r("label",[t._v(" Subregion: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.subregion,expression:"subregion"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.subregion=e.target.multiple?r:r[0]}}},[8==t.resolution?t._l(t.subregions,(function(e,i){return r("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])})):t._e()],2)]),r("div",{staticClass:"form-group"},[r("label",[t._v(" Segment: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.stats,expression:"stats"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.stats=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"人口総数"}},[t._v("人口総数")]),r("option",{attrs:{value:"人口総数男"}},[t._v("人口総数男")]),r("option",{attrs:{value:"人口総数女"}},[t._v("人口総数女")]),r("option",{attrs:{value:"０〜１４歳人口総数"}},[t._v("０〜１４歳人口総数")]),r("option",{attrs:{value:"０〜１４歳人口男"}},[t._v("０〜１４歳人口男")]),r("option",{attrs:{value:"０〜１４歳人口女"}},[t._v("０〜１４歳人口女")]),r("option",{attrs:{value:"１５歳以上人口総数"}},[t._v("１５歳以上人口総数")]),r("option",{attrs:{value:"１５歳以上人口男"}},[t._v("１５歳以上人口男")]),r("option",{attrs:{value:"１５歳以上人口女"}},[t._v("１５歳以上人口女")]),r("option",{attrs:{value:"１５〜６４歳人口総数"}},[t._v("１５〜６４歳人口総数")]),r("option",{attrs:{value:"１５〜６４歳人口男"}},[t._v("１５〜６４歳人口男")]),r("option",{attrs:{value:"１５〜６４歳人口女"}},[t._v("１５〜６４歳人口女")]),r("option",{attrs:{value:"２０歳以上人口総数"}},[t._v("２０歳以上人口総数")]),r("option",{attrs:{value:"２０歳以上人口男"}},[t._v("２０歳以上人口男")]),r("option",{attrs:{value:"２０歳以上人口女"}},[t._v("２０歳以上人口女")]),r("option",{attrs:{value:"６５歳以上人口総数"}},[t._v("６５歳以上人口総数")]),r("option",{attrs:{value:"６５歳以上人口男"}},[t._v("６５歳以上人口男")]),r("option",{attrs:{value:"６５歳以上人口女"}},[t._v("６５歳以上人口女")]),r("option",{attrs:{value:"７５歳以上人口総数"}},[t._v("７５歳以上人口総数")]),r("option",{attrs:{value:"７５歳以上人口男"}},[t._v("７５歳以上人口男")]),r("option",{attrs:{value:"７５歳以上人口女"}},[t._v("７５歳以上人口女")]),r("option",{attrs:{value:"外国人人口総数"}},[t._v("外国人人口総数")]),r("option",{attrs:{value:"外国人人口男"}},[t._v("外国人人口男")]),r("option",{attrs:{value:"外国人人口女"}},[t._v("外国人人口女")]),r("option",{attrs:{value:"世帯総数"}},[t._v("世帯総数")]),r("option",{attrs:{value:"一般世帯数"}},[t._v("一般世帯数")]),r("option",{attrs:{value:"１人世帯の一般世帯数"}},[t._v("１人世帯の一般世帯数")]),r("option",{attrs:{value:"２人世帯の一般世帯数"}},[t._v("２人世帯の一般世帯数")]),r("option",{attrs:{value:"３人世帯の一般世帯数"}},[t._v("３人世帯の一般世帯数")]),r("option",{attrs:{value:"４人世帯の一般世帯数"}},[t._v("４人世帯の一般世帯数")]),r("option",{attrs:{value:"５人世帯の一般世帯数"}},[t._v("５人世帯の一般世帯数")]),r("option",{attrs:{value:"６人世帯の一般世帯数"}},[t._v("６人世帯の一般世帯数")]),r("option",{attrs:{value:"７人以上世帯の一般世帯数"}},[t._v("７人以上世帯の一般世帯数")]),r("option",{attrs:{value:"親族のみの一般世帯数"}},[t._v("親族のみの一般世帯数")]),r("option",{attrs:{value:"核家族の一般世帯数"}},[t._v("核家族の一般世帯数")]),r("option",{attrs:{value:"核家族以外の一般世帯数"}},[t._v("核家族以外の一般世帯数")]),r("option",{attrs:{value:"６歳未満世帯員のいる一般世帯数"}},[t._v("６歳未満世帯員のいる一般世帯数")]),r("option",{attrs:{value:"６５歳以上世帯員のいる一般世帯数"}},[t._v("６５歳以上世帯員のいる一般世帯数")]),r("option",{attrs:{value:"世帯主の年齢が２０〜２９歳の１人世帯の一般世帯数"}},[t._v("世帯主の年齢が２０〜２９歳の１人世帯の一般世帯数")]),r("option",{attrs:{value:"高齢単身の一般世帯数"}},[t._v("高齢単身の一般世帯数")]),r("option",{attrs:{value:"高齢夫婦のみの一般世帯数"}},[t._v("高齢夫婦のみの一般世帯数")])])])]),r("button",{staticClass:"btn btn-success mt-2",staticStyle:{width:"100%"},attrs:{disabled:t.disableButton},on:{click:t.onSubmit}},[t._v(" Submit ")]),r("hr"),r("form",[r("div",{staticClass:"form-group"},[r("label",[t._v(" Mart CSV: ")]),r("input",{attrs:{type:"file"},on:{change:t.onMartChange}}),r("br"),r("div",{staticClass:"mt-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.martFilter,expression:"martFilter"}],attrs:{type:"checkbox",value:"Open"},domProps:{checked:Array.isArray(t.martFilter)?t._i(t.martFilter,"Open")>-1:t.martFilter},on:{change:function(e){var r=t.martFilter,i=e.target,o=!!i.checked;if(Array.isArray(r)){var n="Open",a=t._i(r,n);i.checked?a<0&&(t.martFilter=r.concat([n])):a>-1&&(t.martFilter=r.slice(0,a).concat(r.slice(a+1)))}else t.martFilter=o}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Open")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.martFilter,expression:"martFilter"}],attrs:{type:"checkbox",value:"Closed"},domProps:{checked:Array.isArray(t.martFilter)?t._i(t.martFilter,"Closed")>-1:t.martFilter},on:{change:function(e){var r=t.martFilter,i=e.target,o=!!i.checked;if(Array.isArray(r)){var n="Closed",a=t._i(r,n);i.checked?a<0&&(t.martFilter=r.concat([n])):a>-1&&(t.martFilter=r.slice(0,a).concat(r.slice(a+1)))}else t.martFilter=o}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Closed")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.martFilter,expression:"martFilter"}],attrs:{type:"checkbox",value:"Archived"},domProps:{checked:Array.isArray(t.martFilter)?t._i(t.martFilter,"Archived")>-1:t.martFilter},on:{change:function(e){var r=t.martFilter,i=e.target,o=!!i.checked;if(Array.isArray(r)){var n="Archived",a=t._i(r,n);i.checked?a<0&&(t.martFilter=r.concat([n])):a>-1&&(t.martFilter=r.slice(0,a).concat(r.slice(a+1)))}else t.martFilter=o}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Archived")])])]),r("div",{staticClass:"form-group"},[r("label",[t._v(" Collection CSV: ")]),r("input",{attrs:{type:"file"},on:{change:t.onCollectionChange}}),r("br"),r("div",{staticClass:"mt-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionFilter,expression:"collectionFilter"}],attrs:{type:"checkbox",value:"Open"},domProps:{checked:Array.isArray(t.collectionFilter)?t._i(t.collectionFilter,"Open")>-1:t.collectionFilter},on:{change:function(e){var r=t.collectionFilter,i=e.target,o=!!i.checked;if(Array.isArray(r)){var n="Open",a=t._i(r,n);i.checked?a<0&&(t.collectionFilter=r.concat([n])):a>-1&&(t.collectionFilter=r.slice(0,a).concat(r.slice(a+1)))}else t.collectionFilter=o}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Open")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionFilter,expression:"collectionFilter"}],attrs:{type:"checkbox",value:"Closed"},domProps:{checked:Array.isArray(t.collectionFilter)?t._i(t.collectionFilter,"Closed")>-1:t.collectionFilter},on:{change:function(e){var r=t.collectionFilter,i=e.target,o=!!i.checked;if(Array.isArray(r)){var n="Closed",a=t._i(r,n);i.checked?a<0&&(t.collectionFilter=r.concat([n])):a>-1&&(t.collectionFilter=r.slice(0,a).concat(r.slice(a+1)))}else t.collectionFilter=o}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Closed")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionFilter,expression:"collectionFilter"}],attrs:{type:"checkbox",value:"Archived"},domProps:{checked:Array.isArray(t.collectionFilter)?t._i(t.collectionFilter,"Archived")>-1:t.collectionFilter},on:{change:function(e){var r=t.collectionFilter,i=e.target,o=!!i.checked;if(Array.isArray(r)){var n="Archived",a=t._i(r,n);i.checked?a<0&&(t.collectionFilter=r.concat([n])):a>-1&&(t.collectionFilter=r.slice(0,a).concat(r.slice(a+1)))}else t.collectionFilter=o}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Archived")])])])])])])},n=[],a=(r(7327),r(1539),r(2222),r(9947)),l=r(6292),s=r(3087),c=r(2329),u=(r(8309),r(1703),function(){function t(e){(0,s.Z)(this,t),this.name=e.name,this.latitude=parseFloat(e.latitude),this.longitude=parseFloat(e.longitude)}return(0,c.Z)(t,[{key:"label",get:function(){return""}},{key:"position",get:function(){return{lat:this.latitude,lng:this.longitude}}},{key:"color",get:function(){throw new Error("Not implemented")}},{key:"icon",get:function(){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0",fillColor:this.color,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}}},{key:"info",get:function(){return"<p><b>"+this.name+"</b></p>"}}]),t}()),f=r(3806),v=r(5937),p=(r(6699),r(2023),function(t){(0,f.Z)(r,t);var e=(0,v.Z)(r);function r(t){var i;return(0,s.Z)(this,r),i=e.call(this,t),i.id=parseInt(t.id),i.address=t.address,i.status=parseInt(t.status),i}return(0,c.Z)(r,[{key:"color",get:function(){if(1==this.status)return"#C7243A";if(0==this.status)return"#F6D4D8";if(2==this.status)return"#EDAD0B";throw new Error("Unknown status: "+this.status)}},{key:"info",get:function(){return"<p><b>"+this.name+"</b><br />"+this.address+"</p>"}},{key:"filter",value:function(t){return 1==this.status?t.includes("Open"):0==this.status?t.includes("Closed"):2==this.status&&t.includes("Archived")}}]),r}(u)),m=function(t){(0,f.Z)(r,t);var e=(0,v.Z)(r);function r(t){var i;return(0,s.Z)(this,r),i=e.call(this,t),i.id=parseInt(t.id),i.address=t.address,i.status=parseInt(t.status),i.max_location_box_size=parseInt(t.max_location_box_size),i}return(0,c.Z)(r,[{key:"color",get:function(){if(1==this.status)return"#009250";if(0==this.status)return"#C6EDDB";if(2==this.status)return"#0086AB";throw new Error("Unknown status: "+this.status)}},{key:"info",get:function(){return"<p><b>"+this.name+"</b><br />"+this.address+"</p>"}},{key:"filter",value:function(t){return 1==this.status?t.includes("Open"):0==this.status?t.includes("Closed"):2==this.status&&t.includes("Archived")}}]),r}(u),d=r(3562),h={name:"app",data:function(){return{resolution:"6",region:"832f5afffffffff",subregion:null,stats:"人口総数",kml:null,marts:[],collections:[],martFilter:["Open"],collectionFilter:["Open"],activeMarker:null}},mounted:function(){this.onSubmit()},computed:{subregions:function(){return(0,a.vI)(this.region,4)},disableButton:function(){var t=this;return 8==this.resolution&&0==this.subregions.filter((function(e){return e==t.subregion})).length},markers:function(){var t=this;return this.marts.filter((function(e){return e.filter(t.martFilter)})).concat(this.collections.filter((function(e){return e.filter(t.collectionFilter)})))}},methods:{onSubmit:function(){var t=this,e=8==this.resolution?this.subregion:this.region,r=location.href+"/data/"+e+"/"+this.stats+"_"+this.resolution+".kml";this.$refs.gmap.$mapPromise.then((function(e){null!==t.kml&&t.kml.setMap(null),t.kml=new google.maps.KmlLayer({map:e,url:r}),t.kml.setMap(e)}))},loadFile:function(t,e){var r=t.target.files[0];if(r){var i=d();i.on("data",e);var o=new FileReader;o.onload=function(t){i.write(t.target.result)},o.readAsText(r)}},onMartChange:function(t){var e=this;this.marts=[],this.loadFile(t,(function(t){e.marts.push(new p(t))}))},onCollectionChange:function(t){var e=this;this.collections=[],this.loadFile(t,(function(t){e.collections.push(new m(t))}))}}},_=h,g=r(1001),b=(0,g.Z)(_,o,n,!1,null,null,null),y=b.exports;i.Z.config.productionTip=!1,i.Z.use(l,{load:{key:"AIzaSyAT8jfo6wpzXcgHbis_GlC87rNDz5aIzQU",libraries:"places"}}),new i.Z({render:function(t){return t(y)}}).$mount("#app")},2361:function(){},4616:function(){}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,i,o,n){if(!i){var a=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],n=t[u][2];for(var l=!0,s=0;s<i.length;s++)(!1&n||a>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[s])}))?i.splice(s--,1):(l=!1,n<a&&(a=n));if(l){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,o,n]}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,n,a=i[0],l=i[1],s=i[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var u=s(r)}for(e&&e(i);c<a.length;c++)n=a[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},i=self["webpackChunkgis_kml_gmap"]=self["webpackChunkgis_kml_gmap"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(357)}));i=r.O(i)})();
//# sourceMappingURL=app-legacy.25c111c5.js.map