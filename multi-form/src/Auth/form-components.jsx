import * as React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Input, Checkbox, RadioGroup, Slider, SliderLabel, RangeSlider, TextArea } from '@progress/kendo-react-inputs';
import {  DateInput } from '@progress/kendo-react-dateinputs';
import { Label, Error, Hint} from '@progress/kendo-react-labels';
import {  AutoComplete, ComboBox } from '@progress/kendo-react-dropdowns';

export const FormInput = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    type,
    optional,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
        <div className={'k-form-field-wrap'}>
          <Input valid={valid} type={type} id={id} disabled={disabled} ariaDescribedBy={`${hintId} ${errorId}`} {...others} />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </div>
      </FieldWrapper>;
};
export const FormRadioGroup = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    id,
    label,
    valid,
    disabled,
    hint,
    visited,
    modified,
    ...others
  } = fieldRenderProps;
  const editorRef = React.useRef(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  const labelId = label ? `${id}_label` : '';
  return <FieldWrapper>
        <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>{label}</Label>
        <RadioGroup ariaDescribedBy={`${hintId} ${errorId}`} ariaLabelledBy={labelId} valid={valid} disabled={disabled} ref={editorRef} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};

export const FormCheckbox = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    id,
    valid,
    disabled,
    hint,
    optional,
    label,
    visited,
    modified,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Checkbox ariaDescribedBy={`${hintId} ${errorId}`} label={label} labelOptional={optional} valid={valid} id={id} disabled={disabled} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};

export const FormTextArea = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    hint,
    disabled,
    optional,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
        <TextArea valid={valid} id={id} disabled={disabled} ariaDescribedBy={`${hintId} ${errorId}`} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};

export const FormSlider = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    data,
    min,
    max,
    ...others
  } = fieldRenderProps;
  const editorRef = React.useRef(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  const labelId = label ? `${id}_label` : '';
  return <FieldWrapper>
        <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
          {label}
        </Label>
        <Slider ariaLabelledBy={labelId} ariaDescribedBy={`${hintId} ${errorId}`} ref={editorRef} valid={valid} id={id} disabled={disabled} min={min} max={max} {...others}>
          {data.map(value => <SliderLabel title={value} key={value} position={value}>
                        {value.toString()}
                      </SliderLabel>)}
        </Slider>
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};
export const FormRangeSlider = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    hint,
    disabled,
    data,
    min,
    max,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Label editorId={id} editorValid={valid}>{label}</Label>
        <RangeSlider valid={valid} id={id} disabled={disabled} ariaDescribedBy={`${hintId} ${errorId}`} min={min} max={max} {...others}>{data.map(value => {
        return <SliderLabel key={value} position={value}>
                        {value.toString()}
                      </SliderLabel>;
      })}
        </RangeSlider>
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};

export const FormAutoComplete = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    wrapperStyle,
    ...others
  } = fieldRenderProps;
  const editorRef = React.useRef(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  const labelId = label ? `${id}_label` : '';
  return <FieldWrapper style={wrapperStyle}>
        <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
          {label}
        </Label>
        <AutoComplete ariaLabelledBy={labelId} ariaDescribedBy={`${hintId} ${errorId}`} ref={editorRef} valid={valid} id={id} disabled={disabled} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};
export const FormComboBox = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    wrapperStyle,
    ...others
  } = fieldRenderProps;
  const editorRef = React.useRef(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  const labelId = label ? `${id}_label` : '';
  return <FieldWrapper style={wrapperStyle}>
        <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
          {label}
        </Label>
        <ComboBox ariaLabelledBy={labelId} ariaDescribedBy={`${hintId} ${errorId}`} ref={editorRef} valid={valid} id={id} disabled={disabled} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};

export const FormDateInput = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    wrapperStyle,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  const labelId = label ? `${id}_label` : '';
  return <FieldWrapper style={wrapperStyle}>
        <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
          {label}
        </Label>
        <DateInput ariaLabelledBy={labelId} ariaDescribedBy={`${hintId} ${errorId}`} valid={valid} id={id} disabled={disabled} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};
