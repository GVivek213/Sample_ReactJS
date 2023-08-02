import React, { useMemo } from 'react'
import Mock_Data from './Mock_Data.json'
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table'
import { COLUMNS } from './Columns'
import './Table.css'
import GlobalFiltering from './GlobalFiltering';


const TablePagination = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Mock_Data, [])
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, setGlobalFilter, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, state, gotoPage, pageCount, setPageSize } = useTable({
        columns,
        data,
        // initialState: { pageIndex: 2 }
    },
        useFilters,
        useGlobalFilter,
        usePagination,

    )
    const { globalFilter } = state
    const { pageIndex, pageSize } = state

    return (
        <div>
            <GlobalFiltering filter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                ))
                            }

                        </tr>
                    )
                    )}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <span>
                page {''}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span> | Go To Page : {''}
                <input type='number' defaultValue={pageIndex + 1}
                    onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber);
                    }}
                    style={{ width: '50px' }}
                />
            </span>
            <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                {
                    [10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            show {pageSize}
                        </option>
                    ))
                }
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>PreviousPage</button>
            <button onClick={() => nextPage()} disabled={!canNextPage} style={{ marginLeft: '10px' }}> NextPage</button >
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </div >
    )
}

export default TablePagination
