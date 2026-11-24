import { Link, Route, Routes } from 'react-router-dom';
import { ArrowLeft, Wrench } from 'lucide-react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { TopicPage } from './pages/TopicPage';

interface ToolPlaceholderProps {
  title: string;
  description: string;
}

function ToolPlaceholder({ title, description }: ToolPlaceholderProps) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400">
        <Wrench className="h-5 w-5" />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        {title}
      </h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
        {description}
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Вернуться на главную
      </Link>
    </div>
  );
}

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
        <Route
          path="/tools/noun-simulator"
          element={
            <ToolPlaceholder
              title="Симулятор падежей"
              description="Интерактивный конструктор форм существительных подключается на следующем этапе."
            />
          }
        />
        <Route
          path="/tools/verb-government"
          element={
            <ToolPlaceholder
              title="Управление глаголов"
              description="Словарь и тренажёр падежного управления глаголов подключаются на следующем этапе."
            />
          }
        />
        <Route
          path="/tools/tense-matrix"
          element={
            <ToolPlaceholder
              title="Матрица времён"
              description="Интерактивная матрица спряжения турецких глаголов подключается на следующем этапе."
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
