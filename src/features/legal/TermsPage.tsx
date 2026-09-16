import { ReactElement } from 'react';
import { LegalDocument } from './LegalDocument';
import { termsOfServiceHtml } from './documents/termsOfService';

/** Terms of Service page at `/terms`. */
export function TermsPage(): ReactElement {
  return <LegalDocument html={termsOfServiceHtml} />;
}
