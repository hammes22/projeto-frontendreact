import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa";
import { ButtonDanger, ButtonSuccess, InputGroup } from "./QuantItemStyled";

export default function QuantItem({ quantItem, setQuantItem, editQuantCarrinho, id }) {
    if (!quantItem) {
        quantItem = 1
    }
    function soma() {
        if (id) {
            editQuantCarrinho(id, quantItem + 1,)
        } else {
            setQuantItem(quantItem + 1)
        }
    }
    function subtrair() {
        if (id) {
            editQuantCarrinho(id, quantItem - 1,)
        } else {
            if (quantItem > 0) {
                setQuantItem(quantItem - 1)
            }

        }
    }
    const addQuant = (e) => {
        if (id) {
            if (e.target.value > 0) {
                editQuantCarrinho(id, Number(e.target.value))
            }
        } else {
            if (quantItem > 0) {
                setQuantItem(Number(e.target.value))
            }
        }
    };


    return (
        <InputGroup>
            <ButtonSuccess onClick={() => soma()}>
                <FaPlus />
            </ButtonSuccess>
            <input
                type="number"
                className="form-control"
                value={quantItem}
                onChange={addQuant}
                onClick={(e) => {
                    e.target.value = "";
                }}
                onBlur={(e) => {
                    e.target.value = quantItem;
                }}
            />
            <ButtonDanger onClick={() => subtrair()}>
                <FaMinus />
            </ButtonDanger>

        </InputGroup>
    )
}