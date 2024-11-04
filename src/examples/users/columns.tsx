import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export type User = {
    id: string;
    name: string;
    email: string;
    contact?: string;
    gender: string;
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'id',
        header: 'No.',
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Name
                    <ArrowUpDown className="w-4 h-4 ml-2" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'contact',
        header: 'Contact',
    },
    {
        accessorKey: 'gender',
        header: 'Gender',
    },
];
