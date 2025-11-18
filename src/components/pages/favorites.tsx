import { useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { ScrollView, View } from "react-native";
import JobList from "../organismes/jobListe"; // liste de jobs

const FavoriteJobs = () => {
    const favouriteJobs = useSelector(
        (state: RootState) => state.favourite.value
    );

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: "center" }}>
                <JobList jobs={favouriteJobs} />
            </View>
        </ScrollView>
    );
};

export default FavoriteJobs;
