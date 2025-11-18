import {
    StaticParamList,
    createStaticNavigation,
} from "@react-navigation/native";

import { Provider as StoreProvider } from "react-redux";
import JobsList from "./src/components/organismes/jobListe"; // liste des jobs
import { createStackNavigator } from "@react-navigation/stack";
import { JobDetails } from "./src/components/templates/jobDetails"; // détails du job
import { store } from "./stores/store";
import FavoriteJobs from "./src/components/pages/favorites"; // favoris jobs

const Stack = createStackNavigator({
    screens: {
        Liste: JobsList,
        JobDetails: JobDetails,
        Favorites: FavoriteJobs,
    },
});

const Navigation = createStaticNavigation(Stack);
export type RootStackParamList = StaticParamList<typeof Stack>;

export default function App() {
    return (
        <StoreProvider store={store}>
            <Navigation />
        </StoreProvider>
    );
}
