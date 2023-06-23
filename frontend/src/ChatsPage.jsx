import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'cb866700-1850-45cb-a357-518433b431e1', 
        props.user.username,
        props.user.secret
        );
    return (
    <div style = {{height: '100vh'}}>
        <MultiChatSocket { ...chatProps} />
        <MultiChatWindow  {...chatProps} style = {{height: '100%'}}/>
    </div>
    )
};

export default ChatsPage;