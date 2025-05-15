import { useEffect } from "react";

const useParticles = (selector) => {
  useEffect(() => {
    const containers = document.querySelectorAll(selector);
    const numParticles = 15; // Number of particles per container

    containers.forEach((container) => {
      // Clear any existing particles
      container.innerHTML = "";

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const size = Math.random() * 25 + 5; // 5px to 30px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`; // Start randomly within view

        const animDelay = Math.random() * 15; // 0 to 15s delay
        const animDuration = 15 + Math.random() * 15; // 15s to 30s duration

        particle.style.animationDelay = `${animDelay}s`;
        particle.style.animationDuration = `${animDuration}s`;

        // For varied horizontal end position and rotation in @keyframes float
        particle.style.setProperty(
          "--particle-x-end",
          `${Math.random() * 60 - 30}vw`
        ); // -30vw to +30vw
        particle.style.setProperty(
          "--particle-rotate-end",
          `${Math.random() * 720 - 360}deg`
        ); // -360 to +360 deg

        container.appendChild(particle);
      }
    });
  }, [selector]);
};

export default useParticles;
