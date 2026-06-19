export default function Footer() {
  return (
    <footer id="contact" data-nav-theme="dark" className="border-t border-line bg-charcoal text-inverse">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] md:px-8">
        <div className="border-b border-inverse/16 pb-8 md:border-b-0 md:pb-0">
          <p className="font-display text-5xl leading-none md:text-7xl">Northstar</p>
          <p className="mt-6 max-w-sm text-sm leading-6 text-inverse/60">
            Infrastructure strategy, data systems, and operational design for B2B teams moving from traction to scale.
          </p>
        </div>
        <div>
          <p className="mb-5 text-micro font-bold uppercase text-inverse/42">Contact</p>
          <div className="grid gap-3 text-sm leading-6 text-inverse/72">
            <a href="mailto:studio@northstar.systems">studio@northstar.systems</a>
            <a href="tel:+628118801926">+62 811 880 1926</a>
            <span>Jakarta / Singapore</span>
          </div>
        </div>
        <div className="grid content-start gap-3 text-micro font-bold uppercase text-inverse/72">
          <a href="#platform">Platform</a>
          <a href="#about">About</a>
          <a href="#method">Method</a>
          <a href="#simulator">Scale Simulator</a>
          <a href="#qna">QNA</a>
        </div>
        <div className="grid content-between gap-8 text-sm leading-6 text-inverse/58 md:text-right">
          <p>Selective partnerships for venture-backed B2B operators, funds, and GTM teams.</p>
          <p className="text-micro font-bold uppercase text-inverse/42">© 2026 Northstar Systems</p>
        </div>
      </div>
    </footer>
  );
}
