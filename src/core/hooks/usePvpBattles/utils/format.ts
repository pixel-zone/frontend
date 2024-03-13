import { ITransation } from "@/core/entities/Transation"

export const format = ({ data }: { data: ITransation[] }) => {
    const finishedGame = data.filter((event) => 
        event.logs?.some(({ events }) => events?.some(({ type }) => type === 'wasm-finished_game')));

    return finishedGame.map((event) => {
        const logs = (event.logs?.[1] || event.logs?.[2])?.events.find(({ type }) => type === 'wasm-finished_game')

        if(event.logs?.[1]?.events.find(({ type }) => type === 'wasm-finished_game')) {
            const log = logs?.attributes;

            return {
                id: Number(log?.[6]?.value),
                creator: log?.[1]?.value,
                opponent: log?.[7]?.value,
                opponent_ninja: log?.[8]?.value,
                creator_ninja: log?.[2]?.value,
                finished_at: Number(log?.[12]?.value),
                finished: true,
                ticket: Number(log?.[11]?.value),
                winner: log?.[2]?.value,
                winner_ninja: log?.[15]?.value
            }
        }

        return null;
    }).filter((event) => event)
}