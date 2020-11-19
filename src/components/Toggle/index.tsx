import React, { useMemo, useState } from "react";

import { hyphenate, randomString } from "../../helpers";

type ChoiceToggleProps = {
  /**
   * An tuple of option strings to use.
   */
  values: [string, string];
  /**
   * Uses an index of `0` or `1` of the
   * corresponding `values` to set an initial value
   * for the toggle.
   */
  initialValueIndex: 0 | 1;
  /**
   * Sets the input to disabled, if `true`.
   */
  isDisabled?: boolean;
  /**
   * A callback triggered after a user toggles the input.
   */
  onChange?: (value: string) => void;
};

const CHOICE_GROUP = "choice-toggle";
const CHOICE_LEFT_ID = "choice-toggle-left";
const CHOICE_RIGHT_ID = "choice-toggle-right";

export default function ChoiceToggle(props: ChoiceToggleProps) {
  const { values, initialValueIndex, isDisabled, onChange } = props;

  /**
   * State
   */

  const [value, setValue] = useState<string>(values[initialValueIndex]);

  /**
   * Memoized
   */

  const uniqueName = useMemo(() => randomString(), []);
  const uniqueIdLeft = useMemo(() => randomString(), []);
  const uniqueIdRight = useMemo(() => randomString(), []);

  /**
   * Variables
   */

  const valueLeft = values[0];
  const valueRight = values[1];
  const isLeftChoiceSelected = value === values[0];
  const isRightChoiceSelected = value === values[1];

  const name = hyphenate(
    `${CHOICE_GROUP}-${valueLeft}-${valueRight}-${uniqueName}`
  );
  const idLeft = hyphenate(`${CHOICE_LEFT_ID}-${valueLeft}-${uniqueIdLeft}`);
  const idRight = hyphenate(
    `${CHOICE_RIGHT_ID}-${valueRight}-${uniqueIdRight}`
  );

  /**
   * Functions
   */

  function handleChecked(event: React.ChangeEvent<HTMLInputElement>) {
    if (isDisabled) return;

    const selectedValue = event.target.value;

    setValue(selectedValue);

    // Call parent's onChange function
    onChange && onChange(selectedValue);
  }

  /**
   * Render
   */

  return (
    <div>
      {/* HIDDEN RADIO INPUT: LEFT */}

      <input
        aria-checked={isLeftChoiceSelected}
        aria-labelledby={idLeft}
        checked={isLeftChoiceSelected}
        disabled={isDisabled}
        id={idLeft}
        onChange={handleChecked}
        type="radio"
        value={valueLeft}
        name={name}
      />

      {/* HIDDEN RADIO INPUT: RIGHT */}

      <input
        aria-checked={isRightChoiceSelected}
        aria-labelledby={idRight}
        checked={isRightChoiceSelected}
        disabled={isDisabled}
        id={idRight}
        onChange={handleChecked}
        type="radio"
        value={valueRight}
        name={name}
      />

      {/* VISIBLE TOGGLE */}

      <div>
        <label htmlFor={idLeft}>
          <span>{values[0]}</span>
        </label>

        <label htmlFor={idRight}>
          <span>{values[1]}</span>
        </label>
      </div>
    </div>
  );
}
