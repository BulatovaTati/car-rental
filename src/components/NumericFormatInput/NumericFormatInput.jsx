import React from 'react';
import { NumericFormat } from 'react-number-format';

const NumericFormatInput = React.forwardRef((props, ref) => {
    return <NumericFormat {...props} getInputRef={ref} />;
});

export default NumericFormatInput;
