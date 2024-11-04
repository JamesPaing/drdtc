import { DataTable } from 'drdtc';
import { User, columns } from '@/examples/users/columns';
import users from './utils/users.json';

const App = () => {
    return (
        <div className="flex items-center justify-center w-[full] h-screen">
            <div className="flex items-center justify-center w-[70%] max-w-[700px]">
                <DataTable<User, User>
                    columns={columns}
                    data={users}
                    rowClassName="even:bg-primary-foreground"
                />
            </div>
        </div>
    );
};

export default App;
