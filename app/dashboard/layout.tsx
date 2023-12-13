import SideNav from '@/app/ui/dashboard/sidenav'
import type { ReactNode, ReactElement } from 'react'


export default function Layout({children}: {children: ReactNode}): ReactElement {
    return (
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
            <nav className='w-full flex-none md:w-64'>
                <SideNav />
            </nav>
            <main className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</main>
        </div>
    )
}