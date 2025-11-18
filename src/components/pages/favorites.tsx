import { useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { ScrollView, View, Text } from "react-native";
import JobList from "../organismes/jobListe"; // liste de jobs

const FavoriteJobs = () => {
    const favouriteJobs = useSelector(
        (state: RootState) => state.favourite.value
    );

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: "center", padding: 16 }}>
                {favouriteJobs.length === 0 ? (
                    <Text style={{ fontSize: 16, color: "gray", marginTop: 20 }}>
                        Vous n'avez aucun favori pour le moment.
                    </Text>
                ) : (
                    <JobList jobs={favouriteJobs} />
                )}
            </View>
        </ScrollView>
    );
};

export default FavoriteJobs;
