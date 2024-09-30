export function splitSentences(input: string): string[] {
    return input.split("/").map((sentence) => sentence.trim());
}
