import ColumnFilter from './ColumnFilter'
export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Email',
        accessor: 'email',
        Filter: ColumnFilter
    },
    {
        Header: 'Country',
        accessor: 'country',
        Filter: ColumnFilter
    },

]