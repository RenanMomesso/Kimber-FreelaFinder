import React from 'react';
import { ActivityIndicator, Modal, Pressable, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

interface ModalConfirmProps {
    title: string
    setOpenModal: any
    onCofirm: () => {}
    loading?: boolean
}

const ModalConfirm = ({ setOpenModal, onCofirm, title = 'Choose', loading }: ModalConfirmProps) => {
    const { height } = useWindowDimensions()

    return (
        <>
            <Modal visible transparent>
                <TouchableOpacity onPress={() => setOpenModal(false)} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 2,
                    backgroundColor: 'transparent',
                    flex: 1
                }}>

                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', zIndex: 4, position: 'absolute', top: height / 3, alignSelf: 'center' }}>
                    <View style={{ height: 180, width: 300, backgroundColor: 'white', borderWidth: 1, elevation: 4, borderRadius: 8, padding: 12 }}>
                        <Text style={{ textAlign: 'center', marginBottom: 20, fontWeight: 'bold', marginTop: 20 }}>Choose {title} who completed this job ? </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            {loading ? <ActivityIndicator /> :
                                <>
                                    <Pressable onPress={onCofirm} style={{ padding: 20, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1, backgroundColor: 'tomato' }}>
                                        <Text style={{ fontWeight: 'bold' }}>Accept</Text>
                                    </Pressable>
                                    <Pressable onPress={() => setOpenModal(false)} style={{ padding: 20, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1, backgroundColor: 'yellow' }}>
                                        <Text style={{ fontWeight: 'bold' }}>
                                            Cancel
                                        </Text>
                                    </Pressable>
                                </>
                            }
                        </View>
                    </View>
                </View>
            </Modal >
        </>
    )
}

export default ModalConfirm