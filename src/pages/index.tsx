import {DataGrid} from "devextreme-react";
import {usersService} from "data/API";
import {ColumnFixing, Editing, GroupPanel,
    Paging, SearchPanel, Column, RequiredRule, EmailRule} from "devextreme-react/data-grid";
import CustomStore from 'devextreme/data/custom_store';

const Home = () => {


    const dataSource = new CustomStore({
        key: 'id',

        load: async () => {
            const response = await usersService.getUsersApi();
            return response.data;
        },
        insert: async (values) => {
            const response = await usersService.userCreateApi(values.email, values.firstName, values.lastName, values.passwordHash);
            return response.data;
        },
        update: async (key, values) => {
            const response = await usersService.editCategoryApi(key,
                values.firstName === undefined ? null : values.firstName,
                values.lastName === undefined ? null : values.lastName,
                values.passwordHash === undefined ? null : values.passwordHash);
            return response.data;
        },
        remove: async (key) => {
            const response = await usersService.deleteUserApi(key);
            return response.data;
        },
    })

    return (
        <DataGrid
            allowColumnReordering={true}
            rowAlternationEnabled={true}
            dataSource={dataSource} showBorders={true} >
            <Paging enabled={true} />
            <GroupPanel visible={true} />
            <ColumnFixing enabled={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Editing
                mode="form"
                refreshMode={"full"}
                allowUpdating={true}
                allowDeleting={true}
                allowAdding={true} />
            <Column
                fixed={true}
                dataField="id"
                allowEditing={false}
                caption="Identifier"
                dataType="string"
                alignment="center"
            />
            <Column dataField="email" alignment="center" caption="Email" dataType="string">
                <RequiredRule />
                <EmailRule />
            </Column>
            <Column dataField="firstName" alignment="center" caption="First Name" dataType="string">
                <RequiredRule />
            </Column>
            <Column dataField="lastName" alignment="center" caption="Last Name" dataType="string">
                <RequiredRule />
            </Column>
            <Column dataField="passwordHash" alignment="center" caption="Password"  dataType="string">
                <RequiredRule />
            </Column>
            <Column allowEditing={false} dataField="rating" alignment="center" caption="Rating"  dataType="number" />
            <Column allowEditing={false} dataField="creationDate" alignment="center" caption="Created Date"  dataType="datetime" />

        </DataGrid>
    );
}

export default Home;
