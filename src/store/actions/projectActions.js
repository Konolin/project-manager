import {addDoc, collection, doc, getDoc, getDocs, query} from "firebase/firestore";
import {db} from "../../config/firebaseConfig.js";

export const createProject = (project) => {
    return async (dispatch, getState) => {
        console.log(project);
        addDoc(collection(db, "projects"), {
            title: project.title,
            content: project.content,
            authorFirstName: project.user.firstName,
            authorLastName: project.user.lastName,
            authorId: project.user.uid,
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
                createdAt: data.createdAt.toDate().toISOString()
            };
        });
        dispatch({type: "FETCH_PROJECTS", projects});
    };
};

export const fetchProjectDetails = (projectId) => {
    return async (dispatch, getState) => {
        const projectRef = doc(db, "projects", projectId);
        const projectDoc = await getDoc(projectRef);

        if (projectDoc.exists()) {
            const project = projectDoc.data();
            project.createdAt = project.createdAt.toDate().toISOString(); // Convert Firestore Timestamp to JavaScript Date and then to string
            dispatch({type: "FETCH_PROJECT_DETAILS", project});
        } else {
            dispatch({type: "FETCH_PROJECT_DETAILS_ERROR", error: "Project not found"});
        }
    };
};