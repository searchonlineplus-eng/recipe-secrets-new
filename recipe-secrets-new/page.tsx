export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="h-screen flex flex-col items-center justify-center px-6 text-center">

        <h1 className="text-7xl lg:text-9xl font-black leading-none">
          RECIPE
          <br />
          SECRETS 😮‍💨🔥
        </h1>

        <p className="text-white/70 text-2xl mt-10 max-w-3xl">
          Viral recipes, luxury food trends, celebrity meals,
          AI food tools and aesthetic desserts.
        </p>

        <div className="flex gap-6 mt-12">

          <a
            href="#articles"
            className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xl"
          >
            Explore Recipes 😎🚀
          </a>

          <a
            href="/admin"
            className="border border-white/20 px-10 py-5 rounded-2xl font-black text-xl"
          >
            Admin Panel 🔥
          </a>

        </div>

      </section>

      <section
        id="articles"
        className="px-8 lg:px-24 py-24"
      >

        <h2 className="text-6xl font-black mb-16">
          Trending Articles 😭🔥
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {[1,2,3].map((item) => (

            <div
              key={item}
              className="bg-white/5 rounded-[40px] overflow-hidden border border-white/10"
            >

              <div className="h-[260px] bg-white/10" />

              <div className="p-8">

                <h3 className="text-3xl font-black leading-tight">
                  Viral Matcha Recipes Taking Over TikTok
                </h3>

                <p className="text-white/60 mt-4">
                  Discover aesthetic luxury matcha trends dominating social media.
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
