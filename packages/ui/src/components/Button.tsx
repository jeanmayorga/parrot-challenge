import { useLoadingStore } from "@parrot/store";

export function Button() {
  const { setIsLoading } = useLoadingStore();
  return (
    <button className="bg-blue" onClick={() => setIsLoading(true)}>
      hola
    </button>
  );
}
