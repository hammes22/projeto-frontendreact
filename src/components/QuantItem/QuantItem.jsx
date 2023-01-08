import { FaMinus, FaPlus } from "react-icons/fa";
import { ButtonDanger, ButtonSuccess, InputGroup } from "./QuantItemStyled";
import { useCounter } from '../../hooks/useCounter';
import { useEffect } from 'react';

export default function QuantItem({ setQuantidade, editQuantCarrinho, id, quantItem }) {
    const min = id ? 0 : 1
    const { quant, increment, decrement, onInput } = useCounter({ min: min, max: 10, initial: quantItem })

    useEffect(() => {
        if (id) {
            editQuantCarrinho(id, Number(quant))
        } else {
            setQuantidade(quant)
        }
    }, [quant])


    return (
        <InputGroup>
            <ButtonSuccess onClick={() => increment()}>
                <FaPlus />
            </ButtonSuccess>
            <input
                type="number"
                className="form-control"
                value={quant}
                onChange={(e) => { onInput(e.target.value) }}
                onClick={(e) => {
                    e.target.value = "";
                }}
                onBlur={(e) => {
                    e.target.value = quant;
                }}
            />
            <ButtonDanger onClick={() => decrement()}>
                <FaMinus />
            </ButtonDanger>

        </InputGroup>
    )
}