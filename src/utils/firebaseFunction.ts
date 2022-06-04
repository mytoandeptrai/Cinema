import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    deleteDoc,
    doc,
    Timestamp,
    orderBy,
} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../config/Firebase';
import { IUser } from '../interfaces/types';

const handleAddNewCollectionFromFirebase = async (key: string, data: any) => {
    return await addDoc(collection(db, key), data);
};

const handleAddUserToFirebase = (user: IUser) => {
    const userRef = handleAddNewCollectionFromFirebase('users', user);
    return userRef;
};

export { handleAddUserToFirebase, handleAddNewCollectionFromFirebase };
