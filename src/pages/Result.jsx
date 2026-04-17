import React from "react";

const resultDocuments = [
  {
    title: "Result",
    description: "View or download the latest published result PDF.",
    file: "/assets/pdf/Result.pdf",
  },
  {
    title: "Topper 2026",
    description: "View or download the topper list PDF for 2026.",
    file: "/assets/pdf/topper2026.pdf",
  },
];

export default function Result() {
  return (
    <section className="min-h-screen bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Academic Updates
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Result Documents
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Access the published result PDFs below. You can preview each file
            directly on this page or open it in a new tab.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {resultDocuments.map((document) => (
            <article
              key={document.file}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="border-b border-slate-200 bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white">
                <h2 className="text-2xl font-semibold">{document.title}</h2>
                <p className="mt-2 text-sm text-blue-100">{document.description}</p>
              </div>

              <div className="p-6">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <iframe
                    src={document.file}
                    title={document.title}
                    className="h-[520px] w-full"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={document.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Open PDF
                  </a>
                  <a
                    href={document.file}
                    download
                    className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
