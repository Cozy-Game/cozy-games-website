import { ReactElement } from 'react';
import { LegalDocument } from './LegalDocument';
import { privacyPolicyHtml } from './documents/privacyPolicy';

/** Privacy Policy page at `/privacy`. */
export function PrivacyPolicyPage(): ReactElement {
  return <LegalDocument html={privacyPolicyHtml} />;
}
