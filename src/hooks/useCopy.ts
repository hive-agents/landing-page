import { useMemo } from 'react';
import { copyVariants, defaultVariant, CopyVariant } from '../config/copy';

export function useCopy(): CopyVariant {
  const copy = useMemo(() => {
    if (typeof window === 'undefined') {
      return copyVariants[defaultVariant];
    }

    const params = new URLSearchParams(window.location.search);
    const variant = params.get('variant');

    if (variant && variant in copyVariants) {
      return copyVariants[variant];
    }

    return copyVariants[defaultVariant];
  }, []);

  return copy;
}
