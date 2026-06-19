"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const collaborators = ["Data Architects", "GTM Operators", "Venture Partners", "RevOps Leads"];

export default function About() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".about-portrait",
          { y: 70, rotate: -2 },
          {
            y: -90,
            rotate: 2,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8
            }
          }
        );

        gsap.fromTo(
          ".about-stat",
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-stats",
              start: "top 78%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }, scope);

      return () => ctx.revert();
    },
    { scope }
  );

  return (
    <section id="about" ref={scope} className="overflow-hidden border-b border-line px-5 py-24 md:px-8 md:py-38">
      <div className="mx-auto grid max-w-[1600px] border-x border-line lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[620px] border-b border-line p-5 md:p-8 lg:border-b-0 lg:border-r">
          <div className="about-portrait sticky top-28 h-[520px] border border-charcoal bg-charcoal text-inverse">
            <div className="absolute inset-0 grid grid-cols-4">
              {[0, 1, 2, 3].map((item) => (
                <span key={item} className="border-r border-inverse/12 last:border-r-0" />
              ))}
            </div>
            <div className="relative flex h-full flex-col justify-between p-5 md:p-8">
              <div className="flex justify-between text-micro font-bold uppercase text-inverse/54">
                <span>Founder profile</span>
                <span>01</span>
              </div>
              <div>
                <p className="font-display text-7xl leading-none md:text-8xl">Alya Renata</p>
                <p className="mt-5 max-w-md text-sm leading-6 text-inverse/62">
                  Former operating partner and systems architect for B2B scale-ups across SEA and the US.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-8">
          <p className="mb-8 text-micro font-bold uppercase text-muted">About the company</p>
          <h2 className="max-w-5xl font-display text-display-lg">
            Built by operators who prefer systems over spectacle.
          </h2>
          <div className="mt-12 grid gap-8 text-body-xl text-charcoal/72 md:grid-cols-2">
            <p>
              Northstar was founded to help ambitious B2B companies cross the messy middle: the stage where dashboards
              multiply, leadership rhythm breaks, and every team invents its own version of truth.
            </p>
            <p>
              Our collaborators combine revenue operations, analytics engineering, venture operating experience, and
              product systems design. The result is a practical operating layer that looks simple because the complexity
              is handled underneath.
            </p>
          </div>

          <div className="about-stats mt-16 grid border border-line md:grid-cols-3">
            {[
              ["42", "Scale systems shipped"],
              ["$1.2B", "Pipeline modeled"],
              ["14", "Markets supported"]
            ].map(([value, label]) => (
              <div key={label} className="about-stat border-b border-line p-5 md:border-b-0 md:border-r md:p-6 last:md:border-r-0">
                <p className="font-display text-6xl leading-none">{value}</p>
                <p className="mt-8 text-micro font-bold uppercase text-muted">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-3">
            {collaborators.map((item) => (
              <div key={item} className="flex items-center justify-between border-t border-line py-5">
                <span className="text-2xl md:text-4xl">{item}</span>
                <span className="text-micro font-bold uppercase text-muted">Collaborator</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
