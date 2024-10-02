function DataTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">{/* Table headers */}</thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>{/* Table cells */}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
