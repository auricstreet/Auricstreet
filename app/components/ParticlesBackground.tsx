"use client";

import { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [engineLoaded, setEngineLoaded] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const tsParticles = (await import("@tsparticles/engine")).tsParticles;
      await loadSlim(tsParticles as unknown as Engine);
      setEngineLoaded(true);
    };

    initParticles();
  }, []);

  if (!engineLoaded) return null;

  return (
    <Particles
      id="auricParticles"
      options={{
        background: { color: "transparent" },
        fullScreen: { enable: true, zIndex: -1 },

        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.4, random: true },
          links: { enable: false }
        },

        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 120, duration: 0.3 } }
        }
      }}
    />
  );
}
