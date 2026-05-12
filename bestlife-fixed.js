(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.pic1 = function () {
    this.initialize(img.pic1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 500, 417);

  (lib.pic2 = function () {
    this.initialize(img.pic2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 500, 417);

  (lib.pic3 = function () {
    this.initialize(img.pic3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 500, 417);

  (lib.pic4 = function () {
    this.initialize(img.pic4);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 500, 316);

  (lib.pic5 = function () {
    this.initialize(img.pic5);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 340, 199); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed,
      ),
    );
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

  (lib.whitebg = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
    this.shape.setTransform(150, 125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.whitebg,
    new cjs.Rectangle(0, 0, 300, 250),
    null,
  );

  (lib.txt53 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgkAxQgQgRAAggQAAgeASgSQASgRAeAAQAUAAATAIIgKAWQgOgHgPAAQgQAAgLALQgLAMAAATQAAAVAJALQAIALAQAAIARgBIAAgbIgYAAIAAgWIAzAAIAABCQgNAEgLABQgLACgLAAQgcAAgPgRg",
      );
    this.shape.setTransform(54.175, 0.475);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAXBAIg4hgIAAAAIABAkIAAA8IgYAAIAAh/IAjAAIA3BfIAAAAIgBgiIAAg9IAYAAIAAB/g",
      );
    this.shape_1.setTransform(40.55, 0.475);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgNBAIAAh/IAbAAIAAB/g");
    this.shape_2.setTransform(30.275, 0.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgkAxQgQgRAAggQAAgeASgSQASgRAeAAQAUAAATAIIgKAWQgOgHgPAAQgQAAgLALQgLAMAAATQAAAVAJALQAIALAQAAIARgBIAAgbIgYAAIAAgWIAzAAIAABCQgNAEgLABQgLACgLAAQgcAAgPgRg",
      );
    this.shape_3.setTransform(20.625, 0.475);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgkAxQgQgRAAggQAAgeASgSQASgRAeAAQAUAAATAIIgKAWQgOgHgPAAQgQAAgLALQgLAMAAATQAAAVAJALQAIALAQAAIARgBIAAgbIgYAAIAAgWIAzAAIAABCQgNAEgLABQgLACgLAAQgcAAgPgRg",
      );
    this.shape_4.setTransform(7.625, 0.475);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AgNBAIAAh/IAbAAIAAB/g");
    this.shape_5.setTransform(-1.675, 0.475);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag1BAIAAh/IApAAQAeAAASAQQARARAAAeQABAfgTAQQgSARghAAgAgZAqIAMAAQAmAAAAgqQAAgpgkAAIgOAAg",
      );
    this.shape_6.setTransform(-11, 0.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgsAxQgQgRAAggQAAgfAQgRQAPgRAdAAQAeAAAPARQAQARAAAfQAAAggQARQgQARgdAAQgdAAgPgRgAgXggQgJALAAAVQAAAVAIALQAJALAPAAQAgAAAAgrQAAgrggAAQgPAAgIALg",
      );
    this.shape_7.setTransform(-29.725, 0.475);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAXBAIg3hgIgBAAIACAkIAAA8IgZAAIAAh/IAjAAIA2BfIABAAIgCgiIAAg9IAZAAIAAB/g",
      );
    this.shape_8.setTransform(-44.2, 0.475);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAVQgGgIAAgNQAAgNAGgHQAHgHALAAQAMAAAHAHQAGAIAAAMQAAANgGAIQgHAHgMAAQgLAAgHgHg",
      );
    this.shape_9.setTransform(-59.525, 0.325);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt53,
    new cjs.Rectangle(-64.9, -14.3, 127.9, 28.5),
    null,
  );

  (lib.txt52 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgpA6IAAgZQANAGAJACQAJADAIAAQAHAAAFgEQAFgDAAgHQAAgEgCgDIgGgGIgQgIQgMgGgGgEQgFgFgEgHQgDgGAAgKQAAgRALgJQAMgKATAAQAKAAAJACIATAHIgJAVQgKgEgHgCIgNgBQgHAAgEADQgEAEAAAGQAAADACADQABADAEACIAQAJQASAJAHAHQAHAJAAANQAAARgNAKQgMAKgWAAQgUAAgQgIg",
      );
    this.shape.setTransform(44.175, 0.475);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIgtAAIAAAcIAqAAIAAAWIgqAAIAAAhIAtAAIAAAWg");
    this.shape_1.setTransform(34.4, 0.475);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBAIgegxIgOAAIAAAxIgcAAIAAh/IAmAAQAaAAAMAJQAMAKAAATQABAMgHAIQgGAIgLAFIAmA4gAgXgGIAIAAQAOAAAFgFQAGgEAAgJQAAgJgGgEQgGgEgNAAIgIAAg",
      );
    this.shape_2.setTransform(24, 0.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgNBAIAAh/IAbAAIAAB/g");
    this.shape_3.setTransform(14.275, 0.475);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAXBAIgRhCIgDgPIgDgPIgCAPIgDAPIgRBCIgfAAIghh/IAbAAIAQBFQAEATACAPIADgQIAEgQIAShHIAZAAIATBHIACAPIAEARIADgRIADgRIAQhFIAbAAIghB/g",
      );
    this.shape_4.setTransform(2.6, 0.475);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgsAxQgQgRAAggQAAgfAQgRQAPgRAdAAQAeAAAPARQAQARAAAfQAAAggQARQgQARgdAAQgdAAgPgRgAgXggQgJALAAAVQAAAVAIALQAJALAPAAQAgAAAAgrQAAgrggAAQgPAAgIALg",
      );
    this.shape_5.setTransform(-17.875, 0.475);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAXBAIg4hgIAAAAIABAkIAAA8IgYAAIAAh/IAjAAIA3BfIAAAAIgBgiIAAg9IAYAAIAAB/g",
      );
    this.shape_6.setTransform(-32.35, 0.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAVQgGgIAAgNQAAgNAGgHQAHgHALAAQAMAAAHAHQAGAIAAAMQAAANgGAIQgHAHgMAAQgLAAgHgHg",
      );
    this.shape_7.setTransform(-47.675, 0.325);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt52,
    new cjs.Rectangle(-53.1, -14.3, 104.30000000000001, 28.5),
    null,
  );

  (lib.txt51 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag0BAIAAh/IAoAAQAeAAASAQQASARAAAeQAAAfgSAQQgTARghAAgAgZAqIALAAQAnAAAAgqQAAgpgkAAIgOAAg",
      );
    this.shape.setTransform(59.6, 0.475);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIgtAAIAAAcIAqAAIAAAWIgqAAIAAAhIAtAAIAAAWg");
    this.shape_1.setTransform(47.9, 0.475);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgnBAIAAh/IAcAAIAABpIAzAAIAAAWg");
    this.shape_2.setTransform(38.025, 0.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgvBAIAAh/IAoAAQAbAAAMAIQAMAHAAARQAAAMgFAHQgFAIgJABIAAABQAMACAFAHQAGAIAAAMQAAASgNAJQgNAKgWAAgAgTAqIARAAQALAAAFgFQAFgEAAgJQAAgQgVAAIgRAAgAgTgMIAPAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgFgDgLAAIgOAAg",
      );
    this.shape_3.setTransform(26.775, 0.475);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AAhBBIgJgfIguAAIgJAfIgeAAIAtiBIAgAAIAuCBgAARALIgOguIgDgIIgQA2IAhAAg");
    this.shape_4.setTransform(14.2, 0.45);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAXBAIg3hgIgBAAIACAkIAAA8IgZAAIAAh/IAjAAIA2BfIABAAIgBgiIAAg9IAYAAIAAB/g",
      );
    this.shape_5.setTransform(0.7, 0.475);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIguAAIAAAcIArAAIAAAWIgrAAIAAAhIAuAAIAAAWg");
    this.shape_6.setTransform(-11.35, 0.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("AgXALIAAgVIAuAAIAAAVg");
    this.shape_7.setTransform(-19.5, 2.075);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgpA6IAAgZQANAGAJACQAJADAIAAQAHAAAFgEQAFgDAAgHQAAgEgCgDIgGgGIgQgIQgMgGgGgEQgFgFgEgHQgDgGAAgKQAAgRALgJQAMgKATAAQAKAAAJACIATAHIgJAVQgKgEgHgCIgNgBQgHAAgEADQgEAEAAAGQAAADACADQABADAEACIAQAJQASAJAHAHQAHAJAAANQAAARgNAKQgMAKgWAAQgUAAgQgIg",
      );
    this.shape_8.setTransform(-27.275, 0.475);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgsBAIAAh/IAqAAQAWAAANAKQAMAKgBAUQABAVgNAKQgOALgWAAIgMAAIAAAtgAgQgDIAJAAQAMAAAFgFQAHgFAAgJQAAgKgFgEQgGgFgJAAIgNAAg",
      );
    this.shape_9.setTransform(-37.55, 0.475);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgkAxQgQgRAAggQAAgeASgSQASgRAeAAQAUAAATAIIgKAWQgOgHgPAAQgQAAgLALQgLAMAAATQAAAVAJALQAIALAQAAIARgBIAAgbIgYAAIAAgWIAzAAIAABCQgNAEgLABQgLACgLAAQgcAAgPgRg",
      );
    this.shape_10.setTransform(-50.275, 0.475);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAVQgGgIAAgNQAAgNAGgHQAHgHALAAQAMAAAHAHQAGAIAAAMQAAANgGAIQgHAHgMAAQgLAAgHgHg",
      );
    this.shape_11.setTransform(-64.625, 0.325);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt51,
    new cjs.Rectangle(-70, -14.3, 138.1, 28.5),
    null,
  );

  (lib.txt42 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNANQgFgEAAgJQAAgIAFgFQAFgEAIAAQAJAAAFAEQAFAFAAAIQAAAIgFAFQgFAFgJAAQgIAAgFgFg",
      );
    this.shape.setTransform(84.025, -86.825);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape_1.setTransform(75.3, -93.15);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgpA8QgSgVAAgnQAAgXAJgSQAJgTARgKQAQgKAWAAQAXAAAXAMIgLAbIgSgIQgJgDgIAAQgSAAgKAOQgLAOAAAZQAAA0AnAAQAQAAAYgIIAAAcQgUAIgXAAQgiAAgSgVg",
      );
    this.shape_2.setTransform(62.275, -93.175);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAbBOIhDh2IgBAAIACAsIAABKIgeAAIAAibIArAAIBCB0IABAAIgCgqIAAhKIAfAAIAACbg",
      );
    this.shape_3.setTransform(46.3, -93.15);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape_4.setTransform(31.75, -93.15);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg5AAIAAAoIA1AAIAAAaIg1AAIAAA+g");
    this.shape_5.setTransform(19.9, -93.15);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgyBHIAAgeQAQAHALACQALADAJAAQAKAAAGgEQAGgEAAgIQAAgFgDgDQgDgEgFgDIgTgLQgOgHgIgFQgHgGgEgJQgEgIAAgLQAAgVAOgMQAOgMAYAAQAMAAALADQALADAMAGIgKAZQgNgFgIgCQgIgCgIAAQgJAAgFAFQgFAEAAAHQAAAEACAEQACADAFADIAUALQAWALAIAJQAIALAAAPQAAAVgPANQgPAMgbAAQgZAAgTgKg",
      );
    this.shape_6.setTransform(2.125, -93.175);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgyBHIAAgeQAQAHALACQALADAJAAQAKAAAGgEQAGgEAAgIQAAgFgDgDQgDgEgFgDIgTgLQgOgHgIgFQgHgGgEgJQgEgIAAgLQAAgVAOgMQAOgMAYAAQAMAAALADQALADAMAGIgKAZQgNgFgIgCQgIgCgIAAQgJAAgFAFQgFAEAAAHQAAAEACAEQACADAFADIAUALQAWALAIAJQAIALAAAPQAAAVgPANQgPAMgbAAQgZAAgTgKg",
      );
    this.shape_7.setTransform(-9.775, -93.175);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape_8.setTransform(-21.5, -93.15);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("AgvBOIAAibIAgAAIAACAIA/AAIAAAbg");
    this.shape_9.setTransform(-33.35, -93.15);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape_10.setTransform(-45.8, -93.15);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAaBOIgkg8IgSAAIAAA8IgiAAIAAibIAuAAQAfAAAQALQAPAMAAAXQAAAOgIALQgIAKgOAGIAuBEgAgcgIIAKAAQAQAAAHgFQAHgFAAgMQAAgLgHgFQgHgEgRAAIgJAAg",
      );
    this.shape_11.setTransform(-58.35, -93.15);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FFFFFF").s().p("AgPBOIAAibIAgAAIAACbg");
    this.shape_12.setTransform(-70, -93.15);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAdBOIgWhRIgEgSIgDgTIgCATIgEASIgVBRIgmAAIgoibIAhAAIAUBUIAHAqIADgTIAFgUIAWhXIAfAAIAXBXIAEASIADAVIADgVIAFgVIAUhUIAgAAIgoCbg",
      );
    this.shape_13.setTransform(-84.075, -93.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt42,
    new cjs.Rectangle(-96.7, -110.8, 185.8, 34),
    null,
  );

  (lib.txt41 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape.setTransform(103.25, -112.15);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAaBOIgkg8IgSAAIAAA8IgiAAIAAibIAuAAQAfAAAPALQAQAMAAAYQAAANgIALQgIAKgNAGIAuBEgAgcgIIALAAQAPAAAHgFQAHgFAAgMQAAgLgHgFQgHgEgQAAIgKAAg",
      );
    this.shape_1.setTransform(90.5, -112.15);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape_2.setTransform(76.45, -112.15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AAfBOIAAhDIg9AAIAABDIghAAIAAibIAhAAIAAA9IA9AAIAAg9IAhAAIAACbg");
    this.shape_3.setTransform(61.575, -112.15);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAdBOIgWhRIgEgSIgDgSIgCASIgEASIgVBRIgmAAIgoibIAhAAIAUBUIAHAqIADgTIAFgVIAWhWIAfAAIAXBWIAEASIADAWIADgWIAFgUIAUhUIAgAAIgoCbg",
      );
    this.shape_4.setTransform(42.525, -112.15);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQBOIAAg8Ig0hfIAkAAIAgBAIAhhAIAkAAIg1BeIAAA9g");
    this.shape_5.setTransform(25.075, -112.15);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAcBOIhEh1IgBAAIACAsIAABJIgeAAIAAibIArAAIBCB0IABAAIgCgqIAAhKIAfAAIAACbg",
      );
    this.shape_6.setTransform(9.3, -112.15);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AAoBPIgLgmIg5AAIgLAmIgkAAIA3idIAoAAIA4CdgAAVANIgSg4IgDgLIgUBDIApAAg");
    this.shape_7.setTransform(-7.2, -112.175);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("AgcAOIAAgaIA5AAIAAAag");
    this.shape_8.setTransform(-18.325, -110.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3A8QgTgVAAgnQAAgmATgVQAUgVAjAAQAkAAATAVQAUAVAAAmQAAAngUAVQgTAVgkAAQgjAAgUgVgAgdgnQgKAOAAAZQAAAaAKAOQAKANATAAQAoAAAAg1QAAg0goAAQgTAAgKANg",
      );
    this.shape_9.setTransform(-30.575, -112.175);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgtA8QgSgVAAgnQAAglAVgVQAWgWAmAAQAYAAAWAKIgLAbQgRgJgTAAQgUAAgNAPQgNAOAAAYQAAAZAKAOQALANATAAQAKAAALgCIAAghIgeAAIAAgaIA+AAIAABQQgPAFgNACQgNACgOAAQgjAAgTgVg",
      );
    this.shape_10.setTransform(-47.525, -112.175);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape_11.setTransform(-66.75, -112.15);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p("AAfBOIAAhDIg9AAIAABDIghAAIAAibIAhAAIAAA9IA9AAIAAg9IAhAAIAACbg");
    this.shape_12.setTransform(-81.625, -112.15);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQBOIAAiAIgqAAIAAgbIB1AAIAAAbIgqAAIAACAg");
    this.shape_13.setTransform(-96.375, -112.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt41,
    new cjs.Rectangle(-104.8, -129.8, 216, 34.000000000000014),
    null,
  );

  (lib.txt32 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNANQgFgEAAgJQAAgIAFgFQAFgEAIAAQAJAAAFAEQAFAFAAAIQAAAIgFAFQgFAFgJAAQgIAAgFgFg",
      );
    this.shape.setTransform(63.925, 15.175);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3A8QgTgVAAgnQAAgmATgVQAUgVAjAAQAkAAATAVQAUAVAAAmQAAAngUAVQgTAVgkAAQgjAAgUgVgAgdgnQgKAOAAAZQAAAaAKAOQAKANATAAQAoAAAAg1QAAg0goAAQgTAAgKANg",
      );
    this.shape_1.setTransform(52.075, 8.825);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgvBPIAAidIAgAAIAACBIA/AAIAAAcg");
    this.shape_2.setTransform(37.75, 8.85);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AAoBPIgMgmIg3AAIgMAmIgkAAIA4idIAnAAIA4CdgAAUANIgRg4IgDgLIgTBDIAnAAg");
    this.shape_3.setTransform(23.35, 8.825);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AAfBPIAAhFIg9AAIAABFIghAAIAAidIAhAAIAAA+IA9AAIAAg+IAhAAIAACdg");
    this.shape_4.setTransform(7.375, 8.85);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AAfBPIAAhFIg9AAIAABFIghAAIAAidIAhAAIAAA+IA9AAIAAg+IAhAAIAACdg");
    this.shape_5.setTransform(-15.125, 8.85);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQBPIAAiBIgqAAIAAgcIB1AAIAAAcIgqAAIAACBg");
    this.shape_6.setTransform(-29.875, 8.85);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("AgPBPIAAidIAgAAIAACdg");
    this.shape_7.setTransform(-39.85, 8.85);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAdBPIgWhSIgEgSIgDgTIgCATIgEASIgVBSIgmAAIgoidIAhAAIAUBVIAHApIADgTIAFgTIAWhYIAfAAIAXBYIAEASIADAUIADgUIAFgVIAUhVIAgAAIgoCdg",
      );
    this.shape_8.setTransform(-54.125, 8.85);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt32,
    new cjs.Rectangle(-66.8, -8.8, 136, 34),
    null,
  );

  (lib.txt31 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBPIAAidIBZAAIAAAbIg4AAIAAAjIA0AAIAAAaIg0AAIAAApIA4AAIAAAcg");
    this.shape.setTransform(102, 0.85);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBPIAAidIBZAAIAAAbIg4AAIAAAjIA0AAIAAAaIg0AAIAAApIA4AAIAAAcg");
    this.shape_1.setTransform(89.7, 0.85);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAaBPIglg9IgSAAIAAA9IggAAIAAidIAtAAQAfAAAQAMQAPAMAAAXQAAAOgIALQgHAKgPAGIAuBFgAgdgIIALAAQAQAAAHgFQAHgGAAgKQAAgMgHgEQgHgGgRAAIgKAAg",
      );
    this.shape_2.setTransform(76.95, 0.85);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBPIAAidIBZAAIAAAbIg4AAIAAApIA0AAIAAAbIg0AAIAAA+g");
    this.shape_3.setTransform(63.15, 0.85);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgtA8QgSgVAAgnQAAglAVgVQAWgWAmAAQAYAAAWAKIgLAbQgRgJgTAAQgUAAgNAPQgNAOAAAYQAAAZAKAOQALANATAAQAKAAALgCIAAghIgeAAIAAgaIA+AAIAABQQgPAFgNACQgNACgOAAQgjAAgTgVg",
      );
    this.shape_4.setTransform(42.775, 0.825);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3A8QgTgVAAgnQAAgmATgVQAUgVAjAAQAkAAATAVQAUAVAAAmQAAAngUAVQgTAVgkAAQgjAAgUgVgAgdgnQgKAOAAAZQAAAaAKAOQAKANATAAQAoAAAAg1QAAg0goAAQgTAAgKANg",
      );
    this.shape_5.setTransform(26.325, 0.825);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhABPIAAidIAxAAQAlAAAWAVQAVAUAAAlQAAAlgWAVQgWAUgpABgAgfAzIAOAAQAwAAAAgzQAAgzgsAAIgSAAg",
      );
    this.shape_6.setTransform(9.8, 0.85);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAaBPIgkg9IgSAAIAAA9IgiAAIAAidIAuAAQAfAAAQAMQAPAMAAAXQAAAOgIALQgIAKgOAGIAuBFgAgcgIIAKAAQAQAAAHgFQAHgGAAgKQAAgMgHgEQgHgGgRAAIgJAAg",
      );
    this.shape_7.setTransform(-10.65, 0.85);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgvBAQgQgPgBgcIAAhkIAiAAIAABgQAAASAHAIQAIAJAPAAQARAAAHgJQAIgIAAgSIAAhgIAgAAIAABlQABARgIAOQgIANgPAGQgOAIgUAAQgeAAgRgQg",
      );
    this.shape_8.setTransform(-27.2, 0.95);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3A8QgTgVAAgnQAAgmATgVQAUgVAjAAQAkAAATAVQAUAVAAAmQAAAngUAVQgTAVgkAAQgjAAgUgVgAgdgnQgKAOAAAZQAAAaAKAOQAKANATAAQAoAAAAg1QAAg0goAAQgTAAgKANg",
      );
    this.shape_9.setTransform(-44.225, 0.825);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQBPIAAg8Ig0hhIAkAAIAgBBIAhhBIAkAAIg1BgIAAA9g");
    this.shape_10.setTransform(-59.825, 0.85);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQBPIAAiBIgqAAIAAgcIB1AAIAAAcIgqAAIAACBg");
    this.shape_11.setTransform(-78.725, 0.85);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBPIAAidIBZAAIAAAbIg4AAIAAAjIA0AAIAAAaIg0AAIAAApIA4AAIAAAcg");
    this.shape_12.setTransform(-90.9, 0.85);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgyBHIAAgeQAQAHALACQALADAJAAQAKAAAGgEQAGgEAAgIQAAgFgDgDQgDgEgFgDIgTgLQgOgHgIgFQgHgGgEgJQgEgIAAgLQAAgVAOgMQAOgMAYAAQAMAAALADQALADAMAGIgKAZQgNgFgIgCQgIgCgIAAQgJAAgFAFQgFAEAAAHQAAAEACAEQACADAFADIAUALQAWALAIAJQAIALAAAPQAAAVgPANQgPAMgbAAQgZAAgTgKg",
      );
    this.shape_13.setTransform(-103.375, 0.825);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt31,
    new cjs.Rectangle(-111.6, -16.8, 221.5, 34),
    null,
  );

  (lib.txt22 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNANQgFgEAAgJQAAgIAFgFQAFgEAIAAQAJAAAFAEQAFAFAAAIQAAAIgFAFQgFAFgJAAQgIAAgFgFg",
      );
    this.shape.setTransform(11.025, 4.175);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhABOIAAibIAxAAQAmgBAVAVQAVAUAAAkQAAAmgWAVQgWAUgpAAgAgfAzIAOAAQAwAAAAgzQgBgygrAAIgSAAg",
      );
    this.shape_1.setTransform(0.15, -2.15);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgPBOIAAibIAgAAIAACbg");
    this.shape_2.setTransform(-11.95, -2.15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhABOIAAibIAxAAQAmgBAVAVQAVAUAAAkQAAAmgWAVQgWAUgpAAgAgfAzIAOAAQAwAAgBgzQAAgygrAAIgSAAg",
      );
    this.shape_3.setTransform(-23.35, -2.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt22,
    new cjs.Rectangle(-33.9, -19.8, 50.2, 34),
    null,
  );

  (lib.txt21 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape.setTransform(4.1, -2.15);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAdBOIgWhRIgEgSIgDgTIgCATIgEASIgVBRIgmAAIgoibIAhAAIAUBUIAHAqIADgTIAFgUIAWhXIAfAAIAXBXIAEASIADAVIADgVIAFgVIAUhUIAgAAIgoCbg",
      );
    this.shape_1.setTransform(-13.025, -2.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt21,
    new cjs.Rectangle(-25.7, -19.8, 37.7, 34),
    null,
  );

  (lib.txt12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBMQgFgEAAgJQAAgJAFgFQAFgEAJAAQAIAAAFAEQAFAFAAAJQAAAIgFAFQgFAFgIAAQgJAAgFgFgAgTAaIAAgIQAAgKAEgIQAEgGALgJQAMgIADgFQAEgFgBgGQAAgHgEgEQgGgEgIAAQgQAAgVALIgLgYQAYgNAZAAQAWAAANALQANAKABASQAAAMgGAIQgFAJgPALQgKAGgDAEQgDAEAAAHIAAAGg",
      );
    this.shape.setTransform(56.05, -1.125);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQBOIAAiAIgqAAIAAgcIB1AAIAAAcIgqAAIAACAg");
    this.shape_1.setTransform(44.725, -1.15);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgvBAQgQgQgBgbIAAhkIAiAAIAABgQAAARAHAJQAIAJAPAAQARAAAHgJQAHgJABgRIAAhgIAhAAIAABlQAAASgIANQgIAMgPAIQgOAGgUABQgeAAgRgQg",
      );
    this.shape_2.setTransform(30.05, -1.05);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3A8QgTgVAAgnQAAgmATgVQAUgVAjAAQAkAAATAVQAUAVAAAmQAAAngUAVQgTAVgkAAQgjAAgUgVgAgdgnQgKAOAAAZQAAAaAKAOQAKANATAAQAoAAAAg1QAAg0goAAQgTAAgKANg",
      );
    this.shape_3.setTransform(13.025, -1.175);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgyBHIAAgeQAQAHALACQALADAJAAQAKAAAGgEQAGgEAAgIQAAgFgDgDQgDgEgFgDIgTgLQgOgHgIgFQgHgGgEgJQgEgIAAgLQAAgVAOgMQAOgMAYAAQAMAAALADQALADAMAGIgKAZQgNgFgIgCQgIgCgIAAQgJAAgFAFQgFAEAAAHQAAAEACAEQACADAFADIAUALQAWALAIAJQAIALAAAPQAAAVgPANQgPAMgbAAQgZAAgTgKg",
      );
    this.shape_4.setTransform(-7.425, -1.175);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgtA8QgSgVAAgnQAAglAVgVQAWgWAmAAQAYAAAWAKIgLAbQgRgJgTAAQgUAAgNAPQgNAOAAAYQAAAZAKAOQALANATAAQAKAAALgCIAAghIgeAAIAAgaIA+AAIAABQQgPAFgNACQgNACgOAAQgjAAgTgVg",
      );
    this.shape_5.setTransform(-21.725, -1.175);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3A8QgTgVAAgnQAAgmATgVQAUgVAjAAQAkAAATAVQAUAVAAAmQAAAngUAVQgTAVgkAAQgjAAgUgVgAgdgnQgKAOAAAZQAAAaAKAOQAKANATAAQAoAAAAg1QAAg0goAAQgTAAgKANg",
      );
    this.shape_6.setTransform(-38.175, -1.175);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhABOIAAicIAxAAQAmAAAVAVQAVAUAAAlQAAAlgWAVQgWAUgpAAgAgfAzIAPAAQAuAAAAgzQAAgzgrAAIgSAAg",
      );
    this.shape_7.setTransform(-54.7, -1.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt12,
    new cjs.Rectangle(-65.3, -18.8, 128.9, 34),
    null,
  );

  (lib.txt11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape.setTransform(66.4, -2.15);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AAfBOIAAhDIg9AAIAABDIghAAIAAibIAhAAIAAA9IA9AAIAAg9IAhAAIAACbg");
    this.shape_1.setTransform(51.525, -2.15);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQBOIAAiAIgqAAIAAgbIB1AAIAAAbIgqAAIAACAg");
    this.shape_2.setTransform(36.775, -2.15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQBOIAAiAIgqAAIAAgbIB1AAIAAAbIgqAAIAACAg");
    this.shape_3.setTransform(18.375, -2.15);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AgsBOIAAibIBZAAIAAAbIg4AAIAAAiIA0AAIAAAbIg0AAIAAAoIA4AAIAAAbg");
    this.shape_4.setTransform(6.2, -2.15);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AgwBOIAAibIAiAAIAACAIA/AAIAAAbg");
    this.shape_5.setTransform(-5.85, -2.15);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3A8QgTgVAAgnQAAgmATgVQAUgVAjAAQAkAAATAVQAUAVAAAmQAAAngUAVQgTAVgkAAQgjAAgUgVgAgdgnQgKAOAAAZQAAAaAKAOQAKANATAAQAoAAAAg1QAAg0goAAQgTAAgKANg",
      );
    this.shape_6.setTransform(-27.125, -2.175);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AAfBOIAAhDIg9AAIAABDIghAAIAAibIAhAAIAAA9IA9AAIAAg9IAhAAIAACbg");
    this.shape_7.setTransform(-44.275, -2.15);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAdBOIgWhRIgEgSIgDgTIgCATIgEASIgVBRIgmAAIgoibIAhAAIAUBUIAHAqIADgTIAFgUIAWhXIAfAAIAXBXIAEASIADAVIADgVIAFgVIAUhUIAgAAIgoCbg",
      );
    this.shape_8.setTransform(-63.325, -2.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt11,
    new cjs.Rectangle(-76, -19.8, 150.3, 34),
    null,
  );

  (lib.txt6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgKALQgEgEAAgHQAAgHADgDQAEgEAHAAQAHAAAEAEQAEADAAAHQAAAHgEAEQgEAEgHAAQgGAAgEgEg",
      );
    this.shape.setTransform(73.475, 5.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#3B3E3E")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIguAAIAAAcIArAAIAAAWIgrAAIAAAhIAuAAIAAAWg");
    this.shape_1.setTransform(66.15, 0.125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AghAxQgPgRAAggQAAgTAIgPQAGgPAOgIQAOgIASAAQASAAATAJIgJAWIgPgGQgHgCgGAAQgPAAgJALQgIAMAAATQAAArAgAAQANAAATgGIAAAWQgQAHgUAAQgbAAgOgRg",
      );
    this.shape_2.setTransform(55.35, 0.125);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AAXBAIg3hgIgBAAIACAkIAAA8IgZAAIAAh/IAjAAIA3BfIAAAAIgBgiIAAg9IAYAAIAAB/g",
      );
    this.shape_3.setTransform(42.1, 0.125);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#3B3E3E")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIguAAIAAAcIArAAIAAAWIgrAAIAAAhIAuAAIAAAWg");
    this.shape_4.setTransform(30.05, 0.125);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#3B3E3E")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIguAAIAAAhIArAAIAAAVIgrAAIAAAzg");
    this.shape_5.setTransform(20.2, 0.125);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgpA6IAAgZQANAGAJACQAJADAIAAQAHAAAFgEQAFgDAAgHQAAgEgCgDIgGgGIgQgIQgMgGgGgEQgFgFgEgHQgDgGAAgKQAAgRALgJQAMgKATAAQAKAAAJACIATAHIgJAVQgKgEgHgCIgNgBQgHAAgEADQgEAEAAAGQAAADACADQABADAEACIAQAJQASAJAHAHQAHAJAAANQAAARgNAKQgMAKgWAAQgUAAgQgIg",
      );
    this.shape_6.setTransform(5.375, 0.125);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgpA6IAAgZQANAGAJACQAJADAIAAQAHAAAFgEQAFgDAAgHQAAgEgCgDIgGgGIgQgIQgMgGgGgEQgFgFgEgHQgDgGAAgKQAAgRALgJQAMgKATAAQAKAAAJACIATAHIgJAVQgKgEgHgCIgNgBQgHAAgEADQgEAEAAAGQAAADACADQABADAEACIAQAJQASAJAHAHQAHAJAAANQAAARgNAKQgMAKgWAAQgUAAgQgIg",
      );
    this.shape_7.setTransform(-4.525, 0.125);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#3B3E3E")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIgtAAIAAAcIAqAAIAAAWIgqAAIAAAhIAtAAIAAAWg");
    this.shape_8.setTransform(-14.3, 0.125);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#3B3E3E").s().p("AgnBAIAAh/IAcAAIAABpIAzAAIAAAWg");
    this.shape_9.setTransform(-24.175, 0.125);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#3B3E3E")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIguAAIAAAcIArAAIAAAWIgrAAIAAAhIAuAAIAAAWg");
    this.shape_10.setTransform(-34.5, 0.125);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AAVBAIgdgxIgPAAIAAAxIgbAAIAAh/IAlAAQAaAAAMAJQANAKAAATQgBAMgGAIQgGAIgMAFIAmA4gAgXgGIAJAAQAMAAAGgFQAGgEAAgJQAAgJgHgEQgEgEgOAAIgIAAg",
      );
    this.shape_11.setTransform(-44.9, 0.125);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#3B3E3E").s().p("AgNBAIAAh/IAbAAIAAB/g");
    this.shape_12.setTransform(-54.625, 0.125);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AAXBAIgRhCIgEgPIgCgPIgBAPIgEAPIgSBCIgeAAIghh/IAbAAIAQBFQAFATACAPIACgQIADgQIAThHIAZAAIASBHIAEAPIACARIADgRIAEgRIAQhFIAbAAIggB/g",
      );
    this.shape_13.setTransform(-66.3, 0.125);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#3B3E3E")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIguAAIAAAcIArAAIAAAWIgrAAIAAAhIAuAAIAAAWg");
    this.shape_14.setTransform(112.5, -20.375);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AAVBAIgdgxIgPAAIAAAxIgcAAIAAh/IAmAAQAZAAANAJQAMAKAAATQAAAMgGAIQgGAIgMAFIAnA4gAgXgGIAIAAQANAAAGgFQAGgEAAgJQAAgJgHgEQgEgEgOAAIgIAAg",
      );
    this.shape_15.setTransform(102.1, -20.375);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#3B3E3E")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIguAAIAAAcIArAAIAAAWIgrAAIAAAhIAuAAIAAAWg");
    this.shape_16.setTransform(90.6, -20.375);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#3B3E3E")
      .s()
      .p("AAaBAIAAg3IgyAAIAAA3IgcAAIAAh/IAcAAIAAAyIAyAAIAAgyIAbAAIAAB/g");
    this.shape_17.setTransform(78.425, -20.375);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AAXBAIgRhCIgEgPIgCgPIgBAPIgEAPIgSBCIgeAAIghh/IAbAAIAQBFQAFATACAPIACgQIADgQIAThHIAZAAIASBHIAEAPIACARIADgRIAEgRIAQhFIAbAAIggB/g",
      );
    this.shape_18.setTransform(62.85, -20.375);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#3B3E3E")
      .s()
      .p("AgNBAIAAgxIgqhOIAdAAIAaA1IAbg1IAdAAIgrBNIAAAyg");
    this.shape_19.setTransform(48.575, -20.375);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AAWBAIg2hgIgBAAIABAkIAAA8IgYAAIAAh/IAiAAIA3BfIABAAIgCgiIAAg9IAZAAIAAB/g",
      );
    this.shape_20.setTransform(35.65, -20.375);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#3B3E3E")
      .s()
      .p("AAhBAIgKgeIguAAIgJAeIgdAAIAuh/IAfAAIAuB/gAARALIgOguIgDgIIgPA2IAgAAg");
    this.shape_21.setTransform(22.15, -20.4);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#3B3E3E").s().p("AgXALIAAgVIAvAAIAAAVg");
    this.shape_22.setTransform(13.1, -18.775);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgsAxQgQgRAAggQAAgfAQgRQAPgRAdAAQAeAAAPARQAQARAAAfQAAAggQARQgQARgdAAQgdAAgPgRgAgXggQgJALAAAVQAAAVAIALQAJALAPAAQAgAAAAgrQAAgrggAAQgPAAgIALg",
      );
    this.shape_23.setTransform(3.075, -20.375);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgkAxQgQgRAAggQAAgeASgSQASgRAeAAQAUAAATAIIgKAWQgOgHgPAAQgQAAgLALQgLAMAAATQAAAVAJALQAIALAQAAIARgBIAAgbIgYAAIAAgWIAzAAIAABCQgNAEgLABQgLACgLAAQgcAAgPgRg",
      );
    this.shape_24.setTransform(-10.775, -20.375);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#3B3E3E")
      .s()
      .p("AgkBAIAAh/IBJAAIAAAWIguAAIAAAcIArAAIAAAWIgrAAIAAAhIAuAAIAAAWg");
    this.shape_25.setTransform(-26.5, -20.375);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#3B3E3E")
      .s()
      .p("AAaBAIAAg3IgyAAIAAA3IgcAAIAAh/IAcAAIAAAyIAyAAIAAgyIAbAAIAAB/g");
    this.shape_26.setTransform(-38.675, -20.375);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#3B3E3E")
      .s()
      .p("AgNBAIAAhpIgjAAIAAgWIBgAAIAAAWIgjAAIAABpg");
    this.shape_27.setTransform(-50.75, -20.375);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgKALQgEgEAAgHQAAgGADgEQAEgEAHAAQAHAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgHAAQgGAAgEgEg",
      );
    this.shape_28.setTransform(-63.125, -15.2);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgsAxQgQgRAAggQAAgfAQgRQAPgRAdAAQAeAAAPARQAQARAAAfQAAAggQARQgQARgdAAQgdAAgPgRgAgXggQgJALAAAVQAAAVAIALQAJALAPAAQAgAAAAgrQAAgrggAAQgPAAgIALg",
      );
    this.shape_29.setTransform(-72.825, -20.375);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#3B3E3E")
      .s()
      .p("AgnBAIAAh/IAcAAIAABpIAzAAIAAAWg");
    this.shape_30.setTransform(-84.575, -20.375);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#3B3E3E")
      .s()
      .p("AAhBAIgJgeIgvAAIgJAeIgdAAIAth/IAhAAIAtB/gAARALIgPguIgCgIIgQA2IAhAAg");
    this.shape_31.setTransform(-96.35, -20.4);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#3B3E3E")
      .s()
      .p("AAaBAIAAg3IgyAAIAAA3IgcAAIAAh/IAcAAIAAAyIAyAAIAAgyIAbAAIAAB/g");
    this.shape_32.setTransform(-109.425, -20.375);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.txt6,
    new cjs.Rectangle(-118.3, -35.2, 237.7, 49),
    null,
  );

  (lib.pic5_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.pic5();
    this.instance.setTransform(128, 150, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.pic5_1,
    new cjs.Rectangle(128, 150, 170, 99.5),
    null,
  );

  (lib.pic4_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.pic4();
    this.instance.setTransform(0, 1, 0.6, 0.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.pic4_1,
    new cjs.Rectangle(0, 1, 300, 189.6),
    null,
  );

  (lib.pic3_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.pic3();
    this.instance.setTransform(0, 0, 0.6, 0.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.pic3_1,
    new cjs.Rectangle(0, 0, 300, 250.2),
    null,
  );

  (lib.pic2_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.pic2();
    this.instance.setTransform(0, 0, 0.6, 0.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.pic2_1,
    new cjs.Rectangle(0, 0, 300, 250.2),
    null,
  );

  (lib.pic1_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.pic1();
    this.instance.setTransform(0, 0, 0.6, 0.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.pic1_1,
    new cjs.Rectangle(0, 0, 300, 250.2),
    null,
  );

  (lib.orange = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFCF01").s().p("A3WH0IAAvnMAutAAAIAAPng");
    this.shape.setTransform(-0.0001, 0.025, 1.0035, 1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.orange,
    new cjs.Rectangle(-150, -50, 300, 100.1),
    null,
  );

  (lib.offer12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#FF0000").ss(2, 1, 1).p("AioAtIFRhZ");
    this.shape.setTransform(-17.725, 13.475);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaAwIAAgQIAMABQAKAAAFgDQAHgDADgGQADgHABgLIgBAAQgEAGgFADQgEACgHAAQgNAAgGgIQgIgHABgOQAAgPAIgJQAJgJAOAAQAKAAAIAFQAIAFAEAJQAFAKgBANQABAbgMAOQgMAOgXAAIgNgBgAgKgbQgDAEAAAIQAAAHADAEQADAEAGAAQAGAAAEgEQAEgEABgFQgBgIgDgFQgFgGgFAAQgHAAgDAFg",
      );
    this.shape_1.setTransform(30.6, 13.225);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaAwIAAgQIAMABQAKAAAFgDQAHgDADgGQAEgHAAgLIgBAAQgEAGgFADQgEACgHAAQgNAAgGgIQgIgHABgOQAAgPAIgJQAIgJAPAAQAKAAAIAFQAIAFAEAJQAFAKgBANQAAAbgMAOQgLAOgXAAIgNgBgAgKgbQgDAEAAAIQAAAHADAEQADAEAGAAQAGAAAEgEQAEgEAAgFQAAgIgDgFQgFgGgFAAQgGAAgEAFg",
      );
    this.shape_2.setTransform(23.05, 13.225);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#59595A")
      .s()
      .p("AgWAvIAjhMIguAAIAAgRIBDAAIAAAMIgiBRg");
    this.shape_3.setTransform(15.45, 13.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#59595A")
      .s()
      .p(
        "AgEA2IAAgNQgPAAgMgFIAAgRIANAFIAOACIAAgUIgEgCQgNgEgFgGQgGgGAAgIQAAgKAIgGQAHgGANgBIAAgKIAIAAIAAAKQAPAAAMAFIgGAQQgKgEgLgBIAAATQANAFAFADQAGADACAEQADAEAAAGQAAAKgIAHQgHAGgOABIAAANgAAEAaQAJgCAAgGQAAgDgCgCIgHgDgAgMgUQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACACAEACIAAgPQgIABAAAGg",
      );
    this.shape_4.setTransform(7.975, 13.275);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaAwIAAgQIAMABQAJAAAGgDQAGgDAEgGQADgHABgLIgBAAQgEAGgEADQgFACgHAAQgMAAgIgIQgGgHAAgOQgBgPAJgJQAJgJAOAAQAKAAAIAFQAIAFAEAJQAEAKAAANQABAbgMAOQgNAOgWAAIgNgBgAgKgbQgEAEABAIQgBAHAEAEQADAEAGAAQAFAAAFgEQAEgEABgFQAAgIgFgFQgEgGgFAAQgHAAgDAFg",
      );
    this.shape_5.setTransform(-6.5, 13.225);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaAwIAAgQIAMABQAJAAAGgDQAGgDAEgGQADgHABgLIgBAAQgEAGgFADQgEACgHAAQgMAAgIgIQgGgHAAgOQgBgPAJgJQAJgJAOAAQAKAAAIAFQAIAFAEAJQAEAKAAANQABAbgMAOQgMAOgXAAIgNgBgAgKgbQgEAEABAIQgBAHAEAEQADAEAGAAQAGAAAEgEQAEgEABgFQAAgIgFgFQgEgGgFAAQgHAAgDAFg",
      );
    this.shape_6.setTransform(-14.05, 13.225);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaAwIAAgQIAMABQAKAAAFgDQAHgDADgGQADgHABgLIgBAAQgEAGgFADQgEACgHAAQgNAAgGgIQgIgHABgOQAAgPAIgJQAJgJAOAAQAKAAAIAFQAIAFAEAJQAFAKgBANQABAbgMAOQgMAOgXAAIgNgBgAgKgbQgDAEAAAIQAAAHADAEQADAEAGAAQAGAAAEgEQAEgEAAgFQAAgIgDgFQgFgGgFAAQgHAAgDAFg",
      );
    this.shape_7.setTransform(-21.6, 13.225);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#59595A")
      .s()
      .p(
        "AgEA2IAAgNQgPAAgMgFIAAgRIANAFIAOACIAAgUIgEgCQgNgEgFgGQgGgGAAgIQAAgKAIgGQAHgGANgBIAAgKIAIAAIAAAKQAPAAAMAFIgGAQQgKgEgLgBIAAATQANAFAFADQAGADACAEQADAEAAAGQAAAKgIAHQgHAGgOABIAAANgAAEAaQAJgCAAgGQAAgDgCgCIgHgDgAgMgUQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACACAEACIAAgPQgIABAAAGg",
      );
    this.shape_8.setTransform(-29.125, 13.275);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#59595A")
      .s()
      .p(
        "AAJAhIAAgcQAAgJgIAAQgEAAgDAEQgCACAAAJIAAAWIgNAAIAAhBIANAAIAAANIAAAIIgBAEIABAAQAEgHAJAAQAIAAAEAEQAFAFAAAHIAAAfg",
      );
    this.shape_9.setTransform(50.875, -6.975);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#59595A")
      .s()
      .p(
        "AgGAZQgDgEAAgIIAAgWIgGAAIAAgFIAHgFIAEgJIAHAAIAAAKIANAAIAAAJIgNAAIAAAWQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAIAEABIAIgBIAAAJQgEADgHAAQgHAAgEgEg",
      );
    this.shape_10.setTransform(46.075, -6.5);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#59595A")
      .s()
      .p(
        "AgfArIAAgRIAMAEIANACQARAAAAgPQAAgPgSAAIgHABIgHABIgIgEIAEgvIAyAAIAAARIghAAIgBASIACAAIAJgBQANAAAJAIQAIAHAAANQAAAQgKAIQgKAJgRAAQgQAAgKgFg",
      );
    this.shape_11.setTransform(40.525, -3.425);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#59595A")
      .s()
      .p("AAEAwIAAg2IAAgJIAAgKIgGAGIgLAJIgJgMIAdgZIAQAAIAABfg");
    this.shape_12.setTransform(32.3, -3.5);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#59595A")
      .s()
      .p(
        "AgJAnQgGgGAAgMIAAgiIgJAAIAAgJIALgGIAFgQIAMAAIAAAQIAUAAIAAAPIgUAAIAAAiQAAAEACACQADACAEAAQAFAAAHgDIAAAPQgHAEgLAAQgLAAgFgGg",
      );
    this.shape_13.setTransform(22.775, -3.075);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#59595A")
      .s()
      .p(
        "AgQAlIgKgEIAAgQQAFADAHABQAHACAFAAQAKAAAAgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgDIgIgFQgJgDgEgCQgEgDgBgEQgCgEAAgFQgBgKAIgFQAHgGANAAQANAAANAGIgGAOIgKgEQgFgBgFAAQgIAAAAAFQAAACADACIALAGQAJAEAEADQAEACABADQADAEAAAGQAAALgIAGQgIAGgPAAIgNgBg",
      );
    this.shape_14.setTransform(16.75, -2.375);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaAeQgGgHAAgNIAAguIAUAAIAAAqQAAAHACAEQADAEAGAAQAHAAAEgFQADgGAAgMIAAgiIAUAAIAABIIgOAAIgEgKIgBAAQgCAGgHACQgFADgGAAQgOAAgGgHg",
      );
    this.shape_15.setTransform(9, -2.3);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#59595A")
      .s()
      .p(
        "AgcAvQgHgEgBgKQABgHAEgEQAEgEAHgCIgFgFQgCgDAAgDQAAgEADgCIAGgGQgGgCgDgFQgDgGAAgHQAAgMAIgGQAHgHAOAAIAHAAIAFABIAaAAIAAAKIgMAEQAEAFAAAFQAAAMgJAGQgIAHgOAAIgDAAIgDAAQgDACAAABQAAAFALAAIALAAQAMAAAHAFQAFAGAAAJQABANgLAHQgLAHgSAAQgPAAgJgGgAgPAZQgEACAAAFQAAADAFACQADADAHAAQAKAAAGgDQAGgDAAgFQAAgEgEgBQgDgCgHAAIgJAAQgGAAgEADgAgMgbQAAAGADADQADAEAFAAQAFAAADgEQADgDAAgGQAAgNgLAAQgKAAgBANg",
      );
    this.shape_16.setTransform(0.9, -0.85);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaAeQgGgHAAgNIAAguIATAAIAAAqQABAHACAEQADAEAGAAQAHAAAEgFQADgGAAgMIAAgiIAUAAIAABIIgOAAIgEgKIgBAAQgCAGgHACQgFADgGAAQgOAAgGgHg",
      );
    this.shape_17.setTransform(-7.2, -2.3);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#59595A")
      .s()
      .p("AAYAwIgHgXIghAAIgHAXIgWAAIAhhfIAYAAIAiBfgAAMAIIgKghIgCgHIgMAoIAYAAg");
    this.shape_18.setTransform(-16.1, -3.525);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#59595A")
      .s()
      .p(
        "AgQAlIgKgEIAAgQQAFADAHABQAHACAFAAQAKAAAAgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgDIgIgFQgJgDgEgCQgEgDgBgEQgCgEAAgFQgBgKAIgFQAHgGANAAQANAAANAGIgGAOIgKgEQgFgBgFAAQgIAAAAAFQAAACADACIALAGQAJAEAEADQAEACABADQADAEAAAGQAAALgIAGQgIAGgPAAIgNgBg",
      );
    this.shape_19.setTransform(-27.35, -2.375);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#59595A")
      .s()
      .p(
        "AgZApQgIgKAAgRQAAgRAIgKQAHgKANAAQAMAAAIAKIAAAAIgBgOIAAgXIAUAAIAABkIgPAAIgEgKIgBAAQgHALgMAAQgOAAgGgKgAgKgBQgDAEAAALQAAALADAFQAFAFAGAAQAHAAAEgEQADgFAAgKIAAgCQABgMgEgEQgEgFgIAAQgFAAgFAGg",
      );
    this.shape_20.setTransform(-35.1, -3.725);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#59595A")
      .s()
      .p(
        "AANAlIAAgpQABgJgDgDQgDgEgGAAQgIAAgDAGQgEAFAAAMIAAAiIgUAAIAAhIIAQAAIACAJIABAAQAEgFAFgCQAFgDAIAAQANAAAGAHQAHAHgBAMIAAAvg",
      );
    this.shape_21.setTransform(-43.45, -2.45);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#59595A")
      .s()
      .p(
        "AgXAcQgJgKgBgSQABgRAIgKQAJgKAQAAQAPAAAJAJQAJAJAAAPIAAAJIguAAQAAAIAEAFQAFAFAIAAQAGAAAGgCQAGgBAGgDIAAAPQgFADgGABQgGACgJAAQgQAAgKgKgAAPgHQgBgIgDgEQgDgEgHAAQgGAAgDAEQgEAEAAAIIAbAAIAAAAg",
      );
    this.shape_22.setTransform(-51.7, -2.375);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#59595A")
      .s()
      .p(
        "AgbAvQgJgEABgKQAAgHADgEQAFgEAIgCIgGgFQgCgDAAgDQAAgEACgCIAHgGQgGgCgDgFQgDgGAAgHQAAgMAHgGQAJgHAOAAIAGAAIAFABIAaAAIAAAKIgMAEQADAFAAAFQAAAMgIAGQgIAHgNAAIgEAAIgDAAQgDACAAABQAAAFALAAIALAAQAMAAAGAFQAHAGAAAJQAAANgLAHQgKAHgUAAQgPAAgHgGgAgPAZQgEACABAFQAAADADACQAEADAHAAQAKAAAGgDQAGgDAAgFQAAgEgEgBQgDgCgIAAIgJAAQgFAAgEADgAgMgbQABAGADADQACAEAGAAQAEAAADgEQACgDABgGQgBgNgJAAQgMAAAAANg",
      );
    this.shape_23.setTransform(61.95, -17.5);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#59595A")
      .s()
      .p(
        "AANAlIAAgpQAAgJgCgDQgDgEgGAAQgHAAgEAGQgEAFAAAMIAAAiIgUAAIAAhIIAQAAIACAJIABAAQAEgFAFgCQAFgDAIAAQANAAAGAHQAHAHAAAMIAAAvg",
      );
    this.shape_24.setTransform(53.95, -19.1);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#59595A")
      .s()
      .p(
        "AgJAzIAAhIIATAAIAABIgAgKgoQAAgJAKAAQALAAAAAJQAAAFgDADQgDACgFAAQgKAAAAgKg",
      );
    this.shape_25.setTransform(47.525, -20.45);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#59595A")
      .s()
      .p(
        "AgcAAQAAgRAJgKQAJgKAQAAQANAAAKAFIgGAQIgJgEIgIgBQgOAAAAAVQAAAWAOAAQAGAAAFgCIAKgFIAAARQgFADgFABQgEACgIAAQghAAAAgmg",
      );
    this.shape_26.setTransform(42.2, -19.025);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#59595A")
      .s()
      .p(
        "AgJAzIAAhIIATAAIAABIgAgKgoQAAgJAKAAQALAAAAAJQAAAFgDADQgDACgFAAQgKAAAAgKg",
      );
    this.shape_27.setTransform(36.675, -20.45);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#59595A")
      .s()
      .p(
        "AgXAlIAAhIIAQAAIADANIAAAAQAEgHAEgDQAGgEAHAAIAGAAIgBATIgGgBQgJAAgFAGQgFAEAAAIIAAAlg",
      );
    this.shape_28.setTransform(32.05, -19.1);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#59595A")
      .s()
      .p(
        "AghA1IAAhoIAQAAIADAKIABAAQAHgLANAAQAMAAAIAKQAHAKAAARQAAAMgDAIQgEAIgGAFQgGAFgJAAQgMAAgHgKIgBAAIABALIAAAdgAgKggQgDAFAAAKIAAACQAAAMADAEQAEAFAGABQAOAAAAgWQAAgKgEgFQgDgGgHAAQgGAAgEAEg",
      );
    this.shape_29.setTransform(24.675, -17.5);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#59595A")
      .s()
      .p(
        "AggAzIAAgQIAIABQAFAAAEgDQAEgDACgHIABgDIgdhHIAWAAIAOAoIABAMIADgMIAOgoIAVAAIgfBRQgEALgHAGQgIAFgKAAIgKgBg",
      );
    this.shape_30.setTransform(13.025, -17.425);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#59595A")
      .s()
      .p(
        "AgWAlIAAhIIAOAAIAEANIABAAQACgHAGgDQAFgEAHAAIAGAAIgBATIgGgBQgJAAgFAGQgFAEAAAIIAAAlg",
      );
    this.shape_31.setTransform(6.65, -19.1);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#59595A")
      .s()
      .p(
        "AgSAhQgIgFgEgIQgEgJAAgLQAAgRAJgKQAJgKAQAAQALAAAIAFQAIAEAEAJQAEAIAAALQAAASgJAKQgKAKgQAAQgKAAgIgFgAgLgPQgDAFAAAKQAAALADAFQAEAGAHAAQAIAAADgGQAEgFAAgLQAAgKgEgFQgDgGgIAAQgHAAgEAGg",
      );
    this.shape_32.setTransform(-0.875, -19.025);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#59595A")
      .s()
      .p(
        "AgJAnQgGgGAAgMIAAgiIgJAAIAAgJIALgGIAFgQIAMAAIAAAQIAUAAIAAAPIgUAAIAAAiQAAAEACACQADACAEAAQAFAAAHgDIAAAPQgHAEgLAAQgLAAgFgGg",
      );
    this.shape_33.setTransform(-7.925, -19.725);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#59595A")
      .s()
      .p(
        "AgcAAQAAgRAJgKQAJgKAQAAQANAAAKAFIgGAQIgJgEIgIgBQgOAAAAAVQAAAWAOAAQAGAAAFgCIAKgFIAAARQgFADgFABQgEACgIAAQghAAAAgmg",
      );
    this.shape_34.setTransform(-14.05, -19.025);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaAeQgHgHAAgNIAAguIAVAAIAAAqQAAAHACAEQADAEAGAAQAIAAADgFQAEgGAAgMIAAgiIAUAAIAABIIgQAAIgCgKIgBAAQgDAGgGACQgGADgHAAQgNAAgGgHg",
      );
    this.shape_35.setTransform(-21.9, -18.95);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#59595A")
      .s()
      .p(
        "AgaApQgHgKAAgRQAAgRAHgKQAIgKANAAQANAAAHAKIABAAIgCgOIAAgXIAUAAIAABkIgQAAIgDgKIgBAAQgHALgNAAQgMAAgIgKgAgJgBQgEAEAAALQAAALAEAFQADAFAGAAQAIAAADgEQAEgFABgKIAAgCQAAgMgEgEQgEgFgIAAQgFAAgEAGg",
      );
    this.shape_36.setTransform(-30.65, -20.375);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#59595A")
      .s()
      .p(
        "AgSAhQgIgFgEgIQgEgJAAgLQAAgRAJgKQAJgKAQAAQALAAAIAFQAIAEAEAJQAEAIAAALQAAASgJAKQgKAKgQAAQgKAAgIgFgAgLgPQgDAFAAAKQAAALADAFQAEAGAHAAQAIAAADgGQAEgFAAgLQAAgKgEgFQgDgGgIAAQgHAAgEAGg",
      );
    this.shape_37.setTransform(-38.775, -19.025);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#59595A")
      .s()
      .p(
        "AgXAlIAAhIIAPAAIADANIABAAQAEgHAEgDQAGgEAHAAIAHAAIgCATIgFgBQgKAAgGAGQgEAEAAAIIAAAlg",
      );
    this.shape_38.setTransform(-45.5, -19.1);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#59595A")
      .s()
      .p(
        "AgJAnQgGgGAAgMIAAgiIgJAAIAAgJIALgGIAFgQIAMAAIAAAQIAUAAIAAAPIgUAAIAAAiQAAAEACACQADACAEAAQAFAAAHgDIAAAPQgHAEgLAAQgLAAgFgGg",
      );
    this.shape_39.setTransform(-51.825, -19.725);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#59595A")
      .s()
      .p(
        "AANAlIAAgpQAAgJgCgDQgDgEgGAAQgHAAgEAGQgEAFAAAMIAAAiIgTAAIAAhIIAOAAIADAJIACAAQACgFAHgCQAEgDAHAAQAOAAAGAHQAGAHAAAMIAAAvg",
      );
    this.shape_40.setTransform(-58.95, -19.1);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#59595A").s().p("AgJAwIAAhfIATAAIAABfg");
    this.shape_41.setTransform(-65.55, -20.15);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.offer12,
    new cjs.Rectangle(-70.9, -47.7, 139.9, 71),
    null,
  );

  (lib.offer11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#59595A")
      .s()
      .p(
        "AgIAuQgCgDAAgGQAAgFACgDQAEgDAEAAQAFAAADADQADADABAFQgBAGgDADQgDACgFAAQgEAAgEgCgAgHAPIgDg/IAWAAIgEA/g",
      );
    this.shape.setTransform(37.15, -19.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#59595A")
      .s()
      .p(
        "AgXAcQgKgKAAgSQAAgRAJgKQAKgKAPAAQAPAAAJAJQAJAJAAAPIAAAJIgvAAQABAIAFAFQAEAFAHAAQAHAAAGgCQAGgBAGgDIAAAPQgFADgGABQgFACgKAAQgQAAgKgKgAAPgHQAAgIgEgEQgEgEgGAAQgFAAgEAEQgDAEgBAIIAbAAIAAAAg",
      );
    this.shape_1.setTransform(31.35, -18.475);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#59595A")
      .s()
      .p(
        "AgcAAQAAgRAJgKQAJgKAQAAQANAAAKAFIgFAQIgJgEIgJgBQgOAAAAAVQAAAWAOAAQAGAAAFgCIAKgFIAAARQgFADgFABQgEACgIAAQghAAAAgmg",
      );
    this.shape_2.setTransform(24.1, -18.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#59595A")
      .s()
      .p(
        "AAOAlIAAgpQAAgJgDgDQgDgEgGAAQgHAAgEAGQgEAFAAAMIAAAiIgUAAIAAhIIAPAAIADAJIABAAQAEgFAFgCQAFgDAIAAQAMAAAHAHQAGAGABANIAAAvg",
      );
    this.shape_3.setTransform(16.25, -18.55);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#59595A")
      .s()
      .p(
        "AgZAgQgHgGABgLQgBgMAJgEQAIgGAPgBIANAAIAAgDQgBgLgKAAQgIAAgMAFIgGgNQAMgHAOAAQAPAAAHAHQAJAGgBANIAAAvIgNAAIgFgKIAAAAQgFAHgFACQgEADgJAAQgLAAgFgGgAgHAGQgEADAAAGQAAAIAJAAQAHAAADgEQAFgEAAgGIAAgGIgIAAQgIAAgEADg",
      );
    this.shape_4.setTransform(7.65, -18.475);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#59595A")
      .s()
      .p(
        "AANAyIAAgqQAAgOgLAAQgHgBgEAGQgEAEAAANIAAAiIgTAAIAAhjIATAAIAAAUIAAALIAAAGIAAAAQAHgKANAAQANgBAHAIQAGAGAAAMIAAAvg",
      );
    this.shape_5.setTransform(-0.45, -19.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#59595A")
      .s()
      .p(
        "AgcAAQAAgRAJgKQAJgKAQAAQANAAAKAFIgGAQIgJgEIgIgBQgOAAAAAVQAAAWAOAAQAGAAAFgCIAKgFIAAARQgFADgFABQgEACgIAAQghAAAAgmg",
      );
    this.shape_6.setTransform(-8.2, -18.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#59595A")
      .s()
      .p(
        "AgJAnQgGgGAAgMIAAgiIgJAAIAAgJIALgGIAFgQIAMAAIAAAQIAUAAIAAAPIgUAAIAAAiQAAAEACACQADACAEAAQAFAAAHgDIAAAPQgHAEgLAAQgLAAgFgGg",
      );
    this.shape_7.setTransform(-18.025, -19.175);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#59595A")
      .s()
      .p(
        "AgQAlIgKgEIAAgQQAFADAHABQAHACAFAAQAKAAAAgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgDIgIgFQgJgDgEgCQgEgDgBgEQgCgEAAgFQgBgKAIgFQAIgGAMAAQANAAANAGIgGAOIgKgEQgFgBgFAAQgIAAAAAFQAAACADACIAMAGQAIAEAEADQAEACACADQACAEAAAGQAAALgIAGQgIAGgPAAIgNgBg",
      );
    this.shape_8.setTransform(-24.1, -18.475);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#59595A")
      .s()
      .p(
        "AgZAgQgHgGAAgLQABgMAHgEQAJgGAPgBIAMAAIAAgDQABgLgMAAQgIAAgLAFIgHgNQANgHAOAAQAPAAAIAHQAHAGAAANIAAAvIgNAAIgFgKIAAAAQgFAHgFACQgFADgIAAQgLAAgFgGgAgHAGQgEADAAAGQAAAIAKAAQAFAAAFgEQADgEAAgGIAAgGIgHAAQgHAAgFADg",
      );
    this.shape_9.setTransform(-31.65, -18.475);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#59595A")
      .s()
      .p("AgcAvIAAheIAUAAIAABOIAlAAIAAAQg");
    this.shape_10.setTransform(-38.825, -19.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.offer11,
    new cjs.Rectangle(-46.1, -30.5, 88.30000000000001, 20.9),
    null,
  );

  (lib.logo_lapa = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFD52C")
      .s()
      .p(
        "ABQA6QAIgHACgJQAFgVgYgVQgYgVgngIQglgJgfAJQgfAIgFAVQgBAHABAHQACAIgEgHQgJgPAEgQQAGgaAigMQAjgLAqAJQAsAKAaAaQAaAYgFAaQgFAUgSAKIgDABQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBg",
      );
    this.shape.setTransform(-1.0135, 2.5701);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgUBNQg2gNghgjQgggjAJglQAFgXAOgMQABgBABgBQABgBAAAAQABAAAAAAQAAAAAAABIgCADQgDAFgDAKQgIAjAeAfQAeAhAyALQAwALApgQQApgRAIghQACgIgBgMQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABABQAIAVgFAXQgJAlgsASQgaALgeAAQgUAAgWgFg",
      );
    this.shape_1.setTransform(-1.5312, 6.8115);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgWAZQgIgHABgNQABgLAKgKQAJgLAMgCQAMgCAIAHQAIAHgCANQgBALgJAKQgKALgLACIgFAAQgIAAgHgFg",
      );
    this.shape_2.setTransform(11.8563, -2.775);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgCAfQgMgFgIgMQgHgNACgLQABgNAJgGQAKgFALAEQAMAFAHAMQAHANgBALQgCANgJAGQgGADgGAAQgEAAgEgCg",
      );
    this.shape_3.setTransform(-11.1007, -7.725);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgMAqQgNgEgFgPQgFgPAFgRQAGgRANgJQAMgKAMAEQANAEAFAPQAFAPgGARQgEARgNAKQgKAGgIAAIgHgBg",
      );
    this.shape_4.setTransform(5.75, -8.5129);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgVAfQgKgNAAgSQAAgRAKgNQAJgNAMAAQAOAAAJANQAJANAAARQAAASgJANQgJANgOAAQgMAAgJgNg",
      );
    this.shape_5.setTransform(-3.1, -10.55);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.logo_lapa,
    new cjs.Rectangle(-14.8, -14.9, 29.6, 29.9),
    null,
  );

  (lib.line1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFCF01").s().p("AvYAAIPYgVIPZAVIvZAWg");
    this.shape.setTransform(0, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.line1,
    new cjs.Rectangle(-98.5, -2.2, 197, 4.5),
    null,
  );

  (lib.gradient = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        [
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.2)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
        ],
        [0, 0.227, 0.514, 0.839, 1],
        0,
        92.2,
        0,
        -92.1,
      )
      .s()
      .p("A3UOxIAA9hMAupAAAIAAdhg");
    this.shape.setTransform(0.025, 0);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.gradient,
    new cjs.Rectangle(-149.3, -94.5, 298.70000000000005, 189),
    null,
  );

  (lib.cta = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AANAkIgKglIgBgIIgCgIIAAAIIgCAIIgKAlIgRAAIgShHIAPAAIAJAmIADATIACgJIACgJIAKgnIANAAIALAnIABAJIACAJIACgJIABgKIAKgmIAOAAIgSBHg",
      );
    this.shape.setTransform(27.025, 0.675);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgZAbQgIgJAAgSQAAgRAIgJQAKgKAPAAQAQAAAJAKQAJAJAAARQAAASgJAJQgJAKgQAAQgPAAgKgKgAgMgRQgGAGAAALQABAMAEAGQAFAGAIAAQASAAAAgYQAAgXgSAAQgIAAgEAGg",
      );
    this.shape_1.setTransform(18.25, 0.675);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AAMAkIgeg1IAAAAIABATIAAAiIgOAAIAAhHIATAAIAeA1IABAAIgBgTIAAgiIAOAAIAABHg",
      );
    this.shape_2.setTransform(10.225, 0.675);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AALAkIgQgcIgIAAIAAAcIgOAAIAAhHIAUAAQAOAAAHAGQAHAFAAALQAAAGgDAFQgEAEgGADIAUAfgAgNgDIAGAAQAGAAADgCQADgDAAgFQAAgFgDgCQgDgCgHAAIgFAAg",
      );
    this.shape_3.setTransform(0.75, 0.675);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AgUAkIAAhHIAoAAIAAANIgZAAIAAAPIAYAAIAAAMIgYAAIAAASIAZAAIAAANg");
    this.shape_4.setTransform(-5.65, 0.675);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgdAkIAAhHIAXAAQARAAAJAKQAKAJAAAQQgBARgJAJQgKAKgTAAgAgNAXIAGAAQAVAAAAgXQAAgWgTAAIgIAAg",
      );
    this.shape_5.setTransform(-12.15, 0.675);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AALAkIgQgcIgHAAIAAAcIgPAAIAAhHIAUAAQAOAAAHAGQAHAFAAALQAAAGgEAFQgDAEgGADIAUAfgAgMgDIAEAAQAIAAACgCQAEgDAAgFQAAgFgEgCQgCgCgIAAIgEAAg",
      );
    this.shape_6.setTransform(-18.85, 0.675);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgYAbQgJgJAAgSQAAgRAJgJQAIgKAQAAQAQAAAJAKQAJAJAAARQAAASgJAJQgJAKgQAAQgQAAgIgKgAgNgRQgEAGgBALQAAAMAFAGQAFAGAIAAQASAAAAgYQAAgXgSAAQgIAAgFAGg",
      );
    this.shape_7.setTransform(-26.55, 0.675);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFCF01").s().p("AmwCGIAAkLINhAAIAAELg");
    this.shape_8.setTransform(0.025, 0.025);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.cta,
    new cjs.Rectangle(-43.3, -13.4, 86.69999999999999, 26.9),
    null,
  );

  (lib.logo = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // timeline functions:
    this.frame_23 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1),
    );

    // logo_lapa
    this.instance = new lib.logo_lapa();
    this.instance.setTransform(-35, 0, 1.6, 1.6);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(11)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1, x: -35.05, alpha: 1 }, 12, cjs.Ease.backOut)
        .wait(1),
    );

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AA3BsQgFgFABgGIAAhIQAAgXgPgQQgQgRgUAAQgUAAgPARQgPAQAAAXIAABIQAAAGgEAFQgFAEgGAAQgGAAgEgEQgFgFAAgGIAAjBQAAgHAEgEQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA2IADgCQAVgRAaAAQAiAAAXAaQAYAZAAAjIAABIQAAAGgEAFQgFAEgGAAQgHAAgEgEg",
      );
    this.shape.setTransform(-5.95, 0.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgbBZQgHgOAAglIAAiGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAACEQAAAeAGAJQAEAHAOAAQAGAAAFAEQAEAEAAAHQAAAGgEAFQgFAEgGAAQgkAAgLgXg",
      );
    this.shape_1.setTransform(29.175, 0.275);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AA9BTQgEgFAAgGIAAgGIgDACQgKAIgMAGQgOAFgRAAIgBAAQgjAAgZgaQgagZAAgkQAAgjAagZQAZgaAjAAQAkAAAZAaQAaAZAAAjIAABIQAAAGgEAFQgFAEgGAAQgGAAgFgEgAgngnQgRARAAAWQAAAXARARQAQARAXAAQAKAAALgFQAKgDAJgJQAQgQABgVIAAgDQAAgWgRgRQgRgRgXAAQgWAAgRARg",
      );
    this.shape_2.setTransform(13.9, 2.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "Ag9A9QgZgZAAgkQAAgkAZgZQAbgZAiAAQAkAAAaAZQAZAZAAAkQAAAkgZAZQgaAagkAAQgjAAgagagAgngnQgRARAAAWQAAAXARARQARARAWAAQAYAAAQgRQARgRAAgXQAAgWgRgRQgQgRgYAAQgWAAgRARg",
      );
    this.shape_3.setTransform(41.2, 2.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(24),
    );

    // Layer_1
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFD52C")
      .s()
      .p(
        "ABQA6QAIgHACgJQAFgVgYgVQgYgVgngIQglgJgfAJQgfAIgFAVQgBAHABAHQACAIgEgHQgJgPAEgQQAGgaAigMQAjgLAqAJQAsAKAaAaQAaAYgFAaQgFAUgSAKIgDABQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBg",
      );
    this.shape_4.setTransform(-36.0635, 2.5701);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgUBNQg2gNghgjQgggjAJglQAFgXAOgMQABgBABgBQABgBAAAAQABAAAAAAQAAAAAAABIgCADQgDAFgDAKQgIAjAeAfQAeAhAyALQAwALApgQQApgRAIghQACgIgBgMQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABABQAIAVgFAXQgJAlgsASQgaALgeAAQgUAAgWgFg",
      );
    this.shape_5.setTransform(-36.5812, 6.8115);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgWAZQgIgHABgNQABgLAKgKQAJgLAMgCQAMgCAIAHQAIAHgCANQgBALgJAKQgKALgLACIgFAAQgIAAgHgFg",
      );
    this.shape_6.setTransform(-23.1937, -2.775);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgCAfQgMgFgIgMQgHgNACgLQABgNAJgGQAKgFALAEQAMAFAHAMQAHANgBALQgCANgJAGQgGADgGAAQgEAAgEgCg",
      );
    this.shape_7.setTransform(-46.1507, -7.725);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgMAqQgNgEgFgPQgFgPAFgRQAGgRANgJQAMgKAMAEQANAEAFAPQAFAPgGARQgEARgNAKQgKAGgIAAIgHgBg",
      );
    this.shape_8.setTransform(-29.3, -8.5129);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgVAfQgKgNAAgSQAAgRAKgNQAJgNAMAAQAOAAAJANQAJANAAARQAAASgJANQgJANgOAAQgMAAgJgNg",
      );
    this.shape_9.setTransform(-38.15, -10.55);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AA3BsQgFgFABgGIAAhIQAAgXgPgQQgQgRgUAAQgUAAgPARQgPAQAAAXIAABIQAAAGgEAFQgFAEgGAAQgGAAgEgEQgFgFAAgGIAAjBQAAgHAEgEQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA2IADgCQAVgRAaAAQAiAAAXAaQAYAZAAAjIAABIQAAAGgEAFQgFAEgGAAQgHAAgEgEg",
      );
    this.shape_10.setTransform(-5.95, 0.275);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgbBZQgHgOAAglIAAiGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAACEQAAAeAGAJQAEAHAOAAQAGAAAFAEQAEAEAAAHQAAAGgEAFQgFAEgGAAQgkAAgLgXg",
      );
    this.shape_11.setTransform(29.175, 0.275);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AA9BTQgEgFAAgGIAAgGIgDACQgKAIgMAGQgOAFgRAAIgBAAQgjAAgZgaQgagZAAgkQAAgjAagZQAZgaAjAAQAkAAAZAaQAaAZAAAjIAABIQAAAGgEAFQgFAEgGAAQgGAAgFgEgAgngnQgRARAAAWQAAAXARARQAQARAXAAQAKAAALgFQAKgDAJgJQAQgQABgVIAAgDQAAgWgRgRQgRgRgXAAQgWAAgRARg",
      );
    this.shape_12.setTransform(13.9, 2.8);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "Ag9A9QgZgZAAgkQAAgkAZgZQAbgZAiAAQAkAAAaAZQAZAZAAAkQAAAkgZAZQgaAagkAAQgjAAgagagAgngnQgRARAAAWQAAAXARARQARARAWAAQAYAAAQgRQARgRAAgXQAAgWgRgRQgQgRgYAAQgWAAgRARg",
      );
    this.shape_13.setTransform(41.2, 2.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
          ],
        })
        .to({ state: [] }, 1)
        .wait(23),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-58.7, -23.9, 108.6, 47.9);

  (lib.mcMain = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // border
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#999999")
      .ss(2, 2, 0, 3)
      .p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
    this.shape.setTransform(150, 125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(575));

    // logo
    this.instance = new lib.logo();
    this.instance.setTransform(149.95, 220.8);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(322)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 8)
        .wait(114)
        .to(
          { scaleX: 1.22, scaleY: 1.22, x: 82.2, y: 201.95 },
          12,
          cjs.Ease.get(0.9),
        )
        .wait(119),
    );

    // offer12
    this.instance_1 = new lib.offer12();
    this.instance_1.setTransform(89.7, 144.8, 1.4, 1.4);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(464)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 89.75, y: 144.85, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .wait(100),
    );

    // offer11
    this.instance_2 = new lib.offer11();
    this.instance_2.setTransform(90.15, 127.55, 1.4, 1.4);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(459)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1, x: 90.2, alpha: 1 }, 11, cjs.Ease.quadOut)
        .wait(105),
    );

    // cta
    this.instance_3 = new lib.cta();
    this.instance_3.setTransform(227.75, 121.2, 0.8, 0.8);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(475)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1, x: 227.8, alpha: 1 }, 11, cjs.Ease.backOut)
        .wait(89),
    );

    // txt6
    this.instance_4 = new lib.txt6();
    this.instance_4.setTransform(149.8, 50.45, 1.4, 1.4);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(447)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1, y: 50.5, alpha: 1 }, 11, cjs.Ease.quadOut)
        .wait(117),
    );

    // orange
    this.instance_5 = new lib.orange();
    this.instance_5.setTransform(150, -50);
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(434)
        .to({ _off: false }, 0)
        .to({ y: 30 }, 12, cjs.Ease.get(0.9))
        .wait(129),
    );

    // pic5_jpg
    this.instance_6 = new lib.pic5_1();
    this.instance_6.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(447)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 11)
        .wait(117),
    );

    // white_copy
    this.instance_7 = new lib.whitebg();
    this.instance_7.setTransform(300, 560, 1, 1, 0, 0, 0, 300, 300);
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(310)
        .to({ _off: false }, 0)
        .to({ y: 491 }, 11, cjs.Ease.quadOut)
        .wait(113)
        .to({ y: 111 }, 0)
        .to({ y: 300 }, 12, cjs.Ease.get(0.9))
        .wait(129),
    );

    // txt53
    this.instance_8 = new lib.txt53();
    this.instance_8.setTransform(150.7, 128.2, 1.4, 1.4);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(339)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 150.75, y: 128.25, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .to({ _off: true }, 97)
        .wait(128),
    );

    // txt52
    this.instance_9 = new lib.txt52();
    this.instance_9.setTransform(150.8, 99.7, 1.4, 1.4);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(335)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 150.85, y: 99.75, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .to({ _off: true }, 101)
        .wait(128),
    );

    // txt51
    this.instance_10 = new lib.txt51();
    this.instance_10.setTransform(150.8, 71.2, 1.4, 1.4);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(331)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 150.85, y: 71.25, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .to({ _off: true }, 105)
        .wait(128),
    );

    // gradient
    this.instance_11 = new lib.gradient();
    this.instance_11.setTransform(150.6, 122.8);
    this.instance_11.alpha = 0;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(331)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 11)
        .to({ _off: true }, 105)
        .wait(128),
    );

    // pic4_jpg
    this.instance_12 = new lib.pic4_1();
    this.instance_12.setTransform(150, 155.8, 1, 1, 0, 0, 0, 150, 155.8);
    this.instance_12.alpha = 0;
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(318)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1.0083, scaleY: 1.0083, x: 150.05, y: 155.85, alpha: 1 },
          11,
        )
        .to({ scaleX: 1.1, scaleY: 1.1, x: 150 }, 117)
        .to({ _off: true }, 1)
        .wait(128),
    );

    // txt42
    this.instance_13 = new lib.txt42();
    this.instance_13.setTransform(159.9, 204.9, 1.4, 1.4);
    this.instance_13.alpha = 0;
    this.instance_13._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(246)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 149.9, y: 164.95, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .to({ _off: true }, 74)
        .wait(244),
    );

    // txt41
    this.instance_14 = new lib.txt41();
    this.instance_14.setTransform(147.05, 184.8, 1.4, 1.4);
    this.instance_14.alpha = 0;
    this.instance_14._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(240)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1, y: 143.85, alpha: 1 }, 11, cjs.Ease.quadOut)
        .to({ _off: true }, 80)
        .wait(244),
    );

    // txt32
    this.instance_15 = new lib.txt32();
    this.instance_15.setTransform(147.95, 62.65, 1.4, 1.4);
    this.instance_15.alpha = 0;
    this.instance_15._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .wait(171)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 148, y: 62.7, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .wait(47)
        .to(
          { regX: 0.1, regY: 0.1, scaleX: 0.4, scaleY: 0.4, y: 66.7, alpha: 0 },
          12,
          cjs.Ease.quadIn,
        )
        .to({ _off: true }, 1)
        .wait(333),
    );

    // txt31
    this.instance_16 = new lib.txt31();
    this.instance_16.setTransform(147.9, 30.95, 1.4, 1.4);
    this.instance_16.alpha = 0;
    this.instance_16._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_16)
        .wait(165)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 147.95, y: 31, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .wait(53)
        .to(
          { regX: 0.1, regY: 0.1, scaleX: 0.4, scaleY: 0.4, y: 35, alpha: 0 },
          12,
          cjs.Ease.quadIn,
        )
        .to({ _off: true }, 1)
        .wait(333),
    );

    // txt22
    this.instance_17 = new lib.txt22();
    this.instance_17.setTransform(163.4, 73.45, 1.4, 1.4);
    this.instance_17.alpha = 0;
    this.instance_17._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_17)
        .wait(106)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 160.45, y: 73.5, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .wait(35)
        .to(
          {
            regX: 0.1,
            regY: 0.1,
            scaleX: 0.4,
            scaleY: 0.4,
            x: 155.45,
            alpha: 0,
          },
          12,
          cjs.Ease.quadIn,
        )
        .to({ _off: true }, 1)
        .wait(410),
    );

    // txt21
    this.instance_18 = new lib.txt21();
    this.instance_18.setTransform(160.15, 33.7, 1.4, 1.4);
    this.instance_18.alpha = 0;
    this.instance_18._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_18)
        .wait(100)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, x: 155.2, y: 33.75, alpha: 1 },
          11,
          cjs.Ease.quadOut,
        )
        .wait(41)
        .to(
          {
            regX: 0.1,
            regY: 0.1,
            scaleX: 0.4,
            scaleY: 0.4,
            x: 153.2,
            alpha: 0,
          },
          12,
          cjs.Ease.quadIn,
        )
        .to({ _off: true }, 1)
        .wait(410),
    );

    // line1
    this.instance_19 = new lib.line1();
    this.instance_19.setTransform(149.1, 51.7, 0.1, 1, 0, 0, 0, 0, 0.5);
    this.instance_19.alpha = 0;
    this.instance_19._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_19)
        .wait(11)
        .to({ _off: false }, 0)
        .to({ regY: 0, scaleX: 1, y: 51.65, alpha: 1 }, 11, cjs.Ease.quadOut)
        .wait(293)
        .to({ regY: 0.1, scaleX: 0.5, scaleY: 0.5, alpha: 0 }, 7)
        .to({ _off: true }, 1)
        .wait(252),
    );

    // txt12
    this.instance_20 = new lib.txt12();
    this.instance_20.setTransform(149.9, 73.3, 1.4, 1.4);
    this.instance_20.alpha = 0;
    this.instance_20._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_20)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ scaleX: 1, scaleY: 1, y: 73.35, alpha: 1 }, 11, cjs.Ease.quadOut)
        .wait(72)
        .to(
          { regY: 0.1, scaleX: 0.4, scaleY: 0.4, alpha: 0 },
          11,
          cjs.Ease.quadIn,
        )
        .to({ _off: true }, 1)
        .wait(475),
    );

    // txt11
    this.instance_21 = new lib.txt11();
    this.instance_21.setTransform(149.15, 33.55, 1.4, 1.4);
    this.instance_21.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_21)
        .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 11, cjs.Ease.quadOut)
        .wait(77)
        .to({ scaleX: 0.4, scaleY: 0.4, alpha: 0 }, 11, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(475),
    );

    // pic3_jpg
    this.instance_22 = new lib.pic3_1();
    this.instance_22.setTransform(150, 125, 1.1, 1.1, 0, 0, 0, 150, 125);
    this.instance_22.alpha = 0;
    this.instance_22._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_22)
        .wait(165)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.0845, scaleY: 1.0845, x: 150.05, alpha: 1 }, 11)
        .to({ scaleX: 1, scaleY: 1, x: 150 }, 154)
        .to({ _off: true }, 49)
        .wait(196),
    );

    // pic2_jpg
    this.instance_23 = new lib.pic2_1();
    this.instance_23.setTransform(150, 125, 1.1, 1.1, 0, 0, 0, 150, 125);
    this.instance_23.alpha = 0;
    this.instance_23._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_23)
        .wait(100)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.0845, scaleY: 1.0845, x: 150.05, alpha: 1 }, 11)
        .to({ scaleX: 1, scaleY: 1, x: 150 }, 65)
        .to({ _off: true }, 1)
        .wait(398),
    );

    // pic1_jpg
    this.instance_24 = new lib.pic1_1();
    this.instance_24.setTransform(150, 125, 1.1, 1.1, 0, 0, 0, 150, 125);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_24)
        .to({ scaleX: 1, scaleY: 1 }, 111)
        .to({ _off: true }, 1)
        .wait(463),
    );

    // white
    this.instance_25 = new lib.whitebg();
    this.instance_25.setTransform(300, 300, 1, 1, 0, 0, 0, 300, 300);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_25).to({ _off: true }, 455).wait(120),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-15.9, -189, 332.79999999999995, 699);

  // stage content:
  (lib.halo_bestlife1_300x250 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // mcMain
    this.instance = new lib.mcMain();
    this.instance.setTransform(150.2, 300.2, 1, 1, 0, 0, 0, 150.2, 300.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(
    135.1,
    112.6,
    180.00000000000003,
    150.20000000000002,
  );
  // library properties:
  lib.properties = {
    id: "9B790E04C371564B8B581ACBE780215B",
    width: 300,
    height: 250,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a0358473b0b83acdaabc85b_pic1.jpg",
        id: "pic1",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a035866988bae636c24fc88_pic2.jpg",
        id: "pic2",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a0358816466439acb11da6b_pic3.jpg",
        id: "pic3",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a0358a49af8bfa1704145f6_pic4.jpg",
        id: "pic4",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a0358c312dddf059a9adb7d_pic5.jpg",
        id: "pic5",
      },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["9B790E04C371564B8B581ACBE780215B"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers,
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h,
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
