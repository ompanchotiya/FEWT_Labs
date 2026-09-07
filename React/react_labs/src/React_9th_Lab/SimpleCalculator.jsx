import React, { useState } from 'react'

function SimpleCalculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value)
    }
    const handleclear = () => {
        setInput("");
        setResult("");
    }
    const handledelete = () => {
        setInput(input.slice(0, -1))
    }
    const calculate = () => {
        const ans = eval(input)
        setResult(String(ans))
    }
  return (
    <div>
    <table>
        <thead>
            <tr>
                <th colSpan={4}><input type="text" id="screen" value={input} readOnly/></th>
                <th>{result}</th>
            </tr>
        </thead>
        <br />
        <tbody>
            <tr>
                <td><button onClick={handledelete}>del</button></td>
                <td><button onClick={() => handleClick('/')}>/</button></td>
                <td><button onClick={() => handleClick('+')}>+</button></td>
                <td><button onClick={handleclear}>AC</button></td>
            </tr>
            <tr>
                <td><button onClick={() => handleClick('7')}>7</button></td>
                <td><button onClick={() => handleClick('8')}>8</button></td>
                <td><button onClick={() => handleClick('9')}>9</button></td>
                <td><button onClick={() => handleClick('+')}>+</button></td>
            </tr>
            <tr>
                <td><button onClick={() => handleClick('4')}>4</button></td>
                <td><button onClick={() => handleClick('5')}>5</button></td>
                <td><button onClick={() => handleClick('6')}>6</button></td>
                <td><button onClick={() => handleClick('-')}>-</button></td>
            </tr>
            <tr>
                <td><button onClick={() => handleClick('1')}>1</button></td>
                <td><button onClick={() => handleClick('2')}>2</button></td>
                <td><button onClick={() => handleClick('3')}>3</button></td>
                <td><button onClick={() => handleClick('*')}>*</button></td>
            </tr>
            <tr>
                <td><button onClick={() => handleClick('0')}>0</button></td>
                <td><button onClick={() => handleClick('.')}>.</button></td>
                <td><button onClick={() => handleClick('%')}>%</button></td>
                <td><button onClick={calculate}>=</button></td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default SimpleCalculator
