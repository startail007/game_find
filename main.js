(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.level01_bg01 = function() {
	this.initialize(img.level01_bg01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,774,351);


(lib.level01_segment1 = function() {
	this.initialize(img.level01_segment1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,133);


(lib.level01_segment10 = function() {
	this.initialize(img.level01_segment10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,36);


(lib.level01_segment11 = function() {
	this.initialize(img.level01_segment11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,60);


(lib.level01_segment12 = function() {
	this.initialize(img.level01_segment12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,63);


(lib.level01_segment13 = function() {
	this.initialize(img.level01_segment13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,49);


(lib.level01_segment14 = function() {
	this.initialize(img.level01_segment14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,71);


(lib.level01_segment15 = function() {
	this.initialize(img.level01_segment15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,57);


(lib.level01_segment2 = function() {
	this.initialize(img.level01_segment2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,57);


(lib.level01_segment3 = function() {
	this.initialize(img.level01_segment3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,34);


(lib.level01_segment4 = function() {
	this.initialize(img.level01_segment4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,52);


(lib.level01_segment5 = function() {
	this.initialize(img.level01_segment5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,123);


(lib.level01_segment6 = function() {
	this.initialize(img.level01_segment6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,65);


(lib.level01_segment7 = function() {
	this.initialize(img.level01_segment7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,39);


(lib.level01_segment8 = function() {
	this.initialize(img.level01_segment8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,66);


(lib.level01_segment9 = function() {
	this.initialize(img.level01_segment9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,39);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.開始倒數背景 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.898)").s().dr(-640,-480,1280,960);
	this.shape.setTransform(640,480);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.開始倒數背景, new cjs.Rectangle(0,0,1280,960), null);


(lib.GO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.secondText = new cjs.Text("GO", "bold 120px 'Arial'", "#FF0000");
	this.secondText.name = "secondText";
	this.secondText.textAlign = "center";
	this.secondText.lineHeight = 139;
	this.secondText.parent = this;
	this.secondText.setTransform(0,-67);

	this.timeline.addTween(cjs.Tween.get(this.secondText).wait(1));

}).prototype = getMCSymbolPrototype(lib.GO, new cjs.Rectangle(-95.4,-69,190.9,138.1), null);


(lib.拉軸btn複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().de(-24.7,-24.7,49.5,49.5);
	this.shape.setTransform(0,0,0.606,0.606);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉軸btn複製, new cjs.Rectangle(-15,-14.9,30,30), null);


(lib.拉軸 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkrAeIAAg7IJXAAIAAA7g");
	this.shape.setTransform(30,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉軸, new cjs.Rectangle(0,-3,60,6), null);


(lib.拉桿透明按鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().de(-24.7,-24.7,49.5,49.5);
	this.shape.setTransform(0,0,0.606,0.606);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.h_數字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.num = new cjs.Text("100", "20px 'Arial'", "#666666");
	this.num.name = "num";
	this.num.textAlign = "center";
	this.num.lineHeight = 24;
	this.num.lineWidth = 34;
	this.num.parent = this;
	this.num.setTransform(0,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.num).wait(1));

}).prototype = getMCSymbolPrototype(lib.h_數字, new cjs.Rectangle(-18.7,-13.1,37.5,26.4), null);


(lib.提示按鈕顏色元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().dr(-10,-10,20,20);
	this.shape.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.提示按鈕顏色元件, new cjs.Rectangle(-20,-10,20,20), null);


(lib.觸碰範圍 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("AlhFiQiSiTAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAQjOAAiTiSg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.提示空白元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.提示空白元件, null, null);


(lib.顯示結果空白元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.顯示結果空白元件, null, null);


(lib.倒數秒數 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.secondText = new cjs.Text("999", "bold 48px 'Arial'", "#FFFFFF");
	this.secondText.name = "secondText";
	this.secondText.textAlign = "center";
	this.secondText.lineHeight = 59;
	this.secondText.parent = this;
	this.secondText.setTransform(0,-26.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-100,-50,200,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.secondText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.倒數秒數, new cjs.Rectangle(-100,-50,200,100), null);


(lib.圈起來空白元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.圈起來空白元件, null, null);


(lib.level01_片段 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_segment1();
	this.instance.parent = this;

	this.instance_1 = new lib.level01_segment2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.level01_segment3();
	this.instance_2.parent = this;

	this.instance_3 = new lib.level01_segment4();
	this.instance_3.parent = this;

	this.instance_4 = new lib.level01_segment5();
	this.instance_4.parent = this;

	this.instance_5 = new lib.level01_segment6();
	this.instance_5.parent = this;

	this.instance_6 = new lib.level01_segment7();
	this.instance_6.parent = this;

	this.instance_7 = new lib.level01_segment8();
	this.instance_7.parent = this;

	this.instance_8 = new lib.level01_segment9();
	this.instance_8.parent = this;

	this.instance_9 = new lib.level01_segment10();
	this.instance_9.parent = this;

	this.instance_10 = new lib.level01_segment11();
	this.instance_10.parent = this;

	this.instance_11 = new lib.level01_segment12();
	this.instance_11.parent = this;

	this.instance_12 = new lib.level01_segment13();
	this.instance_12.parent = this;

	this.instance_13 = new lib.level01_segment14();
	this.instance_13.parent = this;

	this.instance_14 = new lib.level01_segment15();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,133);


(lib.level01_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_bg01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_bg, new cjs.Rectangle(0,0,774,351), null);


(lib.btn_hover_sound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		playSound("btn_hover");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.圈起來動畫元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AqsAAQABheAYhXQAYhXAthNQAthMA+g+QA+g+BMgtQBNgtBXgYQBXgYBegBQBfABBXAYQBXAYBNAtQBMAtA+A+QA+A+AtBMQAtBNAYBXQAYBXABBeQgBBfgYBXQgYBXgtBNQgtBMg+A+Qg+A+hMAtQhNAthXAYQhXAYhfABQiOgBh8g1Qh7g1heheQheheg1h7Qg1h8gBiPgAneAAQAABCARA9QARA9AfA2QAgA1ArAsQAsArA1AgQA2AfA9ARQA9ARBBAAQBCAAA9gRQA9gRA2gfQA1ggAsgrQArgsAgg1QAfg2ARg9QARg9AAhCQAAhjglhXQglhWhChCQhChChWglQhXglhkAAQhBAAg9ARQg9ARg2AfQg1AggsArQgrAsggA1QgfA2gRA9QgRA9AABBg");
	this.shape.setTransform(0,0.1,0.365,0.365);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.圈起來動畫元件, new cjs.Rectangle(-25,-25,50,50.1), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF00","rgba(255,255,0,0)"],[0,1],0,0,0,0,0,8.2).s().p("AgHBRQghgDgWgaQgWgaADghQADghAagWQAagWAhADQAiADAWAaQAWAagEAhQgDAigaAWQgWATgcAAIgJgBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAjAvQgVgUgQgCQgQgBgYAQQgRAKgsAlQArglAOgPQAUgVACgQQABgQgQgYIgvg9IA0A5QAVAUAQACQAQABAYgQQARgKAsglQgrAlgOAPQgUAVgCAQQgBAQAQAYIAvA9g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-10.4,-10.4,20.9,20.9), null);


(lib.C_startReciprocal01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// 圖層 4
	this.secondText = new cjs.Text("3", "bold 120px 'Arial'", "#FFFFFF");
	this.secondText.name = "secondText";
	this.secondText.textAlign = "center";
	this.secondText.lineHeight = 139;
	this.secondText.parent = this;
	this.secondText.setTransform(640,413);

	this.instance = new lib.GO();
	this.instance.parent = this;
	this.instance.setTransform(640,480);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.secondText}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({regX:0.3,scaleX:4,scaleY:0.1,x:641.2,alpha:0},4).wait(1));

	// 圖層 2
	this.box01 = new lib.開始倒數背景();
	this.box01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.box01).wait(3).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,960);


(lib.go按鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.btn_hover_sound();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCDhQg2gaghg5Qgig4AAhWQAAh2BChCQBDhDB2AAQB5AABCBCQBBBBAAB1QAABVgcA2QgdA3g2AeQg3AfhRAAQhRAAg2gbgAhJhpQgbAgAABKQAABKAbAgQAbAgAuAAQAwAAAbggQAbgfAAhRQAAhFgcgfQgbgggvAAQguAAgbAgg");
	this.shape.setTransform(29.2,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiEDeQg2gegfg6Qgeg6AAhMQAAhPAhg7QAhg7A/geQAygYBSAAQBRAAApAPQAnAOAbAfQAaAfANAvIiRAaQgJgcgVgOQgVgPgiAAQgwAAgeAjQgdAiAABKQAABOAeAiQAdAiA0AAQAZAAAYgHQAWgIAegRIAAguIhlAAIAAhkIDpAAIAADOQhDAugzAQQg0ARhGAAQhVAAg3geg");
	this.shape_1.setTransform(-27.8,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.588)","rgba(255,255,255,0)"],[0,1],-4.6,-23.2,0.5,8.7).s().p("AjICAQhUg1AAhLQAAhKBUg2QBTg1B1AAQB2AABTA1QBUA2AABKQAABLhUA1QhTA1h2ABQh1gBhTg1g");
	this.shape_2.setTransform(0.6,-31,1.879,1.879,0,0,0,0.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D0D0D0").ss(1,1,1).p("AAAl5QCdAABvBuQBvBvAACcQAACdhvBvQhvBuidAAQicAAhvhuQhvhvAAidQAAicBvhvQBvhuCcAAg");
	this.shape_3.setTransform(0.1,0,1.879,1.879);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(131,131,131,0.976)","#B6B6B6"],[0,1],0,-37.8,0,37.9).s().p("AkKELQhwhuAAidQAAicBwhvQBuhuCcgBQCdABBvBuQBuBvAACcQAACdhuBuQhvBvidAAQicAAhuhvg");
	this.shape_4.setTransform(0.1,0,1.879,1.879);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-72.1,144.2,144.3);


(lib.拉桿按鈕元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch = new lib.拉桿透明按鈕();
	this.touch.parent = this;
	this.touch.setTransform(0,0.1);
	new cjs.ButtonHelper(this.touch, 0, 1, 2, false, new lib.拉桿透明按鈕(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch).wait(1));

	// 圖層 1
	this.mc = new lib.拉軸btn複製();
	this.mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉桿按鈕元件, new cjs.Rectangle(-15,-14.9,30,30.1), null);


(lib.提示按鈕顏色動畫元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 19
	this.instance = new lib.提示按鈕顏色元件();
	this.instance.parent = this;
	this.instance.setTransform(7.5,-46,1,1,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).wait(3));

	// 圖層 18
	this.instance_1 = new lib.提示按鈕顏色元件();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.3,-46,1,1,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).wait(8));

	// 圖層 17
	this.instance_2 = new lib.提示按鈕顏色元件();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.1,-46,1,1,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).wait(13));

	// 圖層 16
	this.instance_3 = new lib.提示按鈕顏色元件();
	this.instance_3.parent = this;
	this.instance_3.setTransform(63.9,-46,1,1,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).wait(18));

	// 圖層 15
	this.instance_4 = new lib.提示按鈕顏色元件();
	this.instance_4.parent = this;
	this.instance_4.setTransform(82.7,-45.6,1,1,-170.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).wait(23));

	// 圖層 14
	this.instance_5 = new lib.提示按鈕顏色元件();
	this.instance_5.parent = this;
	this.instance_5.setTransform(95.5,-33.6,0.999,0.999,-101.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({_off:false},0).wait(28));

	// 圖層 13
	this.instance_6 = new lib.提示按鈕顏色元件();
	this.instance_6.parent = this;
	this.instance_6.setTransform(96,-15,1,1,-90);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).wait(33));

	// 圖層 12
	this.instance_7 = new lib.提示按鈕顏色元件();
	this.instance_7.parent = this;
	this.instance_7.setTransform(96,3.8,1,1,-90);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({_off:false},0).wait(38));

	// 圖層 11
	this.instance_8 = new lib.提示按鈕顏色元件();
	this.instance_8.parent = this;
	this.instance_8.setTransform(96,22.6,1,1,-90);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({_off:false},0).wait(43));

	// 圖層 10
	this.instance_9 = new lib.提示按鈕顏色元件();
	this.instance_9.parent = this;
	this.instance_9.setTransform(92.2,40.7,0.998,0.998,-49.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).wait(48));

	// 圖層 9
	this.instance_10 = new lib.提示按鈕顏色元件();
	this.instance_10.parent = this;
	this.instance_10.setTransform(75.2,46);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).wait(53));

	// 圖層 8
	this.instance_11 = new lib.提示按鈕顏色元件();
	this.instance_11.parent = this;
	this.instance_11.setTransform(56.4,46);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).wait(58));

	// 圖層 7
	this.instance_12 = new lib.提示按鈕顏色元件();
	this.instance_12.parent = this;
	this.instance_12.setTransform(37.6,46);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).wait(63));

	// 圖層 6
	this.instance_13 = new lib.提示按鈕顏色元件();
	this.instance_13.parent = this;
	this.instance_13.setTransform(18.8,46);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(68));

	// 圖層 1
	this.instance_14 = new lib.提示按鈕顏色元件();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:180,guide:{path:[0,46,39.1,46,78.1,46,96.1,46,96.1,28,96.1,0.1,96.1,-27.9,96.1,-45.9,78.1,-45.9,39.1,-45.9,0,-45.9], orient:'auto'}},72).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,36,20,20);


(lib.提示按鈕透明按鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.btn_hover_sound();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().rr(-100,-50,200,100,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.再來一次 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.btn_hover_sound();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.898)").s().p("AAsA5QgkBhhxA6IgeggQBdgzAggxQAggyAAhTIgBgeIAqAAIgBAZQAAA6AQAoQAQApAnAmQAnAmAnAUIgbAkQhng+glhegAjSBCIAAgrICcAAIAAArgABqABQAdgtAOg9IiWAAQgeA+gfAiIghgaQA6hBAghwIApAHQgIAcgMAeIC6AAQgSBpgpA+gAjHhrIAAgqICFAAIAAAqg");
	this.shape.setTransform(72.4,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.898)").s().p("AjQAVIAAgpIGhAAIAAApg");
	this.shape_1.setTransform(24.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.898)").s().p("AgVDSIAAikQhDBbhjA0IgbgjQB/hABChsIAAhoIi0AAIAAgqIC0AAIAAgtIArAAIAAAtICyAAIAAAqIiyAAIAABtQBBBlCABCIgaAiQhlg1hChZIAACkgAjRAWQAxguAghWIApAJQgHAXgKARQAfAmASAeIgfAeQgPgggVgcQgZApgdAfgAB3gVQgQAegXAYIgcgeQAkglAYhLIAoAHQgGAYgJAUQArArAVAeIgeAeQgSgfgigjg");
	this.shape_2.setTransform(-23.8,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AA6DLIgQgqQAbABASAAQAYAAAFgCQAFgEAAgGIAAg+IjyAAIAABzIgqAAIAAhzIgsAAIAAgnIAsAAIAAinICOAAIAAguIi8AAIAAgoIGiAAIAAAoIi7AAIAAAuICOAAIAACnIAuAAIAAAnIguAAIAABKQAAAPgHAKQgHAKgLAEQgLADghABQgUAAgRgCgAAWAxIBjAAIAAgvIhjAAgAh5AxIBkAAIAAgvIhkAAgAAWgkIBjAAIAAgsIhjAAgAh5gkIBkAAIAAgsIhkAAg");
	this.shape_3.setTransform(-71.9,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AxLJYQhkAAAAhkIAAvnQAAhkBkAAMAiXAAAQBkAAAABkIAAPnQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-60,240,120);


(lib.顯示結果元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lose:0,win:1});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 圖層 3
	this.againBtn01 = new lib.再來一次();
	this.againBtn01.parent = this;
	this.againBtn01.setTransform(640,660);
	new cjs.ButtonHelper(this.againBtn01, 0, 1, 2, false, new lib.再來一次(), 3);

	this.timeline.addTween(cjs.Tween.get(this.againBtn01).wait(2));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnZH3IgmhxIEHghIAAiyIjYAAIAAhZIDYAAIAAiHIBZAAQAmAFghAXIAABrIDbAAIAABZIjbAAIAACkID8glIAOBPIoyBoQgDAVgIAAQgFAAgHgHgAFIH7IgPhZIBHAAQATAAAAgSIAAuNIBZAAQAlAFghAXIAAORQAABLhLAAgAC2EWIAAqnIBZAAQAmAFghAXIAAKLgAnZgtIgchwIB6gFIBZjqIjOAAIAAhZIJNAAIAABZIkTAAIhoDlIDhgSQgggvg5g5IBLgzQBwBnBGB6IhUA9Iglg4Im0AzQgDAVgIAAQgFAAgHgHg");
	this.shape.setTransform(759.1,479.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AnpIBIAAwBIGrAAIAAF3IlNAAIAAKKgAmLjUIDvAAIAAhLIjvAAgAmLlqIDvAAIAAhLIjvAAgAFBH9IgKhaIBDAAQASAAAAgSIAAoaIipAAIipAAIAAl3IGwAAIAAOyQAABLhLAAgACZjUIDzAAIAAhLIjzAAgACZlqIDzAAIAAhLIjzAAgAjVG2IAAnwIG0AAIAAHLIheAAIAAgmIj3AAIAABLgAh2EgID3AAIAAheIj3AAgAh2B3ID3AAIAAhnIj3AAg");
	this.shape_1.setTransform(639.3,480.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ACrIXIgThaIBQAAQATAAAAgTIAAkUImJAAIAAhZIGJAAIAAh5Im9AAIAAG8IhPAAIAAglIigAAIAABVIhPAAIAAteIE+AAIAAEZIEdAAIAAiIIjIAAIAAhZIDIAAIAAigIBZAAQAmAGghAXIAACDIDvAAIAABZIjvAAIAACIIFIAAIAABZIipAAIAAB5ICNAAIAABZIiNAAIAAE2QAABKhLABgAmxECICgAAIAAkPIigAAgAmxhmICgAAIAAjvIigAAgAgsDvIBPg4QAmAqA8BeIhUA9Qg3higmgrg");
	this.shape_2.setTransform(522.1,478);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AibHlIgShnIBnAAQASAAAAgTIAApJIBUAPQCWhsBBg9IqwAAIAAhZIMFAAIATgTIBZBZQAJATghAAQiDB6jmCMIAAIWQAABBhAAAg");
	this.shape_3.setTransform(760.6,480.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("Ai7HAQDchsBZh6QhCifAAkGIAAgqImOAAIAACkIEsAAIgJE+QgEBZhCAAIh6AAIgOhZIBQAAQAmAAAAgmIAJjAIjUAAIAACIQABDqh2CWIhPhBQBnh/AAiyIAAnrIHrAAIAAjKIBZAAQAmAFghAXIAACuIFkAAIAABZIlkAAIAAAqQAADbAmB6QBPh6A9ixIBZA0QAhATgrAJQhFCshjCWQBnCSA0AAQAqAAAOhxIBZAvQglC8hCAAQiEAAiDjKQiDCRisBVgADFnIIBBhCQBMAmA4A4IhHBGQgvgzhPgvg");
	this.shape_4.setTransform(641,477.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AoKGtQE/g0AAjhIAAhGIk6AAIAAhYIP9AAIAABYIlWAAIAAEjQAAAlAhAAICfAAQAvAAAFgvIAJhQIBsAYIgYB1QgSBZhsAAIjrAAQhUAAAAhQIAAlfIiVAAIAABLQAAEnmFBVgAlTiAIAAhZIKUAAIAABZgAGIi0IAAiaIsYAAIAACaIhdAAIAAjzIGqAAIAAhxIBmAAQAvAKgqAcIAABLIG9AAIAADzg");
	this.shape_5.setTransform(520.2,478.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// 圖層 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.898)").s().p("Ehj/BLAMAAAiV/MDH/AAAMAAACV/g");
	this.shape_6.setTransform(640,480);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,960);


(lib.C_showResults01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// 圖層 1
	this.box01 = new lib.顯示結果元件();
	this.box01.parent = this;
	this.box01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box01).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,960);


(lib.level01_圖片15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",14);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片15, new cjs.Rectangle(0,0,94,57), null);


(lib.level01_圖片14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",13);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片14, new cjs.Rectangle(0,0,86,71), null);


(lib.level01_圖片13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",12);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片13, new cjs.Rectangle(0,0,58,49), null);


(lib.level01_圖片12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",11);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片12, new cjs.Rectangle(0,0,53,63), null);


(lib.level01_圖片11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",10);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片11, new cjs.Rectangle(0,0,79,60), null);


(lib.level01_圖片10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",9);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片10, new cjs.Rectangle(0,0,34,36), null);


(lib.level01_圖片9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",8);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片9, new cjs.Rectangle(0,0,45,39), null);


(lib.level01_圖片8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",7);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片8, new cjs.Rectangle(0,0,80,66), null);


(lib.level01_圖片7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",6);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片7, new cjs.Rectangle(0,0,47,39), null);


(lib.level01_圖片6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",5);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片6, new cjs.Rectangle(0,0,85,65), null);


(lib.level01_圖片5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",4);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片5, new cjs.Rectangle(0,0,80,123), null);


(lib.level01_圖片4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",3);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片4, new cjs.Rectangle(0,0,121,52), null);


(lib.level01_圖片3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",2);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片3, new cjs.Rectangle(0,0,63,34), null);


(lib.level01_圖片2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",1);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片2, new cjs.Rectangle(0,0,105,57), null);


(lib.level01_圖片1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.level01_片段("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_圖片1, new cjs.Rectangle(0,0,187,133), null);


(lib.C_circleIt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// 圖層 1
	this.instance = new lib.圈起來動畫元件();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2,2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100.1);


(lib.星光轉 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(0,0,4.12,4.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-43,86.1,86.1);


(lib.拉桿元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.btn = new lib.拉桿按鈕元件();
	this.btn.parent = this;

	this.bar = new lib.拉軸();
	this.bar.parent = this;
	this.bar.setTransform(0.1,0,1.686,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉桿元件, new cjs.Rectangle(-15,-14.9,116.3,30), null);


(lib.提示按鈕動畫元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzH0IAAgoIMLAAQC0AAAAi0IAAovQAAi0i0AAIsLAAIAAgoIMfAAQDIAAAADIIAAJXQAADIjIAAg");
	mask.setTransform(50,0);

	// 圖層 2
	this.instance = new lib.提示按鈕顏色動畫元件("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,36,0,14);


(lib.提示按鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		this.stop();
		playSound("ok");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(1));

	// 圖層 4
	this.instance = new lib.提示按鈕透明按鈕();
	this.instance.parent = this;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.提示按鈕透明按鈕(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).wait(1));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag+C8IgHgpIApAAQAIAAAAgIIAAivIi4AAIAAgpIGSAAIAAApIiwAAIAAC/QAAAhgfAAgAjMBzQA0glAohNIAlAVQAPAJgUADQggBEg+AxgABFAWIAhgWQAmA9BBAuIgfAkQg+gygrhHgAiOiTIAAgoIEcAAIAAAog");
	this.shape.setTransform(24.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhfC5QBFg1AKhUIAlAJQAOAIgRADIgMAqQAOAWAnAXIAAiAIh1AAIAAgjIEPAAIAAAjIh1AAIAAApIBZAAIAAAkIhZAAIAABAQASADAaAAIBNAAIgGAkIhLAAQhcAAgxg+QgiA1ggARgAi4DTIgFgkIAcAAQAIAAgBgHIAAh1IgqARQgEANgEgHIgLgrIA9gTIAAhuIg0AAIAAgjIA0AAIAAhRIAkAAQAPACgNAJIAABGIA3AAIAAAjIg3AAIAABjIAmgMIAHAfIgtASIAACPQAAAegeAAgAgegnIAAieIDPAAIAACegAABhFICRAAIAAgiIiRAAgAABiFICRAAIAAgiIiRAAg");
	this.shape_1.setTransform(-24.2,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+C8IgHgpIApAAQAIAAAAgIIAAivIi4AAIAAgpIGSAAIAAApIiwAAIAAC/QAAAhgfAAgAjMBzQA0glAohNIAlAVQAPAJgUADQggBEg+AxgABFAWIAhgWQAmA9BBAuIgfAkQg+gygrhHgAiOiTIAAgoIEcAAIAAAog");
	this.shape_2.setTransform(24.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfC5QBFg1AKhUIAlAJQAOAIgRADIgMAqQAOAWAnAXIAAiAIh1AAIAAgjIEPAAIAAAjIh1AAIAAApIBZAAIAAAkIhZAAIAABAQASADAaAAIBNAAIgGAkIhLAAQhcAAgxg+QgiA1ggARgAi4DTIgFgkIAcAAQAIAAgBgHIAAh1IgqARQgEANgEgHIgLgrIA9gTIAAhuIg0AAIAAgjIA0AAIAAhRIAkAAQAPACgNAJIAABGIA3AAIAAAjIg3AAIAABjIAmgMIAHAfIgtASIAACPQAAAegeAAgAgegnIAAieIDPAAIAACegAABhFICRAAIAAgiIiRAAgAABiFICRAAIAAgiIiRAAg");
	this.shape_3.setTransform(-24.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},73).wait(1));

	// 圖層 8
	this.instance_1 = new lib.提示按鈕動畫元件("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},73).wait(1));

	// 圖層 1
	this.instance_2 = new lib.提示按鈕動畫元件("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},73).wait(1));

	// 圖層 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AsfH0QjIAAAAjIIAApXQAAjIDIAAIY/AAQDIAAAADIIAAJXQAADIjIAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099CC").s().p("AsfH0QjIAAAAjIIAApXQAAjIDIAAIY/AAQDIAAAADIIAAJXQAADIjIAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},73).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-50,200,100);


(lib.level01_segmentMC15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(47.8,28.8,0.94,0.571,0,0,0,0.9,0.6);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片15();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC15, new cjs.Rectangle(0,-0.1,94.1,57.1), null);


(lib.level01_segmentMC14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(39,35.8,0.77,0.71,0,0,0,0.7,0.5);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片14();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC14, new cjs.Rectangle(-0.1,0,86.1,71.1), null);


(lib.level01_segmentMC13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(29.4,24.7,0.58,0.49,0,0,0,0.7,0.5);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片13();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC13, new cjs.Rectangle(0,0,58.1,49.1), null);


(lib.level01_segmentMC12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(26.7,31.8,0.53,0.63,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片12();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC12, new cjs.Rectangle(0,0,53.1,63.1), null);


(lib.level01_segmentMC11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(39.6,30.2,0.793,0.6,0,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片11();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC11, new cjs.Rectangle(-0.4,0,79.4,60.1), null);


(lib.level01_segmentMC10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(17.1,17.9,0.34,0.345,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片10();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC10, new cjs.Rectangle(0,0,34.1,36), null);


(lib.level01_segmentMC9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(22.7,19,0.42,0.319,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片9();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC9, new cjs.Rectangle(0,0,45,39), null);


(lib.level01_segmentMC8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(41,33.7,0.785,0.618,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片8();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC8, new cjs.Rectangle(0,0,80,66), null);


(lib.level01_segmentMC7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(21.1,19.1,0.42,0.319,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片7();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC7, new cjs.Rectangle(0,0,47.1,39), null);


(lib.level01_segmentMC6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(42.1,31.3,0.8,0.564,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片6();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC6, new cjs.Rectangle(0,0,85,65), null);


(lib.level01_segmentMC5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(41.3,62.7,0.781,1.216,0,0,0,0.3,0.4);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片5();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC5, new cjs.Rectangle(0,0,80.1,123), null);


(lib.level01_segmentMC4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(61.6,25.6,1.09,0.468,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片4();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC4, new cjs.Rectangle(0,0,121,52), null);


(lib.level01_segmentMC3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(33.9,16.8,0.534,0.293,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片3();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC3, new cjs.Rectangle(0,0,63,34), null);


(lib.level01_segmentMC2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(53.6,28.6,0.879,0.479,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片2();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC2, new cjs.Rectangle(0,0,105,57), null);


(lib.level01_segmentMC1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch01 = new lib.觸碰範圍();
	this.touch01.parent = this;
	this.touch01.setTransform(93.5,67.5,1.539,1.12);
	new cjs.ButtonHelper(this.touch01, 0, 1, 2, false, new lib.觸碰範圍(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch01).wait(1));

	// 圖層 1
	this.image01 = new lib.level01_圖片1();
	this.image01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.image01).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_segmentMC1, new cjs.Rectangle(0,0,187,133), null);


(lib.level01_片段元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.segment15 = new lib.level01_segmentMC15();
	this.segment15.parent = this;
	this.segment15.setTransform(621,91);

	this.segment14 = new lib.level01_segmentMC14();
	this.segment14.parent = this;
	this.segment14.setTransform(652,6);

	this.segment13 = new lib.level01_segmentMC13();
	this.segment13.parent = this;
	this.segment13.setTransform(537,302);

	this.segment12 = new lib.level01_segmentMC12();
	this.segment12.parent = this;
	this.segment12.setTransform(493,216);

	this.segment11 = new lib.level01_segmentMC11();
	this.segment11.parent = this;
	this.segment11.setTransform(397,270);

	this.segment10 = new lib.level01_segmentMC10();
	this.segment10.parent = this;
	this.segment10.setTransform(439,123);

	this.segment9 = new lib.level01_segmentMC9();
	this.segment9.parent = this;
	this.segment9.setTransform(273,285);

	this.segment8 = new lib.level01_segmentMC8();
	this.segment8.parent = this;
	this.segment8.setTransform(304,198);

	this.segment7 = new lib.level01_segmentMC7();
	this.segment7.parent = this;
	this.segment7.setTransform(195,224);

	this.segment6 = new lib.level01_segmentMC6();
	this.segment6.parent = this;
	this.segment6.setTransform(165,161);

	this.segment5 = new lib.level01_segmentMC5();
	this.segment5.parent = this;
	this.segment5.setTransform(223,-3);

	this.segment4 = new lib.level01_segmentMC4();
	this.segment4.parent = this;
	this.segment4.setTransform(74,295);

	this.segment3 = new lib.level01_segmentMC3();
	this.segment3.parent = this;
	this.segment3.setTransform(85,264);

	this.segment2 = new lib.level01_segmentMC2();
	this.segment2.parent = this;
	this.segment2.setTransform(0,174);

	this.segment1 = new lib.level01_segmentMC1();
	this.segment1.parent = this;
	this.segment1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.segment1},{t:this.segment2},{t:this.segment3},{t:this.segment4},{t:this.segment5},{t:this.segment6},{t:this.segment7},{t:this.segment8},{t:this.segment9},{t:this.segment10},{t:this.segment11},{t:this.segment12},{t:this.segment13},{t:this.segment14},{t:this.segment15}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_片段元件, new cjs.Rectangle(0,-3,738,354), null);


(lib.level01_主元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.prompts01 = new lib.提示空白元件();
	this.prompts01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.prompts01).wait(1));

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg5VgbaMByrAAAQAhAAAeAKQAeAKAZATQAZASASAZQATAZAKAeQAKAeAAAhMAAAAwlQAAAhgKAeQgKAegTAZQgSAZgZASQgZATgeAKQgeAKghAAMhyrAAAQgqAAgkgQQgkgPgbgcQgcgbgPgkQgQgkAAgqMAAAgwlQAAghAKgeQAKgeATgZQASgZAZgSQAZgTAegKQAegKAhAAg");
	mask.setTransform(387,175.5);

	// 圖層 4
	this.circleIts01 = new lib.圈起來空白元件();
	this.circleIts01.parent = this;

	var maskedShapeInstanceList = [this.circleIts01];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.circleIts01).wait(1));

	// 圖層 3
	this.segments01 = new lib.level01_片段元件();
	this.segments01.parent = this;

	var maskedShapeInstanceList = [this.segments01];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.segments01).wait(1));

	// 圖層 1
	this.bg = new lib.level01_bg();
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_主元件, new cjs.Rectangle(0,0,774,351), null);


(lib.星光出現 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.星光轉();
	this.instance.parent = this;
	this.instance.setTransform(4.1,91.2,0.2,0.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.53,scaleY:0.53,guide:{path:[4.1,91.2,4.3,73.3,4.3,72.8,4.9,59.2,7.1,47.5,12.8,17.4,30.7,-5.8]},alpha:1},8).to({scaleX:1,scaleY:1,guide:{path:[30.8,-5.8,32.6,-8.1,34.5,-10.3,75.1,-57.9,168.7,-73.9]}},11).to({x:366,y:-56,alpha:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,82.6,17.2,17.2);


(lib.C_prompt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// 圖層 2
	this.instance = new lib.星光出現("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0.6,-0.8,0.567,0.567,123.5,0,0,-0.4,95.4);

	this.instance_1 = new lib.星光出現("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,-0.6,0.651,0.651,163.6,0,0,0.2,95);

	this.instance_2 = new lib.星光出現("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.8,-0.7,0.709,0.709,74.9,0,0,-0.1,94.7);

	this.instance_3 = new lib.星光出現("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.6,-0.8,0.617,0.617,-25.6,0,0,0.2,94.9);

	this.instance_4 = new lib.星光出現("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.8,-0.5,0.616,0.616,30.7,0,0,0.4,94.9);

	this.instance_5 = new lib.星光出現("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.7,-0.5,0.709,0.709,-156.3,0,0,-0.3,95);

	this.instance_6 = new lib.星光出現("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.4,-0.6,0.709,0.709,-109.8,0,0,0.1,94.8);

	this.instance_7 = new lib.星光出現("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.4,-0.1,0.709,0.709,-88,0,0,-0.7,95);

	this.instance_8 = new lib.星光出現("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.6,-0.7,0.638,0.638,-73.1,0,0,0.2,95.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.3,21.5,19.3);


(lib.音量元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Module.Slider(this.volume);
		var NumberSlider01 = this.volume.OnSlider(50, 0, 100, 0, function (index, state) {
			this.display.num.text = index;
			createjs.Sound.volume = index/100;
		}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層 1
	this.display = new lib.h_數字();
	this.display.parent = this;
	this.display.setTransform(85,15.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhYBWIAAgNIBTAAIAAgJIg6AAIAAgMIA6AAIAAgJIgbAAIgbAAIAAgwIB2AAIAAAwIg0AAIAAAJIA5AAIAAAMIg5AAIAAAJIBSAAIAAANgAAHAiIAnAAIAAgLIgnAAgAgtAiIAoAAIAAgLIgoAAgAAHAOIAnAAIAAgKIgnAAgAgtAOIAoAAIAAgKIgoAAgAhVgOIAAgMICrAAIAAAMgAg7gkIAAgxIB2AAIAAAxgAgtgtIBbAAIAAgLIhbAAgAgthCIBbAAIAAgKIhbAAg");
	this.shape.setTransform(57.1,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ag1BaIAAhZIBtAAIAABWIgQAAIAAgHIhOAAIAAAKgAgmBBIBOAAIAAgSIhOAAgAgmAgIBOAAIAAgRIhOAAgAhYgMIAAgPIA4AAIgNgcIgZAAIAAgPIBAAAIAAgTIAOAAQAGABgGAEIAAAOIBAAAIAAAPIgZAAIgNAcIA3AAIAAAPgAgQgbIAjAAIAKgcIg4AAg");
	this.shape_1.setTransform(37,15.5);

	this.volume = new lib.拉桿元件();
	this.volume.parent = this;
	this.volume.setTransform(15,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.volume},{t:this.shape_1},{t:this.shape},{t:this.display}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.音量元件, new cjs.Rectangle(0,-29,116.3,58.2), null);


(lib.level01_總元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.image02 = new lib.level01_主元件();
	this.image02.parent = this;
	this.image02.setTransform(100,480);

	this.timeline.addTween(cjs.Tween.get(this.image02).wait(1));

	// 圖層 1
	this.remainingText01 = new cjs.Text("5", "48px 'Microsoft JhengHei'", "#FF0000");
	this.remainingText01.name = "remainingText01";
	this.remainingText01.textAlign = "center";
	this.remainingText01.lineHeight = 69;
	this.remainingText01.lineWidth = 46;
	this.remainingText01.alpha = 0.89803922;
	this.remainingText01.parent = this;
	this.remainingText01.setTransform(1016.7,220.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.898)").s().p("ABiDRIgJgZIBGABQAUAAAAgVIAAl1IAaAAIAAF4QgBAqgpAAIhBAAgAjMCtIB7gPIAAhnIhtAAIAAgZIBtAAIAAhHQg6AHgyACIgEgUQA9gwAghGIhhAAIAAgZID2AAIAAAZIh3AAQghA/gsAwQBdgIAygLQgNgTgUgbIAWgNQAvBAAXA1IgUAOQgPgegMgSIhAAKIAABKIBcAAIAAAZIhcAAIAABiQA4gIAxgLIAAAYQh6Aah9AOgABTB5IAAkoIAZAAIAAEog");
	this.shape.setTransform(1207.1,253.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.898)").s().p("ABABtQg1AlhCAdIgSgVQBOggAzgmQgQhFgFg9IhWALIgBgaIBWgKQgGg6AAg0IAAgdIAZAAIAAAeQAAAwAEA6ICTgSIACAYIiSASQAEA6APA9QAzgsAqg8IAUAPQgzBGg3ArQAQAuATAWQAUAWALAAQAGAAAGgEQAFgFAIgaQAGgaAEgbIAXANQgGAugOAcQgOAdgXAAQgwAAgphmgAi0DRIgJgaQAsABAIgBQAJgBAAgIIAAiDQgZAKgvAMIgJgZQAsgKAlgMIAAh3IhNAAIAAgYIBNAAIAAhVIAYAAIAABVIA/AAIAAAYIg/AAIAABvQAggLAegMIAGAWQgcANgoAOIAACLQAAAOgIAKQgIAKgiAAIgaAAgABciwIAUgQQAmAdAYAiIgVARQgcgnghgZg");
	this.shape_1.setTransform(1159.7,253.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.898)").s().p("AgKDTIAAjWIgDAAQg6B0h4BJIgSgVQB4hDAxhlIikAAIAAgYIDDAAIAAheIipAAIAAgZICpAAIAAhAIAXAAIAABAICnAAIAAAZIinAAIAABeIDAAAIAAAYIihAAQA3BlBuBFIgSAUQh4hSg2hsIgEAAIAADWg");
	this.shape_2.setTransform(1111.9,253.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.898)").s().p("AiHC+QArgMAcgVQgTgTgPgYQgMAPgRAMIgRgRQAzgmAXhOIAYAHIgMAhIBQAAIAAAYQgOAsghAnQAaANAhAEQAiAECQgBIgHAZQiRgCglgDQgjgFgggSQgpAdgfAJgAhTBeQASAfAUAQQAbgcAOgpIhCAAQgBAEgMASgAjSC6QAthZAAhpIAAh2ICGAAIAAhTIAbAAIAAAZIC0AAIAAAXIi0AAIAAAjIDGAAQgPAygUAgIgYgIQATghAEgQIitAAIAAAhIB/gKIACAYIiBAJIAAATQAAAEADAEQACAEAFAAICfAAIAAAXIijAAQgggBAAgcIAAgXIhKAFIgCgXIBMgFIAAgjIhkAAIAABbQgBBwgtBhgAARCRQAqgmgDhHIBWAAIAABXQAAAIAOAAQAKAAAEgGQAEgHABglIAXAGQgBAlgDAKQgEAIgHAGQgJAFgaABQgfgBAAgdIAAhAIgnAAQgBA8gpAog");
	this.shape_3.setTransform(1064.2,253.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.898)").s().p("AgiDMIAAl9IitAAIAAgaIGfAAIAAAaIjYAAIAABmQB8BDAsAmIgPAXQg+gzhbgwIAAD6g");
	this.shape_4.setTransform(967.9,253.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.898)").s().p("ABwDRIgKgbQAQACAwAAQAFAAAFgEQADgFAAgGIAAl4IAZAAIAAGAQABAOgJAJQgKAIgLABIgcABIgjgBgAhHDRIAAh9QgoA6hLAzIgRgSIAfgWQAQgMAOgNQAQgNANgOQANgOAPgVQAOgVAAgFIAAiMIh7AAIAAgYIB7AAIAAgpQg6AFgtABIgLgZQCGgBBdgYIANAVQg2AOgvAFIAAAtIB4AAIAAAYIh4AAIAACaQBGAvApAtIgQATQgxgzguggIAAB/gABmB6IAAk0IAYAAIAAE0gAjJAzQAjgLAfgNIAAg1Ig4AAIAAgYIA4AAIAAgeIAYAAIAABgIAUgJIAAAaQgrAVg7ATgAAaA6QgkAAAAghIAAhpIAYAAIAAAeIA7AAIAAAYIg7AAIAAAzQAAAJAKAAIAxAAIAAAYg");
	this.shape_5.setTransform(919.2,253.4);

	this.secondMC = new lib.倒數秒數();
	this.secondMC.parent = this;
	this.secondMC.setTransform(1100,580);

	this.promptBtn01 = new lib.提示按鈕();
	this.promptBtn01.parent = this;
	this.promptBtn01.setTransform(1100,730);

	this.image01 = new lib.level01_主元件();
	this.image01.parent = this;
	this.image01.setTransform(100,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.image01},{t:this.promptBtn01},{t:this.secondMC},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.remainingText01}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.level01_總元件, new cjs.Rectangle(100,77,1133.9,754), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{載入:0,開場:1,關卡01:2});

	// timeline functions:
	this.frame_0 = function() {
		function DynamicLoad(pSrc, pComplete) {
			if (CheckLoadFile(pSrc)) {
				if (pComplete) {
					pComplete();
				}
			} else {
				window.CaiLoadFile = window.CaiLoadFile || [];
				window.CaiLoadFile.push(pSrc);
				var script = CreateJS(pSrc);
				script.onload = script.onreadystatechange = function () {
					if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
						if (pComplete) {
							pComplete();
						}
					}
					script.onload = script.onreadystatechange = null;
				}
			}
		}
		
		function CheckLoadFile(pSrc) {
			var mCaiLoadFile = window.CaiLoadFile;
			if (mCaiLoadFile) {
				for (var i = 0; i < mCaiLoadFile.length; i++) {
					if (mCaiLoadFile[i] == pSrc) {
						return true;
					}
				}
			}
			return false;
		}
		
		function CreateJS(pSrc) {
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.setAttribute("src", pSrc);
			document.getElementsByTagName("head")[0].appendChild(script);
			return script;
		}
		
		createjs.DynamicLoad = DynamicLoad;
		this.stop();
		var script01 = ["script/common.js"];
		ScriptLoad.call(this,script01,0)
		function ScriptLoad(pScript,index) {
			if(index < pScript.length){
				createjs.DynamicLoad(script01[index],ScriptLoad.bind(this,pScript,index+1));
			}else{
				init.call(this)
			}
		}
		
		function init() {
			this.gotoAndStop("開場");
		}
	}
	this.frame_1 = function() {
		this.goBtn01.on("click", function () {
			this.gotoAndStop("關卡01");
		}, this, true)
	}
	this.frame_2 = function() {
		/*var imageSrcDatas01 = {
			segment1: "images/level01_segment1.png",
			segment2: "images/level01_segment2.png",
			segment3: "images/level01_segment3.png",
			segment4: "images/level01_segment4.png",
			segment5: "images/level01_segment5.png",
			segment6: "images/level01_segment6.png",
			segment7: "images/level01_segment7.png",
			segment8: "images/level01_segment8.png",
			segment9: "images/level01_segment9.png",
			segment10: "images/level01_segment10.png",
			segment11: "images/level01_segment11.png",
			segment12: "images/level01_segment12.png",
			segment13: "images/level01_segment13.png",
			segment14: "images/level01_segment14.png",
			segment15: "images/level01_segment15.png",
			bg01: "images/level01_bg01.png"
		};
		var imageDatas01 = {};
		var objDatas01 = {
			segment1: [this.content01.image01.segments01.segment1.image01, this.content01.image02.segments01.segment1.image01],
			segment2: [this.content01.image01.segments01.segment2.image01, this.content01.image02.segments01.segment2.image01],
			segment3: [this.content01.image01.segments01.segment3.image01, this.content01.image02.segments01.segment3.image01],
			segment4: [this.content01.image01.segments01.segment4.image01, this.content01.image02.segments01.segment4.image01],
			segment5: [this.content01.image01.segments01.segment5.image01, this.content01.image02.segments01.segment5.image01],
			segment6: [this.content01.image01.segments01.segment6.image01, this.content01.image02.segments01.segment6.image01],
			segment7: [this.content01.image01.segments01.segment7.image01, this.content01.image02.segments01.segment7.image01],
			segment8: [this.content01.image01.segments01.segment8.image01, this.content01.image02.segments01.segment8.image01],
			segment9: [this.content01.image01.segments01.segment9.image01, this.content01.image02.segments01.segment9.image01],
			segment10: [this.content01.image01.segments01.segment10.image01, this.content01.image02.segments01.segment10.image01],
			segment11: [this.content01.image01.segments01.segment11.image01, this.content01.image02.segments01.segment11.image01],
			segment12: [this.content01.image01.segments01.segment12.image01, this.content01.image02.segments01.segment12.image01],
			segment13: [this.content01.image01.segments01.segment13.image01, this.content01.image02.segments01.segment13.image01],
			segment14: [this.content01.image01.segments01.segment14.image01, this.content01.image02.segments01.segment14.image01],
			segment15: [this.content01.image01.segments01.segment15.image01, this.content01.image02.segments01.segment15.image01],
			bg01: [this.content01.image01.bg, this.content01.image02.bg]
		};
		
		function load() {
			var temp = [];
			for (var ss in imageSrcDatas01) {
				temp.push({
					id: ss,
					src: imageSrcDatas01[ss]
				});
			}
			loadImage(temp, 0, function (pDatas01, pIndex, pImg) {
				console.log(pIndex/(pDatas01.length-1));
				imageDatas01[pDatas01[pIndex].id] = pImg;
				if (pIndex >= pDatas01.length - 1) {
					for (var ss in objDatas01) {
						var a = objDatas01[ss];
						for (var i = 0; i < a.length; i++) {
							var bmp01 = new createjs.Bitmap(imageDatas01[ss]);
							a[i].addChild(bmp01);
						}
					}
					init.call(this);
				}
			}.bind(this));
		}
		function loadImage(pDatas01, pIndex, pFun) {
			var img = new Image();
			img.src = pDatas01[pIndex].src;
			img.onload = function () {
				pFun(pDatas01, pIndex, img);
				if (pIndex + 1 < pDatas01.length) {
					loadImage(pDatas01, pIndex + 1, pFun);
				}
			}
		}
		*/
		//以上是多層式載入方法，由於可擴充的領域很廣，時程可能會非常長。
		
		var datas01 = ["segment1", "segment2", "segment3", "segment4", "segment5", "segment6", "segment7", "segment8", "segment9", "segment10", "segment11", "segment12", "segment13", "segment14", "segment15"];
		//片段名稱
		var itemLength = 5;
		//項目數
		var item = new Array(itemLength);
		//秀出項目數索引號碼
		var bool = new Array(itemLength);
		//開啟的項目
		var count = 0;
		//剩餘數量
		
		var listener01 = new Array(itemLength);
		var listener02 = new Array(itemLength);
		var promptListener01;
		//偵測事件
		
		var time = 0;
		var timeID = 0;
		//遊戲倒數時間
		
		var music;
		createjs.Sound.alternateExtensions = ["mp3"];
		var sounds = [{
			id: "music",
			src: "music.mp3"
		}, {
			id: "selected",
			src: "selected.mp3"
		}, {
			id: "startReciprocal",
			src: "startreciprocal.mp3"
		}, {
			id: "go",
			src: "go.mp3"
		}, {
			id: "prompt",
			src: "prompt.mp3"
		}, {
			id: "lose",
			src: "lose.mp3"
		}, {
			id: "win",
			src: "win.mp3"
		}];
		
		createjs.Sound.addEventListener("fileload", handleFileLoad);
		createjs.Sound.registerSounds(sounds, "sounds/");
		
		function handleFileLoad(event) {
		
		}
		
		this.onInitFrame(function () {
			//load.call(this);
			init.call(this);	
		}, this);
		
		
		
		function init() {
			this.content01.mouseEnabled = false;
		
			time = 150;
			second.call(this);
			count = itemLength;
			remaining.call(this);
		
			item = datas01.randomIndex(itemLength);
		
			for (var i = 0; i < datas01.length; i++) {
				var id = datas01[i];
				var mc01 = this.content01.image01.segments01[id];
				var mc02 = this.content01.image02.segments01[id];
				mc01.visible = false;
				mc02.visible = false;
				mc01.touch01.visible = false;
				mc02.touch01.visible = false;
		
				mc01.image01.visible = false;
		
				mc01.touch01.cursor = "arrow";
				mc02.touch01.cursor = "arrow";
			}
		
			for (var i = 0; i < item.length; i++) {
				bool[i] = false;
				var id = datas01[item[i]];
		
				var mc01 = this.content01.image01.segments01[id];
				var mc02 = this.content01.image02.segments01[id];
		
				mc01.visible = true;
				mc02.visible = true;
				mc01.touch01.visible = true;
				mc02.touch01.visible = true;
			}
		
		
			this.content01.promptBtn01.gotoAndStop(0);
			startReciprocal.call(this, 3);
		}
		
		function startReciprocal(pValue) {
			var startReciprocal01 = new lib.C_startReciprocal01();
			this.content01.addChild(startReciprocal01);
			startReciprocal01.gotoAndStop(0);
			var startTime = pValue;
			var startTimeID = setInterval(function () {
				startTime -= 1;
				reciprocal.call(this);
			}.bind(this), 1000);
			reciprocal.call(this);
		
			function reciprocal() {
				startReciprocal01.secondText.text = startTime;
				if (startTime <= 0) {
					createjs.Sound.play("go");
					clearInterval(startTimeID);
					startReciprocal01.gotoAndPlay(0);
					start.call(this);
				} else {
					createjs.Sound.play("startReciprocal");
				}
			}
		}
		
		function start() {
			music = createjs.Sound.play("music", {
				loop: -1
			});
			this.content01.mouseEnabled = true;
			timeID = setInterval(function () {
				time -= 1;
				second.call(this);
			}.bind(this), 1000);
		
			for (var i = 0; i < item.length; i++) {
				var id = datas01[item[i]];
		
				var mc01 = this.content01.image01.segments01[id];
				var mc02 = this.content01.image02.segments01[id];
				listener01[i] = mc01.touch01.on("click", click, this, false, {
					index: i
				});
				listener02[i] = mc02.touch01.on("click", click, this, false, {
					index: i
				});
			}
			this.content01.promptBtn01.gotoAndPlay(0);
			promptListener01 = this.content01.promptBtn01.on("click", promptBtn01_fun, this);
			function click(e, data) {
				createjs.Sound.play("selected");
				var index = data.index;
				bool[index] = true;
				var id = datas01[item[index]];
				var mc01 = this.content01.image01.segments01[id];
				var mc02 = this.content01.image02.segments01[id];
				mc01.touch01.visible = false;
				mc02.touch01.visible = false;
				var xx = mc01.x + mc01.touch01.x;
				var yy = mc01.y + mc01.touch01.y;
				var circleIt01 = createjs.createMC(lib.C_circleIt01, xx, yy);
				var circleIt02 = createjs.createMC(lib.C_circleIt01, xx, yy);
				this.content01.image01.circleIts01.addChild(circleIt01);
				this.content01.image02.circleIts01.addChild(circleIt02);
				mc01.touch01.off("click", listener01[index]);
				mc02.touch01.off("click", listener02[index]);
				count--;
				remaining.call(this);
			}
		
			function promptBtn01_fun(e) {
				if (this.content01.promptBtn01.currentFrame == this.content01.promptBtn01.totalFrames - 1) {
					createjs.Sound.play("prompt");
					for (var i = 0; i < bool.length; i++) {
						if (!bool[i]) {
							var id = datas01[item[i]];
							var mc01 = this.content01.image01.segments01[id];
							var xx = mc01.x + mc01.touch01.x;
							var yy = mc01.y + mc01.touch01.y;
							var prompt02 = createjs.createMC(lib.C_prompt01, xx, yy);
							this.content01.image02.prompts01.addChild(prompt02);
							break;
						}
					}
					this.content01.promptBtn01.gotoAndPlay(0);
					time -= 20;
					second.call(this);
				}
			}
		
		
		}
		
		function stop() {
			this.content01.mouseEnabled = false;
			this.content01.promptBtn01.stop();
			this.content01.promptBtn01.off("click", promptListener01);
		}
		
		
		function second() {
			this.content01.secondMC.secondText.text = time;
			if (time <= 20) {
				this.content01.promptBtn01.gotoAndStop(0);
			}
			if (time <= 0) {
				results.call(this, "lose");
			}
		}
		
		function results(pValue) {
			music.stop();
			if (pValue == "lose") {
				createjs.Sound.play("lose");
			} else if (pValue == "win") {
				createjs.Sound.play("win");
			}
			clearInterval(timeID);
			stop.call(this);
			var showResults01 = new lib.C_showResults01();
			this.showResults01.addChild(showResults01);
			showResults01.box01.againBtn01.on("click", function () {
				remove.call(this);
				init.call(this);
				this.showResults01.removeChild(showResults01);
			}, this, true);
			showResults01.onInitFrame(function () {
				showResults01.box01.gotoAndStop(pValue);
			});
		}
		
		function remove() {
			this.content01.image01.prompts01.removeChildAll();
			this.content01.image01.circleIts01.removeChildAll();
			this.content01.image02.prompts01.removeChildAll();
			this.content01.image02.circleIts01.removeChildAll();
			for (var i = 0; i < item.length; i++) {
				var id = datas01[item[i]];
				var mc01 = this.content01.image01.segments01[id];
				var mc02 = this.content01.image02.segments01[id];
				mc01.image01.visible = false;
				mc01.touch01.off("click", listener01[i]);
				mc02.touch01.off("click", listener02[i]);
			}
		}
		
		function remaining() {
			this.content01.remainingText01.text = count;
			if (count <= 0) {
				results.call(this, "win");
			}
		}
		//以上分類的方法，由於太多，所以我放棄(懶)加註，原因XXXXXXXXXXXXXXXXXXX，太麻煩。
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// 圖層 2
	this.instance = new lib.音量元件();
	this.instance.parent = this;
	this.instance.setTransform(1129.5,919.5,1,1,0,0,0,-0.5,-0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	// 圖層 3
	this.showResults01 = new lib.顯示結果空白元件();
	this.showResults01.parent = this;
	this.showResults01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.showResults01).wait(2).to({_off:false},0).wait(1));

	// 圖層 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAABQQglAAgWgWQgXgWAAgiQAAgiAXgYQAXgXAkAAQAmAAAWAWQAXAXAAAiQAAAigXAYQgWAWgjAAIgDAAgAgnAAQgBAoAoAAQAoAAABgoQgBgpgoAAQgoAAABApg");
	this.shape.setTransform(963.7,374.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiOCrQAtgFAXgNQgLgOgKgSIgVAYIgTggQgJA4gVAzIg7goQAlhKAAibIAAheICTAAIAAhOIBCAAIAAASICeAAIAAAqIieAAIAAASIDBAAQgEBEgOAvIhAgMQANgfAEgXIiKAAIAAATIBpgEIABAmIhqAEIAAABQAAAPARAAICAAAIAAApIiZAAQg3AAAAg0IAAgDIhNADIAAAKQAABkgHAFIAAAAIAAAAQAFgDATgYQATgbAJgeIAuAOQgDAOgFAKIBNAAIAAAiQgJAzgZAeQAWAKApABIgmgbQAfgbAAhGIAAgFIB4AAIAAA/QAAANANAAIAZAAIAAAnIguAAQgpAAAAgpIAAgfIgZAAIAAACQAAA2gcAeIBOgBQAnAAAggCIgHAyIhUABQhfAAgdgHQgcgGgSgLQgkAYgtALgAhCBUQAKAVATAUQARgUAFgcIgvAAgAh8hGIBNgDIAAgWIhNAAg");
	this.shape_1.setTransform(915.8,376.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AjZCpQBChBAJhTIBAAAQADAZALARQAxgZAxguQAzgtARggIkaAAIAAg9ICQAAIgMgbQgIgRgKgOIBEgLQAMAUAWAxICOgBIAAA4QgZAxg7A5Qg9A7hCAlQAVAeBkAAQBKAAA4gGIgNBDIhSAAQh7AAgqgXQgsgXgUhAQAAAPgUAqQgUAqgXAZg");
	this.shape_2.setTransform(868,376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjGDUIAAmnIGMAAIAAFkQABA/g+AAIg5AAIgOg9IAyACQATAAgBgTIAAkaIkLAAIAAFsgAhhB7IAAieIDCAAIAACegAgmBJIBLAAIAAg8IhLAAgAhyhGIAAg0IDmAAIAAA0g");
	this.shape_3.setTransform(820,376.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgoDOIAAjcQgTAYgtAkQgsAjgeARIglg8QA1gWBAg5QBAg5AUgxIi6AAIAAg6IGWAAIAAA6IiTAAQgNAjgUAaIAAEkgAAkgyIAvghQBNBEA4BHIg1AxQg8hchDg/g");
	this.shape_4.setTransform(772,377.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ACeDdIAAgTIixAAIAAATIg6AAIAAmpIElAAIAAGpgAgTCUICxAAIAAkrIixAAgAilDdIAAjVQgLAegQAXIgXhNQA5haANhyIA6ASQgHAugMApIAAFQgAAAB/IAAiIIApAAIAAgpIgyAAIAAgyIAyAAIAAglIA3AAIAAAlIAzAAIAAAyIgzAAIAAApIArAAIAACIgAAwBRIAqAAIAAgtIgqAAg");
	this.shape_5.setTransform(723.2,376);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag7CvQgagVgIgqIAxgZQAEAgAMANQAJAMATAAQATAAANgQQANgXAAgqQAAg0gLgSQgMgRgSAAQgcgBgJAtIgxAAIAAjTIChAAIAAAxIhwAAIAABjQAPgYAbAAQAoAAAWAbQAXAeAABJQAAA2gVAiQgYApgxAAQgmAAgVgRg");
	this.shape_6.setTransform(687.9,376.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgxAyQAmgYALgVIghAAIAAhYIBTAAIAAA7QAAA0hFA3g");
	this.shape_7.setTransform(651.1,376.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AglDdIAAibIifAAIAAjWICfAAIAAhIIBDAAIAABIICnAAIAADWIinAAIAACbgAAeALIBnAAIAAhnIhnAAgAiFALIBgAAIAAhnIhgAAg");
	this.shape_8.setTransform(604,376);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ACWDYIAAgNIkrAAIAAANIg7AAIAAmvIGhAAIAAGvgAiVCbIErAAIAAlDIkrAAgAh7CMIAAiaID4AAIAACagAhGBtICPAAIAAhcIiPAAgAg0BeIAAg/IBrAAIAAA/gAgNBIIAcAAIAAgTIgcAAgAiLgbIAAglIBvAAIgFgOIhVAAIAAhLIDsAAIAABLIhcAAIAFAOIBtAAIAAAlgAg/hrIB+AAIAAgRIh+AAg");
	this.shape_9.setTransform(555.9,376.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Ag5DMIAAlaIiQAAIAAg9IGSAAIAAA9Ii+AAIAAB0IAegoQBKAgBLA2IgpA6QhHg6hDgjIAADbg");
	this.shape_10.setTransform(507.7,377.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AjQDOIAAg9ICgAAIAAleIBCAAIAACNICdAAIAAA9IidAAIAACUIC/AAIAAA9g");
	this.shape_11.setTransform(459.9,374.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("ACCDdIAAggIkCAAIAAAgIhCAAIAAjDIBCAAIAABrIBfAAIAAiJIiVAAIAAirIBBAAIAAB0IBUAAIAAihIBCAAIAAChIBVAAIAAh0IBCAAIAACrIiXAAIAACJIBhAAIAAhrIBBAAIAADDg");
	this.shape_12.setTransform(411.9,376);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("ABeDCQgagagNggQglAdg8AXIghg6QBCgUAogdQgWg6gGg6IgzAGIgEguIgnAAIAABJQAagGAfgJIACA3QgVAHgmAJIAABjQgBA9g6AAIgsAAIgLg+QAaADAMAAQAQAAAAgUIAAhDQggAIgeAFIgHg/QAbAAAqgKIAAhTIg/AAIAAg3IA/AAIAAhWIA8AAIAABWIA2AAIAAAqIAjgCQgEgsgBhTIA8AAQACBKACAuICWgPIAGA4IiWAQQAEAoAOAsQAqgiAeg0IAtAhQgnBBg3AvQABAIAPAWQAPAWAKAAQAQAAADhSIA4AZQgEA0gOAjQgOAhglAAQgfAAgagYgABLi1IAogiQAmAZAjAiIgrAqQgdgjgpggg");
	this.shape_13.setTransform(363.9,375.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgoDdIAAjoID1AAIAACqQAAA6gyAAIg8AAIgLgwIAvACQAPAAAAgOIAAgFIh/AAIAABFgAATByIB/AAIAAgVIh/AAgAATA3IB/AAIAAgTIh/AAgAjKDdIAAiuICKAAIAACpIg2AAIAAgUIgeAAIAAAZgAiUCWIAeAAIAAg5IgeAAgAjKAVIAAgwICKAAIAAAwgAg3gbIAAgxIBoAAIAAgUIhWAAIAAgpIBWAAIAAgRIhhAAIAAguIBhAAIAAgUIA+AAIAAAUIBnAAIAAAuIhnAAIAAARIBWAAIAAApIhWAAIAAAUIBuAAIAAAxgAjKgxIAAgxICKAAIAAAxgAjch2IAAg1IA5AAQgFgRgPgaIA/gGQAMAVAIAcIAsAAIAAA1g");
	this.shape_14.setTransform(315.9,376);

	this.goBtn01 = new lib.go按鈕();
	this.goBtn01.parent = this;
	this.goBtn01.setTransform(640,560);
	new cjs.ButtonHelper(this.goBtn01, 0, 1, 2, false, new lib.go按鈕(), 3);

	this.content01 = new lib.level01_總元件();
	this.content01.parent = this;
	this.content01.setTransform(0,-1.5,1,1,0,0,0,0,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.goBtn01},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.content01}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1280,
	height: 960,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/level01_bg01.png", id:"level01_bg01"},
		{src:"images/level01_segment1.png", id:"level01_segment1"},
		{src:"images/level01_segment10.png", id:"level01_segment10"},
		{src:"images/level01_segment11.png", id:"level01_segment11"},
		{src:"images/level01_segment12.png", id:"level01_segment12"},
		{src:"images/level01_segment13.png", id:"level01_segment13"},
		{src:"images/level01_segment14.png", id:"level01_segment14"},
		{src:"images/level01_segment15.png", id:"level01_segment15"},
		{src:"images/level01_segment2.png", id:"level01_segment2"},
		{src:"images/level01_segment3.png", id:"level01_segment3"},
		{src:"images/level01_segment4.png", id:"level01_segment4"},
		{src:"images/level01_segment5.png", id:"level01_segment5"},
		{src:"images/level01_segment6.png", id:"level01_segment6"},
		{src:"images/level01_segment7.png", id:"level01_segment7"},
		{src:"images/level01_segment8.png", id:"level01_segment8"},
		{src:"images/level01_segment9.png", id:"level01_segment9"},
		{src:"sounds/btn_hover.mp3", id:"btn_hover"},
		{src:"sounds/ok.mp3", id:"ok"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;