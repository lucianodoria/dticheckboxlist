import * as React from 'react';

declare module "react-dticheckboxlist" {
    interface Item {
        id: string;
        label: string;
    }
    interface SelectedItem {
        id: string;
    }
    interface CheckboxProps {
        items: Array<Item>;
        selectedItems:Array<SelectedItem>;
        showSelectedAll:boolean;
        checkBoxSelectedAllColor: string;
        checkBoxSelectedAllLabelColor: string;
        checkBoxColor: string;
        checkBoxLabelColor: string;
        checkBoxCheckedColor: string;
        backgroundColorCheckBoxSelected: string;
        onChange?: (prop: any) => void;
    }

    export default class DTICheckBoxList extends React.Component<CheckboxProps> {}
}