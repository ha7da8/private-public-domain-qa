import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "2022-23赛季，NBA哪只球队常规赛战绩最好?",
        value: "2022-23赛季，NBA哪只球队常规赛战绩最好?"
    },
    { text: "What's the main goal of gpt model ?", value: "What's the main goal of gpt model ?" },
    { text: "APP与OSPC端门店货源查询退货状态不一致 门店商品退货状态系统逻辑?", value: "APP与OSPC端门店货源查询退货状态不一致 门店商品退货状态系统逻辑?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
