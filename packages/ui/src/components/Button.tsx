import { useLoadingStore } from "@parrot/store";

export function Button() {
  const { setIsLoading } = useLoadingStore();
  return (
    <div>
      <div
        className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </div>
      <h1 className="text-3xl font-bold underline">This is the menu view</h1>

      <button className="bg-blue p-4" onClick={() => setIsLoading(true)}>
        hola
      </button>
    </div>
  );
}
