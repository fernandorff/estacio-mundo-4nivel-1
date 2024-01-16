import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from "react-native";

interface Supplier {
    id: string;
    name: string;
    address: string;
    contact: string;
    categories: string;
    imageUrl: string;
}

interface SupplierListProps {
    suppliers: Supplier[];
    deleteSupplier: (supplierId: string) => void;
}

const SupplierList: React.FC<SupplierListProps> = ({
                                                       suppliers,
                                                       deleteSupplier,
                                                   }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Supplier List</Text>

            <FlatList
                data={suppliers}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Image
                            source={{
                                uri: item.imageUrl.length
                                    ? item.imageUrl
                                    : "https://th.bing.com/th/id/R.b0c7ab518af5603f5a1c810fb1ea624e?rik=TdtmlXKQaswPmg&pid=ImgRaw&r=0",
                            }}
                            style={styles.image}
                        />
                        <View style={styles.textContainer}>
                            <Text>Name: {item.name}</Text>
                            <Text>Address: {item.address}</Text>
                            <Text>Contact: {item.contact}</Text>
                            <Text>Categories: {item.categories}</Text>
                        </View>
                        <TouchableOpacity onPress={() => deleteSupplier(item.id)} style={styles.deleteButton}>
                            <Text style={styles.deleteIcon}>❌</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    formTitle: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    deleteButton: {
        marginLeft: 10,
    },
    deleteIcon: {
        fontSize: 20,
        color: "red",
    },
});

export default SupplierList;
