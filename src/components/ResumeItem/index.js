import React from 'react';
import * as C from './styles';

const ResumeItem = ({ title, Icon, value }) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</C.Total>
        </C.Container>
    );
};

export default ResumeItem;
