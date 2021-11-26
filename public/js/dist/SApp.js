(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name))Object.defineProperty(exports,name,{enumerable:true,get:getter})};__webpack_require__.r=function(exports){if("undefined"!==typeof Symbol&&Symbol.toStringTag)Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(1&mode)value=__webpack_require__(value);if(8&mode)return value;if(4&mode&&"object"===typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=8)})({8:function(module){(function(global,factory){true?module.exports=factory():void 0})(0,function(){"use strict";var defaults={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:false,hoverpause:true,keyboard:true,swipeThreshold:80,dragThreshold:120,perTouch:false,touchRatio:.5,touchAngle:45,animationDuration:400,rewindDuration:800,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function warn(msg){console.error("[Glide warn]: "+msg)}var _typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"===typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};var classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}return target};var get=function get(object,property,receiver){if(null===object)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);if(null===parent)return;else return get(parent,property,receiver)}else if("value"in desc)return desc.value;else{var getter=desc.get;if(void 0===getter)return;return getter.call(receiver)}};var inherits=function(subClass,superClass){if("function"!==typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass};var possibleConstructorReturn=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return call&&("object"===typeof call||"function"===typeof call)?call:self};function toInt(value){return parseInt(value)}function isString(value){return"string"===typeof value}function isObject(value){var type="undefined"===typeof value?"undefined":_typeof(value);return"function"===type||"object"===type&&!!value}function isNumber(value){return"number"===typeof value}function isFunction(value){return"function"===typeof value}function isUndefined(value){return"undefined"===typeof value}function isArray(value){return value.constructor===Array}function mount(glide,extensions,events){var components={};for(var name in extensions)if(isFunction(extensions[name]))components[name]=extensions[name](glide,components,events);else warn("Extension must be a function");for(var _name in components)if(isFunction(components[_name].mount))components[_name].mount();return components}function define(obj,prop,definition){Object.defineProperty(obj,prop,definition)}function sortKeys(obj){return Object.keys(obj).sort().reduce(function(r,k){r[k]=obj[k];return r[k],r},{})}function mergeOptions(defaults,settings){var options=_extends({},defaults,settings);if(settings.hasOwnProperty("classes")){options.classes=_extends({},defaults.classes,settings.classes);if(settings.classes.hasOwnProperty("direction"))options.classes.direction=_extends({},defaults.classes.direction,settings.classes.direction)}return options}var EventsBus=function(){function EventsBus(){var events=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,EventsBus);this.events=events;this.hop=events.hasOwnProperty}createClass(EventsBus,[{key:"on",value:function(event,handler){if(isArray(event))for(var i=0;i<event.length;i++)this.on(event[i],handler);if(!this.hop.call(this.events,event))this.events[event]=[];var index=this.events[event].push(handler)-1;return{remove:function(){delete this.events[event][index]}}}},{key:"emit",value:function(event,context){if(isArray(event))for(var i=0;i<event.length;i++)this.emit(event[i],context);if(!this.hop.call(this.events,event))return;this.events[event].forEach(function(item){item(context||{})})}}]);return EventsBus}();var Glide$2=function(){function Glide(selector){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};classCallCheck(this,Glide);this._c={};this._e=new EventsBus;this.disabled=false;this.selector=selector;this.settings=mergeOptions(defaults,options);this.index=this.settings.startAt}createClass(Glide,[{key:"mount",value:function(){var extensions=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._e.emit("mount.before");if(isObject(extensions))this._c=mount(this,extensions,this._e);else warn("You need to provide a object on `mount()`");this._e.emit("mount.after");return this}},{key:"update",value:function(){var settings=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.settings=_extends({},this.settings,settings);if(settings.hasOwnProperty("startAt"))this.index=settings.startAt;this._e.emit("update");return this}},{key:"go",value:function(pattern){this._c.Run.make(pattern);return this}},{key:"move",value:function(distance){this._c.Transition.disable();this._c.Move.make(distance);return this}},{key:"destroy",value:function(){this._e.emit("destroy");return this}},{key:"play",value:function(){var interval=arguments.length>0&&void 0!==arguments[0]?arguments[0]:false;if(interval)this.settings.autoplay=interval;this._e.emit("play");return this}},{key:"pause",value:function(){this._e.emit("pause");return this}},{key:"disable",value:function(){this.disabled=true;return this}},{key:"enable",value:function(){this.disabled=false;return this}},{key:"on",value:function(event,handler){this._e.on(event,handler);return this}},{key:"isType",value:function(name){return this.settings.type===name}},{key:"settings",get:function(){return this._o},set:function(o){if(isObject(o))this._o=o;else warn("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(i){this._i=toInt(i)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(status){this._d=!!status}}]);return Glide}();var Run=function(Glide,Components,Events){var Run={mount:function(){this._o=false},make:function(move){var _this=this;if(!Glide.disabled){Glide.disable();this.move=move;Events.emit("run.before",this.move);this.calculate();Events.emit("run",this.move);Components.Transition.after(function(){if(_this.isOffset("<")||_this.isOffset(">")){_this._o=false;Events.emit("run.offset",_this.move)}Events.emit("run.after",_this.move);Glide.enable()})}},calculate:function(){var move=this.move,length=this.length;var steps=move.steps,direction=move.direction;var countableSteps=isNumber(toInt(steps))&&0!==toInt(steps);switch(direction){case">":if(">"===steps)Glide.index=length;else if(this.isEnd()){this._o=true;Glide.index=0;Events.emit("run.end",move)}else if(countableSteps)Glide.index+=Math.min(length-Glide.index,-toInt(steps));else Glide.index++;break;case"<":if("<"===steps)Glide.index=0;else if(this.isStart()){this._o=true;Glide.index=length;Events.emit("run.start",move)}else if(countableSteps)Glide.index-=Math.min(Glide.index,toInt(steps));else Glide.index--;break;case"=":Glide.index=steps;break}},isStart:function(){return 0===Glide.index},isEnd:function(){return Glide.index===this.length},isOffset:function(direction){return this._o&&this.move.direction===direction}};define(Run,"move",{get:function(){return this._m},set:function(value){this._m={direction:value.substr(0,1),steps:value.substr(1)?value.substr(1):0}}});define(Run,"length",{get:function(){return Components.Html.slides.length-1}});define(Run,"offset",{get:function(){return this._o}});return Run};function now(){return(new Date).getTime()}function throttle(func,wait,options){var timeout=void 0,context=void 0,args=void 0,result=void 0;var previous=0;if(!options)options={};var later=function(){previous=false===options.leading?0:now();timeout=null;result=func.apply(context,args);if(!timeout)context=args=null};var throttled=function(){var at=now();if(!previous&&false===options.leading)previous=at;var remaining=wait-(at-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){if(timeout){clearTimeout(timeout);timeout=null}previous=at;result=func.apply(context,args);if(!timeout)context=args=null}else if(!timeout&&false!==options.trailing)timeout=setTimeout(later,remaining);return result};throttled.cancel=function(){clearTimeout(timeout);previous=0;timeout=context=args=null};return throttled}var MARGIN_TYPE={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};var Gaps=function(Glide,Components,Events){var Gaps={mount:function(){this.value=Glide.settings.gap},apply:function(slides){for(var i=0,len=slides.length;i<len;i++){var style=slides[i].style;var direction=Components.Direction.value;if(0!==i)style[MARGIN_TYPE[direction][0]]=this.value/2+"px";else style[MARGIN_TYPE[direction][0]]="";if(i!==slides.length-1)style[MARGIN_TYPE[direction][1]]=this.value/2+"px";else style[MARGIN_TYPE[direction][1]]=""}},remove:function(slides){for(var i=0,len=slides.length;i<len;i++){var style=slides[i].style;style.marginLeft="";style.marginRight=""}}};define(Gaps,"value",{get:function(){return Gaps._v},set:function(value){Gaps._v=toInt(value)}});define(Gaps,"grow",{get:function(){return Gaps.value*(Components.Sizes.length-1)}});define(Gaps,"reductor",{get:function(){var perView=Glide.settings.perView;return Gaps.value*(perView-1)/perView}});Events.on("update",function(){Gaps.mount()});Events.on(["build.after","update"],throttle(function(){Gaps.apply(Components.Html.wrapper.children)},30));Events.on("destroy",function(){Gaps.remove(Components.Html.wrapper.children)});return Gaps};function siblings(node){var n=node.parentNode.firstChild;var matched=[];for(;n;n=n.nextSibling)if(1===n.nodeType&&n!==node)matched.push(n);return matched}function exist(node){if(node&&node instanceof window.HTMLElement)return true;return false}var TRACK_SELECTOR='[data-glide-el="track"]';var Html=function(Glide){var Html={mount:function(){this.root=Glide.selector;this.track=this.root.querySelector(TRACK_SELECTOR);this.slides=Array.from(this.wrapper.children).filter(function(slide){return!slide.classList.contains(Glide.settings.classes.cloneSlide)})}};define(Html,"root",{get:function(){return Html._r},set:function(root){if(isString(root))root=document.querySelector(root);if(exist(root))Html._r=root;else warn("Root element must be a existing Html node")}});define(Html,"track",{get:function(){return Html._t},set:function(tr){if(exist(tr))Html._t=tr;else warn("Could not find track element. Please use "+TRACK_SELECTOR+" attribute.")}});define(Html,"wrapper",{get:function(){return Html.track.children[0]}});return Html};var Peek=function(Glide,Components,Events){var Peek={mount:function(){this.value=Glide.settings.peek}};define(Peek,"value",{get:function(){return Peek._v},set:function(value){if(isObject(value)){value.before=toInt(value.before);value.after=toInt(value.after)}else value=toInt(value);Peek._v=value}});define(Peek,"reductor",{get:function(){var value=Peek.value;var perView=Glide.settings.perView;if(isObject(value))return value.before/perView+value.after/perView;return 2*value/perView}});Events.on(["resize","update"],function(){Peek.mount()});return Peek};var Move=function(Glide,Components,Events){var Move={mount:function(){this._o=0},make:function(){var _this=this;var offset=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=offset;Events.emit("move",{movement:this.value});Components.Transition.after(function(){Events.emit("move.after",{movement:_this.value})})}};define(Move,"offset",{get:function(){return Move._o},set:function(value){Move._o=!isUndefined(value)?toInt(value):0}});define(Move,"translate",{get:function(){return Components.Sizes.slideWidth*Glide.index}});define(Move,"value",{get:function(){var offset=this.offset;var translate=this.translate;if(Components.Direction.is("rtl"))return translate+offset;return translate-offset}});Events.on(["build.before","run"],function(){Move.make()});return Move};var Sizes=function(Glide,Components,Events){var Sizes={setupSlides:function(){var slides=Components.Html.slides;for(var i=0;i<slides.length;i++)slides[i].style.width=this.slideWidth+"px"},setupWrapper:function(){Components.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){var slides=Components.Html.slides;for(var i=0;i<slides.length;i++)slides[i].style.width="";Components.Html.wrapper.style.width=""}};define(Sizes,"length",{get:function(){return Components.Html.slides.length}});define(Sizes,"width",{get:function(){return Components.Html.root.offsetWidth}});define(Sizes,"wrapperSize",{get:function(){return Sizes.slideWidth*Sizes.length+Components.Gaps.grow+Components.Clones.grow}});define(Sizes,"slideWidth",{get:function(){return Sizes.width/Glide.settings.perView-Components.Peek.reductor-Components.Gaps.reductor}});Events.on(["build.before","resize","update"],function(){Sizes.setupSlides();Sizes.setupWrapper()});Events.on("destroy",function(){Sizes.remove()});return Sizes};var Build=function(Glide,Components,Events){var Build={mount:function(){Events.emit("build.before");this.typeClass();this.activeClass();Events.emit("build.after")},typeClass:function(){Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type])},activeClass:function(){var classes=Glide.settings.classes;var slide=Components.Html.slides[Glide.index];slide.classList.add(classes.activeSlide);siblings(slide).forEach(function(sibling){sibling.classList.remove(classes.activeSlide)})},removeClasses:function(){var classes=Glide.settings.classes;Components.Html.root.classList.remove(classes[Glide.settings.type]);Components.Html.slides.forEach(function(sibling){sibling.classList.remove(classes.activeSlide)})}};Events.on(["destroy","update"],function(){Build.removeClasses()});Events.on(["resize","update"],function(){Build.mount()});Events.on("move.after",function(){Build.activeClass()});return Build};var Clones=function(Glide,Components,Events){var Clones={mount:function(){this.items=[];if(Glide.isType("carousel")){this.pattern=this.map();this.items=this.collect()}},map:function(){var pattern=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];var perView=Glide.settings.perView;var length=Components.Html.slides.length;for(var r=0;r<Math.max(1,Math.floor(perView/length));r++){for(var i=0;i<=length-1;i++)pattern.push(""+i);for(var _i=length-1;_i>=0;_i--)pattern.unshift("-"+_i)}return pattern},collect:function(){var items=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];var pattern=this.pattern;for(var i=0;i<pattern.length;i++){var clone=Components.Html.slides[Math.abs(pattern[i])].cloneNode(true);clone.classList.add(Glide.settings.classes.cloneSlide);items.push(clone)}return items},append:function(){var items=this.items,pattern=this.pattern;for(var i=0;i<items.length;i++){var item=items[i];item.style.width=Components.Sizes.slideWidth+"px";if("-"===pattern[i][0])Components.Html.wrapper.insertBefore(item,Components.Html.slides[0]);else Components.Html.wrapper.appendChild(item)}},remove:function(){var items=this.items;for(var i=0;i<items.length;i++)items[i].remove()}};define(Clones,"grow",{get:function(){return(Components.Sizes.slideWidth+Components.Gaps.value)*Clones.items.length}});Events.on("update",function(){Clones.remove();Clones.mount();Clones.append()});Events.on("build.before",function(){if(Glide.isType("carousel"))Clones.append()});Events.on("destroy",function(){Clones.remove()});return Clones};var EventsBinder=function(){function EventsBinder(){var listeners=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};classCallCheck(this,EventsBinder);this.listeners=listeners}createClass(EventsBinder,[{key:"on",value:function(events,el,closure){if(isString(events))events=[events];for(var i=0;i<events.length;i++){this.listeners[events[i]]=closure;el.addEventListener(events[i],this.listeners[events[i]],false)}}},{key:"off",value:function(events,el){if(isString(events))events=[events];for(var i=0;i<events.length;i++)el.removeEventListener(events[i],this.listeners[events[i]],false)}},{key:"destroy",value:function(){delete this.listeners}}]);return EventsBinder}();var Resize=function(Glide,Components,Events){var Binder=new EventsBinder;var Resize={mount:function(){this.bind()},bind:function(){Binder.on("resize",window,throttle(function(){Events.emit("resize")},Glide.settings.throttle))},unbind:function(){Binder.off("resize",window)}};Events.on("destroy",function(){Resize.unbind();Binder.destroy()});return Resize};var VALID_DIRECTIONS=["ltr","rtl"];var FLIPED_MOVEMENTS={">":"<","<":">","=":"="};var Direction=function(Glide,Components,Events){var Direction={mount:function(){this.value=Glide.settings.direction},resolve:function(pattern){var token=pattern.slice(0,1);if(this.is("rtl"))return pattern.split(token).join(FLIPED_MOVEMENTS[token]);return pattern},is:function(direction){return this.value===direction},addClass:function(){Components.Html.root.classList.add(Glide.settings.classes.direction[this.value])},removeClass:function(){Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value])}};define(Direction,"value",{get:function(){return Direction._v},set:function(value){if(VALID_DIRECTIONS.includes(value))Direction._v=value;else warn("Direction value must be `ltr` or `rtl`")}});Events.on(["destroy","update"],function(){Direction.removeClass()});Events.on("update",function(){Direction.mount()});Events.on(["build.before","update"],function(){Direction.addClass()});return Direction};var Rtl=function(Glide,Components){return{modify:function(translate){if(Components.Direction.is("rtl"))return-translate;return translate}}};var Gap=function(Glide,Components){return{modify:function(translate){return translate+Components.Gaps.value*Glide.index}}};var Grow=function(Glide,Components){return{modify:function(translate){return translate+Components.Clones.grow/2}}};var Peeking=function(Glide,Components){return{modify:function(translate){if(Glide.settings.focusAt>=0){var peek=Components.Peek.value;if(isObject(peek))return translate-peek.before;return translate-peek}return translate}}};var Focusing=function(Glide,Components){return{modify:function(translate){var gap=Components.Gaps.value;var width=Components.Sizes.width;var focusAt=Glide.settings.focusAt;var slideWidth=Components.Sizes.slideWidth;if("center"===focusAt)return translate-(width/2-slideWidth/2);return translate-slideWidth*focusAt-gap*focusAt}}};var MUTATORS=[Gap,Grow,Peeking,Focusing,Rtl];var transformer=function(Glide,Components){return{mutate:function(translate){for(var i=0;i<MUTATORS.length;i++)translate=MUTATORS[i](Glide,Components).modify(translate);return translate}}};var Translate=function(Glide,Components,Events){var Translate={set:function(value){var transform=transformer(Glide,Components).mutate(value);Components.Html.wrapper.style.transform="translate3d("+-1*transform+"px, 0px, 0px)"},remove:function(){Components.Html.wrapper.style.transform=""}};Events.on("move",function(context){var gap=Components.Gaps.value;var length=Components.Sizes.length;var width=Components.Sizes.slideWidth;if(Glide.isType("carousel")&&Components.Run.isOffset("<")){Components.Transition.after(function(){Events.emit("translate.jump");Translate.set(width*(length-1))});return Translate.set(-width-gap*length)}if(Glide.isType("carousel")&&Components.Run.isOffset(">")){Components.Transition.after(function(){Events.emit("translate.jump");Translate.set(0)});return Translate.set(width*length+gap*length)}return Translate.set(context.movement)});Events.on("destroy",function(){Translate.remove()});return Translate};var Transition=function(Glide,Components,Events){var disabled=false;var Transition={compose:function(property){var settings=Glide.settings;if(!disabled)return property+" "+this.duration+"ms "+settings.animationTimingFunc;return property+" 0ms "+settings.animationTimingFunc},set:function(){var property=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";Components.Html.wrapper.style.transition=this.compose(property)},remove:function(){Components.Html.wrapper.style.transition=""},after:function(callback){setTimeout(function(){callback()},this.duration)},enable:function(){disabled=false;this.set()},disable:function(){disabled=true;this.set()}};define(Transition,"duration",{get:function(){var settings=Glide.settings;if(Glide.isType("slider")&&Components.Run.offset)return settings.rewindDuration;return settings.animationDuration}});Events.on("move",function(){Transition.set()});Events.on(["build.before","resize","translate.jump"],function(){Transition.disable()});Events.on("run",function(){Transition.enable()});Events.on("destroy",function(){Transition.remove()});return Transition};var START_EVENTS=["touchstart","mousedown"];var MOVE_EVENTS=["touchmove","mousemove"];var END_EVENTS=["touchend","touchcancel","mouseup","mouseleave"];var MOUSE_EVENTS=["mousedown","mousemove","mouseup","mouseleave"];var Swipe=function(Glide,Components,Events){var Binder=new EventsBinder;var swipeSin=0;var swipeStartX=0;var swipeStartY=0;var disabled=false;var Swipe={mount:function(){this.bindSwipeStart()},start:function(event){if(!disabled&&!Glide.disabled){this.disable();var swipe=this.touches(event);swipeSin=null;swipeStartX=toInt(swipe.pageX);swipeStartY=toInt(swipe.pageY);this.bindSwipeMove();this.bindSwipeEnd();Events.emit("swipe.start")}},move:function(event){if(!Glide.disabled){var settings=Glide.settings;var swipe=this.touches(event);var subExSx=toInt(swipe.pageX)-swipeStartX;var subEySy=toInt(swipe.pageY)-swipeStartY;var powEX=Math.abs(subExSx<<2);var powEY=Math.abs(subEySy<<2);var swipeHypotenuse=Math.sqrt(powEX+powEY);var swipeCathetus=Math.sqrt(powEY);swipeSin=Math.asin(swipeCathetus/swipeHypotenuse);if(180*swipeSin/Math.PI<settings.touchAngle)Components.Move.make(subExSx*parseFloat(settings.touchRatio));if(180*swipeSin/Math.PI<settings.touchAngle){event.stopPropagation();event.preventDefault();Components.Html.root.classList.add(settings.classes.dragging);Events.emit("swipe.move")}else return false}},end:function(event){if(!Glide.disabled){var settings=Glide.settings;var swipe=this.touches(event);var threshold=this.threshold(event);var swipeDistance=swipe.pageX-swipeStartX;var swipeDeg=180*swipeSin/Math.PI;var steps=Math.round(swipeDistance/Components.Sizes.slideWidth);this.enable();if(swipeDistance>threshold&&swipeDeg<settings.touchAngle){if(settings.perTouch)steps=Math.min(steps,toInt(settings.perTouch));if(Components.Direction.is("rtl"))steps=-steps;Components.Run.make(Components.Direction.resolve("<"+steps))}else if(swipeDistance<-threshold&&swipeDeg<settings.touchAngle){if(settings.perTouch)steps=Math.max(steps,-toInt(settings.perTouch));if(Components.Direction.is("rtl"))steps=-steps;Components.Run.make(Components.Direction.resolve(">"+steps))}else Components.Move.make();Components.Html.root.classList.remove(settings.classes.dragging);this.unbindSwipeMove();this.unbindSwipeEnd();Events.emit("swipe.end")}},bindSwipeStart:function(){var settings=Glide.settings;if(settings.swipeThreshold)Binder.on(START_EVENTS[0],Components.Html.wrapper,this.start.bind(this));if(settings.dragThreshold)Binder.on(START_EVENTS[1],Components.Html.wrapper,this.start.bind(this))},unbindSwipeStart:function(){Binder.off(START_EVENTS[0],Components.Html.wrapper);Binder.off(START_EVENTS[1],Components.Html.wrapper)},bindSwipeMove:function(){Binder.on(MOVE_EVENTS,Components.Html.wrapper,throttle(this.move.bind(this),Glide.settings.throttle))},unbindSwipeMove:function(){Binder.off(MOVE_EVENTS,Components.Html.wrapper)},bindSwipeEnd:function(){Binder.on(END_EVENTS,Components.Html.wrapper,this.end.bind(this))},unbindSwipeEnd:function(){Binder.off(END_EVENTS,Components.Html.wrapper)},touches:function(event){if(MOUSE_EVENTS.includes(event.type))return event;return event.touches[0]||event.changedTouches[0]},threshold:function(event){var settings=Glide.settings;if(MOUSE_EVENTS.includes(event.type))return settings.dragThreshold;return settings.swipeThreshold},enable:function(){disabled=false;Components.Transition.enable();return this},disable:function(){disabled=true;Components.Transition.disable();return this}};Events.on("build.after",function(){Components.Html.root.classList.add(Glide.settings.classes.swipeable)});Events.on("destroy",function(){Swipe.unbindSwipeStart();Swipe.unbindSwipeMove();Swipe.unbindSwipeEnd();Binder.destroy()});return Swipe};var Images=function(Glide,Components,Events){var Binder=new EventsBinder;var Images={mount:function(){this.bind()},bind:function(){Binder.on("dragstart",Components.Html.wrapper,this.dragstart)},unbind:function(){Binder.off("dragstart",Components.Html.wrapper)},dragstart:function(event){event.preventDefault()}};Events.on("destroy",function(){Images.unbind();Binder.destroy()});return Images};var Anchors=function(Glide,Components,Events){var Binder=new EventsBinder;var detached=false;var prevented=false;var Anchors={mount:function(){this._a=Components.Html.wrapper.querySelectorAll("a");this.bind()},bind:function(){Binder.on("click",Components.Html.wrapper,this.click)},unbind:function(){Binder.off("click",Components.Html.wrapper)},click:function(event){event.stopPropagation();if(prevented)event.preventDefault()},detach:function(){prevented=true;if(!detached){for(var i=0;i<this.items.length;i++){this.items[i].draggable=false;this.items[i].dataset.href=this.items[i].getAttribute("href");this.items[i].removeAttribute("href")}detached=true}return this},attach:function(){prevented=false;if(detached){for(var i=0;i<this.items.length;i++){this.items[i].draggable=true;this.items[i].setAttribute("href",this.items[i].dataset.href);delete this.items[i].dataset.href}detached=false}return this}};define(Anchors,"items",{get:function(){return Anchors._a}});Events.on("swipe.move",function(){Anchors.detach()});Events.on("swipe.end",function(){Components.Transition.after(function(){Anchors.attach()})});Events.on("destroy",function(){Anchors.attach();Anchors.unbind();Binder.destroy()});return Anchors};var NAV_SELECTOR='[data-glide-el="controls[nav]"]';var CONTROLS_SELECTOR='[data-glide-el^="controls"]';var Controls=function(Glide,Components,Events){var Binder=new EventsBinder;var Controls={mount:function(){this._n=Components.Html.root.querySelectorAll(NAV_SELECTOR);this._i=Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);this.addBindings()},setActive:function(){for(var i=0;i<this._n.length;i++)this.addClass(this._n[i].children)},removeActive:function(){for(var i=0;i<this._n.length;i++)this.removeClass(this._n[i].children)},addClass:function(controls){var settings=Glide.settings;var item=controls[Glide.index];item.classList.add(settings.classes.activeNav);siblings(item).forEach(function(sibling){sibling.classList.remove(settings.classes.activeNav)})},removeClass:function(controls){controls[Glide.index].classList.remove(Glide.settings.classes.activeNav)},addBindings:function(){for(var i=0;i<this._i.length;i++)this.bind(this._i[i].children)},removeBindings:function(){for(var i=0;i<this._i.length;i++)this.unbind(this._i[i].children)},bind:function(elements){for(var i=0;i<elements.length;i++)Binder.on(["click","touchstart"],elements[i],this.click)},unbind:function(elements){for(var i=0;i<elements.length;i++)Binder.off(["click","touchstart"],elements[i])},click:function(event){event.preventDefault();Components.Run.make(Components.Direction.resolve(event.currentTarget.dataset.glideDir))}};define(Controls,"items",{get:function(){return Controls._i}});Events.on(["mount.after","move.after"],function(){Controls.setActive()});Events.on("destroy",function(){Controls.removeBindings();Controls.removeActive();Binder.destroy()});return Controls};var Keyboard=function(Glide,Components,Events){var Binder=new EventsBinder;var Keyboard={mount:function(){if(Glide.settings.keyboard)this.bind()},bind:function(){Binder.on("keyup",document,this.press)},unbind:function(){Binder.off("keyup",document)},press:function(event){if(39===event.keyCode)Components.Run.make(Components.Direction.resolve(">"));if(37===event.keyCode)Components.Run.make(Components.Direction.resolve("<"))}};Events.on(["destroy","update"],function(){Keyboard.unbind()});Events.on("update",function(){Keyboard.mount()});Events.on("destroy",function(){Binder.destroy()});return Keyboard};var Autoplay=function(Glide,Components,Events){var Binder=new EventsBinder;var Autoplay={mount:function(){this.start();if(Glide.settings.hoverpause)this.bind()},start:function(){var _this=this;if(Glide.settings.autoplay)if(isUndefined(this._i))this._i=setInterval(function(){_this.stop();Components.Run.make(">");_this.start()},this.time)},stop:function(){this._i=clearInterval(this._i)},bind:function(){var _this2=this;Binder.on("mouseover",Components.Html.root,function(){_this2.stop()});Binder.on("mouseout",Components.Html.root,function(){_this2.start()})},unbind:function(){Binder.off(["mouseover","mouseout"],Components.Html.root)}};define(Autoplay,"time",{get:function(){var autoplay=Components.Html.slides[Glide.index].getAttribute("data-glide-autoplay");if(autoplay)return toInt(autoplay);return toInt(Glide.settings.autoplay)}});Events.on(["destroy","update"],function(){Autoplay.unbind()});Events.on(["run.before","pause","destroy","swipe.start","update"],function(){Autoplay.stop()});Events.on(["run.after","play","swipe.end"],function(){Autoplay.start()});Events.on("update",function(){Autoplay.mount()});Events.on("destroy",function(){Binder.destroy()});return Autoplay};function sortBreakpoints(points){if(isObject(points))return sortKeys(points);else warn("Breakpoints option must be an object");return{}}var Breakpoints=function(Glide,Components,Events){var Binder=new EventsBinder;var settings=Glide.settings;var points=settings.breakpoints;points=sortBreakpoints(points);var defaults=_extends({},settings);var Breakpoints={match:function(points){if("undefined"!==typeof window.matchMedia)for(var point in points)if(points.hasOwnProperty(point))if(window.matchMedia("(max-width: "+point+"px)").matches)return points[point];return defaults}};_extends(settings,Breakpoints.match(points));Binder.on("resize",window,throttle(function(){_extends(settings,Breakpoints.match(points))},Glide.settings.throttle));Events.on("update",function(){points=sortBreakpoints(points);defaults=_extends({},settings)});Events.on("destroy",function(){Binder.off("resize",window)});return Breakpoints};var COMPONENTS={Html:Html,Translate:Translate,Transition:Transition,Direction:Direction,Peek:Peek,Sizes:Sizes,Gaps:Gaps,Move:Move,Clones:Clones,Resize:Resize,Build:Build,Run:Run,Swipe:Swipe,Images:Images,Anchors:Anchors,Controls:Controls,Keyboard:Keyboard,Autoplay:Autoplay,Breakpoints:Breakpoints};var Glide=function(_Core){inherits(Glide,_Core);function Glide(){classCallCheck(this,Glide);return possibleConstructorReturn(this,(Glide.__proto__||Object.getPrototypeOf(Glide)).apply(this,arguments))}createClass(Glide,[{key:"mount",value:function(){var extensions=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return get(Glide.prototype.__proto__||Object.getPrototypeOf(Glide.prototype),"mount",this).call(this,_extends({},COMPONENTS,extensions))}}]);return Glide}(Glide$2);return Glide})}});