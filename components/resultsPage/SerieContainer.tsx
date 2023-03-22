import { SerieType } from "@/types/next";
import RoundContainer from "./RoundContainer";

type Props = {
    serieData: SerieType;
};

const SerieContainer = ({ serieData }: Props) => {
    return (
        <div className="serie-container">
            <h2>
                {`${serieData!.id + 1}e`}
                <span> série</span>
            </h2>
            {serieData!.content.map((round, id) => (
                <RoundContainer key={id} roundData={round} id={id} />
            ))}
        </div>
    );
};

export default SerieContainer;
