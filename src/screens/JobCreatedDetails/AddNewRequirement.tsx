import React from 'react';
import { View, Pressable, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const AddNewRequirement = ({ newRequirementsOpen, plusButton, handleCancelAddNewRequirements }) => {
    return <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        {!newRequirementsOpen && <AntDesign name="plus" size={20} onPress={() => setNewRequirementsOpen(true)} />}
        {newRequirementsOpen && <Pressable style={{ flexDirection: 'row', width: '80%', alignItems: 'center', height: 25 }}>
            <AntDesign name="back" size={20} onPress={handleCancelAddNewRequirements} />
            <TextInput
                value={newRequirementText}
                onChangeText={setNewRequirementText}
                style={{ paddingVertical: 0, marginLeft: 6, paddingLeft: 6, borderWidth: 1, borderRadius: 6, width: '100%' }}
                onSubmitEditing={handleAddNewRequirement}
            />
        </Pressable>}
    </View>
}

export default AddNewRequirement;