interface Message {
    text: string;
    createdAt: admin.firestore.Timestamp; //need firebase admin
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}