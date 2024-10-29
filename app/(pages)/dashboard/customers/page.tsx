import CustomersTable from '@/app/components/customers/table';
import { fetchCustomers, fetchFilteredCustomers} from '@/app/lib/data';
import { lusitana } from '@/app/components/fonts';
import { Suspense } from 'react';

export default async function Page() {
    const customers = await fetchCustomers();
    const filterCustomers = await fetchFilteredCustomers('')

    return (
        <div className="w-full">
            
                
            <Suspense >
            {/* @ts-ignore: Server Component */}
                <CustomersTable customers={filterCustomers} />
            </Suspense>
                 
        </div>
    )
  }