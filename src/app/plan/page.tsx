import HydrationCheck from "@/components/HydrationCheck";
import ElectrolyteExplorer from "@/components/ElectrolyteExplorer";

export default function PlanPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-white">
      <HydrationCheck />
      <ElectrolyteExplorer />
    </main>
  );
}
