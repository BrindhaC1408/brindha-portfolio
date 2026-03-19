import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { speed: 1 },
          links: {
            enable: true,
            color: "#6366f1",
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;