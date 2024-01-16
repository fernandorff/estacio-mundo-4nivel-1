import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';

interface Supplier {
    id: string;
    name: string;
    address: string;
    contact: string;
    categories: string;
    imageUrl: string;
}

const App = () => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [selectedTab, setSelectedTab] = useState<'FORM' | 'LIST'>('FORM');

    const addSupplier = (name: string, address: string, contact: string, categories: string, imageUrl: string) => {
        const newSupplier: Supplier = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            address,
            contact,
            categories,
            imageUrl,
        };
        setSuppliers([...suppliers, newSupplier]);
    }

    const deleteSupplier = (supplierId: string) => {
        setSuppliers(suppliers.filter(supplier => supplier.id !== supplierId));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.formTitle}>MEETING</Text>

            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.button, selectedTab === 'FORM' && styles.selected]}
                    onPress={() => setSelectedTab('FORM')}>
                    <Text style={styles.buttonText}>Form</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedTab === 'LIST' && styles.selected]}
                    onPress={() => setSelectedTab('LIST')}>
                    <Text style={styles.buttonText}>List</Text>
                </TouchableOpacity>
            </View>

            {selectedTab === 'FORM' && <SupplierForm addSupplier={addSupplier}/>}
            {selectedTab === 'LIST' && <SupplierList suppliers={suppliers} deleteSupplier={deleteSupplier}/>}


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    formTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    buttonText: {
        color: 'black',
    },
    container: {
        flex: 1,
        paddingTop: 40,
    },
    selected: {
        backgroundColor: 'lightgray',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#dedede',
        paddingVertical: 5,
        backgroundColor: '#fff',
    },
});

export default App;
