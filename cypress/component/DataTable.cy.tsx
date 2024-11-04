import { DataTable } from '@lib/data-table/data-table';
import { columns } from '@/examples/users/columns';
import users from '@/utils/users.json';

before(() => {
    cy.viewport('macbook-13');
});

describe('Test data table functionalities', () => {
    it('Check everything is working correctly, given basic props', () => {
        cy.mount(<DataTable columns={columns} data={users} />);
    });
});
