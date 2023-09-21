import React from 'react';
import { View, Pressable, Modal, Text } from 'react-native';

export enum ModalAlertType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    INFO = 'INFO'
}

export interface ModalAlertProps {
    visible: boolean;
    modalType: ModalAlertType;

}

const ModalAlert = ({ modalType, visible }: ModalAlertProps): React.ReactNode => {
    return (
        <>
            <Pressable>
                
            </Pressable>
        </>
    )
}

export default ModalAlert;