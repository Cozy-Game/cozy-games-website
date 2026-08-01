import { ReactElement, useEffect } from 'react';
import content from './content/site.json';
import { HomePage } from './features/home/HomePage';
import { LegalPage } from './features/legal/LegalPage';
import { useHashRoute } from './hooks/useHashRoute';
import { PageContent } from './types/content';

/** Root component: resolves the current hash route to a page. */
export default function App(): ReactElement {
  const route = useHashRoute();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const pages: Record<string, PageContent> = content.pages;
  const pageContent = pages[route];
  return pageContent ? <LegalPage content={pageContent} /> : <HomePage />;
}
