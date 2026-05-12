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
  p.nominalBounds = new cjs.Rectangle(0, 0, 417, 366);

  (lib.img2 = function () {
    this.initialize(img.img2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 417, 366);

  (lib.img3 = function () {
    this.initialize(img.img3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 417, 371);

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
      .p(
        "A2mPEQg8AAgrgqQgqgrABg7IAA5nQgBg7AqgrQArgqA8AAMAtNAAAQA9AAAqAqQApArAAA7IAAZnQAAA7gpArQgqAqg9AAg",
      );
    this.shape.setTransform(139.15, 42.675);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.yellow,
    new cjs.Rectangle(-20, -53.7, 318.3, 192.8),
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
        "AgaAjQgLgMAAgXQAAgWANgMQANgNAVAAQAPAAANAGIgHAQQgJgGgMAAQgLAAgIAJQgHAJAAANQgBAPAHAIQAFAIAMAAIAMgBIAAgTIgRAAIAAgQIAkAAIAAAvQgIADgJABQgHACgJAAQgUAAgLgNg",
      );
    this.shape.setTransform(521.85, 67.775);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AAQAuIgnhEIgBAAIACAZIAAArIgSAAIAAhcIAZAAIAnBFIABAAIgBgZIAAgsIARAAIAABcg",
      );
    this.shape_1.setTransform(512.025, 67.75);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgJAuIAAhcIATAAIAABcg");
    this.shape_2.setTransform(504.6, 67.75);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgaAjQgLgMAAgXQAAgWANgMQANgNAWAAQAOAAANAGIgGAQQgLgGgKAAQgNAAgHAJQgIAJAAANQABAPAFAIQAHAIAKAAIANgBIAAgTIgRAAIAAgQIAkAAIAAAvQgJADgHABQgJACgIAAQgUAAgLgNg",
      );
    this.shape_3.setTransform(497.6, 67.775);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgaAjQgLgMAAgXQAAgWANgMQANgNAVAAQAPAAANAGIgHAQQgJgGgMAAQgLAAgIAJQgHAJgBANQAAAPAHAIQAFAIAMAAIAMgBIAAgTIgSAAIAAgQIAlAAIAAAvQgIADgJABQgHACgJAAQgUAAgLgNg",
      );
    this.shape_4.setTransform(488.2, 67.775);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AgJAuIAAhcIATAAIAABcg");
    this.shape_5.setTransform(481.5, 67.75);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgmAuIAAhcIAeAAQAWABAMALQANAMAAAWQgBAWgNAMQgNAMgXAAgAgSAfIAJAAQAbAAAAgfQAAgdgZAAIgLAAg",
      );
    this.shape_6.setTransform(474.75, 67.75);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AggAjQgLgMAAgXQAAgXALgMQAMgMAUAAQAWAAALAMQALANAAAWQAAAXgLAMQgMANgVAAQgUAAgMgNgAgRgWQgGAHAAAPQAAAPAGAJQAGAHALABQAYgBAAgfQAAgfgYABQgLgBgGAJg",
      );
    this.shape_7.setTransform(461.275, 67.75);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AAQAuIgnhEIgBAAIACAZIAAArIgSAAIAAhcIAZAAIAnBFIABAAIgBgZIAAgsIARAAIAABcg",
      );
    this.shape_8.setTransform(450.825, 67.75);

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
    new cjs.Rectangle(181.9, 56.5, 347, 77.9),
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
        "AgdAqIAAgSIAQAGIAMABQAFAAADgCQAEgDAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgFIgLgGQgJgEgEgCQgEgEgDgFQgCgFAAgGQAAgNAIgHQAIgHAOAAIAOACIAOAFIgHAPIgMgEIgJgCQgFAAgDADQgDADAAAEIABAEIAEAEIAMAHQANAGAEAFQAFAGAAAJQAAANgJAHQgJAIgPAAQgPAAgLgGg",
      );
    this.shape.setTransform(505.975, 46.775);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AgaAuIAAhbIA1AAIAAAQIghAAIAAAUIAfAAIAAAQIgfAAIAAAXIAhAAIAAAQg");
    this.shape_1.setTransform(498.925, 46.75);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AAPAuIgVgjIgKAAIAAAjIgUAAIAAhbIAbAAQASgBAJAIQAJAGAAAPQAAAHgEAHQgFAFgIAEIAbAogAgQgEIAGAAQAJAAAEgDQAEgEAAgGQAAgGgEgDQgEgDgJAAIgGAAg",
      );
    this.shape_2.setTransform(491.425, 46.75);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AgJAuIAAhbIATAAIAABbg");
    this.shape_3.setTransform(484.4, 46.75);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AARAuIgNgvIgCgLIgCgLIgBALIgCALIgNAvIgWAAIgYhbIAUAAIALAxQAEAOABAKIACgKIACgMIAOgzIARAAIAOAzIACALIACALIACgLIADgNIAMgxIATAAIgYBbg",
      );
    this.shape_4.setTransform(475.975, 46.75);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AggAkQgLgNAAgXQAAgWALgMQAMgNAUAAQAWAAALANQALAMAAAWQAAAXgLANQgMAMgVAAQgUAAgMgMgAgRgXQgGAJAAAOQAAAQAGAIQAGAHALAAQAYABAAggQAAgfgYAAQgLABgGAHg",
      );
    this.shape_5.setTransform(461.225, 46.75);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AAQAuIgnhFIgBAAIACAaIAAArIgSAAIAAhbIAZAAIAnBEIABAAIgBgYIAAgsIARAAIAABbg",
      );
    this.shape_6.setTransform(450.775, 46.75);

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
    new cjs.Rectangle(181.9, 35.5, 329.79999999999995, 122.1),
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
        "AgmAvIAAhdIAeAAQAWAAAMANQANALAAAWQAAAWgOAMQgNANgXAAgAgSAfIAJAAQAbAAAAgfQAAgdgZAAIgLAAg",
      );
    this.shape.setTransform(529.1, 24.75);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AgaAvIAAhdIA1AAIAAARIghAAIAAAUIAfAAIAAAPIgfAAIAAAZIAhAAIAAAQg");
    this.shape_1.setTransform(520.675, 24.75);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgcAvIAAhdIAUAAIAABNIAlAAIAAAQg");
    this.shape_2.setTransform(513.575, 24.75);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AghAvIAAhdIAcAAQAUABAIAFQAJAGAAAMQAAAJgDAFQgFAFgGABIAAABQAJABAEAFQADAFAAAKQAAAMgJAIQgJAGgPABgAgNAfIAMAAQAIgBADgDQAEgDAAgHQAAgLgQAAIgLAAgAgNgJIALAAQAHAAAEgCQADgDAAgFQAAgGgEgCQgEgCgIAAIgJAAg",
      );
    this.shape_3.setTransform(505.45, 24.75);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AAYAvIgHgXIghAAIgHAXIgVAAIAhhdIAXAAIAhBdgAAMAIIgKghIgCgGIgLAnIAXAAg");
    this.shape_4.setTransform(496.375, 24.75);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AAQAvIgnhFIgBAAIACAZIAAAsIgSAAIAAhdIAZAAIAnBFIABAAIgBgZIAAgsIARAAIAABdg",
      );
    this.shape_5.setTransform(486.625, 24.75);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p("AgaAvIAAhdIA1AAIAAARIghAAIAAAUIAfAAIAAAPIgfAAIAAAZIAhAAIAAAQg");
    this.shape_6.setTransform(477.925, 24.75);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#000000").s().p("AgQAIIAAgPIAhAAIAAAPg");
    this.shape_7.setTransform(472.05, 25.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgdAqIAAgSIAQAGIAMABQAFAAADgCQAEgDAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgFIgLgGQgJgEgEgCQgEgEgDgFQgCgFAAgGQAAgNAIgHQAIgHAOAAIAOACIAOAFIgHAPIgMgEIgJgCQgFAAgDADQgDADAAAEIABAEIAEAEIAMAHQANAGAEAFQAFAGAAAJQAAANgJAHQgJAIgPAAQgPAAgLgGg",
      );
    this.shape_8.setTransform(466.425, 24.775);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgfAvIAAhdIAeAAQAPAAAJAIQAJAHAAAPQAAAPgJAGQgKAJgQAAIgIAAIAAAhgAgLgCIAGAAQAIABAFgEQAEgEAAgGQAAgIgEgDQgDgDgHAAIgJAAg",
      );
    this.shape_9.setTransform(459.025, 24.75);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgaAjQgLgMAAgXQAAgWANgMQANgNAVAAQAPAAANAGIgGAQQgLgGgLAAQgMAAgHAJQgIAJAAANQABAPAFAIQAGAIALAAIANgBIAAgTIgSAAIAAgQIAlAAIAAAvQgJADgHABQgJACgIAAQgUAAgLgNg",
      );
    this.shape_10.setTransform(449.8, 24.775);

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
    new cjs.Rectangle(443.3, 13.5, 92.59999999999997, 21.700000000000003),
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
        "AgRAQQgGgGgBgKQAAgJAHgHQAGgFALAAQAMAAAGAFQAHAHAAAJQgBAKgGAGQgGAGgMABQgKgBgHgGg",
      );
    this.shape.setTransform(226.05, 78.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_1.setTransform(215.425, 74.225);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgnAzQgRgSAAggQAAghASgSQATgSAgAAQAXAAAVAKIgOAiIgPgGQgHgCgIAAQgLAAgFAJQgGAIAAAPQAAAgAWAAQAVAAASgMIAAAlQgSAMgYAAQggAAgRgSg",
      );
    this.shape_2.setTransform(201.975, 74.225);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AATBDIAAhHQAAgNgEgHQgEgHgIAAQgLABgFAIQgFAKAAAWIAAA5IguAAIAAiDIAjAAIAFAQIADAAQAGgJAKgFQAKgFANAAQAWAAAMANQANANAAAXIAABVg",
      );
    this.shape_3.setTransform(187.525, 74.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_4.setTransform(172.275, 74.225);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p("AgyBWIAAirIBlAAIAAAmIg3AAIAAAgIAyAAIAAAkIgyAAIAABBg");
    this.shape_5.setTransform(159.075, 72.275);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgdBDQgLgCgLgEIAAgkQALAEAMADQANADAKAAQAOAAAAgGQAAgEgEgDQgEgDgTgHQgTgIgHgIQgHgKAAgPQAAgSAOgLQAOgKAZAAQAOAAALADQAMADAMAFIgMAeQgKgEgKgDQgKgDgGAAQgLAAAAAGQAAADAEACIAWAKQAOAGAHAFQAHAFADAHQADAIAAAKQAAAWgOALQgPALgaAAQgPAAgLgCg",
      );
    this.shape_6.setTransform(140.225, 74.225);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgdBDQgLgCgLgEIAAgkQALAEAMADQANADAKAAQAOAAAAgGQAAgEgEgDQgEgDgTgHQgTgIgHgIQgHgKAAgPQAAgSAOgLQAOgKAZAAQAOAAALADQAMADAMAFIgMAeQgKgEgKgDQgKgDgGAAQgLAAAAAGQAAADAEACIAWAKQAOAGAHAFQAHAFADAHQADAIAAAKQAAAWgOALQgPALgaAAQgPAAgLgCg",
      );
    this.shape_7.setTransform(127.675, 74.225);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_8.setTransform(113.875, 74.225);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#000000").s().p("AgWBbIAAi1IAtAAIAAC1g");
    this.shape_9.setTransform(102.775, 71.725);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_10.setTransform(91.725, 74.225);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AguBDIAAiDIAiAAIAHAVIACAAQAFgKALgHQAKgHAKAAIALABIADABIgEArQgGgBgKgBQgPAAgHAIQgGAGAAAMIAABBg",
      );
    this.shape_11.setTransform(79.55, 74.1);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBdIAAiEIAtAAIAACEgAgXhIQAAgKAFgFQAGgFAMAAQANAAAGAFQAFAFAAAKQAAAUgYABQgXgBAAgUg",
      );
    this.shape_12.setTransform(69.575, 71.55);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AAZBWIgRhLIgEgSIgDgXIgCATIgFAUIgRBNIg3AAIgqirIAtAAIASBVIAJAuIAFghIAIghIAPhBIAqAAIAPBBIAHAjIAFAfQACgNAGggIAThWIAtAAIgqCrg",
      );
    this.shape_13.setTransform(53.4, 72.275);

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
    new cjs.Rectangle(39, 53.2, 192.5, 36.7),
    null,
  );

  (lib.txt31copy = function (mode, startPosition, loop, reversed) {
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
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape.setTransform(249.125, 41.975);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AguBDIAAiEIAiAAIAHAWIADAAQAEgKALgHQAJgGALgBIALABIADABIgEArQgGgCgKABQgPgBgGAIQgHAGAAAMIAABBg",
      );
    this.shape_1.setTransform(236.95, 41.85);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_2.setTransform(223.475, 41.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AATBbIAAhIQAAgagQAAQgKAAgGAJQgFAJAAAWIAAA6IguAAIAAi1IAuAAIAAAaIgCAoIACAAQAHgKAJgFQAIgEAMAAQAWAAAMANQANANAAAWIAABWg",
      );
    this.shape_3.setTransform(208.275, 39.475);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AAVBCIgPg/IgEgSIgCgPIAAAAIgHAoIgOA4IgwAAIgkiEIAtAAIALA0QAFAZABASIAAAAQABgMAGgdIAMg2IAyAAIALA3QAFAZACAPIAAAAIADgXIADgUIAMg0IAsAAIgkCEg",
      );
    this.shape_4.setTransform(189.525, 41.95);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "Ag8BdIAAgkQAGACAIAAQAGAAAFgCQAEgDAEgEQADgEAEgKIg0iCIAwAAIAWBMIACAPIAAAAIADgPIAXhMIAvAAIg0CMQgKAbgOALQgPALgYAAQgJAAgJgCg",
      );
    this.shape_5.setTransform(171.525, 44.825);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AATBDIAAhHQAAgNgEgHQgEgGgIAAQgLgBgFAJQgFAKAAAWIAAA5IguAAIAAiEIAjAAIAFARIADAAQAGgJAKgFQAKgEANgBQAWABAMAMQANANAAAXIAABVg",
      );
    this.shape_6.setTransform(156.425, 41.85);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AAkBWIgIggIg3AAIgIAgIgzAAIA4irIA8AAIA5CrgAASAQIgHgbIgGgYIgFgWIgDAUIgOA1IAjAAg",
      );
    this.shape_7.setTransform(139.875, 40);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#000000").s().p("AggASIAAgjIBBAAIAAAjg");
    this.shape_8.setTransform(127.575, 42.175);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgvAyQgSgTAAgfQAAggARgSQASgSAfAAQATAAAPAIQAPAJAIAPQAIAQAAAUQAAAggRASQgSATgfAAQgdAAgSgTgAgOgZQgFAIAAARQAAARAFAJQAEAJAKAAQALAAAEgJQAFgJAAgRQAAgQgFgJQgEgJgLAAQgKAAgEAJg",
      );
    this.shape_9.setTransform(116.325, 41.975);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "Ag0BBQgWgXAAgqQAAgpAYgXQAYgXApAAQARAAAOADQAOADALAFIgPAkQgSgJgWAAQgUAAgLANQgLANAAAYQAAAYAKAMQAKANASAAQAKAAAJgCIAAgbIgeAAIAAgjIBKAAIAABcQgfAKgkAAQgmAAgWgXg",
      );
    this.shape_10.setTransform(99.825, 40.025);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_11.setTransform(77.975, 41.975);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AATBbIAAhIQAAgagQAAQgKAAgGAJQgFAJAAAWIAAA6IguAAIAAi1IAuAAIAAAaIgCAoIACAAQAHgKAJgFQAIgEAMAAQAWAAAMANQANANAAAWIAABWg",
      );
    this.shape_12.setTransform(62.775, 39.475);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
    this.shape_13.setTransform(47.85, 40.025);

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
    lib.txt31copy,
    new cjs.Rectangle(36.2, -11.7, 229.90000000000003, 70.4),
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
        "AgRARQgGgHgBgKQAAgKAHgFQAGgHALAAQAMAAAGAHQAHAFAAAKQgBAKgGAHQgGAFgMAAQgKAAgHgFg",
      );
    this.shape.setTransform(100.4, 14.15);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgvAyQgSgTAAgfQAAggARgSQASgSAfAAQATAAAPAIQAPAJAIAPQAIAQAAAUQAAAggRASQgSATgfAAQgdAAgSgTgAgOgZQgFAIAAARQAAARAFAJQAEAJAKAAQALAAAEgJQAFgJAAgRQAAgQgFgJQgEgJgLAAQgKAAgEAJg",
      );
    this.shape_1.setTransform(89.325, 9.475);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgWBbIAAi1IAtAAIAAC1g");
    this.shape_2.setTransform(77.825, 6.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgzA5QgLgLAAgUQAAgWAPgJQAPgKAcgCIAVAAIAAgCQAAgRgQAAQgOAAgWAKIgNgeQAXgMAiAAQAaAAAOANQAOAMAAAXIAABWIggAAIgJgRIgBAAQgJALgJAEQgJAFgPAAQgTAAgLgMgAAHAHQgWABAAAQQAAAMANAAQAIAAAFgFQAGgFAAgJIAAgKg",
      );
    this.shape_3.setTransform(66.125, 9.475);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AAbBWIAAhGIg1AAIAABGIgvAAIAAirIAvAAIAABAIA1AAIAAhAIAvAAIAACrg");
    this.shape_4.setTransform(49.85, 7.525);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    new cjs.Rectangle(36.2, -11.5, 229.90000000000003, 70.2),
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
        "AgRAQQgGgFAAgLQgBgKAHgFQAGgHALAAQAMAAAGAHQAHAFgBAKQAAALgGAFQgGAHgMAAQgKAAgHgHg",
      );
    this.shape.setTransform(158.65, 74.25);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgvAyQgSgTAAgfQAAggARgSQASgSAfAAQATAAAPAIQAPAJAIAPQAIAQAAAUQAAAggRASQgSATgfAAQgdAAgSgTgAgOgZQgFAIAAARQAAARAFAJQAEAJAKAAQALAAAEgJQAFgJAAgRQAAgQgFgJQgEgJgLAAQgKAAgEAJg",
      );
    this.shape_1.setTransform(147.575, 69.575);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgWBbIAAi1IAtAAIAAC1g");
    this.shape_2.setTransform(136.075, 67.075);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgzA5QgLgLAAgUQAAgWAPgJQAPgKAcgCIAVAAIAAgCQAAgRgQAAQgOAAgWAKIgNgeQAXgMAiAAQAaAAAOANQAOAMAAAXIAABWIggAAIgJgRIgBAAQgJALgJAEQgJAFgPAAQgTAAgLgMgAAHAHQgWABAAAQQAAAMANAAQAIAAAFgFQAGgFAAgJIAAgKg",
      );
    this.shape_3.setTransform(124.375, 69.575);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AAbBWIAAhGIg1AAIAABGIgvAAIAAirIAvAAIAABAIA1AAIAAhAIAvAAIAACrg");
    this.shape_4.setTransform(108.1, 67.625);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AATBbIAAhIQAAgagQAAQgKAAgGAJQgFAJAAAWIAAA6IguAAIAAi1IAuAAIAAAaIgCAoIACAAQAHgKAJgFQAIgEAMAAQAWAAAMANQANANAAAWIAABWg",
      );
    this.shape_5.setTransform(84.725, 67.075);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgVBGQgKgMAAgXIAAg2IgRAAIAAgSIAVgPIAMgcIAdAAIAAAbIAhAAIAAAiIghAAIAAAyQAAANAMABQAKgBANgEIAAAhQgKAEgIACQgIACgMAAQgWAAgKgLg",
      );
    this.shape_6.setTransform(71.1, 68.35);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBdIAAiEIAtAAIAACEgAgXhIQAAgKAFgFQAGgFAMAAQANAAAGAFQAFAFAAAKQAAAVgYgBQgXABAAgVg",
      );
    this.shape_7.setTransform(61.775, 66.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AAVBDIgPhAIgEgSIgCgPIAAAAIgHAoIgOA5IgwAAIgkiEIAtAAIALAzQAFAZABARIAAAAQABgKAGgdIAMg2IAyAAIALA2QAFAZACAOIAAAAIADgWIADgUIAMgzIAsAAIgkCEg",
      );
    this.shape_8.setTransform(46.975, 69.55);

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
    new cjs.Rectangle(34.1, 19.8, 170.1, 65.5),
    null,
  );

  (lib.txt21copy = function (mode, startPosition, loop, reversed) {
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
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape.setTransform(130.675, 36.525);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_1.setTransform(115.875, 36.525);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AguBDIAAiDIAiAAIAHAVIACAAQAFgLALgGQAKgHAKAAIALACIADAAIgEArQgGgBgKgBQgPAAgHAHQgFAIgBALIAABBg",
      );
    this.shape_2.setTransform(103.5, 36.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgfBcIAAhiIgSAAIAAgWIATgLIAAgDQAAgaAKgLQALgMAXAAQAJAAAIACIATAEIgKAeQgIgCgIAAQgGAAgCADQgDADAAAHIAAAEIAdAAIAAAiIgdAAIAABig",
      );
    this.shape_3.setTransform(92.825, 33.975);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "Ag1BXQgPgJAAgSQAAgYAdgHQgGgCgEgGQgFgGAAgGQAAgGADgDQAEgFALgHQgLgEgGgKQgGgKAAgOQAAgVAPgMQAPgMAbAAIAMAAIANACIAuAAIAAAWIgSAHQAEAHAAAJQAAAVgPAMQgPAMgdAAIgMgBIgBAFQAAADAFACQAGACAHAAIAXAAQAsAAAAAlQAAAYgUAOQgVANglAAQgcAAgPgJgAgZAvQgFADAAAFQAAAGAGADQAGAEALAAQAPAAAKgEQAKgFAAgGQAAgFgGgCQgGgDgLAAIgRAAQgIAAgFAEgAgPgyQAAAVAOAAQAFAAAEgFQAEgFAAgKQAAgVgNAAQgOAAAAAUg",
      );
    this.shape_4.setTransform(73.775, 39.275);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgvAyQgSgTAAgfQAAggARgSQASgSAfAAQATAAAPAIQAPAJAIAPQAIAQAAAUQAAAggRASQgSATgfAAQgdAAgSgTgAgOgZQgFAIAAARQAAARAFAJQAEAJAKAAQALAAAEgJQAFgJAAgRQAAgQgFgJQgEgJgLAAQgKAAgEAJg",
      );
    this.shape_5.setTransform(58.975, 36.525);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgpBUQgLgIgFgPQgGgQAAgVQAAgfANgTQANgSAXAAQALAAAHAEQAIAFAHAKIABAAQgCgPAAgQIAAgjIAuAAIAAC1IgiAAIgKgRIgCAAQgMATgWAAQgOABgLgJgAgMABQgFAIAAAQQAAAPAFAIQAFAIAJAAQALAAAEgHQAFgHAAgOIAAgDQAAgTgFgGQgFgHgLAAQgIAAgFAIg",
      );
    this.shape_6.setTransform(43.375, 34.15);

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
    lib.txt21copy,
    new cjs.Rectangle(34, 15.5, 106.30000000000001, 36.7),
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
        "AguBEIAAiFIAiAAIAHAWIACAAQAFgLALgGQAKgGAKAAIALABIADAAIgEArQgGgBgKAAQgPAAgGAGQgHAIAAALIAABCg",
      );
    this.shape.setTransform(134, 4.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgzA3QgNgNAAgXIAAhWIAuAAIAABIQAAANAEAHQAEAGAIAAQALAAAFgJQAFgJAAgVIAAg7IAuAAIAACEIgjAAIgGgQIgCAAQgGAJgKAFQgKAFgNAAQgWAAgMgNg",
      );
    this.shape_1.setTransform(119.675, 4.525);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgvAyQgSgTAAgfQAAggARgSQASgSAfAAQATAAAPAIQAPAJAIAPQAIAQAAAUQAAAggRASQgSATgfAAQgdAAgSgTgAgOgZQgFAIAAARQAAARAFAJQAEAJAKAAQALAAAEgJQAFgJAAgRQAAgQgFgJQgEgJgLAAQgKAAgEAJg",
      );
    this.shape_2.setTransform(104.025, 4.425);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "Ag8BdIAAgkQAGACAIAAQAGAAAFgCQAEgDAEgEQADgEAEgKIg0iCIAwAAIAWBMIACAPIAAAAIADgPIAXhMIAvAAIg0CMQgKAbgOALQgPALgYAAQgJAAgJgCg",
      );
    this.shape_3.setTransform(89.125, 7.275);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgVBGQgKgMAAgXIAAg2IgRAAIAAgSIAVgPIAMgcIAdAAIAAAaIAgAAIAAAjIggAAIAAAzQAAANANAAQAIgBANgEIAAAhQgIAFgJABQgJACgLAAQgWAAgKgLg",
      );
    this.shape_4.setTransform(70.05, 3.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_5.setTransform(57.225, 4.425);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgjBWQgMgDgMgGIAAgpQAOAHAOAEQAOADAMAAQAJAAAFgDQAFgEAAgFQAAgEgCgCQgCgDgEgDIgWgLQgRgHgIgIQgIgGgFgJQgEgJAAgNQAAgYASgNQAQgNAeAAQAaAAAcAMIgOAkQgYgLgRAAQgIAAgFADQgEADAAAFQAAAFAFAEQAGAEAWALQAWAKAIAKQAJALAAASQAAAQgIAMQgIAMgQAHQgOAHgUAAQgRAAgMgCg",
      );
    this.shape_6.setTransform(43, 2.475);

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
    lib.txt21,
    new cjs.Rectangle(34, -16.6, 113.4, 36.7),
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
        "AgQAQQgIgGAAgKQABgJAGgHQAHgFALAAQALAAAHAFQAFAHABAJQAAAKgHAGQgGAGgLABQgLgBgGgGg",
      );
    this.shape.setTransform(210.9, 84.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AATBbIgcgvIgPALIAAAkIguAAIAAi1IAuAAIAABIQAAASgCARIAAAAIAOgUIAdgmIAzAAIguA4IAxBMg",
      );
    this.shape_1.setTransform(200.35, 77.125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgnAzQgRgSAAggQAAghASgSQATgSAgAAQAXAAAVAKIgOAiIgPgGQgHgCgIAAQgLAAgFAJQgGAIAAAPQAAAgAWAAQAVAAASgMIAAAlQgSAMgYAAQggAAgRgSg",
      );
    this.shape_2.setTransform(185.425, 79.625);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgzA5QgLgLAAgUQAAgWAPgJQAPgKAcgCIAVAAIAAgCQAAgRgQAAQgOAAgWAKIgNgeQAXgMAiAAQAaAAAOANQAOAMAAAXIAABWIggAAIgJgRIgBAAQgJALgJAEQgJAFgPAAQgTAAgLgMgAAHAHQgWABAAAQQAAAMANAAQAIAAAFgFQAGgFAAgJIAAgKg",
      );
    this.shape_3.setTransform(170.925, 79.625);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AADBbIgKgFQgEgDgHgGIgCAAIgIANIgjAAIAAi1IAtAAIAAApIgBAZIABAAQAIgKAIgFQAIgEALAAQAVAAAOASQAMASAAAfQAAAggMATQgNASgYAAQgHABgFgCgAgNgBQgEAFgBAPIAAAGQABARAEAGQAFAIAIgBQAJAAAEgIQAFgIgBgQQAAgfgRAAQgIAAgFAHg",
      );
    this.shape_4.setTransform(156.4, 77.25);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgzA3QgNgNAAgXIAAhWIAuAAIAABIQAAANAEAHQAEAGAIAAQALAAAFgJQAFgJAAgVIAAg7IAuAAIAACEIgjAAIgGgQIgCAAQgGAJgKAFQgKAFgNAAQgWAAgMgNg",
      );
    this.shape_5.setTransform(134.175, 79.725);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgvAyQgSgTAAgfQAAggARgSQASgSAfAAQATAAAPAIQAPAJAIAPQAIAQAAAUQAAAggRASQgSATgfAAQgdAAgSgTgAgOgZQgFAIAAARQAAARAFAJQAEAJAKAAQALAAAEgJQAFgJAAgRQAAgQgFgJQgEgJgLAAQgKAAgEAJg",
      );
    this.shape_6.setTransform(118.525, 79.625);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "Ag8BdIAAgkQAGACAIAAQAGAAAFgCQAEgDAEgEQADgEAEgKIg0iCIAwAAIAWBMIACAPIAAAAIADgPIAXhMIAvAAIg0CMQgKAbgOALQgPALgYAAQgJAAgJgCg",
      );
    this.shape_7.setTransform(103.625, 82.475);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgpBUQgLgIgFgPQgGgQAAgVQAAgfANgTQANgSAXAAQALAAAHAEQAIAFAHAKIABAAQgCgPAAgQIAAgjIAuAAIAAC1IgiAAIgKgRIgCAAQgMAUgWgBQgOABgLgJgAgMABQgFAIAAAQQAAAPAFAIQAFAIAJAAQALAAAEgHQAFgGAAgPIAAgDQAAgTgFgGQgFgHgLAAQgIAAgFAIg",
      );
    this.shape_8.setTransform(82.125, 77.25);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#1A1A1A").s().p("AgWBbIAAi1IAtAAIAAC1g");
    this.shape_9.setTransform(70.825, 77.125);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AgvAyQgSgTAAgfQAAggARgSQASgSAfAAQATAAAPAIQAPAJAIAPQAIAQAAAUQAAAggRASQgSATgfAAQgdAAgSgTgAgOgZQgFAIAAARQAAARAFAJQAEAJAKAAQALAAAEgJQAFgJAAgRQAAgQgFgJQgEgJgLAAQgKAAgEAJg",
      );
    this.shape_10.setTransform(59.325, 79.625);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#1A1A1A")
      .s()
      .p(
        "AATBbIAAhIQAAgagQAAQgKAAgGAJQgFAJAAAWIAAA6IguAAIAAi1IAuAAIAAAaIgCAoIACAAQAHgKAJgFQAIgEAMAAQAWAAAMANQANANAAAWIAABWg",
      );
    this.shape_11.setTransform(43.725, 77.125);

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
    lib.txt12,
    new cjs.Rectangle(33.7, 58.6, 182.89999999999998, 36.699999999999996),
    null,
  );

  (lib.txt11copy = function (mode, startPosition, loop, reversed) {
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
        "AgOAaQgHgFgEgHQgDgGAAgIQAAgHAEgHQADgGAHgEQAHgEAHgBQAIABAHAEQAHADADAHQAEAHAAAHQAAAIgDAGQgEAHgHAEQgHAEgIAAQgHAAgHgDgAgLgVQgGAEgDAFQgEAHAAAFQAAAHAEAFQADAGAGADQAFADAGAAQAHAAAFgDQAGgDADgGQAEgFAAgHQAAgFgEgHQgDgFgGgEQgFgDgHAAQgGAAgFADgAAHASIgHgOIgDAAIAAAOIgHAAIAAgiIAKAAQAGgBADADQADADAAAFQAAAGgGACIAJAQgAgDAAIADAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgBIgDAAg",
      );
    this.shape.setTransform(221.425, 40.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_1.setTransform(211.375, 47.625);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgnAzQgRgSAAggQAAghASgSQATgSAgAAQAXAAAVAKIgOAiIgPgGQgHgCgIAAQgLAAgFAJQgGAIAAAPQAAAgAWAAQAVAAASgMIAAAlQgSAMgYAAQggAAgRgSg",
      );
    this.shape_2.setTransform(197.725, 47.625);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AATBEIAAhIQAAgNgEgHQgEgGgIAAQgLgBgFAKQgFAJAAAVIAAA7IguAAIAAiEIAjAAIAFAQIADAAQAGgJAKgFQAKgFANABQAWAAAMAMQANANAAAXIAABWg",
      );
    this.shape_3.setTransform(183.075, 47.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_4.setTransform(167.625, 47.625);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p("AgyBWIAAirIBlAAIAAAmIg3AAIAAAgIAyAAIAAAkIgyAAIAABBg");
    this.shape_5.setTransform(154.225, 45.675);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_6.setTransform(133.725, 47.625);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#000000").s().p("AgWBbIAAi1IAtAAIAAC1g");
    this.shape_7.setTransform(122.425, 45.125);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AADBbIgKgEQgEgDgHgHIgCAAIgIANIgjAAIAAi2IAtAAIAAAqIgBAZIABAAQAIgKAIgEQAIgFALAAQAVAAANASQANASAAAgQAAAggNASQgNASgXABQgHAAgFgCgAgNgCQgFAGAAAOIAAAHQAAAQAFAIQAFAGAJAAQAHABAFgJQAFgIgBgQQAAgfgRAAQgIAAgFAGg",
      );
    this.shape_8.setTransform(111.15, 45.25);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBdIAAiEIAtAAIAACEgAgXhIQAAgKAFgFQAGgFAMAAQANAAAGAFQAFAFAAAKQAAAVgYgBQgXABAAgVg",
      );
    this.shape_9.setTransform(99.275, 44.95);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgdBDQgLgCgLgEIAAgkQALAEAMADQANADAKAAQAOAAAAgGQAAgEgEgDQgEgDgTgHQgTgIgHgIQgHgKAAgPQAAgSAOgLQAOgKAZAAQAOAAALADQAMADAMAFIgMAeQgKgEgKgDQgKgDgGAAQgLAAAAAGQAAADAEACIAWAKQAOAGAHAFQAHAFADAHQADAIAAAKQAAAWgOALQgPALgaAAQgPAAgLgCg",
      );
    this.shape_10.setTransform(89.225, 47.625);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBdIAAiEIAtAAIAACEgAgXhIQAAgKAFgFQAGgFAMAAQANAAAGAFQAFAFAAAKQAAAVgYgBQgXABAAgVg",
      );
    this.shape_11.setTransform(78.725, 44.95);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBDIgyiEIAwAAIAWBNIABACIAAADIABAFIAAADIAAAAQAAgGACgGIAYhOIAvAAIgyCEg",
      );
    this.shape_12.setTransform(67.475, 47.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AATBEIAAhIQAAgNgEgHQgEgGgIAAQgLgBgFAKQgFAJAAAVIAAA7IguAAIAAiEIAjAAIAFAQIADAAQAGgJAKgFQAKgFANABQAWAAAMAMQANANAAAXIAABWg",
      );
    this.shape_13.setTransform(52.175, 47.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#000000").s().p("AgWBWIAAirIAtAAIAACrg");
    this.shape_14.setTransform(39.925, 45.675);

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
    lib.txt11copy,
    new cjs.Rectangle(33.8, -6.1, 210, 69.39999999999999),
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
        "AgVBGQgKgMAAgXIAAg2IgQAAIAAgSIAUgPIAMgcIAdAAIAAAbIAgAAIAAAiIggAAIAAAyQAAANANABQAJgBAMgEIAAAhQgIAEgJACQgIACgMAAQgWAAgKgLg",
      );
    this.shape.setTransform(135.85, 13.35);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgtAzQgSgSAAggQAAghARgSQARgSAeAAQAeAAARAQQAQAPAAAeIAAATIhRAAQABALAHAHQAIAGAMAAQAMAAAKgCQALgDALgFIAAAhQgKAFgMACQgLADgQAAQggAAgTgSgAAWgQQAAgJgFgGQgFgGgJAAQgHAAgFAFQgGAGgBAKIAmAAIAAAAg",
      );
    this.shape_1.setTransform(123.025, 14.575);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgWBbIAAi1IAtAAIAAC1g");
    this.shape_2.setTransform(111.725, 12.075);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgVBGQgKgMAAgXIAAg2IgQAAIAAgSIAUgPIAMgcIAdAAIAAAbIAgAAIAAAiIggAAIAAAyQAAANAMABQAKgBANgEIAAAhQgJAEgJACQgIACgMAAQgWAAgKgLg",
      );
    this.shape_3.setTransform(96.1, 13.35);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AgZAiQAHgkAEgfIAnAAIABACQgKArgKAWg");
    this.shape_4.setTransform(87.75, 7.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AATBEIAAhIQAAgNgEgHQgEgHgIABQgLAAgFAJQgFAJAAAVIAAA7IguAAIAAiEIAjAAIAFAQIADAAQAGgJAKgFQAKgFANABQAWAAAMAMQANANAAAXIAABWg",
      );
    this.shape_5.setTransform(76.675, 14.45);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgvAyQgSgTAAgfQAAggARgSQASgSAfAAQATAAAPAIQAPAJAIAPQAIAQAAAUQAAAggRASQgSATgfAAQgdAAgSgTgAgOgZQgFAIAAARQAAARAFAJQAEAJAKAAQALAAAEgJQAFgJAAgRQAAgQgFgJQgEgJgLAAQgKAAgEAJg",
      );
    this.shape_6.setTransform(60.975, 14.575);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AhIBWIAAirIA8AAQAoAAAWAWQAXAVAAAnQAAAqgYAYQgYAXgpAAgAgZAwIAKAAQAUAAAKgMQAKgNAAgYQAAgXgKgMQgJgLgSAAIgNAAg",
      );
    this.shape_7.setTransform(44.875, 12.625);

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
    new cjs.Rectangle(33.8, -6.4, 210, 36.7),
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
      .f("#424242")
      .s()
      .p(
        "AB6A+QgTgSABgaQgBgZATgSQASgSAaAAQAYAAATASQASASAAAZQAAAagSASQgTASgYAAQgaAAgSgSgACJgJQgMAKAAARQAAARAMAMQALALASAAQAQAAAMgLQAMgMgBgRQABgRgMgKQgMgMgQAAQgSAAgLAMgAA8A/QgDgGgCgLIAAgTIAAhfQAAgEADgDQADgDAEAAQAFAAADADQAEADAAAEIAABeQgBAVAFAHQADAEAKAAQAEAAADADQAEAEAAAEQAAAFgEADQgDADgEAAQgaAAgIgRgAAPBNQgDgDAAgFIAAgEIgCACQgHAGgIADQgJAEgNAAIgBAAQgZAAgSgSQgTgSAAgaQAAgYATgTQASgSAZAAQAaAAARASQATATAAAYIAAAzQgBAFgDADQgDADgEAAQgFAAgDgDgAg4gJQgMALAAAQQAAARAMAMQAMALAQAAQAIAAAIgDQAHgCAFgGQALgMAAgPIABgCQAAgQgMgLQgLgMgRAAQgQAAgMAMgAiBBNQgEgDAAgFIAAgzQAAgQgKgLQgLgMgPAAQgOAAgLAMQgLALAAAQIAAAzQAAAFgDADQgDADgFAAQgDAAgEgDQgDgDAAgFIAAiJQAAgEADgDQADgEAFAAQAEAAADAEQADADAAAEIAAAnIADgCQAPgMASAAQAYAAARASQARATAAAYIAAAzQAAAFgDADQgDADgEAAQgFAAgDgDg",
      );
    this.shape.setTransform(69.4024, 40.6191, 1.9099, 1.9099);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFD52C")
      .s()
      .p(
        "AgdB5QgugKgbgeQgMgOgGgQQgFgQAEgPQAEgTAMgJQABgBABgBQAAAAABgBQAAAAAAAAQABABgBAAIgBADQgEAGgBAGQgDAOAFAOQAEAPAMAMQAZAbApAKQApAJAigOQAQgGAKgLQALgLADgOQACgHgBgKQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAABIABABQADAIABAKQAAAJgCAKQgDAPgMANQgLALgSAHQgVAJgZAAQgQAAgTgEgAA6BHIAAgBQAHgGABgIQAEgRgUgSQgUgSgfgGQgggHgaAHQgZAGgEASQgCAFACAHQAAABAAABQAAAAAAABQAAAAAAAAQAAAAgBAAIgBgCQgEgGgBgHQgBgHABgHQAFgVAdgJQAdgKAjAIQAlAIAWAVQAWAVgFAWQgEAQgPAIIgCABIAAgBgABQgBQgHgGABgLQABgKAIgJQAIgIAKgCQAKgCAHAGQAGAGgBAKQAAALgIAIQgIAIgKACIgFAAQgHAAgFgDgAAlgjQgLgDgEgNQgEgNAEgOQAFgPALgIQAKgIALAEQALADAEANQAEAMgFAPQgEAOgLAIQgHAGgIAAIgGgBgAhfgmQgKgEgGgKQgGgKABgLQACgLAIgEQAHgFAKAEQAKAEAGAKQAGAKgBALQgBALgIAEQgEACgFAAQgEAAgFgBgAgsg9QgHgLAAgPQAAgPAHgLQAIgLALAAQALAAAIALQAHALAAAPQAAAPgHALQgIALgLAAQgLAAgIgLg",
      );
    this.shape_1.setTransform(71.5217, -6.6208, 1.9099, 1.9099);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.logo,
    new cjs.Rectangle(3.8, -30.5, 112.4, 86.4),
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
    this.instance.setTransform(-67, -43, 0.3836, 0.3836);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.img4,
    new cjs.Rectangle(-67, -43, 160, 100.1),
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

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("A0TVGMAAAgqLMAonAAAMAAAAqLg");
    mask.setTransform(-97.2, 15.05);

    // Layer_1
    this.instance = new lib.img3();
    this.instance.setTransform(-142, -85, 0.5264, 0.5264);

    var maskedShapeInstanceList = [this.instance];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.img3_1,
    new cjs.Rectangle(-142, -85, 174.8, 195.3),
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
    this.instance.setTransform(-151, -140, 0.6639, 0.6639);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.img2_1,
    new cjs.Rectangle(-151, -140, 276.9, 243),
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
    this.instance.setTransform(-142, -57, 0.6475, 0.6475);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.img1_1,
    new cjs.Rectangle(-142, -57, 270, 237),
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

    // logo_copy
    this.instance = new lib.logo();
    this.instance.setTransform(640.25, 46, 0.9, 0.9, 0, 0, 0, 61.1, 18.4);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(193)
        .to({ x: 653.55 }, 9, cjs.Ease.get(0.9))
        .wait(97)
        .to({ y: 23 }, 12, cjs.Ease.get(0.9))
        .wait(97),
    );

    // cta
    this.instance_1 = new lib.cta();
    this.instance_1.setTransform(660.75, 94.75, 0.8, 0.8, 0, 0, 0, 0.1, 0.1);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(303)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: 660.15,
            y: 91,
            alpha: 1,
          },
          12,
          cjs.Ease.backOut,
        )
        .wait(93),
    );

    // txt43
    this.instance_2 = new lib.txt43();
    this.instance_2.setTransform(246.5, 148.9, 1, 1, 0, 0, 0, 226.5, 148.9);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(212)
        .to({ _off: false }, 0)
        .to({ x: 240.4, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(187),
    );

    // txt42
    this.instance_3 = new lib.txt42();
    this.instance_3.setTransform(237.1, 128.8, 1, 1, 0, 0, 0, 217.1, 128.8);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(208)
        .to({ _off: false }, 0)
        .to({ x: 231, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(191),
    );

    // txt41
    this.instance_4 = new lib.txt41();
    this.instance_4.setTransform(254, 109.8, 1, 1, 0, 0, 0, 234, 109.8);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(204)
        .to({ _off: false }, 0)
        .to({ x: 247.9, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(195),
    );

    // txt32
    this.instance_5 = new lib.txt32();
    this.instance_5.setTransform(106.9, 66.6, 1, 1, 0, 0, 0, 111.9, 51.6);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(201)
        .to({ _off: false }, 0)
        .to({ y: 54.8, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(198),
    );

    // Layer_3
    this.instance_6 = new lib.txt31copy();
    this.instance_6.setTransform(146.6, 52.45, 1, 1, 0, 0, 0, 151.6, 30.2);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(197)
        .to({ _off: false }, 0)
        .to({ y: 33.4, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(202),
    );

    // txt31
    this.instance_7 = new lib.txt31();
    this.instance_7.setTransform(146.6, 45.2, 1, 1, 0, 0, 0, 151.6, 30.2);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(193)
        .to({ _off: false }, 0)
        .to({ y: 33.4, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(206),
    );

    // txt22
    this.instance_8 = new lib.txt22();
    this.instance_8.setTransform(83.9, 97.8, 1, 1, 0, 0, 0, 83.9, 49.8);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(114)
        .to({ _off: false }, 0)
        .to({ y: 58, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(53)
        .to({ y: 15, alpha: 0 }, 9, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(222),
    );

    // Layer_5
    this.instance_9 = new lib.txt21copy();
    this.instance_9.setTransform(119.8, 53.9, 1, 1, 0, 0, 0, 119.8, 28.4);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(109)
        .to({ _off: false }, 0)
        .to({ y: 36.6, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(58)
        .to({ y: -7.6, alpha: 0 }, 9, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(222),
    );

    // txt21
    this.instance_10 = new lib.txt21();
    this.instance_10.setTransform(119.8, 70.65, 1, 1, 0, 0, 0, 119.8, 28.4);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(105)
        .to({ _off: false }, 0)
        .to({ y: 36.6, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(62)
        .to({ y: -6.4, alpha: 0 }, 9, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(222),
    );

    // txt12
    this.instance_11 = new lib.txt12();
    this.instance_11.setTransform(123.3, 74.5, 1, 1, 0, 0, 0, 123.3, 59.5);
    this.instance_11.alpha = 0;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(18)
        .to({ _off: false }, 0)
        .to({ y: 57.7, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(69)
        .to({ y: 44.5, alpha: 0 }, 8, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(303),
    );

    // Layer_4
    this.instance_12 = new lib.txt11copy();
    this.instance_12.setTransform(89, 63.55, 1, 1, 0, 0, 0, 89, 34.8);
    this.instance_12.alpha = 0;
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(11)
        .to({ _off: false }, 0)
        .to({ y: 32.75, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(76)
        .to({ y: 17.9, alpha: 0 }, 8, cjs.Ease.quadIn)
        .to({ _off: true }, 2)
        .wait(302),
    );

    // txt11
    this.instance_13 = new lib.txt11();
    this.instance_13.setTransform(89, 49.8, 1, 1, 0, 0, 0, 89, 34.8);
    this.instance_13.alpha = 0;
    this.instance_13._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ y: 33, alpha: 1 }, 9, cjs.Ease.quadOut)
        .wait(82)
        .to({ y: 19.8, alpha: 0 }, 8, cjs.Ease.quadIn)
        .to({ _off: true }, 1)
        .wait(303),
    );

    // yellow_shape
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FDD835")
      .s()
      .p(
        "A2qPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAMAtVAAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape.setTransform(139.075, 42);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FDD835")
      .s()
      .p(
        "A1nPAQg9AAgqgqQgpgqAAg8IAA5fQAAg7ApgrQAqgqA9AAMArPAAAQA9AAAqAqQApArAAA7IAAZfQAAA8gpAqQgqAqg9AAg",
      );
    this.shape_1.setTransform(165.15, 42);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FDD835")
      .s()
      .p(
        "A0lPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAMApLAAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_2.setTransform(191.2, 42);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FDD835")
      .s()
      .p(
        "AziPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAMAnFAAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_3.setTransform(217.25, 42);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FDD835")
      .s()
      .p(
        "AygPAQg7AAgqgqQgqgqgBg8IAA5fQABg7AqgrQAqgqA7AAMAlAAAAQA9AAAqAqQApArAAA7IAAZfQAAA8gpAqQgqAqg9AAg",
      );
    this.shape_4.setTransform(243.3, 42);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FDD835")
      .s()
      .p(
        "AxdPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAMAi7AAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_5.setTransform(269.375, 42);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FDD835")
      .s()
      .p(
        "AwaPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAMAg1AAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_6.setTransform(295.425, 42);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FDD835")
      .s()
      .p(
        "AvYPAQg7AAgrgqQgqgqAAg8IAA5fQAAg7AqgrQArgqA7AAIewAAQA9AAApAqQArArgBA7IAAZfQABA8grAqQgpAqg9AAg",
      );
    this.shape_7.setTransform(321.5, 42);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FDD835")
      .s()
      .p(
        "AuVPAQg7AAgqgqQgqgqgBg8IAA5fQABg7AqgrQAqgqA7AAIcqAAQA9AAApAqQArArgBA7IAAZfQABA8grAqQgpAqg9AAg",
      );
    this.shape_8.setTransform(347.55, 42);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FDD835")
      .s()
      .p(
        "AtSPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAIalAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_9.setTransform(373.6, 42);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FDD835")
      .s()
      .p(
        "AsPPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAIYfAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_10.setTransform(399.675, 42);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FDD835")
      .s()
      .p(
        "ArNPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAIWbAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_11.setTransform(425.725, 42);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FDD835")
      .s()
      .p(
        "AqKPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAIUVAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_12.setTransform(451.775, 42);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FDD835")
      .s()
      .p(
        "ApHPAQg8AAgqgqQgqgqAAg8IAA5fQAAg7AqgrQAqgqA8AAISPAAQA8AAAqAqQAqArAAA7IAAZfQAAA8gqAqQgqAqg8AAg",
      );
    this.shape_13.setTransform(477.825, 42);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FDD835")
      .s()
      .p(
        "AoEPAQg9AAgpgqQgrgqABg8IAA5fQgBg7ArgrQApgqA9AAIQKAAQA7AAAqAqQAqArABA7IAAZfQgBA8gqAqQgqAqg7AAg",
      );
    this.shape_14.setTransform(503.9, 42);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape }] }, 184)
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .wait(210),
    );

    // yellow
    this.instance_14 = new lib.yellow();
    this.instance_14.setTransform(-151.9, -63.6, 1, 1, 0, 0, 0, 150.1, -63.6);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .to({ x: 150.1 }, 11)
        .to({ _off: true }, 173)
        .wait(224),
    );

    // mask3 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_192 = new cjs.Graphics().p(
      "AAZO+QgxAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAxAAMArAAAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_graphics_290 = new cjs.Graphics().p(
      "AAZO+QgxAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAxAAMArAAAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_graphics_291 = new cjs.Graphics().p(
      "ACqO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_graphics_292 = new cjs.Graphics().p(
      "AEsO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArBAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_graphics_293 = new cjs.Graphics().p(
      "AGgO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArBAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_graphics_294 = new cjs.Graphics().p(
      "AIGO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_graphics_295 = new cjs.Graphics().p(
      "AJdO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_graphics_296 = new cjs.Graphics().p(
      "AKmO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_graphics_297 = new cjs.Graphics().p(
      "ALgO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArBAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_graphics_298 = new cjs.Graphics().p(
      "AMMO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArBAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_graphics_299 = new cjs.Graphics().p(
      "AMqO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_graphics_300 = new cjs.Graphics().p(
      "AM5O+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(192)
        .to({ graphics: mask_graphics_192, x: 289.7479, y: 42.6234 })
        .wait(98)
        .to({ graphics: mask_graphics_290, x: 289.7479, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_291, x: 304.2279, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_292, x: 317.2679, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_293, x: 328.8679, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_294, x: 339.0279, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_295, x: 347.7479, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_296, x: 355.0279, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_297, x: 360.8679, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_298, x: 365.2679, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_299, x: 368.2279, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_graphics_300, x: 369.7479, y: 42.6234 })
        .wait(1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(107),
    );

    // img3_jpg
    this.instance_15 = new lib.img3_1();
    this.instance_15.setTransform(421.75, 30);
    this.instance_15._off = true;

    var maskedShapeInstanceList = [this.instance_15];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .wait(192)
        .to({ _off: false }, 0)
        .to({ _off: true }, 109)
        .wait(107),
    );

    // img4_jpg
    this.instance_16 = new lib.img4();
    this.instance_16.setTransform(
      333.3,
      40.1,
      0.9687,
      0.9687,
      0,
      0,
      0,
      0.2,
      0.2,
    );
    this.instance_16.alpha = 0;
    this.instance_16._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_16)
        .wait(290)
        .to({ _off: false }, 0)
        .to({ x: 332.95, alpha: 1 }, 10)
        .wait(108),
    );

    // maska1 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_96 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_97 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_98 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_99 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_100 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_101 = new cjs.Graphics().p(
      "A07O+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_102 = new cjs.Graphics().p(
      "AzdO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_103 = new cjs.Graphics().p(
      "AxuO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_104 = new cjs.Graphics().p(
      "AvuO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_105 = new cjs.Graphics().p(
      "AtcO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_106 = new cjs.Graphics().p(
      "ArLO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_107 = new cjs.Graphics().p(
      "ApLO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_108 = new cjs.Graphics().p(
      "AncO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_109 = new cjs.Graphics().p(
      "Al9O+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_110 = new cjs.Graphics().p(
      "AkxO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_111 = new cjs.Graphics().p(
      "Aj1O+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_112 = new cjs.Graphics().p(
      "AjKO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_1_graphics_113 = new cjs.Graphics().p(
      "AiwO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_1_graphics_114 = new cjs.Graphics().p(
      "AioO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(96)
        .to({ graphics: mask_1_graphics_96, x: 114.1231, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_97, x: 115.8329, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_98, x: 120.9626, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_99, x: 129.512, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_100, x: 141.4811, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_101, x: 153.2463, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_102, x: 162.6507, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_103, x: 173.7649, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_104, x: 186.5889, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_105, x: 201.1229, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_106, x: 215.6568, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_107, x: 228.4809, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_108, x: 239.5951, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_109, x: 248.9994, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_110, x: 256.6939, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_111, x: 262.6784, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_112, x: 266.9531, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_113, x: 269.518, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_1_graphics_114, x: 270.3729, y: 42.6234 })
        .wait(84)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(210),
    );

    // img2_jpg
    this.instance_17 = new lib.img2_1();
    this.instance_17.setTransform(427.15, 48.4, 0.94, 0.94, 0, 0, 0, 0.5, 0.3);
    this.instance_17._off = true;

    var maskedShapeInstanceList = [this.instance_17];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_17)
        .wait(96)
        .to({ _off: false }, 0)
        .to({ _off: true }, 102)
        .wait(210),
    );

    // Layer_2 (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    var mask_2_graphics_9 = new cjs.Graphics().p(
      "A5WO+QgxAAgjgjQgkgjABgyIAA6LQgBgyAkgjQAjgjAxAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_2_graphics_10 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_2_graphics_11 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_2_graphics_12 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_2_graphics_13 = new cjs.Graphics().p(
      "A1fO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_2_graphics_14 = new cjs.Graphics().p(
      "AzbO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_2_graphics_15 = new cjs.Graphics().p(
      "AvTO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_2_graphics_16 = new cjs.Graphics().p(
      "ArwO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_2_graphics_17 = new cjs.Graphics().p(
      "AoxO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_2_graphics_18 = new cjs.Graphics().p(
      "AmXO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMAq/AAAQAyAAAjAjQAjAjAAAyIAAaLQAAAygjAjQgjAjgyAAg",
    );
    var mask_2_graphics_19 = new cjs.Graphics().p(
      "AkjO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_2_graphics_20 = new cjs.Graphics().p(
      "AjTO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );
    var mask_2_graphics_21 = new cjs.Graphics().p(
      "AioO+QgyAAgjgjQgjgjAAgyIAA6LQAAgyAjgjQAjgjAyAAMArAAAAQAxAAAkAjQAjAjAAAyIAAaLQAAAygjAjQgkAjgxAAg",
    );

    this.timeline.addTween(
      cjs.Tween.get(mask_2)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(9)
        .to({ graphics: mask_2_graphics_9, x: -174.2498, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_10, x: -109.1478, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_11, x: -26.7936, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_12, x: 48.1856, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_13, x: 115.7897, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_14, x: 162.8208, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_15, x: 189.2479, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_16, x: 211.9875, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_17, x: 231.0396, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_18, x: 246.4041, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_19, x: 258.0812, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_20, x: 266.0708, y: 42.6234 })
        .wait(1)
        .to({ graphics: mask_2_graphics_21, x: 270.3729, y: 42.6234 })
        .wait(387),
    );

    // img1_jpg
    this.instance_18 = new lib.img1_1();
    this.instance_18.setTransform(420.95, -17.95, 0.9556, 0.9556);
    this.instance_18._off = true;

    var maskedShapeInstanceList = [this.instance_18];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_18)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ _off: true }, 106)
        .wait(293),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-322, -54, 1033.2, 193.1);

  // stage content:
  (lib.halo_fence1lab_970x250 = function (mode, startPosition, loop, reversed) {
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
      .f()
      .s("#999999")
      .ss(2, 2, 0, 3)
      .p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
    this.shape.setTransform(485, 125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // mcMain
    this.instance = new lib.mcMain();
    this.instance.setTransform(193.2, 460.15, 1.3, 1.3, 0, 0, 0, 150.2, 300.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(64.4, 124, 906.6, 127);
  // library properties:
  lib.properties = {
    id: "9B790E04C371564B8B581ACBE780215A",
    width: 970,
    height: 250,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a03534151d2ccbe3200537b_img1%20(1).jpg",
        id: "img1",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a0353514c30d23a9a378817_img2%20(1).jpg",
        id: "img2",
      },
      {
        src: "https://cdn.prod.website-files.com/69e78569de96dbed48ac97f1/6a03536637e6b08292e7fab4_img3%20(1).jpg",
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
  an.compositions["9B790E04C371564B8B581ACBE780215A"] = {
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
