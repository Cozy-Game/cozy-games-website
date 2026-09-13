import { ReactElement } from 'react';
import { CozyBackdrop } from '../../components/CozyBackdrop';
import { Footer } from '../../components/Footer';
import { useInPageAnchors } from './useInPageAnchors';

interface LegalDocumentProps {
  /** Project-owned document markup (see `features/legal/documents/`). */
  html: string;
}

/** Page shell for long-form legal documents: renders the markup and keeps its anchors working. */
export function LegalDocument({ html }: LegalDocumentProps): ReactElement {
  const containerRef = useInPageAnchors();

  return (
    <div className="page">
      <CozyBackdrop />
      <main className="legal-doc">
        <a className="legal-doc__back" href="#/">
          ← Back home
        </a>
        <article
          className="legal-doc__card"
          ref={containerRef}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <Footer />
    </div>
  );
}
