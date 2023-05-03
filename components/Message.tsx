import { DocumentData } from "firebase/firestore"

type Props = {
    message: DocumentData
}

function Message({ message }: Props) {
    const isChatGTP = message.user.name === "ChatGTP";
    return (
        <div className={`py-5 text-white ${isChatGTP && "bg-[#434654]"}`}>
            <div className="flex space-x-5 px-10 max-w-[70vw] mx-auto">
                <img src={message.user.avatar} alt="" className="h-8 w-8" />
                <p className="pt-1 text-sm break-words max-w-[50vw]">
                    {message.text}
                </p>
            </div>

        </div>)
}

export default Message