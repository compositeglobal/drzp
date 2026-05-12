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

  (lib.img1 = function () {
    this.initialize(img.img1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 309);

  (lib.img2 = function () {
    this.initialize(img.img2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 250);

  (lib.img3 = function () {
    this.initialize(img.img3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.product = function () {
    this.initialize(img.product);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 417, 261); // helper functions:

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

  (lib.yellowside = function (mode, startPosition, loop, reversed) {
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

    // orange
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FDD835")
      .s()
      .p("AowIdQgyAAgjgjQgjgjAAgyIAAtJQAAgyAjgjQAjgjAyAAITZAAIAAQ5g");
    this.shape.setTransform(232.1, 131.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FDD835").s().p("A3bIdIAAw5MAu3AAAIAAQ5g");
    this.shape_1.setTransform(449, 131.025);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.yellowside,
    new cjs.Rectangle(164, 77, 435, 108.1),
    null,
  );

  (lib.yellow = function (mode, startPosition, loop, reversed) {
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

    // orange1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FDD835")
      .s()
      .p("A0oJmQhKAAg1g1Qg1g1AAhKIAAwXMAu4AAAIAAQXQAABKg0A1Qg1A1hLAAg");
    this.shape.setTransform(150.05, 61.525);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FDD835").s().p("A3bTnMAAAgnNMAu3AAAMAAAAnNg");
    this.shape_1.setTransform(150, -124.5);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.yellow,
    new cjs.Rectangle(0, -250, 300.1, 372.9),
    null,
  );

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

  (lib.txt43 = function (mode, startPosition, loop, reversed) {
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

    // txt43
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAmQgMgNAAgZQAAgXAOgOQAOgNAYAAQAPgBAOAHIgHAQQgLgEgMAAQgNAAgIAJQgIAIAAAPQAAARAHAIQAGAIAMAAIAOAAIAAgVIgUAAIAAgRIAoAAIAAAyQgJAEgJABQgIACgJgBQgWAAgMgNg",
      );
    this.shape.setTransform(263.5, 156.05);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AASAyIgrhKIgBAAIACAbIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgbIAAgvIATAAIAABjg",
      );
    this.shape_1.setTransform(252.925, 156.05);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgKAyIAAhjIAVAAIAABjg");
    this.shape_2.setTransform(244.975, 156.05);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAmQgMgNAAgZQAAgXAOgOQAOgNAXAAQAPgBAPAHIgHAQQgLgEgMAAQgMAAgJAJQgIAIAAAPQAAARAGAIQAIAIALAAIANAAIAAgVIgTAAIAAgRIAoAAIAAAyQgJAEgJABQgJACgJgBQgVAAgMgNg",
      );
    this.shape_3.setTransform(237.45, 156.05);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAmQgMgNAAgZQAAgXAOgOQAOgNAYAAQAPgBAOAHIgHAQQgLgEgMAAQgMAAgJAJQgIAIAAAPQAAARAGAIQAIAIALAAIAOAAIAAgVIgTAAIAAgRIAnAAIAAAyQgKAEgIABQgIACgKgBQgVAAgMgNg",
      );
    this.shape_4.setTransform(227.35, 156.05);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AgKAyIAAhjIAVAAIAABjg");
    this.shape_5.setTransform(220.175, 156.05);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgpAyIAAhjIAgAAQAYAAANANQAOANAAAXQAAAYgPANQgOANgZAAgAgTAhIAJAAQAeAAgBghQABgfgcAAIgLAAg",
      );
    this.shape_6.setTransform(212.9, 156.05);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgiAmQgNgNAAgZQAAgYANgOQAMgMAWAAQAXAAAMAMQANAOAAAYQAAAZgNANQgMANgXAAQgWAAgMgNgAgSgYQgGAIAAAQQAAAQAGAJQAGAIAMAAQAZAAAAghQAAghgZAAQgMAAgGAJg",
      );
    this.shape_7.setTransform(198.375, 156.05);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AASAyIgrhKIgBAAIACAbIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgbIAAgvIATAAIAABjg",
      );
    this.shape_8.setTransform(187.125, 156.05);

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
    lib.txt43,
    new cjs.Rectangle(179.5, 104.3, 106.60000000000002, 62.89999999999999),
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

    // txt42
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgfAuIAAgUIARAGQAHACAFAAQAHAAADgDQAEgCAAgGQAAgCgCgDIgEgFIgMgGQgKgEgFgDQgEgFgDgEQgCgGAAgHQgBgNAKgIQAIgHAQgBQAHAAAHACIAPAGIgHAQIgNgFIgKgBQgGABgCACQgEADAAAEIABAGIAFADIAMAIQAOAGAFAGQAGAGAAAKQAAAOgKAIQgKAHgQABQgQgBgMgFg",
      );
    this.shape.setTransform(246.5, 133.05);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AgcAyIAAhjIA5AAIAAARIgjAAIAAAXIAgAAIAAAQIggAAIAAAZIAjAAIAAASg");
    this.shape_1.setTransform(238.925, 133.05);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AAQAyIgWgnIgMAAIAAAnIgVAAIAAhjIAdAAQATAAALAHQAJAIAAAPQAAAJgFAGQgFAGgIAFIAdArgAgSgFIAHAAQAKABAEgEQAFgEgBgGQABgIgFgCQgEgEgLAAIgGAAg",
      );
    this.shape_2.setTransform(230.85, 133.05);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AgKAyIAAhjIAVAAIAABjg");
    this.shape_3.setTransform(223.325, 133.05);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AASAyIgNgzIgDgMIgCgMIgBAMIgDAMIgNAzIgYAAIgahjIAVAAIANA1IAFAbIACgMIACgNIAPg3IATAAIAPA3IACAMIACANIACgNIADgOIANg1IAVAAIgaBjg",
      );
    this.shape_4.setTransform(214.275, 133.05);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgiAmQgNgNAAgZQAAgYANgNQAMgNAWgBQAXABAMANQANANAAAYQAAAZgNANQgMAOgXAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAGAJAMAAQAZAAAAgiQAAghgZAAQgMAAgGAIg",
      );
    this.shape_5.setTransform(198.375, 133.05);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AASAyIgrhLIgBAAIACAcIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgaIAAgwIATAAIAABjg",
      );
    this.shape_6.setTransform(187.125, 133.05);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    new cjs.Rectangle(179.5, 104.3, 106.60000000000002, 53.3),
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

    // txt41
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgoAyIAAhjIAfAAQAYAAANANQANANAAAXQABAYgOANQgOANgaAAgAgTAhIAJAAQAeAAAAghQAAgfgcAAIgLAAg",
      );
    this.shape.setTransform(271.8, 109.05);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AgcAyIAAhjIA5AAIAAASIgjAAIAAAWIAgAAIAAAQIggAAIAAAaIAjAAIAAARg");
    this.shape_1.setTransform(262.725, 109.05);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgeAyIAAhjIAVAAIAABSIAoAAIAAARg");
    this.shape_2.setTransform(255.05, 109.05);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgkAyIAAhjIAfAAQAUAAAKAGQAKAGgBANQAAAJgDAGQgFAGgGABIAAABQAJABAEAGQAEAFAAAKQAAANgJAJQgLAHgQAAgAgOAhIANAAQAIgBAEgDQAEgDAAgHQAAgMgRAAIgMAAgAgOgJIALAAQAIgBAEgCQAEgCAAgHQAAgFgEgDQgFgCgIAAIgKAAg",
      );
    this.shape_3.setTransform(246.25, 109.05);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
    this.shape_4.setTransform(236.475, 109.025);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AASAyIgrhLIgBAAIACAcIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgaIAAgwIATAAIAABjg",
      );
    this.shape_5.setTransform(225.975, 109.05);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p("AgcAyIAAhjIA5AAIAAASIgjAAIAAAWIAgAAIAAAQIggAAIAAAaIAjAAIAAARg");
    this.shape_6.setTransform(216.625, 109.05);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#000000").s().p("AgRAJIAAgRIAkAAIAAARg");
    this.shape_7.setTransform(210.25, 110.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgfAtIAAgUIARAHQAHACAFAAQAHAAADgDQAEgDAAgEQAAgDgCgDIgEgEIgMgHQgKgFgEgCQgFgFgDgFQgCgFAAgHQgBgNAKgIQAIgIAQAAQAHABAHACIAPAEIgHARIgNgEIgKgCQgGAAgCADQgEADAAAFIABAEIAFAFIAMAGQAOAHAFAGQAGAGgBAKQAAAOgJAIQgKAIgQAAQgQAAgMgHg",
      );
    this.shape_8.setTransform(204.2, 109.05);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgiAyIAAhjIAhAAQARAAAJAIQAKAHAAAQQAAARgKAHQgLAJgRAAIgJAAIAAAjgAgMgCIAGAAQAKAAAEgEQAFgEAAgHQAAgHgEgEQgEgDgHAAIgKAAg",
      );
    this.shape_9.setTransform(196.25, 109.05);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAmQgMgNAAgZQAAgYAOgNQAOgOAXAAQAPAAAPAHIgHAQQgLgEgMgBQgMABgJAIQgIAKAAAOQAAAQAHAJQAGAJAMAAIANgBIAAgWIgTAAIAAgQIAoAAIAAAyQgKAEgIABQgJABgIABQgWAAgMgOg",
      );
    this.shape_10.setTransform(186.35, 109.05);

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
    lib.txt41,
    new cjs.Rectangle(179.5, 97.1, 99.5, 23.10000000000001),
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

    // txt3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAOQgFgFAAgJQAAgIAFgFQAFgFAJAAQAKAAAFAFQAFAFAAAIQAAAJgFAFQgFAFgKAAQgIAAgGgFg",
      );
    this.shape.setTransform(225.275, 59.475);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_1.setTransform(216.225, 55.575);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AggArQgOgPAAgcQAAgaAPgPQAPgPAbAAQATAAARAIIgLAcIgNgFQgGgBgGAAQgJAAgFAHQgFAHAAAMQAAAbATAAQARAAAPgKIAAAeQgOAKgVAAQgaAAgOgOg",
      );
    this.shape_2.setTransform(204.875, 55.575);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AAQA4IAAg7QAAgLgDgGQgDgFgIAAQgIAAgEAHQgFAIAAASIAAAwIgmAAIAAhtIAdAAIAFANIACAAQAFgIAJgDQAHgEAMAAQASAAAKAKQAKALAAATIAABHg",
      );
    this.shape_3.setTransform(192.65, 55.475);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_4.setTransform(179.775, 55.575);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p("AgpBIIAAiPIBTAAIAAAfIgtAAIAAAcIApAAIAAAeIgpAAIAAA2g");
    this.shape_5.setTransform(168.625, 53.95);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA4QgKgBgJgEIAAgfQAJAEALADQAKACAIAAQALAAAAgFQABgDgEgCQgEgDgPgGQgPgHgHgHQgFgIAAgMQAAgPALgJQANgIAUAAQALAAAKACQAJACALAFIgLAZIgQgGQgIgDgFAAQgJAAAAAFQAAADADACIASAIQAMAFAFAEQAGAEADAGQACAGAAAJQAAASgMAJQgMAJgVAAQgNAAgIgBg",
      );
    this.shape_6.setTransform(152.55, 55.575);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgYA4QgIgBgKgEIAAgfQAJAEALADQAKACAIAAQALAAAAgFQAAgDgDgCQgDgDgQgGQgQgHgGgHQgFgIgBgMQAAgPANgJQAMgIAUAAQALAAAKACQAKACAKAFIgKAZIgQgGQgJgDgGAAQgIAAAAAFQAAADAEACIARAIQAMAFAGAEQAFAEADAGQACAGAAAJQABASgMAJQgMAJgWAAQgNAAgJgBg",
      );
    this.shape_7.setTransform(141.9, 55.575);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_8.setTransform(130.225, 55.575);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#000000").s().p("AgSBMIAAiXIAlAAIAACXg");
    this.shape_9.setTransform(120.825, 53.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_10.setTransform(111.425, 55.575);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgmA4IAAhtIAcAAIAGARIACAAQAEgJAJgFQAIgFAJAAIAJAAIACABIgDAkIgNgBQgNAAgFAFQgFAGAAAKIAAA2g",
      );
    this.shape_11.setTransform(101.125, 55.475);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgSBOIAAhuIAlAAIAABugAgTg7QAAgKAEgEQAFgDAKAAQALAAAEADQAFAFAAAJQAAAQgUAAQgTAAAAgQg",
      );
    this.shape_12.setTransform(92.675, 53.35);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AAUBIIgNg/IgEgOIgDgUIgBAQIgEARIgOBAIgtAAIgkiPIAlAAIAQBHIAHAmIAFgbIAFgbIANg3IAjAAIAMA3IAHAcIAEAaQABgLAGgbIAQhHIAlAAIgkCPg",
      );
    this.shape_13.setTransform(79.05, 53.95);

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
    lib.txt32,
    new cjs.Rectangle(66.7, 37.7, 163.7, 31.299999999999997),
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

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape.setTransform(263.575, 28.075);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgmA4IAAhtIAcAAIAGARIACAAQAEgJAJgFQAIgFAJAAIAJAAIACABIgDAkIgNgBQgNAAgFAFQgFAGAAAKIAAA2g",
      );
    this.shape_1.setTransform(253.275, 27.975);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_2.setTransform(241.875, 28.075);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBMIAAg9QAAgVgNABQgJAAgEAHQgFAHABASIAAAxIgnAAIAAiXIAnAAIAAAVIgCAiIACAAQAFgJAHgDQAHgEAKAAQASAAALALQAKALAAASIAABIg",
      );
    this.shape_3.setTransform(229.05, 26);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AASA3IgNg0IgDgPIgCgNIAAAAIgGAhIgLAvIgpAAIgehtIAmAAIAJAqQAEAVABAOIABAAQAAgJAFgYIAKgsIApAAIAKAtQAEAUABAMIABAAIACgSIADgRIAKgqIAlAAIgfBtg",
      );
    this.shape_4.setTransform(213.25, 28.075);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgyBOIAAgeIAMABQAFAAADgCQAFgCADgEIAGgLIgshsIAoAAIATA/IABAMIABAAIACgMIATg/IAnAAIgsB0QgIAXgMAJQgMAJgTAAIgQgBg",
      );
    this.shape_5.setTransform(198.1, 30.475);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AAQA4IAAg7QAAgLgDgGQgDgFgIAAQgIAAgEAHQgFAIAAASIAAAwIgmAAIAAhtIAdAAIAFANIACAAQAFgIAIgDQAIgEAMAAQASAAAKAKQAKALAAATIAABHg",
      );
    this.shape_6.setTransform(185.35, 27.975);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AAeBIIgGgbIguAAIgHAbIgqAAIAuiPIAzAAIAuCPgAAQANIgHgWIgFgUIgEgSIgCAQIgMAsIAeAAg",
      );
    this.shape_7.setTransform(171.4, 26.425);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#000000").s().p("AgbAPIAAgdIA3AAIAAAdg");
    this.shape_8.setTransform(160.975, 28.225);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgnAqQgPgQAAgaQAAgaAOgPQAPgPAZAAQARAAAMAHQANAHAGANQAHAMAAARQAAAbgOAPQgPAPgaAAQgZAAgOgPgAgMgVQgEAHAAAOQAAAOAEAHQAEAIAIAAQAJAAAEgIQADgHAAgOQAAgNgDgIQgEgHgJAAQgIAAgEAHg",
      );
    this.shape_9.setTransform(151.475, 28.075);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgrA2QgSgTAAgjQAAgiAUgTQATgUAjAAQANABAMACIAVAGIgMAfQgPgHgTAAQgQgBgJALQgJAMAAASQAAAVAIALQAIAKAPAAQAJgBAHgBIAAgXIgZAAIAAgcIA9AAIAABMQgZAJgeAAQggAAgSgUg",
      );
    this.shape_10.setTransform(137.525, 26.45);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_11.setTransform(118.975, 28.075);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBMIAAg9QAAgVgOABQgHAAgFAHQgEAHgBASIAAAxIgmAAIAAiXIAmAAIAAAVIgBAiIABAAQAGgJAIgDQAGgEAKAAQATAAAKALQAKALAAASIAABIg",
      );
    this.shape_12.setTransform(106.15, 26);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p("AgSBHIAAhuIgjAAIAAggIBrAAIAAAgIgjAAIAABug");
    this.shape_13.setTransform(93.55, 26.45);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAOQgFgFAAgJQAAgIAFgFQAFgFAJAAQAKAAAFAFQAFAFAAAIQAAAJgFAFQgFAFgKAAQgIAAgGgFg",
      );
    this.shape_14.setTransform(79.625, 31.975);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgnAqQgPgQAAgaQAAgaAOgPQAPgPAZAAQARAAAMAHQANAHAGANQAHAMAAARQAAAbgOAPQgPAPgaAAQgZAAgOgPgAgMgVQgEAHAAAOQAAAOAEAHQAEAIAIAAQAJAAAEgIQADgHAAgOQAAgNgDgIQgEgHgJAAQgIAAgEAHg",
      );
    this.shape_15.setTransform(70.425, 28.075);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#000000").s().p("AgSBMIAAiXIAlAAIAACXg");
    this.shape_16.setTransform(60.825, 26);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgrAwQgIgKgBgRQAAgRANgIQAMgIAYgCIARAAIAAgCQAAgNgOAAQgLAAgSAIIgLgZQATgKAcAAQAWAAAMAKQAMALgBATIAABHIgaAAIgIgOIgBAAQgHAJgIAEQgHADgNAAQgPAAgKgJgAAGAGQgTABABANQgBAKALAAQAHAAAEgEQAGgFAAgHIAAgIg",
      );
    this.shape_17.setTransform(51.1, 28.075);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p("AAWBHIAAg5IgsAAIAAA5IgmAAIAAiOIAmAAIAAA1IAsAAIAAg1IAnAAIAACOg");
    this.shape_18.setTransform(37.525, 26.45);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    lib.txt31,
    new cjs.Rectangle(27.9, 10.2, 244.1, 48.5),
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

    // txt2_copy
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAOQgFgFAAgJQAAgIAFgFQAFgFAJAAQAKAAAFAFQAFAFAAAIQAAAJgFAFQgFAFgKAAQgIAAgGgFg",
      );
    this.shape.setTransform(137.775, 55.475);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgnAqQgPgQAAgaQAAgaAOgPQAPgPAZAAQARAAAMAHQANAHAGANQAHAMAAARQAAAbgOAPQgPAPgaAAQgZAAgOgPgAgMgVQgEAHAAAOQAAAOAEAHQAEAIAIAAQAJAAAEgIQADgHAAgOQAAgNgDgIQgEgHgJAAQgIAAgEAHg",
      );
    this.shape_1.setTransform(128.575, 51.575);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgSBMIAAiXIAlAAIAACXg");
    this.shape_2.setTransform(118.975, 49.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgqAwQgJgKAAgRQAAgRAMgIQAMgIAYgCIARAAIAAgCQAAgNgOAAQgKAAgTAIIgLgZQATgKAcAAQAWAAAMAKQAMALgBATIAABHIgaAAIgIgOIgBAAQgHAJgIAEQgHADgNAAQgQAAgIgJgAAFAGQgRABAAANQgBAKALAAQAHAAAEgEQAGgFgBgHIAAgIg",
      );
    this.shape_3.setTransform(109.25, 51.575);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AAWBHIAAg6IgsAAIAAA6IgmAAIAAiNIAmAAIAAA0IAsAAIAAg0IAnAAIAACNg");
    this.shape_4.setTransform(95.675, 49.95);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBMIAAg9QAAgUgOAAQgHgBgFAIQgFAHAAATIAAAwIgmAAIAAiXIAmAAIAAAVIgBAiIABAAQAGgIAIgEQAGgEAKAAQATAAAKALQAKALAAASIAABIg",
      );
    this.shape_5.setTransform(76.2, 49.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgRA6QgJgKAAgTIAAgtIgOAAIAAgPIARgMIAKgXIAZAAIAAAWIAbAAIAAAcIgbAAIAAAqQAAALAKAAQAHAAALgDIAAAcIgPAEQgHACgIAAQgTAAgIgKg",
      );
    this.shape_6.setTransform(64.9, 50.55);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgSBNIAAhtIAlAAIAABtgAgTg8QAAgJAEgDQAFgFAKAAQALAAAEAFQAFAEAAAIQAAARgUAAQgTAAAAgRg",
      );
    this.shape_7.setTransform(57.125, 49.35);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AASA3IgNg0IgDgPIgCgNIAAAAIgGAhIgLAvIgpAAIgdhtIAlAAIAJAqQAEAVABAOIABAAQAAgJAFgYIAKgsIApAAIAKAtQAFAUABAMIAAAAIACgSIADgRIAKgqIAlAAIgfBtg",
      );
    this.shape_8.setTransform(44.75, 51.575);

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
    lib.txt22,
    new cjs.Rectangle(33.7, 19.8, 170.5, 45.2),
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

    // txt2_copy
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape.setTransform(205.425, 26.575);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_1.setTransform(193.075, 26.575);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgmA4IAAhtIAcAAIAGARIACAAQAEgJAJgFQAIgFAJAAIAJAAIACABIgDAkIgNgBQgNAAgFAFQgFAGAAAKIAAA2g",
      );
    this.shape_2.setTransform(182.775, 26.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgaBNIAAhRIgPAAIAAgUIAQgJIAAgCQAAgVAJgKQAJgJATAAIAOABIAPADIgIAZQgHgBgGAAQgFgBgCADQgCADAAAGIAAADIAYAAIAAAdIgYAAIAABRg",
      );
    this.shape_3.setTransform(173.9, 24.45);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgsBIQgNgHAAgPQAAgUAZgGQgFgCgEgFQgEgEAAgFQAAgFADgDQADgEAJgGQgJgEgFgIQgFgIAAgLQAAgSANgKQAMgKAXAAIAJAAIALACIAnAAIAAASIgPAGQADAFAAAIQAAASgNAKQgMAJgYAAIgKAAIgBADQAAADAEACQAFABAGAAIATAAQAlAAAAAgQAAAUgRALQgSALgeAAQgXAAgNgIgAgUAnQgFADAAAEQAAAFAGADQAFACAIAAQANAAAIgDQAJgDAAgGQAAgEgFgCQgGgCgJAAIgOAAQgGAAgEADgAgNgpQAAARAMAAQAFAAADgEQADgFAAgIQAAgRgLAAQgMAAAAARg",
      );
    this.shape_4.setTransform(158.025, 28.875);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgnAqQgPgQAAgaQAAgaAOgPQAPgPAZAAQARAAAMAHQANAHAGANQAHAMAAARQAAAbgOAPQgPAPgaAAQgZAAgOgPgAgMgVQgEAHAAAOQAAAOAEAHQAEAIAIAAQAJAAAEgIQADgHAAgOQAAgNgDgIQgEgHgJAAQgIAAgEAHg",
      );
    this.shape_5.setTransform(145.725, 26.575);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgiBGQgJgGgEgOQgGgNAAgRQAAgaALgQQALgOATAAQAKgBAFAEQAIAEAFAIIABAAQgCgNAAgMIAAgeIAnAAIAACXIgdAAIgIgOIgCAAQgKAQgTAAQgMAAgIgHgAgKABQgEAGAAANQAAANAEAHQAFAHAGAAQAJAAAEgGQAEgGAAgMIAAgDQAAgPgEgFQgEgGgJAAQgGAAgFAHg",
      );
    this.shape_6.setTransform(132.7, 24.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgmA4IAAhtIAcAAIAGARIACAAQAEgJAJgFQAIgFAJAAIAJAAIACABIgDAkIgNgBQgNAAgFAFQgFAGAAAKIAAA2g",
      );
    this.shape_7.setTransform(117.225, 26.475);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgrAuQgKgLAAgTIAAhHIAmAAIAAA7QAAALAEAFQACAGAIAAQAIAAAEgIQAFgHAAgSIAAgwIAmAAIAABtIgdAAIgFgOIgCAAQgFAIgIAEQgIAEgMAAQgSAAgKgKg",
      );
    this.shape_8.setTransform(105.35, 26.675);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgnAqQgPgQAAgaQAAgaAOgPQAPgPAZAAQARAAAMAHQANAHAGANQAHAMAAARQAAAbgOAPQgPAPgaAAQgZAAgOgPgAgMgVQgEAHAAAOQAAAOAEAHQAEAIAIAAQAJAAAEgIQADgHAAgOQAAgNgDgIQgEgHgJAAQgIAAgEAHg",
      );
    this.shape_9.setTransform(92.325, 26.575);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgyBOIAAgeIAMABQAFAAAEgCQADgCAEgEIAFgLIgrhsIAoAAIATA/IABAMIAAAAIADgMIATg/IAnAAIgsB0QgIAXgLAJQgMAJgVAAIgPgBg",
      );
    this.shape_10.setTransform(79.9, 28.975);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgSA6QgIgJAAgUIAAgsIgNAAIAAgQIARgMIAKgXIAXAAIAAAWIAbAAIAAAdIgbAAIAAApQAAAMALAAQAIgBALgEIAAAcIgQAFQgHABgJABQgSAAgJgKg",
      );
    this.shape_11.setTransform(64.05, 25.55);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_12.setTransform(53.325, 26.575);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AgdBIQgKgCgKgFIAAgjQALAGALADQANADAKAAQAHAAAEgDQAEgDAAgFQAAgCgCgCQgBgDgDgCIgSgKQgOgFgIgGQgGgGgEgIQgDgHAAgLQAAgTAOgLQAPgLAYAAQAVgBAYALIgMAeQgUgKgOAAQgHABgEACQgDADAAAEQAAAEAEADQAFAEASAIQASAJAIAIQAHAJAAAPQAAANgHALQgGAKgNAGQgNAFgQABQgOAAgKgCg",
      );
    this.shape_13.setTransform(41.55, 24.95);

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
    lib.txt21,
    new cjs.Rectangle(33.7, 8.7, 180.10000000000002, 31.3),
    null,
  );

  (lib.txt13 = function (mode, startPosition, loop, reversed) {
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

    // txt1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgOAOQgFgFAAgJQAAgIAFgFQAFgFAJAAQAKAAAFAFQAFAFAAAIQAAAJgFAFQgFAFgKAAQgIAAgGgFg",
      );
    this.shape.setTransform(187.575, 91.875);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AAQBMIgYgoIgMAKIAAAeIgmAAIAAiXIAmAAIAAA8QAAAPgCAOIABAAIALgQIAZggIAqAAIgnAuIAqBAg",
      );
    this.shape_1.setTransform(178.8, 85.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AggArQgOgPAAgcQAAgaAPgPQAPgPAbAAQATAAARAIIgLAcIgNgFQgGgBgGAAQgJAAgFAHQgFAHAAAMQAAAbATAAQARAAAPgKIAAAeQgOAKgVAAQgaAAgOgOg",
      );
    this.shape_2.setTransform(166.375, 87.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgrAwQgJgKAAgRQAAgRANgIQANgIAWgCIASAAIAAgCQAAgNgOAAQgLAAgSAIIgLgZQATgKAdAAQAVAAALAKQAMALABATIAABHIgbAAIgIgOIAAAAQgIAJgIAEQgHADgMAAQgQAAgKgJgAAGAGQgTABAAANQAAAKAMAAQAGAAAEgEQAFgFABgHIAAgIg",
      );
    this.shape_3.setTransform(154.3, 87.975);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AACBLQgDgBgFgCIgIgIIgDAAIgGALIgdAAIAAiXIAmAAIAAAiIgCAWIACAAQAGgJAHgEQAGgDAKAAQARgBALAQQALAPAAAZQAAAcgLAPQgLAPgTAAQgGAAgFgCgAgKgBQgEAFAAAMIAAAFQAAANAEAHQADAFAHAAQAHAAAEgHQAEgGAAgOQAAgZgPgBQgHABgDAFg",
      );
    this.shape_4.setTransform(142.15, 86);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgrAuQgKgLAAgTIAAhHIAmAAIAAA7QAAALAEAFQACAGAIAAQAIAAAEgIQAFgHAAgSIAAgwIAmAAIAABtIgdAAIgFgOIgCAAQgFAIgJAEQgHAEgMAAQgSAAgKgKg",
      );
    this.shape_5.setTransform(123.7, 88.075);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgnAqQgPgQAAgaQAAgaAOgPQAPgPAZAAQARAAAMAHQANAHAGANQAHAMAAARQAAAbgOAPQgPAPgaAAQgZAAgOgPgAgMgVQgEAHAAAOQAAAOAEAHQAEAIAIAAQAJAAAEgIQADgHAAgOQAAgNgDgIQgEgHgJAAQgIAAgEAHg",
      );
    this.shape_6.setTransform(110.675, 87.975);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgyBOIAAgeIAMABQAFAAAEgCQADgCAEgEIAFgLIgrhsIAoAAIATA/IABAMIAAAAIADgMIATg/IAnAAIgsB0QgIAXgLAJQgMAJgVAAIgPgBg",
      );
    this.shape_7.setTransform(98.25, 90.375);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgiBGQgJgGgEgNQgFgNgBgSQAAgaALgPQALgQATABQAJAAAHADQAGAEAGAJIABAAQgCgNAAgNIAAgeIAmAAIAACXIgdAAIgIgOIgBAAQgKAQgSAAQgMAAgJgHgAgKAAQgEAIAAAMQAAAOAEAGQAEAHAHAAQAKAAADgGQAEgFAAgNIAAgDQAAgPgEgFQgEgGgJAAQgHAAgEAGg",
      );
    this.shape_8.setTransform(80.35, 86);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#1A1A1A").s().p("AgSBMIAAiXIAlAAIAACXg");
    this.shape_9.setTransform(70.925, 85.9);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgnAqQgPgQAAgaQAAgaAOgPQAPgPAZAAQARAAAMAHQANAHAGANQAHAMAAARQAAAbgOAPQgPAPgaAAQgZAAgOgPgAgMgVQgEAHAAAOQAAAOAEAHQAEAIAIAAQAJAAAEgIQADgHAAgOQAAgNgDgIQgEgHgJAAQgIAAgEAHg",
      );
    this.shape_10.setTransform(61.375, 87.975);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AAQBMIAAg8QAAgWgOAAQgIABgEAGQgEAIgBATIAAAwIgmAAIAAiXIAmAAIAAAWIgBAhIABAAQAGgJAHgDQAHgDAKAAQASAAALAKQAKALAAASIAABIg",
      );
    this.shape_11.setTransform(48.35, 85.9);

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
    lib.txt13,
    new cjs.Rectangle(39.7, 70.1, 153, 31.30000000000001),
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

    // txt1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgOAaQgHgFgEgGQgDgIAAgHQAAgHAEgHQADgGAHgFQAHgDAHAAQAIAAAHADQAHAFADAGQAEAHAAAHQAAAHgDAIQgEAGgHAEQgHAFgIgBQgHAAgHgDgAgLgUQgGADgDAGQgEAFAAAGQAAAGAEAGQADAGAGADQAFADAGABQAHgBAFgDQAGgDADgGQAEgGAAgGQAAgGgEgFQgDgGgGgDQgFgEgHAAQgGAAgFAEgAAHARIgHgNIgDAAIAAANIgHAAIAAgiIAKAAQAGABADACQADACAAAGQAAAGgGACIAJAPgAgDAAIADAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgBIgDAAg",
      );
    this.shape.setTransform(196.475, 56.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_1.setTransform(187.575, 61.975);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AggArQgOgPAAgcQAAgaAPgPQAPgPAbAAQATAAARAIIgLAcIgNgFQgGgBgGAAQgJAAgFAHQgFAHAAAMQAAAbATAAQARAAAPgKIAAAeQgOAKgVAAQgaAAgOgOg",
      );
    this.shape_2.setTransform(176.225, 61.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AAQA4IAAg7QAAgLgDgGQgEgFgGAAQgJAAgFAHQgEAIAAASIAAAwIgmAAIAAhtIAdAAIAFANIACAAQAFgIAIgDQAIgEALAAQATAAAKAKQAKALAAATIAABHg",
      );
    this.shape_3.setTransform(164, 61.875);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_4.setTransform(151.125, 61.975);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#1A1A1A")
      .s()
      .p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAbIApAAIAAAeIgpAAIAAA1g");
    this.shape_5.setTransform(139.975, 60.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_6.setTransform(122.875, 61.975);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#1A1A1A").s().p("AgSBMIAAiXIAlAAIAACXg");
    this.shape_7.setTransform(113.475, 59.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AACBMQgEgCgDgCIgJgIIgCAAIgHALIgdAAIAAiXIAmAAIAAAiIgBAWIABAAQAFgJAIgEQAGgDAJgBQATABAKAPQALAOAAAaQAAAbgLAQQgLAPgTAAQgGAAgFgBgAgLgBQgDAFAAAMIAAAFQAAANADAHQAFAFAHAAQAGAAAEgGQAEgIgBgNQABgagOAAQgHAAgFAGg",
      );
    this.shape_8.setTransform(104.05, 60);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgSBOIAAhuIAlAAIAABugAgTg7QAAgJAEgFQAFgDAKAAQALAAAEADQAFAFAAAJQAAAQgUAAQgTAAAAgQg",
      );
    this.shape_9.setTransform(94.175, 59.75);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgXA4QgJgBgKgEIAAgfQAJAEALADQAKACAIAAQALAAAAgFQAAgDgDgCQgEgDgPgGQgPgHgHgHQgFgIgBgMQAAgPANgJQALgIAVAAQALAAAKACQAKACAKAFIgKAZIgRgGQgIgDgFAAQgJAAAAAFQAAADAEACIARAIQAMAFAGAEQAFAEADAGQADAGgBAJQABASgMAJQgMAJgWAAQgMAAgJgBg",
      );
    this.shape_10.setTransform(85.75, 61.975);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgSBOIAAhuIAlAAIAABugAgTg7QAAgJAEgFQAFgDAKAAQALAAAEADQAFAFAAAJQAAAQgUAAQgTAAAAgQg",
      );
    this.shape_11.setTransform(77.025, 59.75);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgSA3IgqhtIAoAAIATBAIAAACIAAADIABADIAAADIAAAAQAAgFACgGIAUhAIAnAAIgqBtg",
      );
    this.shape_12.setTransform(67.65, 61.975);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AAQA4IAAg7QAAgLgDgGQgEgFgGAAQgJAAgFAHQgDAIAAASIAAAwIgnAAIAAhtIAdAAIAFANIACAAQAFgIAJgDQAHgEALAAQATAAAKAKQAKALAAATIAABHg",
      );
    this.shape_13.setTransform(54.9, 61.875);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#1A1A1A").s().p("AgSBHIAAiOIAlAAIAACOg");
    this.shape_14.setTransform(44.725, 60.35);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    lib.txt12,
    new cjs.Rectangle(39.3, 44.1, 162.3, 31.300000000000004),
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

    // txt1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgSA6QgIgKAAgTIAAgtIgNAAIAAgPIARgMIAKgYIAYAAIAAAXIAbAAIAAAcIgbAAIAAArQAAALAKAAQAIgBALgDIAAAcIgQAEQgGABgKAAQgSAAgJgJg",
      );
    this.shape.setTransform(125, 34.95);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AglArQgPgPAAgbQAAgbAOgPQAOgPAZAAQAZAAAOANQANANAAAYIAAAQIhDAAQABAKAGAFQAGAFAKAAQALAAAIgCQAIgCAKgEIAAAbQgJAFgJABQgKACgNAAQgbAAgPgOgAATgNQAAgIgFgFQgEgEgHAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg",
      );
    this.shape_1.setTransform(114.275, 35.975);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgSBMIAAiXIAlAAIAACXg");
    this.shape_2.setTransform(104.875, 33.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgRA6QgJgKAAgTIAAgtIgOAAIAAgPIARgMIAKgYIAZAAIAAAXIAbAAIAAAcIgbAAIAAArQAAALAKAAQAHgBALgDIAAAcIgPAEQgHABgIAAQgTAAgIgJg",
      );
    this.shape_3.setTransform(91.9, 34.95);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AgVAcQAHgdACgaIAhAAIABABQgJAkgIASg");
    this.shape_4.setTransform(84.925, 30.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AAQA4IAAg7QAAgLgDgGQgEgFgGAAQgJAAgFAHQgDAIAAASIAAAwIgnAAIAAhtIAdAAIAFANIACAAQAFgIAIgDQAIgEALAAQATAAAKAKQAKALAAATIAABHg",
      );
    this.shape_5.setTransform(75.7, 35.875);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgnAqQgPgQAAgaQAAgaAOgPQAPgPAZAAQARAAAMAHQANAHAGANQAHAMAAARQAAAbgOAPQgPAPgaAAQgZAAgOgPgAgMgVQgEAHAAAOQAAAOAEAHQAEAIAIAAQAJAAAEgIQADgHAAgOQAAgNgDgIQgEgHgJAAQgIAAgEAHg",
      );
    this.shape_6.setTransform(62.675, 35.975);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "Ag7BHIAAiOIAxAAQAhABATARQASASAAAhQAAAjgTATQgUAUgjgBgAgVAoIAIAAQARAAAIgLQAJgJgBgUQAAgUgHgJQgIgKgPAAIgLAAg",
      );
    this.shape_7.setTransform(49.25, 34.35);

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
    lib.txt11,
    new cjs.Rectangle(39.7, 18.1, 92.10000000000001, 31.299999999999997),
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

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFD52C")
      .s()
      .p(
        "ABiBHQAJgIADgLQAFgagdgaQgdgZgvgLQgugLgmALQgmALgGAZQgCAIADAKQACAJgGgIQgKgTAEgUQAHggArgOQAqgOA0AMQA1AMAhAfQAgAegHAgQgGAYgWAMIgDACQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAgBg",
      );
    this.shape.setTransform(16.9203, 21.4214);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgYBeQhDgPgogsQgngqAKgvQAHgbARgPQAGgFgBADIgCAEQgFAKgCAIQgKAqAkAnQAlAnA9AOQA8AOAxgUQAygUAKgpQACgNgBgMQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABACQALAZgHAcQgKAug2AWQggANgkAAQgZAAgbgGg",
      );
    this.shape_1.setTransform(16.264, 26.6674);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgbAeQgJgJABgPQABgOAMgMQALgNAOgDQAPgCAKAJQAKAIgCAPQgBAPgMAMQgLANgOACIgHABQgLAAgHgHg",
      );
    this.shape_2.setTransform(32.68, 14.9103);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgEAlQgOgGgJgPQgJgPACgOQACgQALgGQAMgHANAFQAPAGAJAPQAJAPgCAPQgCAPgMAHQgGAEgHAAQgGAAgGgDg",
      );
    this.shape_3.setTransform(4.5575, 8.8675);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgQAzQgPgFgGgSQgGgSAGgVQAHgVAQgMQAOgLAQAFQAQAFAGASQAGASgHAVQgGAVgQAMQgLAIgKAAIgKgCg",
      );
    this.shape_4.setTransform(25.2125, 7.875);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgbAnQgLgRAAgWQAAgVALgQQAMgQAPAAQAQAAAMAQQALAQAAAVQAAAWgLARQgMAPgQAAQgPAAgMgPg",
      );
    this.shape_5.setTransform(14.375, 5.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "ABDCEQgFgHAAgGIAAhZQAAgbgSgUQgSgUgagBQgZAAgSAVQgSATAAAcIAABZQAAAGgGAHQgFAFgIABQgHgBgGgFQgFgGAAgHIAAjtQAAgIAFgFQAFgFAIgBQAIABAFAFQAGAGAAAHIAABDIADgDQAZgVAhAAQApAAAdAgQAdAfAAAqIAABZQAAAHgGAGQgFAFgHABQgHgBgHgFg",
      );
    this.shape_6.setTransform(53.775, 18.65);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AgiBtQgIgRAAgtIAAilQAAgGAFgHQAHgFAGAAQAHAAAHAFQAFAHAAAGIAACiQAAAlAHALQAGAIAQAAQAIAAAGAGQAFAFAAAIQAAAIgFAFQgGAFgIAAQgsAAgOgcg",
      );
    this.shape_7.setTransform(96.725, 18.625);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "ABLBlQgGgGAAgHIAAgIIgDADQgOALgNAFQgOAGgZACIAAAAQgrgBgfgfQgfgfAAgsQAAgrAfgfQAfggArAAQAtAAAeAgQAgAfgBArIAABYQABAGgGAHQgFAFgIABQgHgBgGgFgAgwgwQgUATAAAdQAAAdAUAUQAUAUAcAAQANAAANgFQANgFAKgKQATgUABgaIAAgDQABgcgVgUQgUgUgdgBQgdABgTAUg",
      );
    this.shape_8.setTransform(78.05, 21.75);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#3B3E3E")
      .s()
      .p(
        "AhLBMQgeggAAgsQAAgrAegfQAgggArABQAsgBAfAgQAgAfgBArQABAsggAgQgfAegsAAQgrAAgggegAgwgwQgVAUABAcQgBAcAVAVQAVAUAbAAQAcAAAVgUQAVgVgBgcQABgcgVgUQgUgVgdABQgcgBgUAVg",
      );
    this.shape_9.setTransform(111.45, 21.7);

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
    lib.logo,
    new cjs.Rectangle(0, 0, 122.1, 36.7),
    null,
  );

  (lib.img4 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.product();
    this.instance.setTransform(-93, -47, 0.4389, 0.4389);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.img4,
    new cjs.Rectangle(-93, -47, 183, 114.6),
    null,
  );

  (lib.img3_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.img3();
    this.instance.setTransform(-150, -125, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.img3_1,
    new cjs.Rectangle(-150, -125, 300, 250),
    null,
  );

  (lib.img2_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.img2();
    this.instance.setTransform(-150, -60, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.img2_1,
    new cjs.Rectangle(-150, -60, 300, 125),
    null,
  );

  (lib.img1_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.img1();
    this.instance.setTransform(-150, -30, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.img1_1,
    new cjs.Rectangle(-150, -30, 300, 154.5),
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
        "AAPArIgLgsIgCgKIgCgKIgBAKIgCAKIgLAsIgVAAIgWhVIASAAIALAuIAEAWIACgKIACgLIAMgvIAQAAIANAvIACAKIACALIACgLIACgLIALguIASAAIgWBVg",
      );
    this.shape.setTransform(31.3, 0.475);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgdAgQgLgKAAgWQAAgVALgKQAKgMATAAQAUAAAKAMQALAKAAAVQAAAWgLAKQgKAMgUAAQgTAAgKgMgAgPgVQgGAIAAANQAAAOAGAIQAFAHAKAAQAWAAAAgdQAAgcgWAAQgKAAgFAHg",
      );
    this.shape_1.setTransform(20.725, 0.45);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AAOArIgkhAIAAAAIABAXIAAApIgQAAIAAhVIAWAAIAlA/IAAAAIgBgWIAAgpIARAAIAABVg",
      );
    this.shape_2.setTransform(11.1, 0.475);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAYAAQARAAAJAGQAIAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAFgDAAgGQAAgGgFgCQgDgDgJAAIgFAAg",
      );
    this.shape_3.setTransform(-0.3, 0.475);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AgYArIAAhVIAxAAIAAAPIgfAAIAAATIAdAAIAAAOIgdAAIAAAWIAfAAIAAAPg");
    this.shape_4.setTransform(-7.95, 0.475);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgjArIAAhVIAbAAQAUAAAMALQALALAAAUQABAUgMAMQgNALgVAAgAgRAcIAIAAQAZAAABgcQgBgbgXAAIgKAAg",
      );
    this.shape_5.setTransform(-15.7, 0.475);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AAOArIgTghIgKAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgEAFgIADIAZAmgAgPgEIAGAAQAJAAADgDQADgDAAgGQAAgGgDgCQgEgDgJAAIgFAAg",
      );
    this.shape_6.setTransform(-23.75, 0.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgdAgQgLgKAAgWQAAgVALgKQAKgMATAAQAUAAAKAMQALAKAAAVQAAAWgLAKQgKAMgUAAQgTAAgKgMgAgPgVQgGAIAAANQAAAOAGAIQAFAHAKAAQAWAAAAgdQAAgcgWAAQgKAAgFAHg",
      );
    this.shape_7.setTransform(-33.025, 0.45);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FDD835")
      .s()
      .p(
        "Am9CJQgXAAgQgQQgQgQAAgXIAAiiQAAgXAQgRQAQgQAXAAIN6AAQAYAAAQAQQAQARAAAXIAACiQAAAXgQAQQgQAQgYAAg",
      );
    this.shape_8.setTransform(0, 0.025);

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
    new cjs.Rectangle(-50.1, -13.7, 100.30000000000001, 27.5),
    null,
  );

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

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(410));

    // logo_copy
    this.instance = new lib.logo();
    this.instance.setTransform(144.95, 215.9, 1, 1, 0, 0, 0, 61.1, 18.4);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(108)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 12, cjs.Ease.quadOut)
        .wait(194)
        .to({ x: 86.9 }, 10, cjs.Ease.quadInOut)
        .wait(86),
    );

    // cta
    this.instance_1 = new lib.cta();
    this.instance_1.setTransform(223.6, 220.15, 0.8, 0.8, 0, 0, 0, 0.1, 0.1);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(319)
        .to({ _off: false }, 0)
        .to(
          { regX: 0, regY: 0, scaleX: 1, scaleY: 1, alpha: 1 },
          12,
          cjs.Ease.backOut,
        )
        .wait(79),
    );

    // txt43
    this.instance_2 = new lib.txt43();
    this.instance_2.setTransform(246.5, 148.9, 1, 1, 0, 0, 0, 226.5, 148.9);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(208)
        .to({ _off: false }, 0)
        .to({ x: 226.5, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(73)
        .to({ x: 376.5 }, 10, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(109),
    );

    // txt42
    this.instance_3 = new lib.txt42();
    this.instance_3.setTransform(237.1, 128.8, 1, 1, 0, 0, 0, 217.1, 128.8);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(204)
        .to({ _off: false }, 0)
        .to({ x: 217.1, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(77)
        .to({ x: 367.1 }, 10, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(109),
    );

    // txt41
    this.instance_4 = new lib.txt41();
    this.instance_4.setTransform(254, 109.8, 1, 1, 0, 0, 0, 234, 109.8);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(200)
        .to({ _off: false }, 0)
        .to({ x: 234, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(81)
        .to({ x: 384 }, 10, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(109),
    );

    // txt32
    this.instance_5 = new lib.txt32();
    this.instance_5.setTransform(111.9, 66.6, 1, 1, 0, 0, 0, 111.9, 51.6);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(190)
        .to({ _off: false }, 0)
        .to({ y: 51.6, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(211),
    );

    // txt31
    this.instance_6 = new lib.txt31();
    this.instance_6.setTransform(151.6, 45.2, 1, 1, 0, 0, 0, 151.6, 30.2);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(186)
        .to({ _off: false }, 0)
        .to({ y: 30.2, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(215),
    );

    // txt22
    this.instance_7 = new lib.txt22();
    this.instance_7.setTransform(83.9, 64.8, 1, 1, 0, 0, 0, 83.9, 49.8);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(109)
        .to({ _off: false }, 0)
        .to({ y: 49.8, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(58)
        .to({ y: 15, alpha: 0 }, 9, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(224),
    );

    // txt21
    this.instance_8 = new lib.txt21();
    this.instance_8.setTransform(119.8, 43.4, 1, 1, 0, 0, 0, 119.8, 28.4);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(105)
        .to({ _off: false }, 0)
        .to({ y: 28.4, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(62)
        .to({ y: -6.4, alpha: 0 }, 9, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(224),
    );

    // txt13
    this.instance_9 = new lib.txt13();
    this.instance_9.setTransform(121.5, 100.8, 1, 1, 0, 0, 0, 121.5, 85.8);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(13)
        .to({ _off: false }, 0)
        .to({ y: 85.8, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(74)
        .to({ y: 70.8, alpha: 0 }, 8, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(305),
    );

    // txt12
    this.instance_10 = new lib.txt12();
    this.instance_10.setTransform(123.3, 74.5, 1, 1, 0, 0, 0, 123.3, 59.5);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ y: 59.5, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(78)
        .to({ y: 44.5, alpha: 0 }, 8, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(305),
    );

    // txt11
    this.instance_11 = new lib.txt11();
    this.instance_11.setTransform(89, 49.8, 1, 1, 0, 0, 0, 89, 34.8);
    this.instance_11.alpha = 0;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ y: 34.8, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(82)
        .to({ y: 19.8, alpha: 0 }, 8, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(305),
    );

    // yellowside
    this.instance_12 = new lib.yellowside();
    this.instance_12.setTransform(-2, 185.3, 1, 1.8692, 0, 0, 0, 164, 185.2);
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(185)
        .to({ _off: false }, 0)
        .to({ regY: 185.1, scaleY: 1, y: 185.1 }, 8, cjs.Ease.quadOut)
        .to({ x: 164 }, 13, cjs.Ease.quadInOut)
        .wait(84)
        .to({ x: 314 }, 10, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(109),
    );

    // yellow
    this.instance_13 = new lib.yellow();
    this.instance_13.setTransform(150.1, 86.4, 1, 1, 0, 0, 0, 150.1, -63.6);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .to({ y: -63.6 }, 11)
        .wait(85)
        .to({ y: -110.6 }, 18, cjs.Ease.quadInOut)
        .wait(62)
        .to({ y: -0.6 }, 9, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(224),
    );

    // mask3 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_193 = new cjs.Graphics().p(
      "AwQIdQgyAAgigjQgkgjAAgyIAAtJQAAgyAkgjQAigjAyAAMAiZAAAIAAQ5g",
    );
    var mask_graphics_290 = new cjs.Graphics().p(
      "AwQIdQgyAAgigjQgkgjAAgyIAAtJQAAgyAkgjQAigjAyAAMAiZAAAIAAQ5g",
    );
    var mask_graphics_291 = new cjs.Graphics().p(
      "AvyOeQgygBgigiQgjgkAAgyIAAtIQAAgyAjgjQAigjAyAAMAiZAAAIAAQ5g",
    );
    var mask_graphics_292 = new cjs.Graphics().p(
      "AuYOeQgygBgigiQgjgkAAgyIAAtIQAAgyAjgjQAigjAyAAMAiZAAAIAAQ5g",
    );
    var mask_graphics_293 = new cjs.Graphics().p(
      "AsCOeQgygBgigiQgkgkAAgyIAAtIQAAgyAkgjQAigjAyAAMAiZAAAIAAQ5g",
    );
    var mask_graphics_294 = new cjs.Graphics().p(
      "AowOeQgygBgigiQgjgkAAgyIAAtIQAAgyAjgjQAigjAyAAMAiZAAAIAAQ5g",
    );
    var mask_graphics_295 = new cjs.Graphics().p(
      "AkiOeQgygBgigiQgjgkAAgyIAAtIQAAgyAjgjQAigjAyAAMAiZAAAIAAQ5g",
    );
    var mask_graphics_296 = new cjs.Graphics().p(
      "AgTOeQgzgBgigiQgjgkAAgyIAAtIQAAgyAjgjQAigjAzAAMAiYAAAIAAQ5g",
    );
    var mask_graphics_297 = new cjs.Graphics().p(
      "AC+OeQgygBgkgiQgigkgBgyIAAtIQABgyAigjQAkgjAyAAMAiYAAAIAAQ5g",
    );
    var mask_graphics_298 = new cjs.Graphics().p(
      "AFTOeQgygBgigiQgjgkAAgyIAAtIQAAgyAjgjQAigjAyAAMAiaAAAIAAQ5g",
    );
    var mask_graphics_299 = new cjs.Graphics().p(
      "AGtOeQgygBgigiQgjgkAAgyIAAtIQAAgyAjgjQAigjAyAAMAiaAAAIAAQ5g",
    );
    var mask_graphics_300 = new cjs.Graphics().p(
      "AHMOeQgygBgkgiQgigkgBgyIAAtIQABgyAigjQAkgjAyAAMAiYAAAIAAQ5g",
    );

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(193)
        .to({ graphics: mask_graphics_193, x: 116.05, y: 131.025 })
        .wait(97)
        .to({ graphics: mask_graphics_290, x: 116.05, y: 131.025 })
        .wait(1)
        .to({ graphics: mask_graphics_291, x: 119.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_292, x: 128.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_293, x: 143.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_294, x: 164.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_295, x: 191.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_296, x: 218.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_297, x: 239.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_298, x: 254.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_299, x: 263.05, y: 92.55 })
        .wait(1)
        .to({ graphics: mask_graphics_300, x: 266.05, y: 92.55 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(109),
    );

    // img3_jpg
    this.instance_14 = new lib.img3_1();
    this.instance_14.setTransform(150, 125);
    this.instance_14._off = true;

    var maskedShapeInstanceList = [this.instance_14];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(193)
        .to({ _off: false }, 0)
        .to({ _off: true }, 108)
        .wait(109),
    );

    // img4_jpg
    this.instance_15 = new lib.img4();
    this.instance_15.setTransform(150, 124);
    this.instance_15._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .wait(290)
        .to({ _off: false }, 0)
        .wait(120),
    );

    // maska1 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_96 = new cjs.Graphics().p(
      "A1fJkQgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_97 = new cjs.Graphics().p(
      "A1fJkQgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_98 = new cjs.Graphics().p(
      "A1fJkQgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_99 = new cjs.Graphics().p(
      "A1fJkQgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_100 = new cjs.Graphics().p(
      "A1fJkQgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_101 = new cjs.Graphics().p(
      "A1fJtQgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_102 = new cjs.Graphics().p(
      "A1fKDQgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_103 = new cjs.Graphics().p(
      "A1fKdQgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_104 = new cjs.Graphics().p(
      "A1fK7QgyAAgjgjQgjgkAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_105 = new cjs.Graphics().p(
      "A1fLdQgyAAgjgjQgjgkAAgxIAAvWQAAgyAjgkQAjgiAygBMAq/AAAQAyABAjAiQAjAkAAAyIAAPWQAAAxgjAkQgjAjgyAAg",
    );
    var mask_1_graphics_106 = new cjs.Graphics().p(
      "A1fL/QgyAAgjgjQgjgjAAgyIAAvWQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPWQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_107 = new cjs.Graphics().p(
      "A1fMdQgyAAgjgjQgjgjAAgyIAAvWQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPWQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_108 = new cjs.Graphics().p(
      "A1fM3QgyAAgjgjQgjgjAAgyIAAvWQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPWQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_109 = new cjs.Graphics().p(
      "A1fNNQgyAAgjgjQgjgjAAgyIAAvWQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPWQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_110 = new cjs.Graphics().p(
      "A1fNfQgyAAgjgjQgjgjAAgyIAAvWQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPWQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_111 = new cjs.Graphics().p(
      "A1fNtQgyAAgjgjQgjgjAAgyIAAvWQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPWQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_112 = new cjs.Graphics().p(
      "A1fN3QgyAAgjgjQgjgjAAgyIAAvWQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPWQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_113 = new cjs.Graphics().p(
      "A1fN9QgyAAgjgjQgjgjAAgyIAAvWQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPWQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_114 = new cjs.Graphics().p(
      "A1fN/QgyABgjgkQgjgjAAgxIAAvXQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAPXQAAAxgjAjQgjAkgygBg",
    );

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(96)
        .to({ graphics: mask_1_graphics_96, x: 149.625, y: 52.925 })
        .wait(1)
        .to({ graphics: mask_1_graphics_97, x: 149.625, y: 53.3262 })
        .wait(1)
        .to({ graphics: mask_1_graphics_98, x: 149.625, y: 54.5299 })
        .wait(1)
        .to({ graphics: mask_1_graphics_99, x: 149.625, y: 56.5361 })
        .wait(1)
        .to({ graphics: mask_1_graphics_100, x: 149.625, y: 59.3448 })
        .wait(1)
        .to({ graphics: mask_1_graphics_101, x: 149.625, y: 62.0654 })
        .wait(1)
        .to({ graphics: mask_1_graphics_102, x: 149.625, y: 64.2722 })
        .wait(1)
        .to({ graphics: mask_1_graphics_103, x: 149.625, y: 66.8802 })
        .wait(1)
        .to({ graphics: mask_1_graphics_104, x: 149.625, y: 69.8895 })
        .wait(1)
        .to({ graphics: mask_1_graphics_105, x: 149.625, y: 73.3 })
        .wait(1)
        .to({ graphics: mask_1_graphics_106, x: 149.625, y: 76.7105 })
        .wait(1)
        .to({ graphics: mask_1_graphics_107, x: 149.625, y: 79.7198 })
        .wait(1)
        .to({ graphics: mask_1_graphics_108, x: 149.625, y: 82.3278 })
        .wait(1)
        .to({ graphics: mask_1_graphics_109, x: 149.625, y: 84.5346 })
        .wait(1)
        .to({ graphics: mask_1_graphics_110, x: 149.625, y: 86.3401 })
        .wait(1)
        .to({ graphics: mask_1_graphics_111, x: 149.625, y: 87.7444 })
        .wait(1)
        .to({ graphics: mask_1_graphics_112, x: 149.625, y: 88.7475 })
        .wait(1)
        .to({ graphics: mask_1_graphics_113, x: 149.625, y: 89.3494 })
        .wait(1)
        .to({ graphics: mask_1_graphics_114, x: 149.625, y: 89.55 })
        .wait(72)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(224),
    );

    // img2_jpg
    this.instance_16 = new lib.img2_1();
    this.instance_16.setTransform(150, 125);
    this.instance_16._off = true;

    var maskedShapeInstanceList = [this.instance_16];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_16)
        .wait(96)
        .to({ _off: false }, 0)
        .to({ _off: true }, 90)
        .wait(224),
    );

    // white_copy
    this.instance_17 = new lib.whitebg();
    this.instance_17.setTransform(300, 550, 1, 1, 0, 0, 0, 300, 300);
    this.instance_17._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_17)
        .wait(96)
        .to({ _off: false }, 0)
        .to({ y: 300 }, 18, cjs.Ease.quadInOut)
        .wait(296),
    );

    // img1_jpg
    this.instance_18 = new lib.img1_1();
    this.instance_18.setTransform(150, 125);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_18).to({ _off: true }, 115).wait(295),
    );

    // white
    this.instance_19 = new lib.whitebg();
    this.instance_19.setTransform(300, 300, 1, 1, 0, 0, 0, 300, 300);

    this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(410));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, -297, 751, 797);

  // stage content:
  (lib.halo_fence1lab_300x250 = function (mode, startPosition, loop, reversed) {
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
    148.7,
    25,
    152.60000000000002,
    247.89999999999998,
  );
  // library properties:
  lib.properties = {
    id: "9B790E04C371564B8B581ACBE7802159",
    width: 300,
    height: 250,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a03577ca96b1bc23d4066c5_img1%20(2).jpg",
        id: "img1",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a0357913721ee6a16f5300b_img2%20(2).jpg",
        id: "img2",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a0357a2c6e5884924dbd16d_img3%20(2).jpg",
        id: "img3",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a0354e74fdf6a63923c7b23_product%20(1).jpg",
        id: "product",
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
  an.compositions["9B790E04C371564B8B581ACBE7802159"] = {
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
