"use client";
import { useState, useCallback, useEffect } from "react";

export type Trigger = (callback?: VoidFunction | null) => void;

/**
 * Trigger a callback on state change
 */
function useEffectState(): Trigger {
  const [effectId, setEffectId] = useState<{
    id: number;
    callback: VoidFunction | null;
  }>({
    id: 0,
    callback: null,
  });

  const update = useCallback((callback?: VoidFunction | null) => {
    setEffectId(({ id }) => ({
      id: id + 1,
      callback: callback || null,
    }));
  }, []);

  useEffect(() => {
    effectId.callback?.();
  }, [effectId]);

  return update;
}

export { useEffectState };
