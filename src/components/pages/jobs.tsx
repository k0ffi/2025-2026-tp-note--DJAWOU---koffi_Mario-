import { ScrollView, StyleSheet, View } from "react-native";
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

    // Fonction pour ajouter des jobs au state
    const getJobs = (jobsPage: Employe[]) => {
        setJobs((prevJobs) => [...prevJobs, ...cleanJobs(jobsPage)]);
    };

    // Charger les jobs au montage
    useEffect(() => {
        getJobs(jobsData);
    }, []);

    return (
        <ScrollView style={styles.body}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <Button
                    mode="elevated"
                    style={{ maxWidth: 400, margin: 20, width: 350 }}
                    onPressOut={() => navigation.navigate("FavoriteJobs")}
                >
                    Favoris ({favouriteJobs.length})
                </Button>
                <JobList jobs={jobs} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: "gray",
        flex: 1,
    },
});

export default Jobs;
