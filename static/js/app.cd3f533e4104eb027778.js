webpackJsonp([9],{"0IWZ":function(t,e){},"45lV":function(t,e){},"53ML":function(t,e){},"8vlb":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACYklEQVR4Xu2bz3HaQBTGfw8OJqe4BPuSjHIxqSC4Ao87cAdJB8EdxB3gDuggpIKIS8jkYlKB4WSfeJldi4kHEGLH0shavZ3hwADSft/787HfrkTvOOaBr8AVwjFtGMoCGPGGa9FffEP43AbcWxiVG0fAfWsiv8mAshCdoa2MfgbaCLAMsBKwHmBN0FSgxQyYDJoMmgyaDJoMtlgEeM0q8AOYo6QIKT1SHr1hMwbOygraayBgCaTAhI4HO5d3/v3OoTMGwPfmEqD8RRh5sCtSSZiHgGk6AVNJ6IcA3jJxGp4B15IwNAJewEDTS8AyIKQE/J7FI2cIfY64lVMWUWeA/qHPik8off9ywP+Pc0mYRENAFt2LZ0Cdvu8bkREw4w44CeiH0REQuggzAuLqAeFGjGWAZUBUMmglEOxFtrwHdPnojJJ4/gnuL4FbOoxZ+bM80GWxdoliJ2BJl0G8lliWxi6oO3ekOlzKe2965o5mZIDz/Zx7K1kKP8GZOB1fI9tFgCRI0dqgCQRM6TFwa/eCSG6tBWIhwMvVAZHcXgw9K5FcW7zkc42l7wscEsXcHqCM5QOXueCfHKKfgcvovbGohYDMDLnPmdmILjebSqC/uWDFqOxDnaUTAJwWbXaU3ciKym3f5+UTUJDGWfq7ra0iC+wluA7+bfkEZJIHDOkx9U7u2t11FpjyZcPsPHiyVXyxKgKqmGsl1zQC7JBUuDFRSSrWdVErASsBK4Fgb66ucq3kvtYDrAdYD7AeELpNXUkzquui1gR15s3Lt3VFoOb7Lu3h6ezx+SHCVYsyYYn6x+eH/wAosK3Crn5/bwAAAABJRU5ErkJggg=="},A6Hu:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),e.b=function(t){return new o(t.songid,t.songmid,t.songname,"http://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",t.interval,"",(e=t.singer,e.map(function(t){return t.name}).join("/")));var e};var s=n("Zrlr"),r=n.n(s),o=function t(e,n,s,o,i,a,l){r()(this,t),this.id=e,this.mId=n,this.name=s,this.img=o,this.duration=i,this.url=a,this.singer=l}},DOSW:function(t,e){},"Du/2":function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"e",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return a});var s="SET_SKIN",r="SHOW_PLAYER",o="CHANGE_SONG",i="SET_SONGS",a="REMOVE_SONG"},Gvbs:function(t,e){},H868:function(t,e,n){"use strict";var s=n("GQaK"),r={name:"scroll",props:{direction:{type:String,default:"vertical",validator:function(t){return"vertical"===t||"horizontal"===t}},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!0}},methods:{refresh:function(){this.bScroll&&this.bScroll.refresh()}},mounted:function(){var t=this;this.bScroll||(this.bScroll=new s.a(this.$refs.scroller,{scrollX:"horizontal"===this.direction,scrollY:"vertical"===this.direction,click:this.click,probeType:3}),this.listenScroll&&this.bScroll.on("scroll",function(e){t.$emit("scroll",e)}))},beforeDestroy:function(){!0===this.listenScroll&&this.bScroll.off("scroll"),this.bScroll=null}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"scroller",staticClass:"scroll-view"},[this._t("default")],2)},staticRenderFns:[]};var i=n("VU/8")(r,o,!1,function(t){n("lwuy")},"data-v-e083cbfe",null);e.a=i.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r=n("NYxO"),o=n("Dd8w"),i=n.n(o),a=n("Du/2"),l=n("hNqL"),c={name:"progress-bar",props:{progress:{type:Number,required:!0},disableButton:{type:Boolean,default:!1},disableClick:{type:Boolean,default:!0},disableDrag:{type:Boolean,default:!0}},computed:{progressWidth:function(){return{width:100*this.progress+"%"}},progressButtonOffsetLeft:function(){return this.progressBarWidth?{left:this.progress*this.progressBarWidth+"px"}:{left:this.progress+"px"}}},methods:{handleClick:function(t){if(!0!==this.disableClick){var e=this.$refs.progressBar.getBoundingClientRect().left,n=t.clientX-e,s=n/this.progressBarWidth;this.$refs.progress.style.width=100*s+"%",this.$refs.progressBtn.style.left=n+"px",this.$emit("click",s)}}},updated:function(){this.progressBarWidth||(this.progressBarWidth=this.$refs.progressBar.offsetWidth)},mounted:function(){var t=this,e=this.$refs.progressBar;if(this.progressBarWidth=e.offsetWidth,!0!==this.disableButton&&!0!==this.disableDrag){var n=this.$refs.progressBtn,s=0,r=0;n.addEventListener("touchstart",function(e){var n=e.touches[0];s=n.clientX,r=parseInt(n.target.style.left,10),t.$emit("dragStart")}),n.addEventListener("touchmove",function(n){n.preventDefault();var o=n.touches[0],i=o.clientX-s,a=r+i;a>e.offsetWidth?a=e.offsetWidth:a<0&&(a=0),o.target.style.left=a+"px",t.$refs.progress.style.width=a/t.progressBarWidth*100+"%",t.$emit("drag",a/t.progressBarWidth)}),n.addEventListener("touchend",function(){t.$emit("dragEnd")})}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:this.handleClick}},[e("div",{staticClass:"progress-load"}),this._v(" "),e("div",{ref:"progress",staticClass:"progress",style:this.progressWidth}),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!1===this.disableButton,expression:"disableButton === false"}],ref:"progressBtn",staticClass:"progress-button",style:this.progressButtonOffsetLeft})])},staticRenderFns:[]};var d=n("VU/8")(c,u,!1,function(t){n("yKqG")},"data-v-112d847e",null).exports,g={name:"mini-player",props:{showStatus:Boolean,playStatus:Boolean,song:Object,progress:Number},computed:{img:function(){return this.song.img?this.song.img:n("8vlb")},imgStyle:function(){var t={};return!0===this.playStatus?(t.webkitAnimationPlayState="running",t.animationPlayState="running"):(t.webkitAnimationPlayState="paused",t.animationPlayState="paused"),t},playButtonClass:function(){return!0===this.playStatus?"icon-pause":"icon-play"}},methods:{handleShow:function(){this.song.url&&this.$emit("showPlayer")},playOrPause:function(){this.song.url&&this.$emit("playOrPause")},handleNext:function(){this.song.url&&this.$emit("next")}},components:{ProgressBar:d}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"mini-translate"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showStatus,expression:"!showStatus"}],staticClass:"mini-player skin-mini-player",on:{click:t.handleShow}},[n("div",{staticClass:"player-img rotate",style:t.imgStyle},[n("img",{attrs:{src:t.img,alt:t.song.name}})]),t._v(" "),n("div",{staticClass:"player-center"},[n("div",{staticClass:"progress-wrapper"},[n("progress-bar",{attrs:{progress:t.progress,disableButton:!0}})],1),t._v(" "),n("span",{staticClass:"song"},[t._v("\n        "+t._s(t.song.name)+"\n      ")]),t._v(" "),n("span",{staticClass:"singer"},[t._v("\n        "+t._s(t.song.singer)+"\n      ")])]),t._v(" "),n("div",{staticClass:"player-right"},[n("i",{class:t.playButtonClass,on:{click:function(e){e.stopPropagation(),t.playOrPause(e)}}}),t._v(" "),n("i",{staticClass:"icon-next ml-10",on:{click:function(e){e.stopPropagation(),t.handleNext(e)}}})])])])},staticRenderFns:[]};var p=n("VU/8")(g,h,!1,function(t){n("RDnO")},"data-v-2c2860cd",null).exports,m=n("A6Hu"),C={name:"player",props:["currentIndex"],data:function(){return{playStatus:!1,currentTime:0,playProgress:0,currentPlayMode:0,toastShow:!1,toastContent:""}},computed:i()({song:function(){var t=this.$store.state.song;return t.url?(this.audioDOM&&(this.audioDOM.src=t.url,this.audioDOM.load()),t):new m.a(0,"","","",0,"","")},playBg:function(){return this.song.img?this.song.img:n("eBXX")},playButtonClass:function(){return!0===this.playStatus?"icon-pause":"icon-play"}},Object(r.c)(["showStatus"])),methods:i()({_startImgRotate:function(){-1===this.$refs.singerImg.className.indexOf("rotate")?this.$refs.singerImg.classList.add("rotate"):(this.$refs.singerImg.style.webkitAnimationPlayState="running",this.$refs.singerImg.style.animationPlayState="running")},_stopImgRotate:function(){this.$refs.singerImg.style.webkitAnimationPlayState="paused",this.$refs.singerImg.style.animationPlayState="paused"},handleLoad:function(t){this.$refs.playerBg.style.backgroundImage='url("'+t.currentTarget.src+'")'},playOrPause:function(){!1===this.playStatus?(void 0!==this.first||this.audioDOM.src||(this.audioDOM.src=this.song.url,this.first=!0),this.audioDOM.play(),this._startImgRotate(),this.playStatus=!0):(this.audioDOM.pause(),this._stopImgRotate(),this.playStatus=!1)},previous:function(){var t=this.$store.state.songs;if(t.length>0&&1!==t.length){var e=this.currentIndex;if(0===this.currentPlayMode)0===e?e=t.length-1:e-=1;else{if(1!==this.currentPlayMode)return void this.audioDOM.play();e=parseInt(Math.random()*t.length,10)}this.playProgress=0,this.changeCurrentSong(t[e]),this.$emit("changeCurrentIndex",e)}},next:function(){var t=this.$store.state.songs;if(t.length>0&&1!==t.length){var e=this.currentIndex;if(0===this.currentPlayMode)e===t.length-1?e=0:e+=1;else{if(1!==this.currentPlayMode)return void this.audioDOM.play();e=parseInt(Math.random()*t.length,10)}this.playProgress=0,this.changeCurrentSong(t[e]),this.$emit("changeCurrentIndex",e)}},changePlayMode:function(){var t=this;switch(this.currentPlayMode===this.playModes.length-1?this.currentPlayMode=0:this.currentPlayMode=this.currentPlayMode+1,this.currentPlayMode){case 0:this.toastShow=!0,this.toastContent="列表播放";break;case 1:this.toastShow=!0,this.toastContent="随机播放";break;case 2:this.toastShow=!0,this.toastContent="单曲循环"}setTimeout(function(){t.toastShow=!1},1e3)},click:function(t){if(this.audioDOM.duration>0){var e=this.audioDOM.duration*t;this.playProgress=t,this.currentTime=e,this.audioDOM.currentTime=e,this.audioDOM.play()}},drag:function(t){this.audioDOM.duration>0&&(this.audioDOM.pause(),this._stopImgRotate(),this.playStatus=!1,this.dragProgress=t)},dragEnd:function(){var t=this;if(this.audioDOM.duration>0){var e=this.audioDOM.duration*this.dragProgress;this.playProgress=this.dragProgress,this.currentTime=e,this.$nextTick(function(){t.audioDOM.currentTime=e,t.audioDOM.play(),t._startImgRotate(),t.playStatus=!0,t.dragProgress=0})}},hidePlayer:function(){this.show(!1)},showPlayer:function(){this.show(!0)},showPlayList:function(){this.$emit("showList",!0)}},Object(r.b)({show:a.e,changeCurrentSong:a.a})),filters:{getTime:function(t){t=Math.floor(t);var e=Math.floor(t/60);return e+":"+function(t){var e="00";t>0&&t<10?e="0"+t:t>=10&&(e=t);return e}(t-=60*e)}},created:function(){this.playModes=["list","shuffle","single"],this.dragProgress=0},mounted:function(){var t=this;this.audioDOM=this.$refs.audio,this.audioDOM.addEventListener("canplay",function(){t.audioDOM.play(),t._startImgRotate(),t.playStatus=!0},!1),this.audioDOM.addEventListener("timeupdate",function(){!0===t.playStatus&&(t.playProgress=t.audioDOM.currentTime/t.audioDOM.duration,t.currentTime=t.audioDOM.currentTime)},!1),this.audioDOM.addEventListener("ended",function(){t.$store.state.songs.length>1?t.next():2===t.currentPlayMode?t.audioDOM.play():(t.audioDOM.pause(),t._stopImgRotate(),t.playProgress=0,t.currentTime=0,t.playStatus=!1)},!1),this.audioDOM.addEventListener("error",function(){t.toastShow=!0,t.toastContent="加载歌曲出错！",setTimeout(function(){t.toastShow=!1},1e3)},!1);document.addEventListener("click",function e(){t.audioDOM.load(),document.removeEventListener("click",e,!0)},!0)},components:{MiniPlayer:p,ProgressBar:d,Toast:l.a}};var v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-container"},[n("transition",{attrs:{name:"player-rotate"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showStatus,expression:"showStatus"}],staticClass:"player"},[n("div",{staticClass:"header"},[n("span",{staticClass:"header-back",on:{click:t.hidePlayer}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("div",{staticClass:"header-title"},[t._v("\n          "+t._s(t.song.name)+"\n        ")])]),t._v(" "),n("div",{staticClass:"singer-top"},[n("div",{staticClass:"singer"},[n("div",{staticClass:"singer-name"},[t._v(t._s(t.song.singer))])])]),t._v(" "),n("div",{staticClass:"singer-middle"},[n("div",{ref:"singerImg",staticClass:"singer-img"},[n("img",{attrs:{src:t.playBg,alt:t.song.name},on:{load:t.handleLoad}})])]),t._v(" "),n("div",{staticClass:"singer-bottom"},[n("div",{staticClass:"controller-wrapper"},[n("div",{staticClass:"progress-wrapper"},[n("span",{staticClass:"current-time"},[t._v(t._s(t._f("getTime")(t.currentTime)))]),t._v(" "),n("div",{staticClass:"play-progress"},[n("progress-bar",{attrs:{progress:t.playProgress,disableClick:!1,disableDrag:!1},on:{click:t.click,drag:t.drag,dragEnd:t.dragEnd}})],1),t._v(" "),n("span",{staticClass:"total-time"},[t._v(t._s(t._f("getTime")(t.song.duration)))])]),t._v(" "),n("div",{staticClass:"play-wrapper"},[n("div",{staticClass:"play-model-button",on:{click:t.changePlayMode}},[n("i",{class:"icon-"+this.playModes[this.currentPlayMode]+"-play"})]),t._v(" "),n("div",{staticClass:"previous-button",on:{click:t.previous}},[n("i",{staticClass:"icon-previous"})]),t._v(" "),n("div",{staticClass:"play-button",on:{click:t.playOrPause}},[n("i",{class:t.playButtonClass})]),t._v(" "),n("div",{staticClass:"next-button",on:{click:t.next}},[n("i",{staticClass:"icon-next"})]),t._v(" "),n("div",{staticClass:"play-list-button",on:{click:t.showPlayList}},[n("i",{staticClass:"icon-play-list"})])])])]),t._v(" "),n("div",{ref:"playerBg",staticClass:"player-bg"}),t._v(" "),n("audio",{ref:"audio"})])]),t._v(" "),n("mini-player",{attrs:{song:t.song,progress:t.playProgress,showStatus:t.showStatus,playStatus:t.playStatus},on:{showPlayer:t.showPlayer,playOrPause:t.playOrPause,next:t.next}}),t._v(" "),n("toast",{attrs:{show:t.toastShow,content:t.toastContent}})],1)},staticRenderFns:[]};var f=n("VU/8")(C,v,!1,function(t){n("TfiQ")},"data-v-605790d4",null).exports,w=n("H868"),y={name:"player-list",props:{show:Boolean,currentIndex:Number},computed:i()({},Object(r.c)(["song","songs"])),methods:i()({hidePlayList:function(){this.$emit("showList",!1)},playSong:function(t,e){this.changeCurrentSong(t),this.hidePlayList(),this.$emit("changeCurrentIndex",e)},removeSong:function(t,e){this.song.id!==t&&(this.remove(t),e<this.currentIndex&&this.$emit("changeCurrentIndex",this.currentIndex-1))},enter:function(){this.$refs.scroll.refresh(),this.$refs.scroll.bScroll.scrollToElement(this.$refs["item"+this.currentIndex][0])}},Object(r.b)({changeCurrentSong:a.a,remove:a.b})),components:{Scroll:w.a},updated:function(){if(this.previousLength!==this.songs.length){this.previousLength=this.songs.length;for(var t=0;t<this.songs.length;t++)if(this.songs[t].id===this.song.id)return void this.$emit("changeCurrentIndex",t)}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-list"},[n("transition",{attrs:{name:"fade"},on:{enter:t.enter}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"play-list-bg",on:{click:t.hidePlayList}},[n("div",{staticClass:"play-list-wrap",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"play-list-head"},[n("span",{staticClass:"head-title"},[t._v("播放列表")]),t._v(" "),n("span",{staticClass:"close",on:{click:t.hidePlayList}},[t._v("关闭")])]),t._v(" "),n("div",{staticClass:"play-list"},[n("scroll",{ref:"scroll"},[n("div",t._l(t.songs,function(e,s){return n("div",{key:e.id,ref:"item"+s,refInFor:!0,staticClass:"play-list-item"},[n("div",{staticClass:"item-left"},[t._v(t._s(s+1<10?"0"+(s+1):s+1))]),t._v(" "),n("div",{staticClass:"item-right"},[n("div",{staticClass:"song",class:{current:e.id===t.song.id?"current":""},on:{click:function(n){t.playSong(e,s)}}},[n("span",{staticClass:"song-name"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"song-singer"},[t._v(t._s(e.singer))])]),t._v(" "),n("i",{staticClass:"icon-delete delete",on:{click:function(n){t.removeSong(e.id,s)}}})])])}))])],1)])])])],1)},staticRenderFns:[]};var A={name:"music-player",data:function(){return{currentIndex:0,playListShow:!1}},methods:{showList:function(t){this.playListShow=t},changeCurrentIndex:function(t){this.currentIndex=t}},components:{Player:f,PlayerList:n("VU/8")(y,k,!1,function(t){n("gq9I")},"data-v-4f551e54",null).exports}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-player"},[n("player",{attrs:{currentIndex:t.currentIndex},on:{changeCurrentIndex:t.changeCurrentIndex,showList:t.showList}}),t._v(" "),n("player-list",{attrs:{currentIndex:t.currentIndex,show:t.playListShow},on:{changeCurrentIndex:t.changeCurrentIndex,showList:t.showList}})],1)},staticRenderFns:[]},S=n("VU/8")(A,b,!1,null,null,null).exports,B=n("woOf"),F=n.n(B),M=n("mvHQ"),x=n.n(M),P={setSkin:function(t){window.localStorage.setItem("skin",t)},getSkin:function(){var t=window.localStorage.getItem("skin");return t||"mangoYellow"},setCurrentSong:function(t){window.localStorage.setItem("song",x()(t))},getCurrentSong:function(){var t=window.localStorage.getItem("song");return t?JSON.parse(t):{}},setSongs:function(t){window.localStorage.setItem("songs",x()(t))},getSongs:function(){var t=window.localStorage.getItem("songs");return t?JSON.parse(t):[]}},D={mangoYellow:{rootColor:"#333333",rootBgColor:"#F8F8FF",appHeaderColor:"#FFFFF0",appHeaderBgColor:"#FFA500",tabColor:"rgba(0, 0, 0, .7)",tabBgColor:"#FFFFFF",albumColor:"rgba(0, 0, 0, 0.6)",albumNameColor:"#333333",rankingWrapperBgColor:"#FFFFFF",rankingSingerColor:"rgba(0, 0, 0, 0.5)",searchBgColor:"#FFFFFF",searchBoxBgColor:"#FFFFFF",searchBoxWrapperBgColor:"#F8F8FF",searchTitleColor:"rgba(0, 0, 0, .7)",searchHotColor:"#000000",searchHotBorderColor:"rgba(0, 0, 0, .7)",searchResultBorderColor:"#E5E5E5",detailBgColor:"#F8F8FF",detailSongColor:"#000000",detailSingerColor:"rgba(0, 0, 0, 0.6)",miniPlayerBgColor:"#FFFFFF",miniImgBorderColor:"#EEEEEE",miniProgressBarBgColor:"rgba(0, 0, 0, 0.1)",miniRightColor:"#FFD700",miniSongColor:"#333333",activeColor:"#FFA500"},coolBlack:{rootColor:"#DDDDDD",rootBgColor:"#212121",appHeaderColor:"#FFD700",appHeaderBgColor:"transparent",tabColor:"#DDDDDD",tabBgColor:"transparent",albumColor:"rgba(221, 221, 221, 0.7)",albumNameColor:"#FFFFFF",rankingWrapperBgColor:"#333333",rankingSingerColor:"rgba(221, 221, 221, 0.7)",searchBgColor:"#212121",searchBoxBgColor:"#333333",searchBoxWrapperBgColor:"#212121",searchTitleColor:"#FFD700",searchHotColor:"#DDDDDD",searchHotBorderColor:"transparent",searchResultBorderColor:"transparent",detailBgColor:"#212121",detailSongColor:"#FFFFFF",detailSingerColor:"rgba(221, 221, 221, 0.7)",miniPlayerBgColor:"#333333",miniImgBorderColor:"rgba(221, 221, 221, 0.3)",miniProgressBarBgColor:"rgba(0, 0, 0, 0.3)",miniRightColor:"#FFD700",miniSongColor:"#FFFFFF",activeColor:"#FFD700"}};D.kuGouBlue=F()({},D.mangoYellow,{appHeaderBgColor:"#2CA2F9",activeColor:"#2CA2F9",searchTitleColor:"#2CA2F9",miniRightColor:"#2CA2F9"}),D.netBaseRed=F()({},D.mangoYellow,{appHeaderBgColor:"#D43C33",activeColor:"#D43C33",searchTitleColor:"#D43C33",miniRightColor:"#D43C33"}),D.qqGreen=F()({},D.mangoYellow,{appHeaderBgColor:"#31C27C",activeColor:"#31C27C",searchTitleColor:"#31C27C",miniRightColor:"#31C27C"});var I=function(t){var e=function(t){return t?"\n    .skin-root {\n      color: "+t.rootColor+";\n      background-color: "+t.rootBgColor+";\n    }\n    .skin-app-header {\n      color: "+t.appHeaderColor+";\n      background-color: "+t.appHeaderBgColor+";\n    }\n    .skin-music-tab {\n      color: "+t.tabColor+";\n      background-color: "+t.tabBgColor+";\n    }\n    .skin-recommend-title {\n      color: "+t.activeColor+";\n    }\n    .skin-album-wrapper {\n      color: "+t.albumColor+";\n    }\n    .skin-album-wrapper .album-name {\n      color: "+t.albumNameColor+"\n    }\n    .skin-ranking-wrapper {\n      background-color: "+t.rankingWrapperBgColor+";\n    }\n    .skin-ranking-wrapper .ranking-title {\n      color: "+t.albumNameColor+";\n    }\n    .skin-ranking-wrapper .singer {\n      color: "+t.rankingSingerColor+";\n    }\n    .skin-music-singers .choose {\n      color: "+t.activeColor+" !important;\n      border: 1px solid "+t.activeColor+" !important;\n    }\n    .skin-search {\n      background-color: "+t.searchBgColor+";\n    }\n    .skin-search .title {\n      color: "+t.searchTitleColor+";\n    }\n    .skin-search .hot-item {\n      border: 1px solid "+t.searchHotBorderColor+";\n      color: "+t.searchHotColor+";\n      background-color: "+t.searchBoxBgColor+";\n    }\n    .skin-search-box {\n      background-color: "+t.searchBoxBgColor+";\n    }\n    .skin-search-box input {\n      color: "+t.rootColor+";\n    }\n    .skin-search-box-wrapper {\n      background-color: "+t.searchBoxWrapperBgColor+";\n    }\n    .skin-search-result .singer {\n      color: "+t.albumColor+";\n    }\n    .skin-search-result .singer-wrapper .singer {\n      color: "+t.rootColor+";\n    }\n    .skin-search-result .singer-wrapper .info {\n      color: "+t.albumColor+";\n    }\n    .skin-search-result .album-wrapper,\n    .skin-search-result .singer-wrapper,\n    .skin-search-result .song-wrapper {\n      border-top: 1px solid "+t.searchResultBorderColor+";\n    }\n    .skin-detail-wrapper {\n      background-color: "+t.detailBgColor+";\n    }\n    .skin-detail-wrapper .song-name {\n      color: "+t.detailSongColor+";\n    }\n    .skin-detail-wrapper .song-singer {\n      color: "+t.detailSingerColor+";\n    }\n    .skin-mini-player {\n      background-color: "+t.miniPlayerBgColor+";\n    }\n    .skin-mini-player .player-img {\n      border: 2px solid "+t.miniImgBorderColor+";\n    }\n    .skin-mini-player .progress-bar {\n      background-color: "+t.miniProgressBarBgColor+" !important;\n    }\n    .skin-mini-player .progress {\n      background-color: "+t.miniRightColor+" !important;\n    }\n    .skin-mini-player .player-right {\n      color: "+t.miniRightColor+";\n    }\n    .skin-mini-player .song {\n      color: "+t.miniSongColor+";\n    }\n    .skin-mini-player .singer {\n      color: "+t.detailSingerColor+";\n    }\n    .music-album, .ranking-info, .music-singer {\n      background-color: "+t.detailBgColor+";\n    }\n    .router-link.router-link-active {\n      color: "+t.activeColor+" !important;\n      border-bottom: 2px solid "+t.activeColor+";\n    }\n  ":""}(t),n=document.getElementById("skin"),s=document.createElement("style");s.id="skin",s.type="text/css",s.innerHTML=e,n?document.head.replaceChild(s,n):document.head.appendChild(s)};I(D[P.getSkin()]);var E={name:"skin",props:{show:Boolean},data:function(){return{skins:[{key:"mangoYellow",name:"芒果黄",color:"#FFD700"},{key:"coolBlack",name:"炫酷黑",color:"#212121"},{key:"kuGouBlue",name:"酷狗蓝",color:"#2CA2F9"},{key:"netBaseRed",name:"网易红",color:"#D43C33"},{key:"qqGreen",name:"QQ绿",color:"#31C27C"}]}},computed:i()({},Object(r.c)({currentSkin:"skin"})),methods:i()({setCurrentSkin:function(t){I(D[t]),this.setSkin(t),this.$emit("close")}},Object(r.b)({setSkin:a.c}))},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"pop"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"music-skin"},[n("div",{staticClass:"header"},[t._v("\n      皮肤中心\n      "),n("span",{staticClass:"cancel",on:{click:function(e){t.$emit("close")}}},[t._v("取消")])]),t._v(" "),n("div",{staticClass:"skin-title"},[t._v("推荐皮肤")]),t._v(" "),n("div",{staticClass:"skin-container"},t._l(t.skins,function(e){return n("div",{key:e.key,staticClass:"skin-wrapper",on:{click:function(n){t.setCurrentSkin(e.key)}}},[n("div",{staticClass:"skin-color",style:{backgroundColor:e.color,boxShadow:"0 0 3px "+e.color}},[n("i",{directives:[{name:"show",rawName:"v-show",value:e.key===t.currentSkin,expression:"skin.key === currentSkin"}],staticClass:"icon-right"})]),t._v(" "),n("div",[t._v(t._s(e.name))])])}))])])},staticRenderFns:[]};var L=n("VU/8")(E,O,!1,function(t){n("45lV")},"data-v-9cdddbdc",null).exports,H={name:"music-menu",props:{show:Boolean},data:function(){return{skinShow:!1}},methods:{close:function(){this.$emit("closeMenu")},showSetting:function(t){var e=this;this.close(),setTimeout(function(){e.skinShow=t},300)}},components:{Skin:L}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"bottom-container",on:{click:t.close}},[n("div",{staticClass:"bottom-wrapper"},[n("div",{staticClass:"item",on:{click:function(e){t.showSetting(!0)}}},[t._v("\n          皮肤中心\n        ")]),t._v(" "),n("div",{staticClass:"item-close",on:{click:t.close}},[t._v("\n          关闭\n        ")])])])]),t._v(" "),n("skin",{attrs:{show:t.skinShow},on:{close:function(e){t.showSetting(!1)}}})],1)},staticRenderFns:[]};var _=n("VU/8")(H,W,!1,function(t){n("Gvbs")},"data-v-0dcf80f4",null).exports,R=n("Vpqn"),T=n.n(R),U=(n("DOSW"),n("xE29"),n("53ML"),{name:"root",data:function(){return{logo:T.a,menuShow:!1}},components:{MusicPlayer:S,MusicMenu:_}}),Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root skin-root"},[n("header",{staticClass:"app-header skin-app-header"},[n("i",{staticClass:"icon-et-more app-more",on:{click:function(e){t.menuShow=!0}}}),t._v(" "),n("img",{staticClass:"app-logo",attrs:{src:t.logo,alt:"logo"}}),t._v(" "),n("h1",{staticClass:"app-title"},[t._v("Mango Music")])]),t._v(" "),n("nav",{staticClass:"music-tab skin-music-tab"},[n("div",{staticClass:"tab-item"},[n("router-link",{staticClass:"router-link",attrs:{to:"/recommend"}},[n("span",[t._v("推荐")])])],1),t._v(" "),n("div",{staticClass:"tab-item"},[n("router-link",{staticClass:"router-link",attrs:{to:"/ranking"}},[n("span",[t._v("排行榜")])])],1),t._v(" "),n("div",{staticClass:"tab-item"},[n("router-link",{staticClass:"router-link",attrs:{to:"/singer"}},[n("span",[t._v("歌手")])])],1),t._v(" "),n("div",{staticClass:"tab-item"},[n("router-link",{staticClass:"router-link",attrs:{to:"/search"}},[n("span",[t._v("搜索")])])],1)]),t._v(" "),n("div",{staticClass:"music-view"},[n("router-view")],1),t._v(" "),n("music-player"),t._v(" "),n("music-menu",{attrs:{show:t.menuShow},on:{closeMenu:function(e){t.menuShow=!1}}})],1)},staticRenderFns:[]};var V={name:"app",components:{Root:n("VU/8")(U,Q,!1,function(t){n("PMpi")},"data-v-ad5737d0",null).exports}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("root")],1)},staticRenderFns:[]};var N=n("VU/8")(V,q,!1,function(t){n("0IWZ")},null,null).exports,G=n("/ocq");s.a.use(G.a);var K=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"EGCN"))},Y=function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"Mz+C"))},X=function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"2cKQ"))},J=[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"recommend",component:K,children:[{path:":albumId",name:"AlbumInfo",component:Y}]},{path:"/ranking",name:"ranking",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"pscE"))},children:[{path:":rankingId",name:"RankingInfo",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"+Zin"))}}]},{path:"/singer",name:"singer",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"rNLI"))},children:[{path:":singerId",name:"SingerInfo",component:X}]},{path:"/search",name:"search",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"d1Q5"))},children:[{path:"album/:albumId",name:"SearchAlbum",component:Y},{path:"singer/:singerId",name:"SearchSinger",component:X}]},{path:"*",name:"NotMatch",component:K}],Z="/";Z="/";var j,z=new G.a({base:Z,routes:J}),$={skin:P.getSkin(),showStatus:!1,song:P.getCurrentSong(),songs:P.getSongs()},tt=n("bOdI"),et=n.n(tt),nt=(j={},et()(j,a.c,function(t,e){t.skin=e,P.setSkin(e)}),et()(j,a.e,function(t,e){t.showStatus=e}),et()(j,a.a,function(t,e){t.song=e,P.setCurrentSong(e)}),et()(j,a.d,function(t,e){t.songs=e,P.setSongs(e)}),et()(j,a.b,function(t,e){var n=t.songs.filter(function(t){return t.id!==e});t.songs=n,P.setSongs(n)}),j);s.a.use(r.a);var st=[],rt=new r.a.Store({state:$,mutations:nt,plugins:st}),ot=n("cTzj"),it=n.n(ot);s.a.use(r.a),s.a.use(it.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:z,store:rt,template:"<App/>",components:{App:N}})},PMpi:function(t,e){},RDnO:function(t,e){},TfiQ:function(t,e){},Vpqn:function(t,e){t.exports="data:image/png;base64,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"},"Zxg/":function(t,e){},eBXX:function(t,e,n){t.exports=n.p+"static/img/play_bg.473725c.jpg"},gq9I:function(t,e){},hNqL:function(t,e,n){"use strict";var s={name:"toast",props:{show:Boolean,content:String}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"toast-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"toast-wrapper"},[e("div",{staticClass:"toast-content"},[this._v("\n      "+this._s(this.content)+"\n    ")])])])},staticRenderFns:[]};var o=n("VU/8")(s,r,!1,function(t){n("Zxg/")},"data-v-cf884aba",null);e.a=o.exports},lwuy:function(t,e){},xE29:function(t,e){},yKqG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cd3f533e4104eb027778.js.map