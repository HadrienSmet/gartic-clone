import Image from "next/image";
import React from "react";

const ButtonsRow = () => {
    return (
        <div className="room-content__buttons-row">
            <button>
                <Image
                    src={"/images/gartic_link.svg"}
                    alt="illu d'un lien"
                    width={29}
                    height={30}
                />
                <span>inviter</span>
            </button>
            <button>
                <Image
                    src={"/images/gartic_play.svg"}
                    alt="illu d'un boutton play"
                    width={29}
                    height={30}
                />
                <span>démarrer</span>
            </button>
        </div>
    );
};

export default ButtonsRow;
