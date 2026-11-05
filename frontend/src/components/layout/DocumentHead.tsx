import { useEffect } from 'react';
import { useI18n } from '../../i18n';
import { useRouter } from '../../router';
import { applyHead, buildHead } from '../../seo/head';

export function DocumentHead() {
  const bundle = useI18n();
  const route = useRouter((s) => s.route);

  useEffect(() => {
    applyHead(buildHead(bundle, route));
  }, [bundle, route]);

  return null;
}
