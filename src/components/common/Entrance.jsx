"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Entrance() {
  const scope = useRef(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.set(".entrance-word", { yPercent: 120 });
        gsap.set(".entrance-rule-x", { scaleX: 0, transformOrigin: "left center" });
        gsap.set(".entrance-rule-y", { scaleY: 0, transformOrigin: "top center" });

        const tl = gsap.timeline({
          defaults: { ease: "expo.inOut" },
          onComplete: () => setHidden(true)
        });

        tl.to(".entrance-rule-x", { scaleX: 1, duration: 0.7, stagger: 0.05 })
          .to(".entrance-rule-y", { scaleY: 1, duration: 0.7, stagger: 0.05 }, "-=0.55")
          .to(".entrance-word", { yPercent: 0, duration: 0.85, stagger: 0.06 }, "-=0.38")
          .to(".entrance-panel", { yPercent: -101, duration: 0.95, stagger: 0.07 }, "+=0.25")
          .to(scope.current, { autoAlpha: 0, duration: 0.2 }, "-=0.2");
      }, scope);

      return () => ctx.revert();
    },
    { scope }
  );

  if (hidden) return null;

  return (
    <div ref={scope} className="fixed inset-0 z-[100] grid grid-cols-4 bg-charcoal text-inverse">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="entrance-panel relative border-r border-inverse/16 bg-charcoal">
          <span className="entrance-rule-x absolute left-0 top-1/3 h-px w-full bg-inverse/24" />
          <span className="entrance-rule-x absolute left-0 top-2/3 h-px w-full bg-inverse/24" />
          <span className="entrance-rule-y absolute left-1/2 top-0 h-full w-px bg-inverse/18" />
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-5">
        <div className="overflow-hidden">
          <p className="entrance-word font-display text-[18vw] leading-[0.82] tracking-[0]">Northstar</p>
        </div>
      </div>
      <div className="absolute bottom-6 left-5 right-5 flex justify-between text-micro font-bold uppercase text-inverse/50 md:left-8 md:right-8">
        <span>Operating System</span>
        <span>Grid initialized</span>
      </div>
    </div>
  );
}
