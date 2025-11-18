import { ScrollView, StyleSheet, View } from "react-native";
import jobs1 from "../../helpers/Jobs.json" with { type: "json" };

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

    useEffect(() => {
        setJobs((prev) => [...prev, ...cleanJobs(jobs1)]);
    }, []);

    const cleanJobs = (jobs: any[]): Employe[] => {
        return jobs.map((job) => ({
            ...job,
            codePostal: job.codePostal ?? "",
        }));
    };

    const getJobs = (jobsPage: Employe[]) => {
        setJobs((prevJobs) => [...prevJobs, ...jobsPage]);
    };
    const favouriteJobs = useSelector(
        (state: RootState) => state.favourite.value
    );

    return (
        <ScrollView style={styles.body}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <Button
                    mode="elevated"
                    style={{ maxWidth: 400, margin: 20, width: 350 }}
                    onPressOut={() => navigation.navigate("Favorites")}
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
    },
});

export default Jobs;
