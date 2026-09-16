import { ReactElement, useEffect } from 'react';
import { HomePage } from './features/home/HomePage';
import { PrivacyPolicyPage } from './features/legal/PrivacyPolicyPage';
import { TermsPage } from './features/legal/TermsPage';
import { usePathRoute } from './hooks/usePathRoute';

const routes: Record<string, () => ReactElement> = {
  privacy: PrivacyPolicyPage,
  terms: TermsPage,
};

/** Root component: resolves the current path to a page. */
export default function App(): ReactElement {
  const route = usePathRoute();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const Page = routes[route] ?? HomePage;
  return <Page />;
}
