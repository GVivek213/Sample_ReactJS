import React, { useMemo } from 'react'
import Mock_Data from './Mock_Data.json'
import { useTable, useSortBy } from 'react-table'
import { COLUMNS } from './Columns'
import './Table.css'

const Sorting = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Mock_Data, [])
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    },
        useSortBy
    )
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>{column.isSorted ? (column.isSortedDesc ? '' : '') : ""}</span>
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

export default Sorting
