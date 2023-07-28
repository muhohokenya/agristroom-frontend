"use client"
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { User } from '@/src/context/types';
import { users } from '@/src/lib/data/data'
import { FilterMatchMode } from 'primereact/api';

export default function RemovableSortUsersTable() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    'user.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'user.email': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'user.accountType': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  useEffect(() => {
    setUsersList(users)
    setLoading(false)
  }, []);

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    // @ts-ignore
    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
        <div className="flex justify-content-end my-0.5">
            <input type="text" value={globalFilterValue} onChange={onGlobalFilterChange} className=" w-[300px]  outline-0 rounded-md px-2 border border-[#2F9B4E] h-[40px]" placeholder="Keyword Search.." />
        </div>
    );
};

const header = renderHeader();

  return (
    <div className='mx-5'>

      <div className="card">
        <DataTable 
          value={usersList}
          paginator 
          rows={8}
          removableSort 
          tableStyle={{ minWidth: '50rem' }} 
          filters={filters} 
          // filterDisplay="row" 
          loading={loading}
          globalFilterFields={['name', 'email', 'accountType']}
          header={header} 
          emptyMessage="No customers found."
        >
          <Column field="name"  filterField="user.name"  header="Name" sortable style={{ width: '15%' }}></Column>
          <Column field="email"  filterField="user.email" header="Email" sortable style={{ width: '15%' }}></Column>
          <Column field="dateRegistered" header="Date Registered" sortable style={{ width: '15%' }}></Column>
          <Column field="questionsCount" header="Questions Count" sortable style={{ width: '15%' }}></Column>
          <Column field="accountType"  filterField="user.accountType" header="Account Type" sortable style={{ width: '15%' }}></Column>
          <Column field="interests" header="Interests" style={{ width: '15%' }}></Column>
          <Column field="answersCount" header="Answers Count" sortable style={{ width: '15%' }}></Column>
        </DataTable>
      </div>
    </div>
  );
}