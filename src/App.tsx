import { Link, Route, Routes } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { TopicPage } from './pages/TopicPage';
import { NounSimulatorPage } from './pages/tools/NounSimulatorPage';
import { VerbGovernmentPage } from './pages/tools/VerbGovernmentPage';
import { TenseMatrixPage } from './pages/tools/TenseMatrixPage';

function NotFoundPage() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center shadow-sm">
      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">404</div>
      <h1 className="mt-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Страница не найдена
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Запрашиваемый маршрут не существует.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/tools/noun-simulator" element={<NounSimulatorPage />} />
        <Route path="/tools/verb-government" element={<VerbGovernmentPage />} />
        <Route path="/tools/tense-matrix" element={<TenseMatrixPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
