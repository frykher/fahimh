"use client";

import React from "react";
import { SketchProps, type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { Color } from "p5";

type Props = SketchProps & {
  width: number;
};

const sketch: Sketch<Props> = (p5) => {
  let w = p5.windowWidth;
  const h = 105;
  const c = 5;
  const gap = h / 5;
  const c1 = p5.color(189, 178, 255);
  const c2 = p5.color(155, 246, 255);
  let waves: Wave[] = [];

  const initMountains = () => {
    waves = [];
    for (let i = 0; i < c; i++) {
      let col = p5.lerpColor(c1, c2, i / c);
      let alt = p5.map(i, 0, c, 3 * gap, h - (gap - 15));
      waves.push(new Wave(alt, 65, w, i, col));
    }
  };

  p5.windowResized = () => {
    w = window.innerWidth;
    p5.resizeCanvas(w, h);
    initMountains();
  };

  p5.updateWithProps = (props) => {
    console.log(props);
  };

  p5.setup = () => {
    p5.createCanvas(w, h);
    initMountains();
  };

  p5.draw = () => {
    p5.clear();
    for (let i = 0; i < c; i++) {
      waves[i].draw();
      waves[i].update();
    }
  };

  class Wave {
    R: number;
    t: number;
    seed: number;
    constructor(
      private y_pos: number,
      private altitude: number,
      private width: number,
      seed: number,
      private col: Color
    ) {
      this.y_pos = y_pos;
      this.altitude = altitude;
      this.width = width;
      this.R = 100;
      this.t = 0;
      this.seed = seed * 100;
      this.col = col;
    }

    update() {
      this.t += 1.5;
    }

    draw() {
      p5.fill(0, 0, 0, 0);
      p5.stroke(this.col);
      p5.beginShape();
      for (let r = 0; r < this.R; r++) {
        let x = Math.round(p5.map(r, 0, this.R, 0, this.width));
        let y = gaussian(x, this.altitude, this.width / 2, this.width / 6);
        let n = p5.map(p5.noise(this.seed + this.t / 50 + x / 100), 0, 1, -this.altitude / 100, this.altitude / 500);
        p5.vertex(x, this.y_pos - y * (1 + n));
      }
      p5.endShape();
    }
  }

  function gaussian(x: number, a: number, b: number, c: number) {
    return a * Math.exp(-Math.pow(x - b, 2) / (2 * Math.pow(c, 2)));
  }
};

export default function Waves() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
