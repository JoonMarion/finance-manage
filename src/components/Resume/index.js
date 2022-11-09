import React from 'react';
import * as C from './styles';
import ResumeItem from '../ResumeItem';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={123} />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={123} />
            <ResumeItem title="Total" Icon={FaDollarSign} value={123} />
        </C.Container>
    );
};

export default Resume;
