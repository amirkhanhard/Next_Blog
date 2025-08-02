// pages/docs/[[...params]].js
import { useRouter } from 'next/router';

export default function DocsPage() {
  const router = useRouter();
  const { params = [] } = router.query;
    console.log(params);
  return (
    <div>
      <h1>Docs</h1>
      <p>Path: {params.join(' / ') || 'Home'}</p>
    </div>
  );
}
