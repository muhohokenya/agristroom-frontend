import { AdminDashboardLayoutContainer } from '@/src/components/layouts/admin-dashboard/layout'
import React from 'react';

interface Props {
    children?: React.ReactNode;
  }

function Layout(props: Props){
  return (
    <AdminDashboardLayoutContainer>
        {props.children}
    </AdminDashboardLayoutContainer>
  )
}

export default Layout
