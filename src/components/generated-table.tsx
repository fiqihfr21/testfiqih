
import Matrix from "@/components/matrix"

const GeneratedTable = ({ data, setData }: any) => {
  

  const onSubmit = () => {
    let cloned = [...data]
    for (const row of cloned) {
      row.sort((a: number, b: number) => a - b)
    }
    cloned.sort((a, b) => a[0] - b[0])
    setData(cloned)
  }

  return (
    <div className="w-full" data-testid="section-matrix">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <Matrix request={{ rows: 4, cols: 4 }} onChange={setData} sortedData={data} />;
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onSubmit}
        >
          Sort It
        </button>
      </div>
    </div>
  )
}

export default GeneratedTable
