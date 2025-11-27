"use client";

import { useEffect, useRef } from "react";
import { RiftShader } from "./RiftShader";

export default function RiftCanvas({ isMobile }: { isMobile: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    

    const gl = canvas.getContext("webgl", {
      antialias: true,
      premultipliedAlpha: false
      
    });

    if (!gl) {
      console.warn("WebGL not supported — Rift will fallback automatically.");
      return;
    }

    // --------------------------------------------------
    // Resize function
    // --------------------------------------------------
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.disable(gl.DEPTH_TEST);
gl.disable(gl.CULL_FACE);
    };

    resize();
    window.addEventListener("resize", resize);

    // --------------------------------------------------
    // Compile shader helper
    // --------------------------------------------------
    const createShader = (type: GLenum, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    // --------------------------------------------------
    // Create shader program
    // --------------------------------------------------
    const vertexShader = createShader(gl.VERTEX_SHADER, RiftShader.vertex)!;
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, RiftShader.fragment)!;

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program error:", gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    // --------------------------------------------------
    // Fullscreen quad buffer
    // --------------------------------------------------
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1, 
         1, -1,
        -1,  1,
        -1,  1, 
         1, -1,
         1,  1
      ]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // --------------------------------------------------
    // Background texture (uses your existing starfield)
    // --------------------------------------------------
    const bgTexture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, bgTexture);

    const bgImage = new Image();
    bgImage.src = "/stars/star2.svg"; // ★ You can change this to any starfield layer
    bgImage.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, bgTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bgImage);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    };

    // --------------------------------------------------
    // Uniform locations
    // --------------------------------------------------
    const u_time = gl.getUniformLocation(program, "u_time");
    const u_resolution = gl.getUniformLocation(program, "u_resolution");
    const u_background = gl.getUniformLocation(program, "u_background");

    // Extra control uniforms
    const u_strength = gl.getUniformLocation(program, "u_strength");
    const u_radius = gl.getUniformLocation(program, "u_radius");
    const u_intensity = gl.getUniformLocation(program, "u_intensity");

    gl.uniform1i(u_background, 0);

    // --------------------------------------------------
    // Animation loop
    // --------------------------------------------------
    let frame = 0;

    const draw = () => {
      frame += 0.01;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      gl.uniform1f(u_time, frame);
      gl.uniform2f(u_resolution, canvas.width, canvas.height);

      // Strength tuning for mobile
      gl.uniform1f(u_strength, isMobile ? 0.12 : 0.22);
      gl.uniform1f(u_radius, isMobile ? 0.55 : 0.48);
      gl.uniform1f(u_intensity, isMobile ? 0.9 : 1.3);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      style={{ opacity: isMobile ? 0.6 : 1 }}
    />
  );
}