import Image from "next/image";
import React from "react";

const RulesContainer = () => {
    return (
        <div className="rules">
            <h2>Comment jouer</h2>
            <div className="rules-content">
                <Image
                    src="/images/gartic-avatar-10.svg"
                    alt="Rule illu"
                    width={150}
                    height={150}
                />
                <h3>1. Passes un coup de fil</h3>
                <p>
                    Invites tes amis via un appel vocal {"("}Discord, Zoom, etc.
                    {")"}
                </p>
            </div>
            <div className="rules-steps-inidicator">
                <span id="1"></span>
                <span id="2"></span>
                <span id="3"></span>
                <span id="4"></span>
                <span id="5"></span>
                <span id="6"></span>
            </div>
        </div>
    );
};

export default RulesContainer;
