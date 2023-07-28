"use client"
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Question, User } from '@/src/context/types';
import { questions } from '@/src/lib/data/data'
import { FilterMatchMode } from 'primereact/api';
import { FaEdit } from 'react-icons/fa';

export default function RemovableSortPostsTable() {
  const [postsList, setPostsList] = useState<Question[]>([]);
  const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    'question.title': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'question.postedBy': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  useEffect(() => {
    setPostsList(questions)
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
          value={postsList}
          paginator 
          rows={8}
          removableSort 
          tableStyle={{ minWidth: '50rem' }} 
          filters={filters} 
          // filterDisplay="row" 
          loading={loading}
          globalFilterFields={['title', 'postedBy']}
          header={header} 
          emptyMessage="No customers found."
        >
          <Column field="id"  filterField="id"  header="Question ID" sortable style={{ width: '5%' }}></Column>
          <Column field="title"  filterField="title" header="Title" sortable style={{ width: '20%' }}></Column>
          <Column field="postedBy" header="Posted By" sortable style={{ width: '15%' }}></Column>
          <Column field="answersCount" header="Answers Count" sortable style={{ width: '10%' }}></Column>
          <Column field="datePosted"  filterField="Date Posted" header="Account Type" sortable style={{ width: '15%' }}></Column>
          <Column header="Action"  style={{ width: '10%' }}>
            <FaEdit className='text-sm' />
          </Column>
        </DataTable>
      </div>
    </div>
  );
}