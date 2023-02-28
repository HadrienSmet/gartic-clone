import Image from "next/image";
import React from "react";

const WelcomeFooter = () => {
    return (
        <section className="welcome-footer">
            <a
                href="https://garticphone.com/fr"
                aria-label="Lien vers le vrai site"
            >
                <Image
                    src={"/images/gartic-footertitle.svg"}
                    alt="Gartic"
                    width={150}
                    height={60}
                />
            </a>
            <ul>
                <li>conditions d&apos;utilisation</li>
                <li>confidentialité</li>
                <li>ressources</li>
                <li>twitter</li>
                <li>discord</li>
                <li>contact</li>
            </ul>
            <a href="https://hadrien-smet-my-portfolio.vercel.app/">
                <strong>Hadri</strong>
            </a>
        </section>
    );
};

export default WelcomeFooter;
