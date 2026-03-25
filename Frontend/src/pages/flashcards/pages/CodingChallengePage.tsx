export function CodeChallengePage() {
  return (
    <div className="min-h-screen bg-black p-4 text-white">
      <div className="grid min-h-[88vh] grid-cols-1 gap-4 xl:grid-cols-[1.4fr_0.95fr]">
        <section className="rounded-[20px] border border-white/20 bg-[#1f1f22] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-t-xl border border-white/30 px-4 py-2">Code Editor</div>
            <button className="rounded-xl bg-white px-8 py-2 text-black">Run ▶</button>
          </div>
          <textarea
            defaultValue={`// Imports\nimport mongoose, { Schema } from 'mongoose'\n\n// Collection name\nexport const collection = 'Product'`}
            className="h-[70vh] w-full rounded-xl border border-white/20 bg-transparent p-4 font-mono text-sm outline-none"
          />
        </section>

        <section className="grid gap-4">
          <div className="rounded-[20px] border border-white/20 bg-[#1f1f22] p-4">
            <div className="mb-4 flex gap-2">
              <button className="rounded-t-xl border border-white/30 px-4 py-2">Description</button>
              <button className="rounded-t-xl border border-white/20 px-4 py-2 text-white/40">Solution</button>
            </div>
            <h2 className="mb-3 text-4xl font-semibold">Mongoose</h2>
            <p className="mb-4 text-white/80">
              Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
            </p>
            <div className="rounded-xl border border-white/20 p-4 text-sm text-white/70">
              Example 1: Input: millis = 100 Output: 100
            </div>
          </div>

          <div className="rounded-[20px] border border-white/20 bg-[#1f1f22] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-t-xl border border-white/30 px-4 py-2">Test Cases</div>
              <button className="rounded-xl bg-white px-8 py-2 text-black">Submit</button>
            </div>
            <div className="space-y-6 text-sm text-white/80">
              <p>Testcase 1 — x = 12</p>
              <p>Testcase 2 — x = 121</p>
              <p>Testcase 3 — x = 121</p>
              <p>Testcase 4 — x = 121</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default CodeChallengePage;