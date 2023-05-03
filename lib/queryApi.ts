import openai from "./chatgtp";

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai
        .createCompletion({
            model,
            prompt,
            temperature: 0.3,
            top_p: 1,
            max_tokens: 1000,
            frequency_penalty: 0.8,
            presence_penalty: 0.8,
        })
        .then(res => res.data.choices[0].text)
        .catch(
            (err) =>
                `ChatGTP was unable to find an answer for that! (ERROR: ${err.message})`
        );
        return res;
};
export default query;