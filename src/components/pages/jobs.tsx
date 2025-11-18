import { ScrollView, StyleSheet, View, TextInput } from "react-native";
import jobsData from "../../helpers/jobs.json" with { type: "json" };
import { useEffect, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Employe } from "../../../types";
import { RootStackParamList } from "../../../App";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import JobList from "../organismes/jobListe";

const Jobs = () => {
    const navigation =
        useNavigation<NavigationProp<RootStackParamList, "JobDetails">>();

    const [jobs, setJobs] = useState<Employe[]>([]);
    const [searchText, setSearchText] = useState("");

    // Sélecteur pour les favoris
    const favouriteJobs = useSelector(
        (state: RootState) => state.favourite.value
    );

    // Nettoyage des jobs (champ nullable)
    const cleanJobs = (jobs: any[]): Employe[] => {
        return jobs.map((job) => ({
            ...job,
            codePostal: job.codePostal ?? "",
        }));
    };

    // Ajouter des jobs au state
    const getJobs = (jobsPage: Employe[]) => {
        setJobs((prevJobs) => [...prevJobs, ...cleanJobs(jobsPage)]);
    };

    useEffect(() => {
        getJobs(jobsData);
    }, []);

    // Filtrer les jobs selon la recherche
    const filteredJobs = jobs.filter((job) =>
        job.ville.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <ScrollView style={styles.body}>
            <View style={{ flex: 1, alignItems: "center" ,color: "black"}}>
                <Button
                    mode="elevated"
                    style={{ maxWidth: 400, margin: 10, width: 350 }}
                    onPressOut={() => navigation.navigate("FavoriteJobs")}
                >
                    Favoris : {favouriteJobs.length}
                </Button>
                <TextInput
                    placeholder="Rechercher un poste par ville"
                    value={searchText}
                    onChangeText={setSearchText}
                    style={styles.searchInput}
                />

                <View style={{ alignSelf: "flex-start", marginLeft: 16, marginTop: 8 }}>
                    <Button disabled>
                        Nombre d'annonces : {filteredJobs.length}
                    </Button>
                </View>

                <JobList jobs={filteredJobs} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#d9d9d9",
        flex: 1,
    },
    searchInput: {
        height: 40,
        width: 350,
        borderColor: "#99582a",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "white",
    },
});

export default Jobs;
