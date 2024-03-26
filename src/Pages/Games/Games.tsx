import { useGetGamesQuery } from "../../services/games"

export const Games = () => {
    const { data, error, isLoading } = useGetGamesQuery('')

    return (
        <p>123</p>
    )
}