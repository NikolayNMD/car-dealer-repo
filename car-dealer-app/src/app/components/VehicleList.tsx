type VehicleModel = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
  Year: string;
};

type VehicleListProps = {
  models: VehicleModel[] | undefined;
};

export default function VehicleList({ models }: VehicleListProps) {
  if (!models) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (models.length === 0) {
    return (
      <p className="text-center text-gray-500">No vehicle models are found!</p>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model) => (
        <li
          key={model.Model_ID}
          className="bg-white shadow  p-10 hover:shadow-xl transition-shadow rounded-lg"
        >
          <h2 className="text-xl font-semibold">
            <span>{model.Model_Name}</span>
          </h2>
          <p className="text-gray-700">Make: {model.Make_Name}</p>
          <p className="text-gray-700">Year: {model.Year}</p>
          <p className="text-gray-700">Make ID: {model.Make_ID}</p>
          <p className="text-gray-700">Model ID: {model.Model_ID}</p>
        </li>
      ))}
    </ul>
  );
}
