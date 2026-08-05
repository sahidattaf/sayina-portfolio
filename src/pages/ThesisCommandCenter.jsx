import { useMemo, useState } from "react";
import { AlertTriangle, BookOpen, CheckCircle2, Download, RotateCcw, Target } from "lucide-react";
import { framework, initialThesisState, qualityChecks, researchQuestion } from "../data/thesis";

const STORAGE_KEY = "sayina-han-thesis-command-center-v1";
const statuses = ["Not started", "In progress", "Blocked", "Ready for review", "Complete"];

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...initialThesisState, ...JSON.parse(saved) } : initialThesisState;
  } catch {
    return initialThesisState;
  }
}

export default function ThesisCommandCenter() {
  const [state, setState] = useState(loadState);
  const [filter, setFilter] = useState("All");

  const persist = (next) => {
    const stamped = { ...next, updatedAt: new Date().toISOString() };
    setState(stamped);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stamped));
  };

  const overall = useMemo(
    () => Math.round(state.cycles.reduce((sum, cycle) => sum + Number(cycle.progress || 0), 0) / state.cycles.length),
    [state.cycles],
  );

  const visibleCycles = filter === "All" ? state.cycles : state.cycles.filter((cycle) => cycle.status === filter);
  const updateCycle = (id, patch) => persist({ ...state, cycles: state.cycles.map((cycle) => cycle.id === id ? { ...cycle, ...patch } : cycle) });
  const togglePriority = (id) => persist({ ...state, priorities: state.priorities.map((item) => item.id === id ? { ...item, done: !item.done } : item) });

  const exportState = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "sayina-han-thesis-state.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const resetState = () => {
    if (window.confirm("Reset all locally saved thesis dashboard progress?")) {
      localStorage.removeItem(STORAGE_KEY);
      setState(initialThesisState);
    }
  };

  return (
    <main className="bg-ink-50">
      <section className="bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900 py-14 text-white">
        <div className="container-px mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-2 text-sm text-brand-200"><BookOpen size={17} /> HAN Graduation Thesis</div>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Sayina HAN Thesis Command Center</h1>
          <p className="mt-4 max-w-4xl text-ink-200">FOMO-based social-media marketing and Generation Z purchase intentions toward international fashion brands.</p>
          <div className="mt-7 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-200">Central research question</p>
            <p className="mt-2 text-lg font-medium">{researchQuestion}</p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[["Overall progress", `${overall}%`], ["Current cycle", state.currentCycle], ["Verified sources", state.metrics.verifiedSources], ["Survey responses", state.metrics.surveyResponses], ["Open risks", state.metrics.openRisks]].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{label}</p><p className="mt-2 text-2xl font-bold text-ink-900">{value}</p></div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <section>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div><p className="text-sm font-semibold text-brand-700">HAN process</p><h2 className="text-2xl font-bold text-ink-900">Research Cycles RC1–RC6</h2></div>
              <select value={filter} onChange={(event) => setFilter(event.target.value)} className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"><option>All</option>{statuses.map((status) => <option key={status}>{status}</option>)}</select>
            </div>
            <div className="mt-5 space-y-4">
              {visibleCycles.map((cycle) => (
                <article key={cycle.id} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div><p className="text-xs font-bold text-brand-700">{cycle.id}</p><h3 className="text-lg font-bold text-ink-900">{cycle.title}</h3><p className="mt-1 text-sm text-ink-500">{cycle.objective}</p></div>
                    <select value={cycle.status} onChange={(event) => updateCycle(cycle.id, { status: event.target.value })} className="rounded-lg border border-ink-200 px-2 py-1 text-sm">{statuses.map((status) => <option key={status}>{status}</option>)}</select>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto]">
                    <label className="text-xs font-semibold text-ink-500">Progress: {cycle.progress}%<input className="mt-2 w-full accent-emerald-600" type="range" min="0" max="100" step="5" value={cycle.progress} onChange={(event) => updateCycle(cycle.id, { progress: Number(event.target.value) })} /></label>
                    <label className="text-xs font-semibold text-ink-500">Deadline<input type="date" value={cycle.deadline} onChange={(event) => updateCycle(cycle.id, { deadline: event.target.value })} className="mt-1 block rounded-lg border border-ink-200 px-2 py-1.5 text-sm" /></label>
                  </div>
                  <textarea value={cycle.notes} onChange={(event) => updateCycle(cycle.id, { notes: event.target.value })} placeholder="Evidence, supervisor feedback, blockers, or reflection notes…" className="mt-4 min-h-20 w-full rounded-xl border border-ink-200 p-3 text-sm" />
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2"><Target className="text-brand-600" size={20} /><h2 className="font-bold text-ink-900">Next priorities</h2></div>
              <p className="mt-1 text-xs text-amber-700">Template tasks — confirm with the supervisor.</p>
              <div className="mt-4 space-y-3">{state.priorities.map((item) => <label key={item.id} className="flex gap-3 text-sm text-ink-600"><input type="checkbox" checked={item.done} onChange={() => togglePriority(item.id)} className="mt-1 accent-emerald-600" /><span className={item.done ? "line-through opacity-60" : ""}>{item.text}</span></label>)}</div>
            </section>

            <section className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
              <h2 className="font-bold text-ink-900">Conceptual framework</h2>
              <p className="mt-3 text-sm font-semibold text-brand-700">{framework.primary}</p>
              <div className="mt-2 flex flex-wrap gap-2">{framework.constructs.map((item) => <span key={item} className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-800">{item}</span>)}</div>
              <p className="mt-4 text-sm font-semibold text-ink-700">FOMO dimensions</p>
              <div className="mt-2 flex flex-wrap gap-2">{framework.fomoDimensions.map((item) => <span key={item} className="rounded-full bg-ink-100 px-3 py-1 text-xs text-ink-700">{item}</span>)}</div>
            </section>

            <section className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-brand-600" size={20} /><h2 className="font-bold text-ink-900">Academic quality gate</h2></div>
              <ul className="mt-4 space-y-3">{qualityChecks.map((check) => <li key={check} className="flex gap-2 text-sm text-ink-600"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />{check}</li>)}</ul>
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><div className="flex items-center gap-2 text-amber-900"><AlertTriangle size={20} /><h2 className="font-bold">Evidence guard</h2></div><p className="mt-2 text-sm text-amber-800">Do not treat demo content as findings. Never upload identifiable participant data or publish restricted HAN materials.</p></section>
            <div className="flex flex-wrap gap-3"><button onClick={exportState} className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"><Download size={16} /> Export JSON</button><button onClick={resetState} className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-100"><RotateCcw size={16} /> Reset</button></div>
          </aside>
        </div>
      </section>
    </main>
  );
}
