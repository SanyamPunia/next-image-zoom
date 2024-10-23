"use client";

import React from "react";
import { ZoomImage } from "../src/ZoomImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">React Zoom Image Example</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors">
          <h2 className="mb-3 text-2xl font-semibold">Basic Example</h2>
          <ZoomImage>
            <img
              src="https://picsum.photos/id/1015/400/300"
              alt="Mountain landscape"
              className="w-full max-w-md"
            />
          </ZoomImage>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors">
          <h2 className="mb-3 text-2xl font-semibold">Custom Zoom Factor</h2>
          <ZoomImage zoomFactor={3}>
            <img
              src="https://picsum.photos/id/1016/400/300"
              alt="Mountain and lake"
              className="w-full max-w-md"
            />
          </ZoomImage>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors">
          <h2 className="mb-3 text-2xl font-semibold">
            Custom Duration and Background
          </h2>
          <ZoomImage duration={0.5} backgroundColor="rgba(255, 255, 255, 0.9)">
            <img
              src="https://picsum.photos/id/1018/400/300"
              alt="Forest landscape"
              className="w-full max-w-md"
            />
          </ZoomImage>
        </div>
      </div>
    </main>
  );
}
