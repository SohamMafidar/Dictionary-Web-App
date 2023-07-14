export default async function ApiCall(word) {
    try {
        const resp = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        let data = await resp.json();
        data = data[0];
        let og = "";
        let audio = "";
        let source = "";
        let text = "";
        let textFlag = false;
        let audioFlag = false;
        let meaningObj = {};
        for (const key in data) {
            if (key === "word") {
                og = data[key];
            }
            if (key === "sourceUrls") {
                source = data[key];
            }
            if (key === "meanings") {
                meaningObj = data[key];
            }
            if (key === "phonetics") {
                for (let objs of data[key]) {
                    if (objs.audio !== "" && !audioFlag) {
                        audio = objs.audio;
                        audioFlag = true;
                    }
                    if (objs.text && !textFlag) {
                        text = objs.text;
                    }
                }
            }
        }

        const result = meaningObj.map((meaning) => {
            return {
                partOfSpeech: meaning.partOfSpeech,
                definitions: meaning.definitions.map((item) => item.definition),
            };
        });

        result.og = og;
        result.audio = audio;
        result.source = source;
        result.text = text;
        return result;
    } catch (error) {
        console.log("Some error, need loading screen for it ", error);
    }
}
