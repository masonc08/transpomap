import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default DateTimePicker = () => {
    const [date, setDate] = useState(new Date());
    const [isVisible, setVisible] = useState(false);

    const pressPicker = () => {
        setVisible(true);
    };

    const hidePicker = () => {
        setVisible(false);
    };

    const onChange = selectedDate => {
        setVisible(false);
        setDate(selectedDate || date);
    };

    return (
        <View style={styles.dateTimePickerBoxContainer}>
            <Button
                title={date.toLocaleString([], {year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}
                onPress={pressPicker} />
            <DateTimePickerModal
                isVisible={isVisible}
                mode='datetime'
                onConfirm={onChange}
                onCancel={hidePicker}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dateTimePickerBoxContainer: {
        width: 200,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
    },
});