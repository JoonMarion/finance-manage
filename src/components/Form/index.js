import React, { useState } from 'react';
import * as C from './styles';

const Form = () => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(true);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = ({ handleAdd }) => {
        if (!desc || !amount) {
            alert('Preencha todos os campos!');
            return;
        } else if (amount < 1) {
            alert('Informe um valor positivo!');
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);
        setDesc('');
        setAmount('');
    };

    return (
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setIsExpense(!isExpense)}
                />
                <C.Label htmlFor="rIncome">Entrada</C.Label>
                <C.Input type="radio" id="rExpenses" name="group1" onChange={() => setIsExpense(!isExpense)} />
                <C.Label htmlFor="rExpenses">Saída</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>Adicionar</C.Button>
        </C.Container>
    );
};

export default Form;
