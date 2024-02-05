import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useEffect, useState } from "react";


type Movie = {
    id: number;
    title: string;
    poster_path: string;
    runtime: string;
    release_date: string;
    vote_average: number;
  };


type MoviesContextData = {
    favoriteMovies: number[];
    allFavoritesMovies: Movie[];
    addFavoriteMovie: (movieId: number) => void;
    removeFavoriteMovie: (movieId: number) => void;

};



export const MoviesContext = createContext <MoviesContextData> ({
        favoriteMovies: [],
        allFavoritesMovies: [],
        addFavoriteMovie: () => {},
        removeFavoriteMovie: () => {},
    });

type MoviesProviderProps = {
    children: React.ReactNode;
};

export function MoviesProvider({ children }: MoviesProviderProps) {
    const [favoriteMovies, setFavoriteMovies] = useState<number[]>([]);
    const [allfavoriteMovies, setAllFavoriteMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function loadFavoriteMovies() {
            const favoriteMovies = await AsyncStorage.getItem("@FavoriteMovies");
            if(favoriteMovies){
                setFavoriteMovies(JSON.parse(favoriteMovies));
            }
        }
        loadFavoriteMovies();
    }, []);

    const addFavoriteMovies = useCallback(
        async(movieId: number) => {
            if(!favoriteMovies.includes(movieId)){
                const newFAvoriteMovies = [...favoriteMovies, movieId];
                setFavoriteMovies(newFAvoriteMovies);
                await AsyncStorage.setItem("@FavoriteMovies", JSON.stringify(newFAvoriteMovies));
            }
        }, [favoriteMovies]
    );

    const removeFavoriteMovies = useCallback(
        async(movieId: number) => {
            const newFAvoriteMovies = favoriteMovies.filter(id => id !== movieId);
            setFavoriteMovies(newFAvoriteMovies);
            await AsyncStorage.setItem("@FavoriteMovies", JSON.stringify(newFAvoriteMovies));
        }, [favoriteMovies]
    );



    const contextData: MoviesContextData = {
        favoriteMovies,
        allFavoritesMovies: allfavoriteMovies,
        addFavoriteMovie: addFavoriteMovies,
        removeFavoriteMovie: removeFavoriteMovies,
    };

    return (
        <MoviesContext.Provider value={contextData}>
            {children}
        </MoviesContext.Provider>
    );
    
}

export { Movie };