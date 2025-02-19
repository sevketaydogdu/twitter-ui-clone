import React from 'react';

export default function useHaptics() {
  return React.useCallback((strength: 'Light' | 'Medium' | 'Heavy' = 'Medium') => {}, []);
}
