export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-sans text-sm lg:flex">
        <h1 className="text-4xl font-bold text-google-blue">
          Havsan Grup
        </h1>
      </div>
      
      <div className="mt-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-robotik-primary hover:bg-robotik-bg">
          <h2 className="mb-3 text-2xl font-semibold">
            Robotik Kodlama{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Çocuklarınız için modern robotik ve kodlama eğitimi
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-ai-primary hover:bg-gradient-to-r hover:from-ai-primary/10 hover:to-ai-secondary/10">
          <h2 className="mb-3 text-2xl font-semibold">
            AI & Yazılım{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Kurumsal yapay zeka ve yazılım çözümleri
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-enerji-primary hover:bg-enerji-primary/10">
          <h2 className="mb-3 text-2xl font-semibold">
            Enerji Çözümleri{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            GES bakım, drone termal izleme ve enerji hizmetleri
          </p>
        </div>
      </div>
    </main>
  );
}
