type ReactRef<T> =
  | React.LegacyRef<T>
  | React.MutableRefObject<T>
  | React.Ref<T>;

export function assignRef<T>(ref: ReactRef<T> | undefined, value: T) {
  if (ref == null) return;

  if (typeof ref === "function") {
    ref(value);

    return;
  }

  try {
    ref.current = value;
  } catch {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
