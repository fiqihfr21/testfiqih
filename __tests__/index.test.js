import { render, screen } from "@testing-library/react"
import { expect } from "@jest/globals"
import "@testing-library/jest-dom"

import GeneratedTable from "../src/components/generated-table"
import SearchTarget from "../src/components/search-target"
import Matrix from "../src/components/matrix"

describe("Matrix Section", () => {
  it("renders the parent component", async () => {
    render(<GeneratedTable data={[]} setData={jest.fn} />)
    const section = await screen.findByTestId("section-matrix")
    expect(section).toBeDefined()
    expect(<Matrix />).toBeDefined()
  })
  it("renders the matrix components", async () => {
    render(
      <Matrix
        sortedData={[]}
        request={{ rows: 4, cols: 4 }}
        onChange={jest.fn}
      />
    )
    const textMatrix = (await screen.findByTestId("title-matrix")).textContent
    expect(textMatrix).toContain("Matrix of")
  })
  it("renders search target component", async () => {
    render(<SearchTarget onSearch={jest.fn} />)
    const textMatrix = await screen.getByLabelText("Search Target")
    expect(textMatrix).toBeDefined()
  })
})
