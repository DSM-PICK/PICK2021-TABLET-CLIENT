import React, { useState } from "react";
import {
  FieldButtonList,
  FieldButtonType,
} from "../../../../../lib/interface/Attendance/FieldButtonType";
import FieldButton from "../FieldButton";
import { EnrollmentItem, SubTitle } from "../style";

const StateItem = () => {
  const [selected, setSelected] = useState<number>(1);

  const selectedHandlerColor = (item: FieldButtonType) => {
    setSelected(item.id);
  };
  return (
    <EnrollmentItem>
      <SubTitle>종류</SubTitle>
      <div className="field-item">
        {FieldButtonList.map((item) => (
          <FieldButton
            key={item.id}
            item={item}
            selected={selected}
            selectedHandlerColor={selectedHandlerColor}
          />
        ))}
      </div>
    </EnrollmentItem>
  );
};

export default StateItem;
