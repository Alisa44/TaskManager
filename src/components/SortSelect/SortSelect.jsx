import {Select} from 'antd';

const { Option } = Select;

const SortSelect = ({ options, onChange, value, placeholder }) => {
    const selectOptions = options.map(item => <Option value={item.value} key={item.value}>{item.name}</Option>);
    return <Select value={value}
                   style={{width: '40%'}}
    onChange={onChange}
    placeholder={placeholder}>
        {selectOptions}
    </Select>;
};

export default SortSelect;