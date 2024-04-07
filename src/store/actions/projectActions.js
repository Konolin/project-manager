import {addDoc, collection, getDocs, query} from "firebase/firestore";
import db from "../../config/firebaseConfig.js";

export const createProject = (project) => {
    return async (dispatch, getState) => {
        addDoc(collection(db, "projects"), {
            ...project,
            authorFirstName: "Bob",
            authorLastName: "Dob",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project});
        }).catch((error) => {
            dispatch({type: "CREATE_PROJECT_ERROR", error});
        });
    };
};

export const fetchProjects = () => {
    return async (dispatch, getState) => {
        const q = query(collection(db, "projects"));
        const querySnapshot = await getDocs(q);
        const projects = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                createdAt: data.createdAt.toDate().toISOString() // Convert JavaScript Date to string
            };
        });
        dispatch({type: "FETCH_PROJECTS", projects});
    };
};