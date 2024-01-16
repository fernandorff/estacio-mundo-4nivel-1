import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

interface SupplierFormProps {
    addSupplier: (name: string, address: string, contact: string, categories: string, imageUrl: string) => void;
}

const SupplierForm: React.FC<SupplierFormProps> = ({addSupplier}) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [categories, setCategories] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = () => {
        if (name && address && contact && categories && imageUrl) {
            addSupplier(name, address, contact, categories, imageUrl);
            setName('');
            setAddress('');
            setContact('');
            setCategories('');
            setImageUrl('');
            alert('New supplier added.')
        } else {
            alert('Please fill all fields.')
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Supplier Form</Text>

            <TextInput
                value={name}
                placeholder="Name"
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                value={address}
                placeholder="Address"
                onChangeText={setAddress}
                style={styles.input}
            />
            <TextInput
                value={contact}
                placeholder="Contact"
                onChangeText={setContact}
                style={styles.input}
            />
            <TextInput
                value={categories}
                placeholder="Categories"
                onChangeText={setCategories}
                style={styles.input}
            />
            <TextInput
                value={imageUrl}
                placeholder="Image Url"
                onChangeText={setImageUrl}
                style={styles.input}
            />
            <View style={styles.button}>
                <Button title="Add Supplier" onPress={handleSubmit}/></View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    formTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 20,
        paddingLeft: 10,
    }
});

export default SupplierForm;
