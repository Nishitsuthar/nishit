import { Outlet } from 'react-router';
import Layout from '~/components/Layout';

export default function Index() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
} 