import { useMemo } from 'react';
import { copyVariants, defaultVariant, minimalVariants, CopyVariant } from '../config/copy';

function getVariant(): string {
  if (typeof window === 'undefined') {
    return defaultVariant;
  }

  const params = new URLSearchParams(window.location.search);
  const variant = params.get('variant');

  if (variant && variant in copyVariants) {
    return variant;
  }

  return defaultVariant;
}

export function useCopy(): CopyVariant {
  const copy = useMemo(() => {
    return copyVariants[getVariant()];
  }, []);

  return copy;
}

export function useIsMinimalVariant(): boolean {
  const isMinimal = useMemo(() => {
    return minimalVariants.includes(getVariant());
  }, []);

  return isMinimal;
}
