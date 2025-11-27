// RiftShader.ts
// Core shader engine for the Auric Space-Time Rift MAX Mode

export const RiftShader = {
  vertex: `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,

  fragment: `
    precision highp float;

    varying vec2 v_uv;

    uniform float u_time;
    uniform vec2 u_resolution;
    uniform sampler2D u_background;
    uniform float u_strength;
    uniform float u_radius;
    uniform float u_intensity;

    // Smooth min blend (for rift soft edge)
    float smoothBlend(float a, float b, float k) {
      float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
      return mix(b, a, h) - k * h * (1.0 - h);
    }

    void main() {
      vec2 uv = v_uv;

      // Normalize coords
      vec2 centered = uv - 0.5;
      float dist = length(centered);

      // Core distortion strength
      float rift = smoothstep(u_radius, u_radius - 0.3, dist);

      // Time warp pulsation
      float pulse = sin(u_time * 0.4) * 0.015;

      // Distortion curvature
      float curve = rift * (u_strength + pulse);

      // Bending: classic gravitational lensing warp
      vec2 bend = centered * curve;

      // Apply bending to UV
      uv -= bend * u_intensity;

      // Sample background starfield
      vec4 bg = texture2D(u_background, uv);

      // Apply gold tint near center
      float gold = smoothstep(0.0, u_radius, dist);
      vec3 goldTint = mix(
        vec3(1.0, 0.9, 0.6),  // soft gold
        bg.rgb,
        gold
      );

      gl_FragColor = vec4(goldTint, bg.a);
    }
  `,

  uniforms: {
    u_time: { value: 0 },
    u_resolution: { value: [0, 0] },
    u_background: { value: null },
    u_strength: { value: 0.22 },   // Main distortion
    u_radius: { value: 0.48 },     // Rift size
    u_intensity: { value: 1.3 },   // Light bending intensity
  }
};