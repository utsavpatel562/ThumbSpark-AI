function BentoSection() {
  return (
    <div className="bg-black sm:py-32">
      <div
        className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 py-8 rounded-4xl"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 20%, #000 40%, #f76d1e 110%)",
        }}
      >
        <p className="mx-auto mb-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-orange-400 sm:text-5xl">
          Built for speed, scale, and creators
        </p>
        <h2 className="text-center text-base/7 font-semibold text-slate-200">
          Everything you need to create, optimize, and ship thumbnails without
          friction.
        </h2>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Your thumbnails are optimized to stand out on mobile, tablet,
                  and desktop where most views happen.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <img
                    alt=""
                    src="/assets/grid_imgg.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  AI-generated designs optimized for visibility, clarity, and
                  higher click-through rates.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="/assets/grid_img2.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  All uploads and generations are protected with modern security
                  standards and privacy-first handling.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="/assets/bento_grid2.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Seamlessly integrated AI pipelines deliver fast, reliable, and
                  scalable thumbnail generation.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-950/100 outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    <div className="px-6 pt-6 pb-14 font-mono text-[13px] leading-relaxed overflow-hidden">
                      <pre className="whitespace-pre-wrap break-words text-slate-200">
                        <code>
                          <span className="text-orange-400">type</span>{" "}
                          <span className="text-sky-400">ThumbnailRequest</span>{" "}
                          <span className="text-slate-300">=</span>{" "}
                          <span className="text-slate-300">{`{`}</span>
                          {"\n  "}
                          <span className="text-slate-200">image:</span>{" "}
                          <span className="text-emerald-400">File</span>;
                          {"\n  "}
                          <span className="text-slate-200">title:</span>{" "}
                          <span className="text-emerald-400">string</span>;
                          {"\n  "}
                          <span className="text-slate-200">style?</span>
                          <span className="text-slate-300">:</span>{" "}
                          <span className="text-emerald-400">"bold"</span>{" "}
                          <span className="text-slate-300">|</span>{" "}
                          <span className="text-emerald-400">"minimal"</span>;
                          {"\n"}
                          <span className="text-slate-300">{`}`}</span>
                          {"\n\n"}
                          <span className="text-orange-400">
                            export async function
                          </span>{" "}
                          <span className="text-sky-400">
                            generateThumbnail
                          </span>
                          <span className="text-slate-300">(</span>
                          <span className="text-slate-200">payload:</span>{" "}
                          <span className="text-sky-400">ThumbnailRequest</span>
                          <span className="text-slate-300">)</span>{" "}
                          <span className="text-orange-400">:</span>{" "}
                          <span className="text-emerald-400">
                            Promise&lt;string&gt;
                          </span>{" "}
                          <span className="text-slate-300">{`{`}</span>
                          {"\n  "}
                          <span className="text-orange-400">const</span>{" "}
                          <span className="text-slate-200">response</span>{" "}
                          <span className="text-slate-300">= await</span>{" "}
                          <span className="text-sky-400">fetch</span>
                          <span className="text-slate-300">(</span>
                          <span className="text-amber-300">
                            "/api/thumbnails"
                          </span>
                          <span className="text-slate-300">,</span>{" "}
                          <span className="text-slate-300">{`{`}</span>
                          {"\n    "}
                          <span className="text-slate-200">method:</span>{" "}
                          <span className="text-amber-300">"POST"</span>
                          <span className="text-slate-300">,</span>
                          {"\n    "}
                          <span className="text-slate-200">body:</span>{" "}
                          <span className="text-sky-400">JSON.stringify</span>
                          <span className="text-slate-300">(payload),</span>
                          {"\n  "}
                          <span className="text-slate-300">{`}`}</span>
                          <span className="text-slate-300">);</span>
                          {"\n\n  "}
                          <span className="text-orange-400">return</span>{" "}
                          <span className="text-slate-200">
                            response.json()
                          </span>
                          <span className="text-slate-300">.</span>
                          <span className="text-sky-400">then</span>
                          <span className="text-slate-300">(</span>
                          <span className="text-slate-200">r</span>{" "}
                          <span className="text-slate-300">=&gt;</span>{" "}
                          <span className="text-slate-200">r.url</span>
                          <span className="text-slate-300">);</span>
                          {"\n"}
                          <span className="text-slate-300">{`}`}</span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BentoSection;
