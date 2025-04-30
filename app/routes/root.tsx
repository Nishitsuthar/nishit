import { Outlet } from 'react-router-dom';
import Layout from '~/components/Layout';

export default function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export function ErrorBoundary() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Oops!</h1>
        <p className="text-gray-600 dark:text-gray-300">Something went wrong.</p>
      </div>
    </div>
  );
} 