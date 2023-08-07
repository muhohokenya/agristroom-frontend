import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function Progress({value} : any) {

    const valueTemplate = (value: any) => {
        return (
            <React.Fragment>
                <span className='text-[13px]'>
                    {value}/<b>100</b>
                </span>
            </React.Fragment>
        );
    };

    return (
        <div className="card my-2">
            <ProgressBar className='h-3 rounded-md w-[65%]' unit='50%' value={value} displayValueTemplate={valueTemplate}></ProgressBar>
        </div>
    );
}