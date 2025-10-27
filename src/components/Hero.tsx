import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Quality
              <span className="block bg-gradient-warm bg-clip-text text-transparent">
                Ponmo Delivered Fresh
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Experience the finest cowhide (ponmo) sourced and prepared with care. 
              Fast delivery, unbeatable prices, and quality you can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-card p-4 rounded-lg shadow-card">
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="text-2xl font-bold text-primary">₦2,000</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-card">
                <p className="text-sm text-muted-foreground">Delivery</p>
                <p className="text-2xl font-bold text-accent">Same Day</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroBanner} 
              alt="Fresh premium ponmo" 
              className="rounded-2xl shadow-hover w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
