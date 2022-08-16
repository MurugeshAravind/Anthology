// Task

// 1. once you click on button then input in the response should be displayed, add the inputs one below the other
// 2. once you click on the <p> --> input box will be opened with input , edit the line item and update it

import React, { useState } from 'react';

export default function DynamicEdit() {
  const [newValue, addNewValue] = useState('');
  const [changedValueOnClick, setChangedValueOnClick] = useState<string[]>([]);
  const [isClicked, setIsClicked] = useState<number[]>([]);
  const save = (e: { keyCode: number; }) => {
    if (e.keyCode === 13) {
      if (newValue.trim().length > 0) {
        onClickHandler();
      }
    }
  };
  const handleEscape = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.keyCode === 27) {
      setIsClicked(isClicked.filter((e) => e !== i));
    }
  };
  const changeHandler = (e: { target: { value: any; }; }) => {
    console.log(e);
    if (e) {
      const { value } = e.target;
      addNewValue(value);
    } else {
      addNewValue('');
    }
  };
  const onClickHandler = () => {
    addNewValue('');
    setChangedValueOnClick((prev) => [...prev, newValue]);
  };

  const changeHandlerOnEdit2 = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    if (e) {
      const { value } = e.target;
      setChangedValueOnClick((prev) => {
        const temp: string[] = [...prev];
        temp[i] = value;
        return temp;
      });
    }
  };

  const editOnClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, i: number, x: string) => {
    console.log({ e, i, x });
    e.stopPropagation();
    setIsClicked([...isClicked, i]);
  };
  const saveOnClick = (_$event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    console.log(isClicked)
    setIsClicked(isClicked.filter((e) => e !== i));
  };
  return (
    <div>
      <input
        type="text"
        onChange={changeHandler}
        value={newValue}
        onKeyUp={save}
      />
      <button onClick={onClickHandler} type="submit">
        Add New
      </button>
      <div>
        {changedValueOnClick.map((x, i) =>
          !isClicked.includes(i) ? (
            <p key={i} onClick={($event) => editOnClick($event, i, x)}>
              {x}
            </p>
          ) : (
            <div key={i}>
              <input
                type="text"
                onChange={(e) => changeHandlerOnEdit2(e, i)}
                value={x}
                onKeyUp={(e) => handleEscape(e, i)}
              />
              <button onClick={($event) => saveOnClick($event, i)}>save</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
