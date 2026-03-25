export function CreateCardPage() {
  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-5xl font-semibold text-cyan-400">
          Midterm exam for Database 🔥 13
        </h1>

        <h2 className="mb-6 text-4xl font-semibold">Cards</h2>

        <div className="space-y-4">
          <input
            placeholder="Enter the front"
            className="w-full rounded-[24px] border border-white/30 bg-transparent px-5 py-5 text-2xl outline-none"
          />
          <textarea
            placeholder="Enter the back"
            rows={4}
            className="w-full rounded-[24px] border border-white/30 bg-transparent px-5 py-5 text-2xl outline-none"
          />
          <div className="flex items-center justify-between rounded-full border border-white/30 px-5 py-3">
            <div className="flex gap-5 text-3xl text-white/80">
              <span>🖼️</span>
              <span>≣</span>
              <span>☰</span>
              <span>∑</span>
            </div>
            <button className="rounded-full bg-white px-10 py-3 font-medium text-black">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateCardPage;