import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const PersonalisationContent = () => {
    return (
        <div className="settings-container__content personalised">
            <div className="settings-container__content__avatar-container">
                <Image
                    src={`/images/gartic-avatar-7.svg`}
                    alt="character icon"
                    width={180}
                    height={180}
                />
            </div>
            <div className="user__content__message-container">
                <h3>pas encore codé</h3>
                <FaTimes />
            </div>
        </div>
    );
};

export default PersonalisationContent;
