(function () {
    var objectAssign = function (pValueA, pValueB) {
        for (var temp in pValueB) {
            pValueA[temp] = pValueB[temp];
        }
    }
    createjs.objectAssign = objectAssign;
}());

(function () {
    var obj = {
        randomIndex: function (count) {
            var temp = [];
            for (var i = 0; i < this.length; i++) {
                temp[i] = i;
            }
            temp.sort(function (a, b) {
                return 0.5 - Math.random()
            });
            return temp.splice(0, Math.min(count || this.length, this.length));
        }
    };
    createjs.objectAssign(Array.prototype, obj);
}());

(function () {
    var radio = function () {
        this.old_index = -1;
        this.index = -1;
        this.fun = null;
        this.select = function (i) {
            this.old_index = this.index;
            this.index = i;
            if (this.fun != null) {
                this.fun.call(this, this.old_index, this.index);
            }
        }
    }
    createjs.radio = radio;
}());

(function () {
    var numberCrop = function (pValue, pMin, pMax) {
        if (pValue < pMin) {
            return pMin;
        }
        if (pValue > pMax) {
            return pMax;
        }
        return pValue
    }
    createjs.numberCrop = numberCrop;
}());

(function () {
    var createMC = function (pLib, pX, pY) {
        var mc = new pLib;
        mc.x = pX;
        mc.y = pY;
        return mc;
    }
    createjs.createMC = createMC;
}());

