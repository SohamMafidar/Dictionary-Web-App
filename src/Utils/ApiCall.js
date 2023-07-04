export default async function ApiCall(word) {
    // useEffect(() => {
    //     const apiHandler = async () => {
    //         try {
    //             const resp = await fetch(
    //                 `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    //             );
    //             const apiData = resp.json();
    //             console.log(apiData);
    //             setData(apiData);
    //         } catch (error) {
    //             console.log("Loading screen needs to be popped up");
    //         }
    //     };

    //     //? Call to async function
    //     apiHandler();
    //     //? Clean up function
    //     return () => {
    //         setData([]);
    //     };
    // }, [word]);

    try {
        const resp = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        let data = await resp.json();
        data = data[0];
        // console.log(data);
        let og = "";
        let audio = "";
        let source = "";
        let text = "";
        let textFlag = false;
        let audioFlag = false;
        let meaningObj = {};
        // data.forEach((item) => {
        //         og = item.word;
        //         source = item.sourceUrls;
        //         item.phonetics.forEach((objs) => {
        //             if (objs.audio !== "" && !audioFlag) {
        //                 audio = objs.audio;
        //                 audioFlag = true;
        //             }
        //             if (objs.text && !textFlag) {
        //                 text = objs.text;
        //             }
        //         });
        //         meaningObj = item.meanings;
        // });

        for (const key in data) {
            // console.log(`${key} : ${data[key]}`);
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
                // data[key].forEach((objs) => {
                //     if (objs.audio !== "" && !audioFlag) {
                //         audio = objs.audio;
                //         audioFlag = true;
                //     }
                //     if (objs.text && !textFlag) {
                //         text = objs.text;
                //     }
                // });
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
