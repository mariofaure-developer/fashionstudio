import { ArrowRight, TrendingUp, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="w-full px-4 md:px-8 flex items-center justify-between h-16">
        <img
          src="/fashion_studio_icon_corrected.png"
          alt="Fashion Studio"
          style={{ height: 50 }}
        />
          <div className="text-lg md:text-2xl font-bold font-sora text-primary truncate flex-1">
            Fashion Studio
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition">
              Features
            </a>
            <a href="#metrics" className="text-sm font-medium hover:text-primary transition">
              Metrics
            </a>
            <a href="#setup" className="text-sm font-medium hover:text-primary transition">
              Setup
            </a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Hero Text */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold font-sora leading-tight">
                  The Future of
                  <br />
                  <span className="text-primary">Fashion</span>
                  <br />
                  Commerce
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-md">
                  Empower fashion brands with AI-driven virtual studios. Mix-and-match real products on digital models, increase engagement, and drive unprecedented online sales growth.
                </p>
              </div>

            </div>

            {/* Right: Real Product Showcase */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="relative w-full h-56 sm:h-64 md:h-96 flex items-center justify-center">
                <img
                  src="/images/boden-outfit-model.png"
                  alt="Real Boden Outfit Composition"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="bg-secondary/50 rounded-lg p-3 md:p-4">
                <p className="font-semibold text-primary text-sm md:text-base">Real Product Mix-and-Match (Boden)</p>
                <p className="text-muted-foreground text-xs md:text-sm">Dress + Jacket + Boots + Tights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Track Record Section */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sora mb-2 md:mb-3">
                Proven Track Record
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                We built and scaled the original mix-and-match technology that Boden deployed globally for over a decade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Boden Partnership */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-border">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-2">Global Success</p>
                  <h3 className="text-2xl md:text-3xl font-bold font-sora"><a href="https://www.boden.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Boden</a></h3>
                </div>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <p><span className="font-semibold text-foreground">10+ Years</span> of continuous deployment</p>
                  <p><span className="font-semibold text-foreground">6 Countries</span> – UK, US, Germany, France, Austria, Australia</p>
                  <p><span className="font-semibold text-foreground">Hundreds of Thousands of Users</span> engaged with our technology</p>
                  <p><span className="font-semibold text-foreground">30% AOV Lift</span> proven and sustained</p>
                </div>
              </div>

              {/* AI v2 Evolution */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 md:p-8 border border-primary/20">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-2">Next Evolution</p>
                  <h3 className="text-2xl md:text-3xl font-bold font-sora">AI v2 Platform</h3>
                </div>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <p>Scaling from <span className="font-semibold text-foreground">1 brand</span> to <span className="font-semibold text-foreground">1000+ brands</span></p>
                  <p>Advanced AI enables <span className="font-semibold text-foreground">3-minute setup</span> vs. weeks of integration</p>
                  <p>Expected <span className="font-semibold text-foreground">2-3x engagement lift</span> with AI-powered recommendations</p>
                  <p>Proven founder with <span className="font-semibold text-foreground">decade of execution</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 md:py-12 bg-white scroll-mt-16">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sora mb-2 md:mb-3">
              Core Capabilities
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              A comprehensive platform designed to revolutionize how fashion brands engage customers and drive revenue growth using real product imagery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {/* Feature 1: Mix & Match with Real Products */}
            <div className="group">
              <div className="relative mb-4 md:mb-6 space-y-3 md:space-y-4">
                <div className="flex items-center justify-center h-40 md:h-56 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden">
                  <img
                    src="/images/boden-pink-dress.png"
                    alt="Pink Dress"
                    className="h-32 md:h-48 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-muted-foreground">
                  <span>↓AI Combines Into Complete Outfit↓</span>
                </div>
                <div className="flex items-center justify-center h-40 md:h-56 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden">
                  <img
                    src="/images/boden-outfit-model.png"
                    alt="Complete Outfit"
                    className="h-32 md:h-48 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-sora mb-2">Mix & Match</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                AI-powered virtual styling lets customers combine real products on digital models in real-time. Increase average order value and customer engagement exponentially.
              </p>
            </div>

            {/* Feature 2: Infinitely Scalable */}
            <div className="group">
              <div className="relative mb-4 md:mb-6 h-40 md:h-56 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/feature-scalability.png"
                  alt="Infinitely Scalable"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-sora mb-2">Infinitely Scalable</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Our cloud-native infrastructure handles unlimited brands and products. From startups to enterprise, scale without limits or performance degradation.
              </p>
            </div>
          </div>

          {/* Product Flatlay Grid */}
          <div className="mt-12 md:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Pink Dress */}
              <div className="flex items-center justify-center h-40 md:h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden">
                <img
                  src="/images/boden-pink-dress.png"
                  alt="Pink Dress"
                  className="h-32 md:h-40 object-contain"
                />
              </div>
              {/* Navy Boots */}
              <div className="flex items-center justify-center h-40 md:h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden">
                <img
                  src="/images/boden-navy-boots.png"
                  alt="Navy Boots"
                  className="h-32 md:h-40 object-contain"
                />
              </div>
              {/* Fleece Jacket */}
              <div className="flex items-center justify-center h-40 md:h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden">
                <img
                  src="/images/boden-fleece-jacket.png"
                  alt="Fleece Jacket"
                  className="h-32 md:h-40 object-contain"
                />
              </div>
              {/* Pink Socks */}
              <div className="flex items-center justify-center h-40 md:h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden">
                <img
                  src="/images/boden-pink-socks.png"
                  alt="Pink Socks"
                  className="h-32 md:h-40 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Personalization Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sora mb-2 md:mb-3">
              Infinite Personalization
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Every brand can create unique, personalized outfit combinations. From casual to formal, our AI adapts to any style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Example 1 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full h-56 md:h-64 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/outfit-example-2.png"
                  alt="Personalized Outfit Example 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-center">Original Model</p>
            </div>

            {/* Example 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full h-56 md:h-64 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/outfit-example-3.png"
                  alt="Personalized Outfit Example 2"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-center">Personalized</p>
            </div>

            {/* Example 3 - Before Personalization */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full h-56 md:h-64 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/outfit-before-personalization.png"
                  alt="Before Personalization"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-center">Before Personalization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-8 md:py-12 bg-secondary/30 scroll-mt-16">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sora mb-2 md:mb-3">
                Proven Effectiveness
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Real results from our v1 product, with AI-powered v2 launching soon to unlock exponential growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-6 md:mb-12">
              {/* Verified Results */}
              <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 md:h-14 w-10 md:w-14 rounded-lg bg-primary/10">
                      <TrendingUp className="w-5 md:w-7 h-5 md:h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl md:text-3xl font-bold font-sora text-primary mb-1 md:mb-2">30%</h3>
                    <p className="text-base md:text-lg font-semibold font-sora mb-1">Average Order Value Increase</p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Verified uplift from v1 product vs. traditional catalog
                    </p>
                  </div>
                </div>
              </div>

              {/* Future Potential */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 md:p-8 border border-primary/20">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 md:h-14 w-10 md:w-14 rounded-lg bg-primary/20">
                      <Rocket className="w-5 md:w-7 h-5 md:h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl md:text-3xl font-bold font-sora text-primary mb-1 md:mb-2">2-3x</h3>
                    <p className="text-base md:text-lg font-semibold font-sora mb-1">AI v2 Growth Potential</p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Expected engagement and conversion lift from advanced mix-and-match engine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="py-8 md:py-12 bg-background scroll-mt-16">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sora mb-2 md:mb-3">
                Launch in <span className="text-primary">3 Minutes</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                One-click setup makes deployment effortless. Get your AI-powered fashion studio live in minutes, not weeks.
              </p>
            </div>

            <div className="space-y-3 md:space-y-6">
              {/* Step 1 */}
              <div className="flex gap-2 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 md:h-12 w-8 md:w-12 rounded-full bg-primary text-white font-bold text-sm md:text-xl">
                    1
                  </div>
                </div>
                <div className="flex-1 min-w-0 pt-0.5 md:pt-2">
                  <h3 className="text-sm md:text-xl font-bold font-sora mb-0.5 md:mb-1">Add Website URL</h3>
                  <p className="text-xs md:text-base text-muted-foreground">
                    Connect your fashion brand website in seconds.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-2 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 md:h-12 w-8 md:w-12 rounded-full bg-primary text-white font-bold text-sm md:text-xl">
                    2
                  </div>
                </div>
                <div className="flex-1 min-w-0 pt-0.5 md:pt-2">
                  <h3 className="text-sm md:text-xl font-bold font-sora mb-0.5 md:mb-1">Auto AI Building...</h3>
                  <p className="text-xs md:text-base text-muted-foreground">
                    Our AI automatically analyzes and builds your virtual studio.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-2 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 md:h-12 w-8 md:w-12 rounded-full bg-primary text-white font-bold text-sm md:text-xl">
                    3
                  </div>
                </div>
                <div className="flex-1 min-w-0 pt-0.5 md:pt-2">
                  <h3 className="text-sm md:text-xl font-bold font-sora mb-0.5 md:mb-1">Launch Studio</h3>
                  <p className="text-xs md:text-base text-muted-foreground">
                    Go live and start engaging customers with AI-powered mix-and-match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment CTA Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora mb-2 md:mb-3">
              Join the Fashion Revolution
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 opacity-95">
              Be part of the platform transforming how fashion brands and customers connect through AI-powered product discovery.
            </p>
            
            {/* Investment Terms */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20">
              <p className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-3 opacity-90">Investment Opportunity</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div>
                  <p className="text-3xl md:text-4xl font-bold font-sora">£300k</p>
                  <p className="text-sm opacity-90 mt-1">Seed Investment</p>
                </div>
                <div className="text-xl md:text-2xl opacity-75">for</div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold font-sora">25%</p>
                  <p className="text-sm opacity-90 mt-1">Equity</p>
                </div>
              </div>
              <p className="text-xs md:text-sm mt-4 opacity-90">
                Limited early-stage investment opportunities available. Contact us to discuss terms and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10 bg-background border-t border-border mt-auto">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h3 className="font-semibold font-sora text-base mb-3">Fashion Studio</h3>
              <p className="text-xs text-muted-foreground">
                Empowering fashion brands with AI-driven virtual studios.
              </p>
            </div>
            <div>
              <h3 className="font-semibold font-sora text-base mb-3">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-xs text-muted-foreground hover:text-primary transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#setup" className="text-xs text-muted-foreground hover:text-primary transition">
                    Setup
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-sora text-base mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-muted-foreground hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-muted-foreground hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Fashion Studio. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition">
                Privacy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