(function () {
    var initFrame = {
        onInitFrame: function (listener, scope, data, useCapture) {
            var listener01 = this.on("tick", listener, scope, true, useCapture);
            return listener01;
        },
        offInitFrame: function (listener, useCapture) {
            this.off("tick", listener, useCapture);
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, initFrame);
}());

(function () {
    var removeChildAll = {
        removeChildAll: function () {
            while (this.numChildren > 0) {
                this.removeChildAt(0);
            }
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, removeChildAll);
}());

//拖曳
(function () {
    var Drag = {
        DragBool: false,
        DragOrigin: new createjs.Point(),
        startDrag: function (rangeDrag, fun) {
            this.rangeDrag = rangeDrag || null;
            if (!this.DragBool) {
                this.DragBool = true;
                this.DragOrigin.x = this.x;
                this.DragOrigin.y = this.y;
                var Offset = this.globalToLocal(stage.mouseX, stage.mouseY);
                if (this.rotation != 0) {
                    Offset = Offset.rotate(this.rotation * createjs.Angle.PI180);
                }
                this._Drag_listener = stage.on("stagemousemove", mousemove, this);
                if (fun) {
                    fun("start");
                }

                function mousemove(e) {
                    var tempPoint = this.parent.globalToLocal(e.stageX, e.stageY);
                    if (this.rangeDrag == null) {
                        this.x = tempPoint.x - Offset.x;
                        this.y = tempPoint.y - Offset.y;
                    } else {
                        this.x = createjs.numberCrop(tempPoint.x - Offset.x, this.rangeDrag.x, this.rangeDrag.x + this.rangeDrag.width);
                        this.y = createjs.numberCrop(tempPoint.y - Offset.y, this.rangeDrag.y, this.rangeDrag.y + this.rangeDrag.height);
                    }
                    if (fun) {
                        fun("update");
                    }
                }
            }
        },
        stopDrag: function () {
            if (this.DragBool) {
                this.DragBool = false;
                stage.off("stagemousemove", this._Drag_listener);
                delete this._Drag_listener;
            }
        },
        rangeDrag: null
    };
    createjs.objectAssign(createjs.DisplayObject.prototype, Drag);
}());

(function () {
    var hasStage = {
        hasStage: function () {
            var temp = this;
            while (temp) {
                temp = temp.parent;
                if (temp == stage) {
                    return true;
                }
            }
            return false
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, hasStage);
}());

(function () {
    var removeStage = {
        onRemoveStage: function (listener, scope, once, data, useCapture) {
            once = once != undefined ? once : false;
            var bool = this.hasStage();
            var listener01 = stage.on("tick", function (e) {
                var hasBool = this.hasStage();
                if (bool != hasBool) {
                    if (!hasBool) {
                        console.log("移除");
                        listener.call(scope, data);
                        if (once) {
                            e.remove();
                        }
                    }
                    bool = hasBool;
                }
            }, this, false, useCapture);
            return listener01;
        },
        offRemoveStage: function (listener, useCapture) {
            stage.off("tick", listener, useCapture);
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, removeStage);
}());

createjs.Module = createjs.Module || {};
//滑塊組件
(function () {
    var Slider = function (pMC) {
        var OnSlider = function (pNum, pMin, pMax, pNumP, pFun) {
            pNum = pNum != undefined ? pNum : 0;
            pMin = pMin != undefined ? pMin : 0;
            pMax = pMax != undefined ? pMax : 100;
            pNumP = pNumP != undefined ? pNumP : 20;
            
            this._SliderMin = pMin;
            this._SliderMax = pMax;
            this._SliderNumP = pNumP;
            this._SliderProgress = (pNum - this._SliderMin) / (this._SliderMax - this._SliderMin);

            this._SliderA = pMin;
            this._SliderB = pMax;

            var radio01 = new createjs.radio();
            radio01.fun = function (old_index, index) {
                if (old_index != index) {
                    if (pFun) {
                        pFun(index, "update");
                    }
                }
            }.bind(this);

            this._SliderListener = this.btn.touch.on("mousedown", mousedown1, this);

            function mousedown1(e) {
                var rateS = (this._SliderA - this._SliderMin) / (this._SliderMax - this._SliderMin);
                var rate = (this._SliderB - this._SliderA) / (this._SliderMax - this._SliderMin);
                var ww = this.bar.nominalBounds.width * this.bar.scaleX;
                this.btn.startDrag(new createjs.Rectangle(this.bar.x + rateS * ww, this.btn.y, rate * ww, 0), function (state) {
                    if (state == "update") {
                        this._SliderProgress = (this.btn.x - this.bar.x) / ww;
                        radio01.select(value());
                    } else if (state == "start") {
                        if (pFun) {
                            pFun(value(), "mousedown");
                        }
                    }
                }.bind(this));
                
                var listener = stage.on("stagemouseup", mouseup, this);
                function mouseup(e) {
                    stage.off("stagemouseup", listener);
                    this.btn.stopDrag();    
                    if (pFun) {
                        pFun(value(), "mouseup");
                    }
                }
            }

            this._ModuleRemoveStageListener = this.onRemoveStage(function (data) {
                this.OffSlider();
            }, this, false);

            var set = function (pValue, pDuration) {
                pDuration = pDuration != undefined ? pDuration : 0;
                var temp = createjs.numberCrop(createjs.numberCrop(pValue, this._SliderMin, this._SliderMax), this._SliderA, this._SliderB);
                radio01.select(Number(temp.toFixed(this._SliderNumP)));
                var ww = this.bar.nominalBounds.width * this.bar.scaleX;
                this._SliderProgress = (temp - this._SliderMin) / (this._SliderMax - this._SliderMin);
                if (pDuration == 0) {
                    this.btn.x = this.bar.x + ww * this._SliderProgress;
                } else {
                    this.btn.touch.visible = false;
                    createjs.Tween.get(this.btn).to({
                        x: this.bar.x + ww * this._SliderProgress
                    }, pDuration, createjs.Ease.none).call(function () {
                        this.btn.touch.visible = true;
                    }.bind(this));
                }
            }.bind(this);

            var value = function (pNumP) {
                pNumP = pNumP != undefined ? pNumP : this._SliderNumP;
                var temp = this._SliderMin + (this._SliderMax - this._SliderMin) * this._SliderProgress;
                return Number(temp.toFixed(pNumP));
            }.bind(this);

            var limit = function (pMinNum, pMaxNum) {
                this._SliderA = pMinNum;
                this._SliderB = pMaxNum;
                var rateS = (this._SliderA - this._SliderMin) / (this._SliderMax - this._SliderMin);
                var rateE = (this._SliderB - this._SliderMin) / (this._SliderMax - this._SliderMin);
                if (this._SliderProgress < rateS) {
                    set(this._SliderA);
                } else if (this._SliderProgress > rateE) {
                    set(this._SliderB);
                }
            }.bind(this);

            set(pNum);
            return {
                set: set,
                value: value,
                limit: limit
            };
        };
        pMC.OnSlider = OnSlider.bind(pMC);
        var OffSlider = function () {
            this.btn.touch.off("mousedown", this._SliderListener);
            delete this._SliderListener;
            this.offRemoveStage(this._ModuleRemoveStageListener);
            delete this._ModuleRemoveStageListener;
            delete this._SliderNum;
            delete this._SliderMin;
            delete this._SliderMax;
            delete this._SliderNumP;
            delete this._SliderA;
            delete this._SliderB;
            delete this._SliderProgress;
        }
        pMC.OffSlider = OffSlider.bind(pMC);
    }
    createjs.Module.Slider = Slider;
}());

(function () {
    var NumberSlider = function (pMC) {
        this.Slider(pMC);
        var OnNumberSlider = function (pNum, pMin, pMax, pNumP, pFun) {
            function set(index, state) {
                this.NumberSliderShow(index);
                if (pFun) {
                    pFun(index, state);
                }
            }
            return this.OnSlider(pNum, pMin, pMax, pNumP, set.bind(this));
        }
        pMC.OnNumberSlider = OnNumberSlider.bind(pMC);

        var NumberSliderShow = function (pValue) {
            this.btn.display.num.text = pValue;
        }
        pMC.NumberSliderShow = NumberSliderShow.bind(pMC);

        var OffNumberSlider = function () {
            this.OffSlider();
        }
        pMC.OffNumberSlider = OffNumberSlider.bind(pMC);
    };
    createjs.Module.NumberSlider = NumberSlider;
}());