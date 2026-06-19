import Button from "../UI/Button";

export default function CTA() {
  return (
    <section
      data-nav-theme="dark"
      className="border-b border-inverse/16 bg-charcoal px-5 py-24 text-inverse md:px-8 md:py-38"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 border border-inverse/18 p-5 md:p-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-8 text-micro font-bold uppercase text-inverse/50">Final call / board-ready operations</p>
          <h2 className="max-w-6xl font-display text-display-lg">
            Build the operating system your next stage already requires.
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-12 lg:items-end lg:text-right">
          <p className="max-w-md text-body-xl text-inverse/68">
            Start with a 45-minute systems audit. We map the friction, identify the fastest leverage, and define the
            first implementation sprint.
          </p>
          <Button href="mailto:studio@northstar.systems" variant="light">
            Book Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
