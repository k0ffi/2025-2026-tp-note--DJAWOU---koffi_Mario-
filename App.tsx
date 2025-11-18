import {
    StaticParamList,
    createStaticNavigation,
} from "@react-navigation/native";

import { Provider as StoreProvider } from "react-redux";
import Jobs from "./src/components/pages/jobs"; // <-- ton screen complet
import { createStackNavigator } from "@react-navigation/stack";
import { JobDetails } from "./src/components/templates/jobDetails"; // détails du job
import { store } from "./stores/store";
import FavoriteJobs from "./src/components/pages/favorites"; // favoris jobs

// @ts-ignore
const Stack = createStackNavigator({
    screens: {
        Liste: Jobs,
        JobDetails: JobDetails,
        FavoriteJobs: FavoriteJobs,
    },
});

const Navigation = createStaticNavigation(Stack);
// @ts-ignore
export type RootStackParamList = StaticParamList<typeof Stack>;

export default function App() {
    return (
        <StoreProvider store={store}>
            <Navigation />
        </StoreProvider>
    );
}
