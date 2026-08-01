import { ReactElement } from 'react';
import { Cubes } from '../../components/Cubes';
import { PageContent } from '../../types/content';

interface LegalPageProps {
  content: PageContent;
}

/** Centered info page (Privacy, Terms, Support) with a link back home. */
export function LegalPage({ content }: LegalPageProps): ReactElement {
  return (
    <div className="page">
      <Cubes />
      <main className="legal">
        <div className="legal__card">
          <h1 className="legal__title">{content.title}</h1>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="legal__back" href="#/">
            ← Back home
          </a>
        </div>
      </main>
    </div>
  );
}
