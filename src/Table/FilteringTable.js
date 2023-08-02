import React, { useMemo } from 'react'
import Mock_Data from './Mock_Data.json'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import { COLUMNS } from './Columns'
import './Table.css'
import GlobalFiltering from './GlobalFiltering';
const FilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Mock_Data, [])
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable({
        columns,
        data
    },
        useFilters,
        useGlobalFilter
    )
    const { globalFilter } = state
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
                        rows.map(row => {
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


        </div>
    )
}

export default FilteringTable
