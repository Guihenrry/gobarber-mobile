import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DatePickerIOS } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd  'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  function handleToggleOpened() {
    setOpened(!opened);
  }

  return (
    <Container>
      <DateButton onPress={handleToggleOpened}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>

        {opened && (
          <Picker>
            <DatePickerIOS
              date={date}
              onDateChange={onChange}
              minimumDate={new Date()}
              minuteInterval={60}
              locale="pt"
              mode="date"
            />
          </Picker>
        )}
      </DateButton>
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
