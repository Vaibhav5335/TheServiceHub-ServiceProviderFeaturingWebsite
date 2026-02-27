const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl animate-shimmer" />
              <div className="w-28 h-6 rounded animate-shimmer" />
            </div>
            <div className="hidden lg:flex items-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-4 rounded animate-shimmer" />
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-16 h-9 rounded-lg animate-shimmer" />
              <div className="w-24 h-9 rounded-lg animate-shimmer" />
            </div>
          </nav>
        </div>
      </header>

      
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="w-48 h-8 rounded-full mx-auto lg:mx-0 mb-6 animate-shimmer" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-12 rounded animate-shimmer" />
                <div className="w-3/4 h-12 rounded mx-auto lg:mx-0 animate-shimmer" />
              </div>
              <div className="space-y-2 mb-8">
                <div className="w-full h-5 rounded animate-shimmer" />
                <div className="w-4/5 h-5 rounded mx-auto lg:mx-0 animate-shimmer" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <div className="w-40 h-12 rounded-xl animate-shimmer" />
                <div className="w-40 h-12 rounded-xl animate-shimmer" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl animate-shimmer" />
                    <div className="space-y-1">
                      <div className="w-12 h-5 rounded animate-shimmer" />
                      <div className="w-16 h-3 rounded animate-shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl animate-shimmer" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-32 h-8 rounded-full mx-auto mb-4 animate-shimmer" />
            <div className="w-64 h-10 rounded mx-auto mb-6 animate-shimmer" />
            <div className="w-96 h-5 rounded mx-auto animate-shimmer" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-2xl p-6 lg:p-8 border border-border">
                <div className="w-16 h-16 rounded-2xl mb-6 animate-shimmer" />
                <div className="w-32 h-6 rounded mb-3 animate-shimmer" />
                <div className="space-y-2">
                  <div className="w-full h-4 rounded animate-shimmer" />
                  <div className="w-4/5 h-4 rounded animate-shimmer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-36 h-8 rounded-full mx-auto mb-4 animate-shimmer" />
            <div className="w-72 h-10 rounded mx-auto mb-6 animate-shimmer" />
            <div className="w-80 h-5 rounded mx-auto animate-shimmer" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-card rounded-2xl p-5 lg:p-6 border border-border">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl mb-4 animate-shimmer" />
                <div className="w-20 h-5 rounded mb-2 animate-shimmer" />
                <div className="w-24 h-3 rounded animate-shimmer" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;
