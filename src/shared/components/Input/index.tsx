import React, {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';
import { TextInputProps } from 'react-native';
import { TextInput as TInput } from 'react-native';

import { useTheme } from 'styled-components';

import { Container, TextInput, Icon, InitialText } from './styles';

interface InputProps extends TextInputProps {
  containerStyle?: {};
  name?: string;
  icon?: string;
  error?: string;
  initialText?: string;
}

interface InputRef {
  focus(): void;
  blur(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    containerStyle = {},
    icon,
    error,
    initialText,
    placeholder,
    value,
    ...rest
  },
  ref,
) => {
  const theme = useTheme();

  const inputElementRef = useRef<TInput>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(value ? true : false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
    blur() {
      inputElementRef.current?.blur();
    },
  }));

  return (
    <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
      {icon && <Icon name={icon} size={20} color={theme.colors.primary} />}
      <TextInput
        {...rest}
        value={value}
        placeholder={placeholder}
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {initialText && <InitialText>{initialText}</InitialText>}
    </Container>
  );
};

export default forwardRef(Input);
